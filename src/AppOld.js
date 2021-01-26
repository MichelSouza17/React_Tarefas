import "./App.css";
import { useState} from "react";

function Header(props) {
  return (
    <header className="header">
      <p>Hello World {props.name}</p>
      <button onClick={props.click}>Trocar Usuário</button>
      {props.children}
      <hr />
    </header>
  );
}

function Form(){

  const [nome, setNome] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <>
      <p>{nome}</p>
      <input type="text" placeholder="Digite seu nome" value={nome} onChange={handleNome}/>
    </>
  );
}

function App() {
  const [user, setUser] = useState("Fulano");

  const handleClick = () => {
    if(user === "Fulano") setUser("Ciclano");
    else setUser("Fulano");
  };

  return (
    <div>
      <Header name="Fulano de Tal" click={handleClick}>
        <p>Eu sou filho de Header</p>
        <p>Eu sou o melhor filho de Header</p>
      </Header>
      <p>My React App</p>
      <p>Nome do usuário: {user}</p> 
      <hr />
      <Form />
    </div>
  );
}

export default App;
