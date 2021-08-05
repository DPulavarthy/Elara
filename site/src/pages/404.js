// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
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

                {/* Load page META tags. */}
                <Meta title="Elara | 404" description="It's a 404 page, what did you expect?" />

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
