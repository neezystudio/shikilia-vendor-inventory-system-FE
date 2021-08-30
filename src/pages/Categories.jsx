import React from 'react'
import Copyright from '../components/copyright/Copyright'
import categoryList from '../assets/JsonData/category-list.json'
import Table from '../components/table/Table'
import Button from '../components/button/Button'

const categoryHead = [
    "",
    "category",
    "products"
]

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.category}</td>
        <td>{item.products}</td>
    </tr>
)

function Categories() {
    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                Categories
            </h2>

            {/* Category Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__head">
                            <div className="add-category__btn">
                                <Button
                                    content="Add Category"
                                    type="button-primary"
                                    action="/add-category"
                                />
                            </div>
                        </div>

                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={categoryHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={categoryList}
                                renderBody={(item, index) => renderBody(item, index)}
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

export default Categories
