import React, { useState } from 'react'
import Button from '../button/Button';
import Wrapper from '../wrapper/Wrapper';
import './addProductForm.css'


//TODO: to add this to admin dashboard

const categoryItems = [
    {
        val: 'Clothing',
        placeholder: 'Clothing'
    },
    {
        val: 'Electronics',
        placeholder: 'Electronics'
    },
    {
        val: 'Jewellery',
        placeholder: 'Jewellery'
    },
    {
        val: 'Health & Beauty',
        placeholder: 'Health & Beauty'
    },
     {
        val: 'Kids',
        placeholder: 'Kids'
    },
     {
        val: 'Sports',
        placeholder: 'Sports'
    },
     {
        val: 'Home & Garden',
        placeholder: 'Home & Garden'
    }
]

function AddProductForm(props) {
    const [productName, setProductName] = useState();
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
//TODO: instances of categories present in the ecommerce site from line 71
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

                    <label htmlFor="productName" className="label">Category</label>
                    <div className="addProduct__input">
                        <select name='category' id="category">
                            <optgroup label="Category">
                                {
                                    categoryItems.map((value, index) => (
                                        <option key={index} value={value.val}>
                                            {value.placeholder}
                                        </option>
                                    ))
                                }
                            </optgroup>
                        </select>
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

                    <label htmlFor="price" className="label">Price</label>
                    <div className="addProduct__input">
                        <input
                            id="price"
                            required
                            type="number" 
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
