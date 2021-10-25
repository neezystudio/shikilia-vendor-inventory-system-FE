import React, { useState } from 'react'
import Button from '../button/Button'
import Wrapper from '../wrapper/Wrapper'
import {db} from  '../../config/firebase'
import './addcategoryform.css'

function AddCategoryForm() {
    const [categoryName, setCategoryName] = useState();
    const [description, setDescription] = useState();
        const[loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('categories')
        .add({
            categoryName:categoryName,
            description:description,
        })
        .then(() =>{
            alert("Thank you for subscribing, we will keep in touch 👍 ");
            setLoader(false);
        })
        .catch((error)=> {
            alert(error.message);
            setLoader(false);
        });
        setCategoryName('');
        setDescription('');
    };

    return (
        <React.Fragment>
            <Wrapper position="center">
                <h4>{categoryName}</h4>
            </Wrapper>
            <div className="addCategory">
                <form action=""
                onSubmit= {handleSubmit}
                >
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
                        type="submit"
                            width="fullWidth"
                            content="Add Category"
                            onClick={handleSubmit}
                        />
                    </Wrapper>
                    
                </form>
            </div>
        </React.Fragment>
        
    )
}

export default AddCategoryForm
