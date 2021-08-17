import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddProductForm from '../components/add-product-form/AddProductForm';
import Copyright from '../components/copyright/Copyright';

function AddProduct() {
    const [productName, setProductName] = useState();

    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                <Link to="/products">
                    <i class='bx bx-chevron-left'></i>
                </Link>
                {`  Add Product`}
            </h2>

            {/* Body */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__head">
                            <h3>{productName}</h3>
                        </div>

                        <div className="card__body">
                            <AddProductForm
                                setProductName = {(value) => setProductName(value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <Copyright/>
        </div>
    )
}

export default AddProduct
