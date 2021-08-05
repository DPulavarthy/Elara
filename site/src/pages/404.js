// Import react rendering modules.
import { Component } from 'react'
import { Helmet } from 'react-helmet'

// Import webpage elements.
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'

// Import webpage styles.
import '../styles/_pages.scss'

/**
 * @name FourOFour
 * @memberof <React>.Component
 */

export default class FourOFour extends Component {

    /**
     * Render website view (404 page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render() {
        return (
            <div id="FourOFour" onLoad={_ => Preloader(true)}>

                <Helmet>
                    {/* Website title. */}
                    <title> Elara | 404 </title>

                    {/* Basic Meta Tags. */}
                    <meta charset="UTF-8" />
                    <meta name="theme-color" content="#790c9e" />
                    <meta name="keywords" content="SUPERCHIEFYT#0001, Elara#1162" />
                    <meta name="description" content="It's a 404 page, what did you expect?" />
                    <meta name="subject" content="Elara's website" />
                    <meta name="copyright" content="SUPERCHIEFYT" />
                    <meta name="language" content="EN" />
                    <meta name="robots" content="index,follow" />
                    <meta name="revised" content="Monday, May 31th, 2021, 07:55 AM" />
                    <meta name="Classification" content="Profile" />
                    <meta name="owner" content="SUPERCHIEFYT" />
                    <meta name="url" content={window?.location?.origin} />
                    <meta name="identifier-URL" content={window?.location?.origin} />
                    <meta name="directory" content="submission" />
                    <meta name="coverage" content="Worldwide" />
                    <meta name="distribution" content="Global" />
                    <meta name="rating" content="General" />
                    <meta name="subtitle" content="It's a 404 page, what did you expect?" />
                    <meta name="target" content="all" />
                    <meta name="HandheldFriendly" content="True" />
                    <meta name="MobileOptimized" content="320" />
                    <meta name="DC.title" content="SUPERCHIEFYT" />
                    <meta name="ResourceLoaderDynamicStyles" content="" />
                    <meta name="medium" content="website" />
                    <meta name="pageKey" content="guest-home" />
                    <meta http-equiv="Pragma" content="no-cache" />
                    <meta http-equiv="Cache-Control" content="no-cache" />
                    <meta http-equiv="imagetoolbar" content="no" />
                    <meta http-equiv="x-dns-prefetch-control" content="off" />
                    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* OpenGraph Meta Tags. */}
                    <meta name="og:title" content="Elara | 404" />
                    <meta name="og:type" content="Bot Website" />
                    <meta name="og:url" content={window?.location?.origin} />
                    <meta name="og:image" content={global?.Data?.Icon} />
                    <meta name="og:site_name" content="SUPERCHIEFYT#0001" />
                    <meta name="og:description" content="It's a 404 page, what did you expect?" />
                    <meta name="application-name" content="Elara's Website" />

                    {/* Apple Meta Tags. */}
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta content="yes" name="apple-touch-fullscreen" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    {/* Website icon. */}
                    <link rel="icon" href={global?.Data?.Icon} />
                </Helmet>

                {/* Load page META tags. */}
                {/* <Meta title="Elara | 404" description="It's a 404 page, what did you expect?" /> */}

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To 404 </h2>
                    </div>
                </div>

                {/* Webpage break. */}
                <hr />

                {/* Webpage content. */}
                <div className="content">
                    <div className="section">

                        {/* SVG image. */}
                        <div id="svg">
                            <img alt="Who is Elara SVG" />
                        </div>

                        {/* Text. */}
                        <div id="text">
                            <div id="title">
                                We are sorry but the requested page was not found
                            </div>
                            <div id="data">
                                <a href={window.location.origin}> Go back home? </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
