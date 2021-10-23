import React, { useState } from "react";

const PyramidPattern = () => {

    const [triangleType, setTriangleType] = useState('UP-WARD');
    const [level, setLevel] = useState(10);
    const [inclideDots, setInclideDots] = useState(false);

    const getStarPattern = () => {
    let pattern = ``;
    let emptySpace = inclideDots ? '.' : ' ';

    for (let i = 0; i<level; i++) {
        if(triangleType === 'UP-WARD'){
            for(let j=0; j<level; j++){
                if(i+j===level-1 || i+j>level-1){
                    pattern=pattern+'* '; // Space is must, to draw pyramid
                } else {
                    pattern=pattern+emptySpace;
                }
            }
        }
        if(triangleType === 'DOWN-WARD'){
            for(let j=0; j<level; j++){
                if(i===j || j>i){
                    pattern=pattern+'* '; // Space is must, to draw pyramid
                } else {
                    pattern=pattern+emptySpace;
                }
            }
        }
        
        
        pattern = pattern + "\n";
    }

    return pattern;
  };

  const getPosition = () => {
    let pattern = "";
    for (let i = 0; i < level; i++) {
      for (let j = 0; j < level; j++) {
        pattern = pattern + `${i},${j}  `;
      }
      pattern = pattern + "\n";
    }

    return pattern;
  };

  return (
    <div style={{ margin: "1rem", border: "1px solid black", padding: ".5rem", width: "max-content", }} >
      <h3>PyramidPattern</h3>

        <div>
            <div>
                <label>
                    <input value="UP-WARD" type="radio" checked={triangleType === 'UP-WARD'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    UP-WARD
                </label>
            </div>
            <div>
                <label>
                    <input value="DOWN-WARD" type="radio" checked={triangleType === 'DOWN-WARD'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    DOWN-WARD
                </label>
            </div>
        </div>

      <div>
        <div>
          Level : <input type="number" onChange={(e) => { setLevel(e.target.value); }} value={level} />
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

export default PyramidPattern;
