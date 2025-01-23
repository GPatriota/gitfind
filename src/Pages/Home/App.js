import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Tela de Fundo" />
        <div className="info">
          <div>
            <input name="user" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/155376842?v=4" alt="imagem de perfil"className="profileimg"/>
            <div>
              <h3>Gustavo Patriota Silva</h3>
              <span>@GPatriota</span>
              <p>Descrição do github</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
