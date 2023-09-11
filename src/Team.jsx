import { useState } from "react";

export default function Team() {
  let [team, setTeam] = useState(11);

  let handleAdd = () => {
    let newTeam = team + 1;
    setTeam(newTeam);
  };
  let handleRemove = () => {
    let newTeam = team - 1;
    setTeam(newTeam);
  };

  let teamStyle = {
    border: "2px solid coral",
    margin: "15px",
    padding: "15px",
    borderRadious: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players : {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
