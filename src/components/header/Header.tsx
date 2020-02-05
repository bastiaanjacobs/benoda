import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../logo'

import Image from '../image'
import Navigation from '../navigation'

import styles from './Header.module.scss'

const Header = ({ siteTitle }) => (
    <header className={styles.navigation}>
        <Image />
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
            }}
        >
            <Logo />
            <h1 style={{ margin: 0 }}>
                <Link to="/">{siteTitle}</Link>
                <Navigation />
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
