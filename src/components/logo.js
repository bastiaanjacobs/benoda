import React from 'react'
import logo from './../images/logo.svg'

const Logo = () => {
    return (
        <img
            style={{
                float: `left`,
                margin: `.5rem 1rem .5rem .5rem`,
                width: 0,
                height: 0,
            }}
            src={logo}
            alt="logo"
        />
    )
}

export default Logo
