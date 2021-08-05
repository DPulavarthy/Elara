// Import react rendering modules.
import { Component } from 'react'
import { render } from 'react-dom'

// Import styles.
import '../styles/_preloader.scss'

// Import notifications.
import Notification from './Notification.js'

/**
 * @name Preloader
 * @memberof <React>.Component
 */

class Overlay extends Component {

    /**
     * Render preloader.
     * 
     * @name render
     * @return HTML code with preloader data.
     */

    render() {

        // If param 'true' then hide preloader.
        if (this.props.data) this.hide()

        // Return HTML data for preloader view.
        return (
            <div id="mount">
                <div id="load">

                    {/* SVG text. */}
                    <svg width="100%" height="100%">
                        <text y="170px">
                            Welcome
                        </text>
                    </svg>
                </div>
            </div>
        )
    }

    /**
     * Hide preloader.
     * 
     * @name render
     * @return {Null}.
     */

    hide() {
        // Set delay for a just-in-case scenerio as well as the user can see the preloader contents.
        setTimeout(_ => {

            // Hide preloader.
            Object.mergify(document.getElementById("preload").style, { opacity: 0, pointerEvents: `none`, transitionDuration: `0.5s`, zIndex: -1 })

            // Allow webpage scroll.
            Object.mergify(document.getElementsByTagName("html")[0].style, { overflow: `auto` })

            // Send page notification.
            if (!global?.Joined) Notification({
                title: 'Hello 👋',
                description: `
                Looking for help? Join the <a href="${window.location.origin}/support" target="_blank" rel="noopener noreferrer">support server <div><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.818 194.818"><g><path d=${global?.Data?.External} /></g></svg></div></a>! 💜`,
                type: 'special'
            })

            // Send notification only once (In case the event is triggered again [Only in Dev]).
            global.Joined = true
        }, (3 * 1000) + 500)
    }
}

// Export only the 'Preloader' function (All other data has to be locally called).
export default function Preloader(load) {
    render(<Overlay data={load} />, document.getElementById("preload"))
}
