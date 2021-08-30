import React, { useState } from 'react'
import Button from '../button/Button'
import Wrapper from '../wrapper/Wrapper'
import './addcategoryform.css'

function AddCategoryForm() {
    const [categoryName, setCategoryName] = useState();
    const [description, setDescription] = useState();

    return (
        <React.Fragment>
            <Wrapper position="center">
                <h4>{categoryName}</h4>
            </Wrapper>
            <div className="addCategory">
                <form action="">
                    <div className="label">
                        Category Name
                    </div>
                    <div className="addCategory__input">
                        <input
                            required
                            type="text"
                            placeholder="Category Name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>

                    <label htmlFor="categoryDescription" className="label">Category Description</label>
                    <div className="addCategory__textarea">
                        <textarea 
                            id="categoryDescription"
                            required
                            type="text"
                            placeholder="Category Description" 
                            rows="10" 
                            cols="50"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <Wrapper position="center">
                        <Button
                            width="fullWidth"
                            content="Add Category"
                        />
                    </Wrapper>
                    
                </form>
            </div>
        </React.Fragment>
        
    )
}

export default AddCategoryForm
