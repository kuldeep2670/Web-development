import React, { useState } from 'react'

function Test() {
    const [count, setCount] = useState(0)   //count =variable , setCount = method 
                                            // value passed in useState initialise the count
    return (
        <div>
            <h1>This is a Counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Test