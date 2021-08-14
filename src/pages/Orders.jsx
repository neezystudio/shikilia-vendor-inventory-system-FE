import React from 'react'
import Badge from '../components/badge/Badge'
import Copyright from '../components/copyright/Copyright'
import Table from '../components/table/Table'

import orderData from '../assets/JsonData/order-list.json'

const ordersHead = [
    '',
    'User',
    'email',
    'phone',
    'Date',
    'Product',
    'Category',
    'Price',
    'Location',
    'Status'
]

const orderStatus = {
    shipping: "primary",
    pending: "warning",
    delivered: "success",
    refund: "danger"
}

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.date}</td>
        <td>{item.product}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.location}</td>
        <td>
            <Badge
                type={orderStatus[item.status]}
                content={item.status}
            />
        </td>
    </tr>
)

function Orders() {
    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                Orders
            </h2>

            {/* Orders Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__head">
                            Sort by:
                        </div>

                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={ordersHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={orderData}
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

export default Orders
