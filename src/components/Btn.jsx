import React from 'react'
import { Button } from 'react-bootstrap'

function Btn({ variant , label , style}) {
    return (
        <Button className={style} variant={variant}>{label}</Button>
    )
}

export default Btn