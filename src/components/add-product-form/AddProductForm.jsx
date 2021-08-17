import React, { useState } from 'react'
import Button from '../button/Button';
import Wrapper from '../wrapper/Wrapper';
import './addProductForm.css'

function AddProductForm(props) {
    const [productName, setProductName] = useState();
    const [description, setDescription] = useState();
    const [stock, setStock] = useState(0);

    return (
        <div className="addProduct">
            <div className="row">
                {/* Image Uploader */}
                <div className="col-6">
                    Image Uploader
                </div>

                {/* Add Product form */}
                <div className="col-6">
                    <label htmlFor="productName" className="label">Product Name</label>
                    <div className="addProduct__input">
                        <input
                            id="productName"
                            required
                            type="text" 
                            placeholder="Product Name"
                            value={productName}
                            onChange={(e) => {
                                setProductName(e.target.value);
                                props.setProductName(e.target.value)
                            }}
                        />
                    </div>

                    <label htmlFor="productDescription" className="label">Product Description</label>
                    <div className="addProduct__textarea">
                        <textarea 
                            id="productDescription"
                            required
                            type="text"
                            placeholder="Product Description" 
                            rows="10" 
                            cols="50"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <label htmlFor="stock" className="label">Stock</label>
                    <div className="addProduct__input">
                        <input
                            id="stock"
                            required
                            type="number" 
                            placeholder="Stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>
                </div>
                
            </div>

            <Wrapper position="center">
                <Button
                    content="Add Product"
                />  
            </Wrapper>
            
        </div>
    )
}

export default AddProductForm
