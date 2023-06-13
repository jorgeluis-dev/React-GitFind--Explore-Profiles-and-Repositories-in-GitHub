import Header from "../../components/Header";
import background from '../../assets/background.svg';
import ItemList from "../../components/ItemList";
import "./styles.css"

import { useState } from "react";

function App() {
  const [user, setUser] = useState('');
const [currentUser, setCurrentUser] = useState(null);
const [repos, setRepos] = useState(null);

// Método de Busca [assíncrona]
const handleSetData = async () => {
  //1-Busca de usuario
  const userData = await fetch(`https://api.github.com/users/${user}`);
  const newUser = await userData.json();
  //console.log(newUser);
  if(newUser.name){
    const {avatar_url, name, login, bio} = newUser;
    setCurrentUser({avatar_url, name,login, bio})

    //2-Busca dos Repositorios
    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if(newRepos.length){
      setRepos(newRepos);
    }
  }
};




  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        {/* Div do Algoritmo de Busca por usuario */}
        <div className="info">
          <div>
            <input
              type="text" value={user} name="usuario"
              onChange={event => setUser(event.target.value)}
              placeholder="@username" />
            <button onClick={handleSetData}>Buscas</button>
          </div>
        </div>
        <br></br>
        {currentUser?.name ? (<>
          <div className="perfil">
          <img src={currentUser.avatar_url} className="profile" alt="imagem de perfil" />
          <div>

            <h3>{currentUser.name}</h3>
            <span>{currentUser.login}</span>
            <p>{currentUser.bio}</p>
          </div>
        </div>
        <hr />

</>): null}


{repos?.length ? (<>
    

        
        <div>
          <h4 className="repositorio">Repositorios</h4>
          {repos.map(repo => (
              <ItemList
              title={repo.name}
              description={repo.description}
            />
          ))}
          
        </div>
</>): null}
      </div>

    </div>
  );
}

export default App;
