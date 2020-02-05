import React from 'react'

import { Layout } from '../components'
import SEO from '../components/seo'

interface Props {
    title: string
}

const NotFoundPage = ({ title }: Props) => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
)

export default NotFoundPage
