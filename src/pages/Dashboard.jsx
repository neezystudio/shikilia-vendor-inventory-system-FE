import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

import { useSelector } from 'react-redux'

const chartOptions = {
    series: [
        {
            name: "Online Customers",
            data: [40,70,20,90,36,80,30,91,60]
        },
        {
            name: "Store Customers",
            data: [40,30,70,80,40,16,40,20,51,10]
        }
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            position: 'top',
        },
        grid: {
            show: false
        }
    }
}

const topCustomer = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            username: 'John Doe',
            orders: '490',
            price: '$ 15,870'
        },
        {
            username: 'Frank Papushka',
            orders: '250',
            price: '$ 15,870'
        },
        {
            username: 'Byron Kimani',
            orders: '790',
            price: '$ 55,870'
        },
        {
            username: 'Kevin Chege',
            orders: '190',
            price: '$ 10,870'
        },
    ]
}

const renderCustomerHead = (item, index) => (
    <th key={index}>
        {item}
    </th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.orders}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    head: [
        'order id',
        'user',
        'total price',
        'date',
        'status'
    ],
    body: [
        {
            id:"#OD1711",
            user: 'John Doe',
            date: '17th June 2021',
            price: '$ 970',
            status: "shipping"
        },
        {
            id:"#OD1712",
            user: 'Frank Papushka',
            date: '18th June 2021',
            price: '$ 1970',
            status: "paid"
        },
        {
            id:"#OD1713",
            user: 'Byron Kimani',
            date: '19th June 2021',
            price: '$ 570',
            status: "pending"
        },
        {
            id:"#OD1714",
            user: 'Kevin Chege',
            date: '20th June 2021',
            price: '$ 800',
            status: "paid"
        },
        {
            id:"#OD1715",
            user: 'Lizzy Wangari',
            date: '21st June 2021',
            price: '$ 200',
            status: "refund"
        },
    ]
}

const orderStatus = {
    shipping: "primary",
    pending: "warning",
    paid: "success",
    refund: "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td>
            <Badge
                type={orderStatus[item.status]}
                content={item.status}
            />
        </td>
    </tr>
)

function Dashboard() {
    const  themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>

            <div className="row"> 
                {/* Status Cards */}
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    {/* Status Cards Here */}
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Graph */}
                <div className="col-6">
                    <div className="card full-height">
                        {/* Chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: {mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: {mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height="100%"
                        />
                    </div>
                </div>

                {/* Top Customer Table */}
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top Customers</h3>
                        </div>
                        <div className="card__body">
                            {/* Table */}
                            <Table
                                headData={topCustomer.head}
                                renderHead={(item, index) => renderCustomerHead(item, index)}
                                bodyData={topCustomer.body}
                                renderBody={(item, index) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">View All</Link>
                        </div>
                    </div>
                </div>

                {/* Latest Orders */}
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Latest Orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.head}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">View All</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
