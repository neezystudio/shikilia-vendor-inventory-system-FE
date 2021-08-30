import React from 'react'
import Copyright from '../components/copyright/Copyright'
import Button from '../components/button/Button'
import productStatusCard from '../assets/JsonData/product-status-cards.json'

import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'
import ProductImage from '../components/product-images/ProductImage'
import Table from '../components/table/Table'
import productStock from '../assets/JsonData/product-stock.json'
import Wrapper from '../components/wrapper/Wrapper'
import { Link } from 'react-router-dom'

const chartOptions = {
    series: [
        {
            name: "Product Name",
            data: [40,70,20,90,36,80,30,91,60,50]
        }
    ],
    options: {
        color: ['#6ab04c'],
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

const productStockHead = [
    'Date',
    'Stock'
]

const renderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.date}</td>
        <td>{item.stock}</td>
    </tr>
)

function Product() {
    const  themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                <Link to="/products">
                    <i class='bx bx-chevron-left'></i>
                </Link>
                {` Product Name`}
            </h2>

            {/* Body */}
            <Wrapper position="end">
                <Button
                    content="Add Stock"
                />
                <Button
                    content="Edit Product"
                />
                <Button
                    content="Delete Product"
                />
            </Wrapper>

            <div className="row">
                {/* Product Images */}
                <div className="col-6">
                    <div className="product__image-main">
                        <ProductImage/>
                    </div>
                </div>

                <div className="col-6">
                    {/* Status Cards */}
                    <div className="row">
                        {
                            productStatusCard.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    {/* Product Sales Graph */}
                    <div className="card">
                        <h4>Product Sales</h4>
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: {mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: {mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type="line"
                            height="100%"
                        />
                    </div>
                </div>
            </div>

            {/* Stock Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__head">
                            <h3>Inventory Table</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                limit="5"
                                headData={productStockHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={productStock}
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

export default Product
