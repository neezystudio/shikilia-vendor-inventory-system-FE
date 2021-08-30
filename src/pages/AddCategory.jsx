import React from 'react'
import { Link } from 'react-router-dom'
import AddCategoryForm from '../components/add-category/AddCategoryForm'
import Copyright from '../components/copyright/Copyright'
import Wrapper from '../components/wrapper/Wrapper'

function AddCategory() {
    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                <Link to="/categories">
                    <i class='bx bx-chevron-left'></i>
                </Link>
                {`  Add Category`}
            </h2>

            {/* Add Category Card */}
            <Wrapper position="center">
                <div className="card">
                    <AddCategoryForm/>
                </div>
            </Wrapper>

            {/* Copyright */}
            <Copyright/>
        </div>
    )
}

export default AddCategory
