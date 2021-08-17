import React from 'react'
import Button from '../components/button/Button'
import Copyright from '../components/copyright/Copyright'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

import productList from '../assets/JsonData/product-list.json'

const productsHead = [
    '',
    'product name',
    'category',
    'initial stock',
    'current stock',
    'status',
    ''
]

const stockStatus = {
    inStock: "success",
    outofStock: "warning"
}

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.product}</td>
        <td>{item.category}</td>
        <td>{item.initialStock}</td>
        <td>{item.currentStock}</td>
        <td>
            <Badge
                type={stockStatus[item.badgeType]}
                content={item.status}
            />
        </td>
        <td>
            <Button
                content='view'
                action="/product"
            />
        </td>
    </tr>
)

function Products() {
    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                Products
            </h2>

            {/* Products Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__head">
                            <div className="products__btns">
                                <Button
                                    content="Add Product"
                                />
                            </div>
                        </div>

                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={productsHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={productList}
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

export default Products
