// Import react rendering modules.
import { Component } from 'react'

// Import element styles.
import '../styles/_navbar.scss'

/**
 * @name Navbar
 * @memberof <React>.Component
 */

export default class Navbar extends Component {

    /**
     * Render website navbar.
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render(External = global.External) {
        return (
            // Mount + text hider.
            <div id="background">

                {/* Visible navbar. */}
                <div id="navbar" onClick={_ => this.MobileNav()}>

                    {/* Elara icon. */}
                    <div id="icon">
                        <img
                            src={global?.Data?.Icon}
                            draggable="false"
                            alt="Elara Icon" />
                    </div>

                    {/* Elara title. */}
                    <div className="botname" onClick={_ => this.redir()}>
                        <h4>
                            {global?.Elara?.tag?.substring(0, global?.Elara?.tag?.indexOf(`#`))}
                            {/* Elara tag. */}
                            <p>
                                {global?.Elara?.tag?.substring(global?.Elara?.tag?.indexOf(`#`))}
                            </p>
                        </h4>
                    </div>

                    {/* External invite button. */}
                    <div className="link" onClick={_ => window.open("https://superchiefyt.xyz/invite", "_blank")}>
                        <h4> Invite </h4>
                        <External />
                    </div>

                    {/* Commands tab. */}
                    <div className="tab" onClick={_ => this.redir(`commands`)}>
                        <h4> Commands </h4>
                    </div>

                    {/* Vote tab. */}
                    <div className="tab" onClick={_ => this.redir(`vote`)}>
                        <h4> Vote </h4>
                    </div>

                    {/* Links tab. */}
                    <div className="tab" onClick={_ => this.redir(`links`)}>
                        <h4> Links </h4>
                    </div>

                    {/* Speical bots tab. */}
                    <div className="tab" onClick={_ => this.redir(`bots`)}>
                        <h4> Special Bots </h4>
                    </div>

                    {/* System status tab. */}
                    <div className="tab" onClick={_ => this.redir(`status`)}>
                        <h4> System Status </h4>
                    </div>

                    {/* Privacy tab. */}
                    <div className="tab" onClick={_ => this.redir(`privacy`)}>
                        <h4> Privacy </h4>
                    </div>

                    {/* Terms tab. */}
                    <div className="tab" onClick={_ => this.redir(`terms`)}>
                        <h4> Terms </h4>
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Check if page is overflow nav style and add functionality.
     * 
     * @name MobileNav
     * @param {Object} [navbarClass] A custom parameter to fetch the navbar element's classList.
     * @return Null.
     */

    MobileNav(navbarClass = document?.getElementById('navbar')?.classList) {
        if (window.innerWidth > 1100) return
        navbarClass.contains('open') ? navbarClass.remove('open') : navbarClass.add('open')
    }

    /**
     * Redirect website to different sub-page.
     * 
     * @name redir
     * @param {String} [url] A string with the value set as the name of the requested sub-page.
     * @return Null.
     */

    redir(url) {
        window.location.href = `${window.location.origin}/${url ?? ``}`
    }
}
