import React from 'react'

import { Link } from 'gatsby'

import { Layout } from '../components'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>lorem ipsum</h1>
        <p>Welcome to your new Gatsby site.</p>

        <Link to="/work">Some of our work</Link>
    </Layout>
)

export default IndexPage
