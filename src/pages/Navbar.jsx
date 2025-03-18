//rfce / rafce

import React, { useState } from 'react'
import './Navbar.css'
import Heading from '../components/Heading'

function Navbar() {
    const [dark, setDark] = useState(false)

    const handleDarkMode = () => {

        if (dark) {
            setDark(false)
        } else {
            setDark(true)
        }
    }

    return (
        <div className='test' style={{ backgroundColor: dark ? "black" : 'white' }} >

            <button onClick={handleDarkMode} style={{ padding: "12px" }} type="button">{dark ? "Light Mode" : "Dark mode"}</button>

            {dark && (<Heading theme={dark} content="props" />)}
        </div>
    )
}

export default Navbar
