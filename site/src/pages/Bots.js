// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'

/**
 * @name Bots
 * @memberof <React>.Component
 */

export default class Bots extends Component {

    /**
     * Render website view (Home page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render({ External } = global) {
        return (
            <div id="bots" onLoad={_ => Preloader(true)}>
                <Meta title="Elara | Special Bots" description="Some other cool creations for your servers!" />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To Bots </h2>
                    </div>
                </div>

                {/* Webpage break. */}
                <hr />

                <div id="heading"> You can find other useful bots here! </div>

                <div className="content">

                    {/* Links section. */}
                    <div className="section">

                        {/* Tree Level 1 (MarksBot). */}
                        <div>

                            {/* MarksBot icon. */}
                            <img id="marksbot" alt="MarksBot Icon" style={{ background: `transparent` }} />

                            {/* MarksBot title. */}
                            <div style={{ color: `#FF0000` }}> MarksBot </div>
                        </div>
                        <p><b> Overview: </b> MarksBot is a Discord moderation and fun bot it has plenty of commands to keep you busy! </p>

                        {/* Tree Level 2 (Invite). */}
                        <div>

                            {/* Tree transfer arrow. */}
                            <img id="arrow" alt="Links Arrow" />

                            {/* Link icon. */}
                            <img id="link" alt="MarksBot Link Icon" />

                            {/* Invite tab. */}
                            <div onClick={_ => window.open(`https://discord.com/oauth2/authorize?client_id=417143274713776139&scope=bot&permissions=2080767191&scope=bot%20applications.commands`, `_blank`)}>
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
                            <img id="vote" alt="MarksBot Vote Icon" />

                            {/* Vote tab. */}
                            <div onClick={_ => window.open(`https://marksbot.mwserver.site/vote`, `_blank`)}>
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
                            <img id="support" alt="MarksBot Support Icon" />

                            {/* Support server tab. */}
                            <div onClick={_ => window.open(`http://discord.gg/Vn8rsyR`, `_blank`)}>
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

                        {/* Tree Level 2 (Website). */}
                        <div>

                            {/* Blank space. */}
                            <div id="blank"></div>

                            {/* Website icon. */}
                            <img id="www" alt="MarksBot Website Icon" />

                            {/* Website tab. */}
                            <div onClick={_ => window.open(`https://marksbot.mwserver.site`, `_blank`)}>
                                Website
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
                            <img id="twitter" alt="MarksBot Twitter Icon" />

                            {/* Twitter tab. */}
                            <div onClick={_ => window.open(`https://twitter.com/MarksBot1`, `_blank`)}>
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
                            <img id="topgg" alt="MarksBot Top.gg Icon" />

                            {/* top.gg tab. */}
                            <div onClick={_ => window.open(`https://top.gg/bot/417143274713776139`, `_blank`)}>
                                top.gg profile
                                <External />
                            </div>
                        </div>
                    </div>

                    {/* Links section. */}
                    <div className="section">

                        {/* Tree Level 1 (CouchBot). */}
                        <div>

                            {/* CouchBot icon. */}
                            <img id="couchbot" alt="CouchBot Icon" style={{ background: `transparent` }} />

                            {/* CouchBot title. */}
                            <div style={{ color: `#7477D0` }}> CouchBot </div>
                        </div>
                        <p> <b>Overview: </b> Looking to engage your communities and let your Glimesh, Mobcrush, Picarto, Piczel, Smashcast, Theta, Trovo, Twitch, and YouTube viewers know when you’ve got new content, or know when your favorite creators have gone live? Look no further! CouchBot has been running for over 5 years, has gone through a few rewrites, and we’re one of the best at doing what we do. </p>

                        {/* Tree Level 2 (Patreon). */}
                        <div>

                            {/* Tree transfer arrow. */}
                            <img id="arrow" alt="Links Arrow" />

                            {/* Patreon icon. */}
                            <img id="patreon" alt="CouchBot Patreon Icon" />

                            {/* Patreon tab. */}
                            <div onClick={_ => window.open(`https://patreon.com/CouchBot`, `_blank`)}>
                                Patreon
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

                        {/* Tree Level 2 (Server). */}
                        <div>

                            {/* Blank space. */}
                            <div id="blank"></div>

                            {/* Server icon. */}
                            <img id="support" alt="CouchBot Server Icon" />

                            {/* Server tab. */}
                            <div onClick={_ => window.open(`https://discord.couch.bot`, `_blank`)}>
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

                        {/* Tree Level 2 (Website). */}
                        <div>

                            {/* Blank space. */}
                            <div id="blank"></div>

                            {/* Website icon. */}
                            <img id="www" alt="CouchBot Website Icon" />

                            {/* Website tab. */}
                            <div onClick={_ => window.open(`https://couch.bot`, `_blank`)}>
                                Website
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

                        {/* Tree Level 2 (Docs). */}
                        <div>

                            {/* Blank space. */}
                            <div id="blank"></div>

                            {/* Docs icon. */}
                            <img id="docs" alt="CouchBot Twitter Icon" />

                            {/* Docs tab. */}
                            <div onClick={_ => window.open(`https://docs.couch.bot`, `_blank`)}>
                                Docs
                                <External />
                            </div>
                        </div>
                    </div>
                    
                    {/* Links section. */}
                    <div className="section">

                        {/* Tree Level 1 (Jonin). */}
                        <div>

                            {/* Jonin icon. */}
                            <img id="jonin" alt="Jonin Icon" style={{ background: `transparent` }} />

                            {/* Jonin title. */}
                            <div style={{ color: `#E18499` }}> Jonin </div>
                        </div>
                        <p><b> Overview: </b> A multi-purpose Discord bot for a shrine maiden from Yae Village. </p>

                        {/* Tree Level 2 (Invite). */}
                        <div>

                            {/* Tree transfer arrow. */}
                            <img id="arrow" alt="Links Arrow" />

                            {/* Link icon. */}
                            <img id="link" alt="MarksBot Link Icon" />

                            {/* Invite tab. */}
                            <div onClick={_ => window.open(`https://discord.com/oauth2/authorize?client_id=662517805983334416&permissions=4277529719&scope=bot%20applications.commands`, `_blank`)}>
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
                            <img id="vote" alt="Jonin Vote Icon" />

                            {/* Vote tab. */}
                            <div onClick={_ => window.open(`https://top.gg/bot/662517805983334416/vote`, `_blank`)}>
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
                            <img id="support" alt="Jonin Support Icon" />

                            {/* Support server tab. */}
                            <div onClick={_ => window.open(`http://discord.gg/58b4DbYJc6`, `_blank`)}>
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

                        {/* Tree Level 2 (top.gg). */}
                        <div>

                            {/* Blank space. */}
                            <div id="blank"></div>

                            {/* top.gg icon. */}
                            <img id="topgg" alt="Jonin Top.gg Icon" />

                            {/* top.gg tab. */}
                            <div onClick={_ => window.open(`https://top.gg/bot/662517805983334416`, `_blank`)}>
                                top.gg profile
                                <External />
                            </div>
                        </div>
                    </div>

                    {/* Links section. */}
                    <div className="section">

                        {/* Tree Level 1 (GreenBot). */}
                        <div>

                            {/* GreenBot icon. */}
                            <img id="greenbot" alt="GreenBot Icon" style={{ background: `transparent` }} />

                            {/* GreenBot title. */}
                            <div style={{ color: `#00FF2A` }}> GreenBot </div>
                        </div>
                        <p><b> Overview: </b> GreenBot is a Discord moderation and fun bot it has plenty of commands to keep you busy! </p>

                        {/* Tree Level 2 (Invite). */}
                        <div>

                            {/* Tree transfer arrow. */}
                            <img id="arrow" alt="Links Arrow" />

                            {/* Link icon. */}
                            <img id="link" alt="GreenBot Patreon Icon" />

                            {/* Invite tab. */}
                            <div onClick={_ => window.open(`https://discord.com/oauth2/authorize?client_id=432267856869064704&permissions=8&scope=bot`, `_blank`)}>
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
                            <img id="vote" alt="GreenBot Server Icon" />

                            {/* Vote tab. */}
                            <div onClick={_ => window.open(`https://top.gg/bot/432267856869064704/vote`, `_blank`)}>
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
                            <img id="support" alt="GreenBot Support Icon" />

                            {/* Support tab. */}
                            <div onClick={_ => window.open(`https://discord.gg/JhkyCSy`, `_blank`)}>
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

                        {/* Tree Level 2 (Website). */}
                        <div>

                            {/* Blank space. */}
                            <div id="blank"></div>

                            {/* Website icon. */}
                            <img id="www" alt="GreenBot Website Icon" />

                            {/* Website tab. */}
                            <div onClick={_ => window.open(`https://greenbot.mwserver.site`, `_blank`)}>
                                Website
                                <External />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
