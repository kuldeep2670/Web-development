import React, { useState, useEffect } from 'react'

function Ue1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Kuldeep')

    useEffect(() => {
        document.title = `This is my Title ${count} ${name}`
    })
    return (
        <div>
            <h1>This is a Counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setName('Singh')}>Change Name</button>
        </div>
    )
}

export default Ue1