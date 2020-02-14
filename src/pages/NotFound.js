import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Page not found (404) component
 */

const NotFound = () => (
    <div className="not-found">
        <h2>
            <strong>404.</strong>That's and error.
        </h2>
        <h3>The requested URL ({window.location.pathname}) was not found.</h3>
        <p>
            <Link to="/">Return to homepage</Link>
        </p>
    </div>
)

export default NotFound
