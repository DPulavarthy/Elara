// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'

// Import webpage styles.
import '../styles/_pages.scss'

/**
 * @name Home
 * @memberof <React>.Component
 */

export default class Home extends Component {

    /**
     * Render website view (Home page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render({ External, Copy } = global) {
        return (
            <div id="home" onLoad={_ => Preloader(true)}>

                {/* Load page META tags. */}
                <Meta />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To Elara </h2>
                    </div>
                </div>

                {/* Page break. */}
                <hr />
                <p className={global?.Elara?.presence?.status ?? `offline`} text={global?.Elara?.presence?.status ?? `offline`} style={{ color: global?.Elara?.presence?.hex ?? `#636b75` }}>Currently</p>

                {/* "Who am I?" section. */}
                <div className="section" id="intro">

                    {/* SVG image. */}
                    <div id="svg">
                        <img alt="Who is Elara SVG" style={{ filter: `drop-shadow(0px 0px 8px ${global?.Elara?.presence?.hex})` }} />
                    </div>

                    {/* Text. */}
                    <div id="text">
                        <div id="title">
                            Who is Elara?
                        </div>
                        <div id="data">
                            A multi-purpose bot that has many features, such as:

                            {/* List with links. */}
                            <a
                                href={`${window.location.origin}/commands#fun`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fun Commands<External />
                            </a>
                            <a
                                href={`${window.location.origin}/commands#mod`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Moderation Commands<External />
                            </a>
                            <a
                                href={`${window.location.origin}/commands#info`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Information Commands<External />
                            </a>
                            <a
                                href={`${window.location.origin}/commands#user`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                User Commands<External />
                            </a>
                            <a href="#logging"> Logging Features </a>
                            + so much more!
                        </div>
                    </div>
                </div>

                {/* Page break banner. */}
                <div className="banner">
                    <div id="image"></div>
                </div>

                {/* Logging section. */}
                <div className="section" id="logging">
                    <div id="text">
                        <div id="title"> Logging Features </div>
                        <div id="data">
                            Elara's logging features allow server managers to better monitor their members actions.
                            Since Discord is such a vast and extensive platform it might be hard for moderators to keep track of all users.
                            Elara fixes that issue by logging all events from the audit log + more.
                            <br />
                            <br />
                            Some of Elara's logging feature include:

                            {/* Server logs. */}                            
                            <p>
                                <b>Server</b>

                                {/* Options. */}
                                <i>Update</i>
                            </p>

                            <p>
                                <b>Channel</b>

                                {/* Options. */}
                                <i>Create</i>
                                <u> / </u>
                                <i>Update</i>
                                <u> / </u>
                                <i>Delete</i>
                            </p>

                            {/* Role logs. */}
                            <p>
                                <b>Role</b>

                                {/* Options. */}
                                <i>Create</i>
                                <u> / </u>
                                <i>Update</i>
                                <u> / </u>
                                <i>Delete</i>
                            </p>

                            {/* Message logs. */}
                            <p>
                                <b>Message</b>

                                {/* Options. */}
                                <i>Update</i>
                                <u> / </u>
                                <i>Delete</i>
                                <u> / </u>
                                <i>Bulk Delete</i>
                            </p>

                            {/* Emoji logs. */}
                            <p>
                                <b>Emoji</b>

                                {/* Options. */}
                                <i>Create</i>
                                <u> / </u>
                                <i>Update</i>
                                <u> / </u>
                                <i>Delete</i>
                            </p>

                            {/* Member logs. */}
                            <p>
                                <b>Member</b>

                                {/* Options. */}
                                <i>Join</i>
                                <u> / </u>
                                <i>Update</i>
                                <u> / </u>
                                <i>Leave</i>
                                <u> / </u>
                                <i>Kick</i>
                                <u> / </u>
                                <i>Ban</i>
                                <u> / </u>
                                <i>Unban</i>
                            </p>

                            {/* Invite logs. */}
                            <p>
                                <b>Invite</b>

                                {/* Options. */}
                                <i>Create</i>
                                <u> / </u>
                                <i>Delete</i>
                            </p>

                            {/* User logs. */}
                            <p>
                                <b>User</b>

                                {/* Options. */}
                                <i>Update</i>
                                <u> [ </u>
                                <i>Username</i>
                                <u> / </u>
                                <i>Discriminator</i>
                                <u> / </u>
                                <i>Avatar</i>
                                <u> ] </u>
                            </p>

                            {/* Voice logs. */}
                            <p>
                                <b>Voice</b>

                                {/* Options. */}
                                <i>Join</i>
                                <u> / </u>
                                <i>Switch</i>
                                <u> / </u>
                                <i>Leave</i> </p>
                        </div>
                    </div>

                    {/* SVG image. */}
                    <div id="svg">
                        <img alt="Logging Features SVG" />
                    </div>
                </div>

                {/* Setup section. */}
                <div className="section" id="setup">

                    {/* SVG image. */}
                    <div id="svg">
                        <img alt="Who is Elara SVG" />
                    </div>

                    {/* Text. */}
                    <div id="text">
                        <div id="title"> Configuration </div>
                        <div id="data">
                            Here you can find some commands that can be used to customize and activate Elara's features as well as customize your server.
                            Note: Do not include the "[]" brackets when running a command.

                            {/* List with links. */}
                            <h3>
                                <code>
                                    e!settings
                                    <Copy value="e!settings" />
                                </code>
                                to see the current settings for the server.
                            </h3>

                            <h3>
                                <code>
                                    e!config [type] [#channel]
                                    <Copy value="e!config [type] [#channel]" />
                                </code>
                                to configure the log channels in the server.
                            </h3>

                            <h3>
                                <code>
                                    e!misc currency [value]
                                    <Copy value="e!misc currency [value]" />
                                </code>
                                to set the currency for the server.
                            </h3>

                            <h3>
                                <code>
                                    e!toggle
                                    <Copy value="e!toggle" />
                                </code>
                                to toggle a certain feature on or off.
                            </h3>

                            <h3>
                                <code>
                                    e!prefix [value]
                                    <Copy value="e!prefix [value]" />
                                </code>
                                to set the prefix for the server.
                            </h3>

                            <h3>
                                <code>
                                    e!config roles.humans [@Role/Name/ID]
                                    <Copy value="e!config roles.humans [@Role/Name/ID]" />
                                </code>
                                to set the welcome/auto-join role.
                            </h3>

                        </div>
                    </div>
                </div>

                {/* Footer section. */}
                <div className="section" id="server">

                    {/* Text. */}
                    <div id="text">
                        <div id="title"> Want to keep up with the updates or suggest new features? </div>
                        <div id="data">
                            <a
                                href={`${window.location.origin}/support`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join the support server!💜
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
