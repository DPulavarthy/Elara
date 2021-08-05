// Import react rendering modules.
import { Component } from 'react'
import { render } from 'react-dom'

// Import element styles.
import '../styles/_notification.scss'

/**
 * @name Overlay
 * @memberof <React>.Component
 */

class Overlay extends Component {

    /**
     * Render notification.
     * 
     * @name render
     * @return HTML code with notification data.
     */

    render() {

        this.root = document.getElementById(this?.props?.data?.id)

        if (window.innerWidth < 1100 && this?.props?.data?.type === `special`) return null

        // Return HTML data for notification view.
        return (
            <div id="information">
                {/* Close element. */}
                <p onClick={_ => {
                    this.root.classList.add('deleted')
                    setTimeout(() => this.root.remove(), 490)
                }}
                >
                    X
                </p>

                {/* Notification title. */}
                <h1 title={this?.props?.data?.title ?? ``}>{this?.props?.data?.title ?? ``}</h1>

                {/* Notification description. */}
                <h2 dangerouslySetInnerHTML={{ __html: this?.props?.data?.description ?? `` }}></h2>
            </div>
        )
    }
}

// Export only the 'Preloader' function (All other data has to be locally called).
export default function Notification(options) {

    // Make new elements.
    let [notification, parent] = [document.createElement('div'), document.getElementById('notifications')]

    // Notification properties.
    notification.classList.add('notification')
    notification.classList.add(options?.type ?? 'info')
    notification.id = randomID()
    options.id = notification.id
    parent.insertBefore(notification, parent.childNodes[0])

    // Notification timeout case.
    if (options.timeout) setTimeout(_ => {
        notification?.classList?.add(`deleted`)
        setTimeout(() => notification?.remove(), 490)
    }, options.timeout)

    // Render notification.
    render(<Overlay data={options} />, notification)
}

/**
 * Render preloader.
 * 
 * @name render
 * @return HTML code with preloader data.
 */

function randomID(length = 15, run = true, array = []) {
    while (run) {
        if (array.length === length) run = false
        else array.push(Math.floor(Math.random() * 9) + 1)
    }
    return array.join(``)
}
