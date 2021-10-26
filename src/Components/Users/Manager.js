import React, { useState } from 'react'
import { AddProductModal } from '../AddProduct/AddProductModal';

const Manager = () => {
    const [displayAddProductModal, setDisplayAddProductModal] = useState(false);

    return (
        <div>
            Manager Page 123

            <br/>

            <button onClick={()=>{setDisplayAddProductModal(true)}}>Add Product</button>





            {displayAddProductModal &&
             
                <AddProductModal
                    header={"Header from Manager"}
                    onSave={(data)=>{alert(`Name : ${data.name} || Price : ${data.price}`)}}
                    onClose={()=>{setDisplayAddProductModal(false)}}
                />
            }

        </div>
    )
}

export default Manager
