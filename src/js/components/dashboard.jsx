import React, { useEffect, useState } from 'react'
import Card from './card'

const Dashboard = ({ products }) => {

    useEffect(() => {
        products.map((value) => {
            console.log(value)
        })
    }, [])

    return (
        <div className='dashboard-container'>
            {products.map((product) => <Card product={product} />)}
        </div>)
}

export default Dashboard