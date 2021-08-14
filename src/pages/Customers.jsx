import React from 'react'
import Table from '../components/table/Table'
import customerList from '../assets/JsonData/customers-list.json' 
import Copyright from '../components/copyright/Copyright'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

function Customers() {
    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                Customers
            </h2>

            {/* Body */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {/* Table */}
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
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

export default Customers
