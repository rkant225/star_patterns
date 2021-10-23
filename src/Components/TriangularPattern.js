import React, { useState } from "react";

const TriangularPattern = () => {

    const [triangleType, setTriangleType] = useState('DIAGONAL-A');
    const [row, setRow] = useState(10);
    const [inclideDots, setInclideDots] = useState(false);

    const getStarPattern = () => {

        let pattern = ``;
        let emptySpace = inclideDots ? '. ' : '  ';

        if(triangleType === 'DIAGONAL-A'){
            for(let i = 0; i<row; i++){
                for(let j = 0; j<row; j++){
                    if(i === j){
                        pattern = pattern + '* ';    
                    } else {
                        pattern = pattern + emptySpace;
                    }
                }
                pattern = pattern + '\n';
            }
        }
        if(triangleType === 'DIAGONAL-B'){
            for(let i = 0; i<row; i++){
                for(let j = 0; j<row; j++){
                    if(i+j === row-1){
                        pattern = pattern + '* ';    
                    } else {
                        pattern = pattern + emptySpace;
                    }
                }
                pattern = pattern + '\n';
            }
        }
        if(triangleType === 'UPPER-RIGHT'){
            for(let i = 0; i<row; i++){
                for(let j = 0; j<row; j++){
                    if(i === j || j > i){
                        pattern = pattern + '* ';    
                    } else {
                        pattern = pattern + emptySpace;
                    }
                }
                pattern = pattern + '\n';
            }
        }
        if(triangleType === 'UPPER-LEFT'){
            for(let i = 0; i<row; i++){
                for(let j = 0; j<row; j++){
                    if(i+j === row-1 || j+i < row-1){
                        pattern = pattern + '* ';    
                    } else {
                        pattern = pattern + emptySpace;
                    }
                }
                pattern = pattern + '\n';
            }
        }
        if(triangleType === 'LOWER-RIGHT'){
            for(let i = 0; i<row; i++){
                for(let j = 0; j<row; j++){
                    if(i+j === row-1 || j+i > row-1){
                        pattern = pattern + '* ';    
                    } else {
                        pattern = pattern + emptySpace;
                    }
                }
                pattern = pattern + '\n';
            }
        }
        if(triangleType === 'LOWER-LEFT'){
            for(let i = 0; i<row; i++){
                for(let j = 0; j<row; j++){
                    if(i === j || i > j){
                        pattern = pattern + '* ';    
                    } else {
                        pattern = pattern + emptySpace;
                    }
                }
                pattern = pattern + '\n';
            }
        }
        

        return pattern;
    };

    const getPosition = () => {

        let pattern = "";
        for(let i = 0; i<row; i++){
            for(let j = 0; j<row; j++){
                 pattern = pattern + `${i},${j}  `
            }
            pattern = pattern + '\n';
        }

        return pattern;
    };
console.log(triangleType)
  return (
    <div style={{margin : '1rem', border : '1px solid black', padding : '.5rem', width : 'max-content' }}>
        <h3>TriangularPattern</h3>

        <div>
            <div>
                <label>
                    <input value="DIAGONAL-A" type="radio" checked={triangleType === 'DIAGONAL-A'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    DIAGONAL-A
                </label>
            </div>
            <div>
                <label>
                    <input value="DIAGONAL-B" type="radio" checked={triangleType === 'DIAGONAL-B'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    DIAGONAL-B
                </label>
            </div>
            <div>
                <label>
                    <input value="UPPER-RIGHT" type="radio" checked={triangleType === 'UPPER-RIGHT'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    UPPER-RIGHT
                </label>
            </div>
            <div>
                <label>
                    <input value="UPPER-LEFT" type="radio" checked={triangleType === 'UPPER-LEFT'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    UPPER-LEFT
                </label>
            </div>
            <div>
                <label>
                    <input value="LOWER-RIGHT" type="radio" checked={triangleType === 'LOWER-RIGHT'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    LOWER-RIGHT
                </label>
            </div>
            <div>
                <label>
                    <input value="LOWER-LEFT" type="radio" checked={triangleType === 'LOWER-LEFT'} onChange={(e)=>{setTriangleType(e.target.value)}}/>
                    LOWER-LEFT
                </label>
            </div>
        </div>

        <div>
            <div>
                Row : <input type="number" onChange={(e)=>{setRow(e.target.value)}} value={row}/>
            </div>
            <div> 
                Include dots (.) &nbsp;: <input type="checkbox" checked={inclideDots} onChange={(e) => { setInclideDots(e.target.checked) }}/>
            </div>
        </div>
      <div style={{display : 'flex', justifyContent : 'space-around'}}>
        <b style={{marginRight : '1rem'}}>
            <pre>{getStarPattern()}</pre>
        </b>

        <b className="hide-for-smaller-screen">
            <pre>{getPosition()}</pre>
        </b>
      </div>
    </div>
  );
};

export default TriangularPattern;
