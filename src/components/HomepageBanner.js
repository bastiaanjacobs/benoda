import React from 'react'
import { RichText } from 'prismic-reactjs'
import { PrismicLink } from './prismic-elements'

/**
 * Homepage banner component
 */
const HomepageBanner = ({ banner }) => (
    <section className="homepage-banner">
        <div className="banner-content container">
            <div className="banner-visual">
                <img src={banner.image.url} alt={banner.title.alt} />
            </div>
            <div className="banner-intro">
                <h2 className="banner-title">
                    {RichText.asText(banner.title)}
                </h2>
                <p className="banner-description">
                    {RichText.asText(banner.tagline)}
                </p>
                <PrismicLink
                    link={banner.button_link}
                    linkClass="banner-button"
                >
                    {RichText.asText(banner.button_label)}
                </PrismicLink>
            </div>
        </div>
    </section>
)

export default HomepageBanner
