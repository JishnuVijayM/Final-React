//rfce / rafce

import React from 'react'

function Button(props) {

    return (
        <button onClick={props.onClick} type="button">{props.label || "click"}</button>
    )
}

export default Button