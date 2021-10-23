import React, { useState } from "react";

const HollowRectangularPattern = () => {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [inclideDots, setInclideDots] = useState(false);

  const getStarPattern = () => {
    let pattern = ``;
    let emptySpace = inclideDots ? '. ' : '  ';

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if(i===0 || j===0 || i === row-1 || j === col-1){
            pattern = pattern + "* ";
        } else {
            pattern = pattern + emptySpace;
        }
      }
      pattern = pattern + "\n";
    }

    return pattern;
  };

  const getPosition = () => {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        pattern = pattern + `${i},${j}  `;
      }
      pattern = pattern + "\n";
    }

    return pattern;
  };

  return (
    <div style={{ margin: "1rem", border: "1px solid black", padding: ".5rem", width: "max-content", }} >
      <h3>HollowRectangularPattern</h3>

      <div>
        <div>
          Row : <input type="number" onChange={(e) => { setRow(e.target.value); }} value={row} />
        </div>
        <div> 
            Col &nbsp;: <input type="number" onChange={(e) => { setCol(e.target.value); }} value={col}/>
        </div>
        <div> 
            Include dots (.) &nbsp;: <input type="checkbox" checked={inclideDots} onChange={(e) => { setInclideDots(e.target.checked) }}/>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <b style={{ marginRight: "1rem" }}>
          <pre>{getStarPattern()}</pre>
        </b>

        <b className="hide-for-smaller-screen">
          <pre>{getPosition()}</pre>
        </b>
      </div>
    </div>
  );
};

export default HollowRectangularPattern;
