import React from 'react'

function Heading(props) {

    return (
        <h1 style={{ color: props.theme ? props.theme : "red" }}>{props.content} !!</h1>
    )
}

export default Heading