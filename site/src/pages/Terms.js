// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'

// Import webpage styles.
import '../styles/_pages.scss'

/**
 * @name Terms
 * @memberof <React>.Component
 */

export default class Terms extends Component {

    /**
     * Render website view (404 page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render() {
        return (
            <div id="terms" onLoad={_ => Preloader(true)}>

                {/* Load page META tags. */}
                <Meta title="Elara | Terms of Service" description="Elara's Terms of Service" />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To ToS </h2>
                    </div>
                </div>

                {/* Webpage break. */}
                <hr />

                <div id="heading"> Terms of Service </div>

                {/* Webpage content. */}
                <div className="content">
                    {/* Terms agreement section. */}
                    <h1 style={{ color: `#43b581` }}> Agreement </h1>
                    <h4> By using this service you agree to abide by the rate limit of the service, not to abuse the service or exploit this service. </h4>

                    {/* Terms notice section. */}
                    <h1 style={{ color: `#faa61a` }}> Notice </h1>
                    <h4> If you break these terms or abuse our services we can and will blacklist/ban you from using our services. </h4>
                    <h4> This includes but not limited to: Discord Bots, Websites, APIs </h4>

                    {/* Terms API section. */}
                    <h1 style={{ color: `#f04747` }}> Our APIs </h1>
                    <h4> All requests have 100 requests per 1 minute rate limit, if your application hits the limit continuously we will revoke the API key and ban you from our system. </h4>
                </div>
            </div>
        )
    }
}
