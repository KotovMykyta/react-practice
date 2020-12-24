import React from 'react'
import Timer1 from './Timer1'
import Timer2 from './Timer2'
import Timer3 from './Timer3'

const Counter = () => {
    return (
        <div className="container">
            <h2>Counters</h2>
            <Timer1 />
            <Timer2 />
            <Timer3 />
            
        </div>
    )
}

export default Counter
