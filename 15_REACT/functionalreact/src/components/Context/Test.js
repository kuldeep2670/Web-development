import React, { useState ,useContext} from 'react'
let context = React.createContext(null)
function Test() {

    

    const [firstName, setFirstName] = useState('Adam')
    const [lastName, setLastName] = useState('Smith')

    return (
        <context.Provider value ={{firstName, lastName}}>
        <h1>This is Parent Component</h1>
        <ChildA/>
        </context.Provider>
    )
}

function ChildA() {
    return (
        <>
            This is ChildA Component.
            <br />
            <ChildB />
        </>
    );
}

function ChildB() {
    return (
        <>
            This is ChildB Component.
            <br />
            <ChildC />
        </>
    );
}

function ChildC() {
    const {firstName,lastName} = useContext(context) 
    return (
        <>
            This is ChildC Component.
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            
        </>
    );
}
export default Test  