import Header from "../../components/Header";
import background from '../../assets/background.svg';
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        {/* Div do Algoritmo de Busca por usuario */}
        <div className="info">
          <div>
            <input type="text" name="usuario" placeholder="@username" />
            <button>Buscas</button>
          </div>
        </div>
        <br></br>
        <div className="perfil">
          <img src="https://avatars.githubusercontent.com/u/21243659?v=4" className="profile" alt="imagem de perfil" />
          <div>

            <h3>Jorge Luis Sampaio de Oliveira</h3>
            <span>@jorgeluis-dev</span>
            <p>Descrição: Software Engineer | Java Back-end |</p>
          </div>
        </div>
        <hr />
      </div>

    </div>
  );
}

export default App;
