// Import SCSS files.
import './styles/_global.scss'
import './styles/_notification.scss'

// Import react rendering modules.
import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import webpages.
import FourOFour from './pages/404.js'
import Bots from './pages/Bots.js'
import Commands from './pages/Commands.js'
import Home from './pages/Home.js'
import Links from './pages/Links.js'
import Privacy from './pages/Privacy.js'
import Status from './pages/Status.js'
import Terms from './pages/Terms.js'
import Vote from './pages/Vote.js'

// Import overlay.
import Preloader from './functions/Preloader.js'
import Notification from './functions/Notification.js'

/**
 * This function merges multiple objects into one.
 * 
 * @name mergify
 * @param {Object} [main] Master object (All other objects merge into this).
 * @param {Array} [subs] Array of objects to merge into `main`.
 * @return {Object} Master object (`main`) with `subs` merged.
 */

Object.mergify = (main, ...subs) => {
    if (typeof main !== `object` || main === null) throw new Error(`Must pass an object type data`)
    for (let obj of subs) if (typeof obj !== `object` || obj === null) throw new Error(`Must pass an object type data`)
    for (let obj of subs) for (let attrname in obj) main[attrname] = obj[attrname]
    return main
}

/**
 * This function checks if the passed param is an array and if it has at least 1 element.
 * 
 * @name exists
 * @param {array} input Likely an array but possible for other data types, the data that needs to be checked.
 * @return {boolean} true: input param is an array and has at least 1 element, false: input param is not an array or is an array but with no elements.
 */

Array.exists = input => Array.isArray(input) && input.some(e => e)

// Document language property.
document.lang = `en`

// Create document elements.
let [backToTop, preload, notifications] = [document.createElement(`div`), document.createElement(`div`), document.createElement(`div`)]

// Set element properties.
backToTop.id = `top`
preload.id = `preload`
notifications.id = `notifications`

// Put element in document.
document.body.insertBefore(backToTop, document.body.childNodes[0])
document.body.insertBefore(preload, document.body.childNodes[0])
document.body.insertBefore(notifications, document.body.childNodes[0])

// Set element inner data.
document.getElementById(`top`).innerHTML = `<a href="#content" title="Back to top">⬆️</a>`

// Enable preloader visibility.
Preloader()

Object.mergify(global, {
    // Globally accessable data.
    Data: {

        // Elara icon.
        Icon: `${window?.location?.origin}/icons/elara.png`,

        // External link icon.
        External: `M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04C194.818,6.19,190.789,2.161,185.818,2.161z`,

        // Copy icon.
        Copy: `M168.506,0H80.235C67.413,0,56.981,10.432,56.981,23.254v2.854h-15.38c-12.822,0-23.254,10.432-23.254,23.254v137.492c0,12.822,10.432,23.254,23.254,23.254h88.271c12.822,0,23.253-10.432,23.253-23.254V184h15.38c12.822,0,23.254-10.432,23.254-23.254V23.254C191.76,10.432,181.328,0,168.506,0z M138.126,186.854c0,4.551-3.703,8.254-8.253,8.254H41.601c-4.551,0-8.254-3.703-8.254-8.254V49.361c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.253,3.703,8.253,8.254V186.854z M176.76,160.746c0,4.551-3.703,8.254-8.254,8.254h-15.38V49.361c0-12.822-10.432-23.254-23.253-23.254H71.981v-2.854c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.254,3.703,8.254,8.254V160.746z`,

    },

    External: class External extends Component {

        /**
         * Render external icon SVG.
         * 
         * @name render
         * @return HTML code with SVG data and functionality.
         */

        render() {
            return (
                <div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 194.818 194.818">
                        <g>
                            {/* Load SVG data from global values. */}
                            <path d={global?.Data?.External} />
                        </g>
                    </svg>
                </div>
            )
        }
    },

    Copy: class Copy extends Component {

        /**
         * Render copy icon SVG.
         * 
         * @name render
         * @return HTML code with SVG data and functionality.
         */

        render() {
            return (
                <div title="Copy to clipboard" onClick={_ => {
                    // Copy text to clipboard.
                    navigator.clipboard.writeText(this?.props?.value)

                    // Send success notification.
                    Notification({
                        title: `Copied!`,
                        description: this?.props?.value,
                        timeout: 5 * 1000
                    })
                }}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 210.107 210.107">
                        <g>
                            {/* Load SVG data from global values. */}
                            <path d={global?.Data?.Copy} />
                        </g>
                    </svg>
                </div>
            )
        }
    },
})

// Close mobile format navbar when screen is resized.
window.onresize = _ => window.innerWidth > 1100 ? document?.getElementById(`navbar`)?.classList?.remove(`open`) : null

// Back to top icon when scrolled.
window.onscroll = _ => {
    if (window.scrollY < 10 || window.innerWidth < 1100) document.getElementById(`top`).style.display = `none`
    else document.getElementById(`top`).style.display = `block`
}

// Use 'node-fetch' to request data for 'Elara' from custom API.
fetch(`https://api.kurasad.dev/status/455166272339181589`)

    // Then get the data from the request.
    .then(res => res.json())

    // Then run functions to load the webpage.
    .then(body => {

        // Set the returned data to a global variable.
        global.Elara = body.data

        // If URL should be redirected or webpage should be searched for.
        if (detectURL()) window.location.href = `https://${detectURL()}`
        else {

            // Render the site to support multiple pages.
            render(
                <Router>
                    <Switch>
                        {/* Subpages below. */}
                        <Route path={[`/bots`, `/special-bots`, `/sb`]} component={Bots} />
                        <Route path={[`/commands`, `/cmds`]} component={Commands} />
                        <Route path={[`/links`, `/external`, `/trusted`]} component={Links} />
                        <Route path={[`/privacy`, `/privacy-policy`, `/pp`]} component={Privacy} />
                        <Route path={[`/status`, `/system`, `/ss`]} component={Status} />
                        <Route path={[`/terms`, `/terms-of-use`, `/terms-and-conditions`]} component={Terms} />
                        <Route path="/vote" component={Vote} />

                        {/* Main page. */}
                        <Route exact path={[`/`, `/home`, `/index`, `/master`, `/landing`]} component={Home} />

                        {/* Fallback page. */}
                        <Route component={FourOFour} />
                    </Switch>
                </Router>,

                // Load to website content element.
                document.getElementById(`content`)
            )
        }
    })


/**
 * Detect path and check if the path should be redirected.
 * 
 * @name detectURL
 * @param {String / NUll} [URL] A custom parameter to append to.
 * @param {Array} [paths] The paths of the URL split and filtered.
 * @return Path redirect URL or false.
 */

function detectURL(URL, paths = window.location.pathname.split(`/`).filter(e => e !== ``)) {

    // Switch preset options.
    switch (paths[0]?.toLowerCase()) {

        // Support server link.
        case `support`: {
            URL = `discord.gg/qafHJ63`
            break
        }

        // Bot invite link.
        case `invite`: {
            URL = `discord.com/oauth2/authorize?client_id=455166272339181589&permissions=1543892167&scope=bot%20applications.commands`
            break
        }

        // No URL if case is not met.
        default: {
            URL = false
            break
        }
    }

    return URL
}
