import React, { useEffect, useState } from 'react'
import Card from './card'

const Dashboard = ({ characters }) => {

    return (
        <div className='dashboard-container'>
            {characters.map((character) => <Card character={character} />)}
        </div>)
}

export default Dashboard