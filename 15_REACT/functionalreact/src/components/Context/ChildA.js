import React from 'react'
import ChildB from './ChildB'

function ChildA({ firstName, lastName }) {
    return (
        <div>
            <h1>This is child A and its children B</h1>
            <ChildB fname={firstName} lname={lastName} />
        </div>
    )
}

export default ChildA