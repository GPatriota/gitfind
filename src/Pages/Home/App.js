import { useState } from "react";
import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.login) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="Tela de Fundo" />
        <div className="info">
          <div>
            <input
              name="user"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username do github"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.login ? (
            <>
              <div className="profile">
                <img
                  src={currentUser.avatar_url}
                  alt="imagem de perfil"
                  className="profileimg"
                />
                <div>
                  <h3>{currentUser.login}</h3>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <h4 className="repositorie"> Repositórios </h4>
              {repos.map((repo) => (
                <ItemList key={repo.id} title={repo.name} description={repo.description} url={repo.html_url}  />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
