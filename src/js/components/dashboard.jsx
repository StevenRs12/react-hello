import React from 'react'
import Card from './card'

const Dashboard = ({ characters, handlerPrevPage, handlerNextPage }) => {

    return (
        <>
            <button onClick={handlerPrevPage}>Prev</button>
            <button onClick={handlerNextPage}>Next</button>
            <div className='dashboard-container'>
                {characters.map((character, index) => <Card character={character} key={index} />)}
            </div>
        </>
    )
}

export default Dashboard