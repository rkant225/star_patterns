import React, { useState } from 'react'
import { AddProductModal } from '../AddProduct/AddProductModal';

const Admin = () => {
    const [displayAddProductModal, setDisplayAddProductModal] = useState(false);

    return (
        <div>
            Admin Page 123

            <br/>

            <button onClick={()=>{setDisplayAddProductModal(true)}}>Add Product</button>





            {displayAddProductModal &&
             
                <AddProductModal
                    header={"Header from Admin"}
                    onSave={(data)=>{alert(`Name : ${data.name} || Price : ${data.price}`)}}
                    onClose={()=>{setDisplayAddProductModal(false)}}
                />
            }

        </div>
    )
}

export default Admin
