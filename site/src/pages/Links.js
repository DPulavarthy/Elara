// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'

/**
 * @name Home
 * @memberof <React>.Component
 */

export default class Links extends Component {

    /**
     * Render website view (Home page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render({ External } = global) {
        return (
            <div id="links" onLoad={_ => Preloader(true)}>
                <Meta title="Elara | Links" description="Some useful links can be found here!" />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To Links </h2>
                    </div>
                </div>

                {/* Webpage break. */}
                <hr />

                {/* Links section. */}
                <div className="section">

                    {/* Tree Level 1 (Elara). */}
                    <div>

                        {/* Elara icon. */}
                        <img id="elara" src={`${window.location.origin}/icons/elara.png`} alt="Elara Icon" />

                        {/* Elara title. */}
                        <div about="You are here"> Elara </div>
                    </div>

                    {/* Tree Level 2 (Invite). */}
                    <div>

                        {/* Tree transfer arrow. */}
                        <img id="arrow" alt="Links Arrow" />

                        {/* Link icon. */}
                        <img id="link" alt="Elara Link Icon" />

                        {/* Invite tab. */}
                        <div
                            about="Invite Elara to your server!"
                            onClick={_ => window.open(`${window.location.origin}/invite`, `_blank`)}
                        >
                            Invite
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (Vote). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Vote icon. */}
                        <img id="vote" alt="Elara Vote Icon" />

                        {/* Vote tab. */}
                        <div
                            about="Vote for Elara and show your support!"
                            onClick={_ => window.open(`${window.location.origin}/vote`, `_blank`)}
                        >
                            Vote
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (Support). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Support icon. */}
                        <img id="support" alt="Elara Support Icon" />

                        {/* Support server tab. */}
                        <div
                            about="Need help? Join the support server!"
                            onClick={_ => window.open(`${window.location.origin}/support`, `_blank`)}
                        >
                            Support server
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (GitHub). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* GitHub icon. */}
                        <img id="github" alt="Elara GitHub Icon" />

                        {/* GitHub tab. */}
                        <div
                            about="Elara Services related code!"
                            onClick={_ => window.open(`https://github.com/Elara-Discord-Bots`, `_blank`)}
                        >
                            GitHub
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (Twitter). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Twitter icon. */}
                        <img id="twitter" alt="Elara Twitter Icon" />

                        {/* Twitter tab. */}
                        <div
                            about="Elara's Twitter!"
                            onClick={_ => window.open(`https://twitter.com/ElaraBot`, `_blank`)}
                        >
                            Twitter
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (top.gg). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* top.gg icon. */}
                        <img id="topgg" alt="Elara Top.gg Icon" />

                        {/* top.gg tab. */}
                        <div
                            about="Elara's top.gg profile!"
                            onClick={_ => window.open(`https://top.gg/bot/455166272339181589`, `_blank`)}
                        >
                            top.gg profile
                            <External />
                        </div>
                    </div>

                    {/* Page spacer. */}
                    <br />
                    <br />

                    {/* Tree Level 1 (SUPERCHIEFYT). */}
                    <div>
                        {/* SUPERCHIEFYT icon. */}
                        <img id="super" alt="SUPERCHIEFYT Icon" style={{ background: `transparent` }} />

                        {/* SUPERCHIEFYT title. */}
                        <div about="Creator of Elara & Elara Services"> SUPERCHIEFYT </div>
                    </div>

                    {/* Tree Level 2 (Server). */}
                    <div>

                        {/* Tree transfer arrow. */}
                        <div id="arrow"></div>

                        {/* Server icon. */}
                        <img id="server" alt="SUPERCHIEFYT Server Icon" />

                        {/* Server tab. */}
                        <div
                            about="Join the server!"
                            onClick={_ => window.open(`https://discord.gg/h8hC3V8`, `_blank`)}
                        >
                            Discord Server
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (GitHub). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* GitHub icon. */}
                        <img id="github" alt="SUPERCHIEFYT GitHub Icon" />

                        {/* GitHub tab. */}
                        <div
                            about="My GitHub profile!"
                            onClick={_ => window.open(`https://github.com/SUPERCHIEFYT`, `_blank`)}
                        >
                            GitHub
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (Twitter). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Twitter icon. */}
                        <img id="twitter" alt="SUPERCHIEFYT Twitter Icon" />

                        {/* Twitter tab. */}
                        <div
                            about="My Twitter!"
                            onClick={_ => window.open(`https://twitter.com/SUPERCHIEFYT`, `_blank`)}
                        >
                            Twitter
                            <External />
                        </div>
                    </div>

                    {/* Tree Level 2 (Spacer). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* Tree level connector. */}
                        <hr />
                    </div>

                    {/* Tree Level 2 (top.gg). */}
                    <div>

                        {/* Blank space. */}
                        <div id="blank"></div>

                        {/* top.gg icon. */}
                        <img id="topgg" alt="SUPERCHIEFYT Top.gg Icon" />

                        {/* top.gg tab. */}
                        <div
                            about="My top.gg profile!"
                            onClick={_ => window.open(`https://top.gg/user/8074698156219760640`, `_blank`)}
                        >
                            top.gg profile
                            <External />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
