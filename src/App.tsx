import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Oscar from "./components/Oscar";
import Heading from "./components/Heading";
import Status from "./components/Status";
import ButtonClick from "./components/ButtonClick";
import InputChange from "./components/InputChange";
import Container from "./components/Container";

function App() {
  const name = {
    first: "Prime",
    last: "React",
  };

  const personList = [
    {
      first: "Prime",
      last: "React",
    },
    {
      first: "Rinchen",
      last: "TypeScript",
    },
  ];
  return (
    <div className="App">
      <Greet name="Prime" messageCount={20} isLoggedIn={false} />
      <Person name={name} />
      <PersonList names={personList} />
      <Status status="loading" />
      <Oscar>
        <h1> Hello this is react node</h1>
      </Oscar>
      <Heading>This is Heading</Heading>
      <ButtonClick
        handleClick={(event, id) => console.log("Click..........", event, id)}
      />
      <InputChange value="Prime" onChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
