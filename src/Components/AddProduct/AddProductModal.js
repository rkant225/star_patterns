import React, { useState } from 'react'

export const AddProductModal = (props) => {

    const {onSave, onClose, header} = props;

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div style={{height : '100vh', width : '100vw', display : 'flex', justifyContent : 'center', alignItems : 'center', position : 'inherit', backgroundColor : 'rgba(50,50,50,.8)'}}>

            <div style={{width : '30%', height : 'max-content', background : 'wheat', padding : '.5rem'}}>

                <b>{header}</b>

                <br/>
                <br/>
                <br/>

                <div>
                    <label>Product Name</label>
                    <br/>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                
                <div>
                    <label>Product Price</label>
                    <br/>
                    <input type="text" onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>


                <div style={{display : 'flex', justifyContent : 'space-between'}}>
                    <div> <button onClick={onClose}>Close</button></div>
                    <div> <button onClick={()=>{onSave({name, price}); onClose();}}>Save</button></div>
                </div>
                
            </div>
            
        </div>
    )
}
