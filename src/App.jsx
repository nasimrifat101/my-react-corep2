import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Friends from "./friends";
import Users from "./users";

function App() {
  function handleClcik() {
    alert("button clicked");
  }
  function handleClcik2() {
    alert("button 2 clicked");
  }
  return (
    <>
      <h1>React core concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick={handleClcik}>Click Me</button>
      <button onClick={handleClcik2}>click Me</button>
      <button
        onClick={() => {
          alert("third");
        }}
      >
        third
      </button> */}
    </>
  );
}

export default App;
