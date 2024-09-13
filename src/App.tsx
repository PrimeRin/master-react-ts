import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
    </div>
  );
}

export default App;
