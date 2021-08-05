// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'

// Import webpage styles.
import '../styles/_pages.scss'

/**
 * @name Privacy
 * @memberof <React>.Component
 */

export default class Privacy extends Component {

    /**
     * Render website view (404 page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render() {
        return (
            <div id="privacy" onLoad={_ => Preloader(true)}>

                {/* Load page META tags. */}
                <Meta title="Elara | Privacy Policy" description="This is the privacy policy and agreement you accept when adding any of the our bots to a server, or use them as a user in a server." />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To Privacy </h2>
                    </div>
                </div>

                {/* Webpage break. */}
                <hr />

                {/* Privacy policy definers. */}
                <div id="heading"> Privacy Policy </div>
                <div id="date"> This policy is now in effect as of: <b> 08/08/2020 </b> </div>
                <div id="date" style={{ color: `#F04747` }}> SUBJECT TO CHANGE </div>

                {/* Webpage content. */}
                <div className="content">
                    {/* Privacy page description. */}
                    <h3> This page contains the privacy policy and agreement you accept when adding any of the below mentioned bots to a server, or use them as a user in a server. </h3>

                    {/* Privacy covered bots. */}
                    <h1> Bots </h1>
                    <h4> Name - [ID] </h4>
                    <p> @Elara#1162 - (455166272339181589) </p>
                    <p> @Elara#2878 - (491635097599082497) </p>
                    <p> @ModBot#9095 - (535824054763126784) </p>

                    {/* Policy covered services. */}
                    <h1> Services </h1>
                    <p> e-url.tk </p>
                    <p> superchiefyt.xyz </p>
                    <p> elara.services </p>
                    <p> haste.elara.services </p>
                    <p> my.elara.services </p>
                    <p> mod.superchiefyt.xyz </p>

                    {/* Data collection section. */}
                    <h1> The data we collect </h1>
                    <h4> 1) Guild, Channel, User, Role IDs </h4>
                    <h4> 2) Guild, User names (such as: <p> Testing </p> or <p> SUPERCHIEFYT#0001 </p>) </h4>
                    <h4> 3) User's Guilds, (<u style={{ color: `#FAA61A` }}>NOTE:</u> This is only for the <p>my.elara.services</p> service) </h4>
                    <h4> 4) Content (This only is for the following services: <p>haste.elara.services</p> Services) </h4>
                    <h4><a href="#data-usage"> 5) Message Data (How we use the data, Section 7) </a></h4>

                    <br />
                    <br />

                    {/* Data usage section. */}
                    <h2 id="data-usage">How we use the data</h2>
                    <h4><u style={{ color: `#FAA61A` }}>NOTE:</u> All data collected is to make your experience with the services better.</h4>
                    <h4> 1) Guilds </h4>
                    <h6> The guild name and ID is used to create a Database entry for your server, so you can use different features within the bot, such as warnings, kicks, bans, softbans and logging. </h6>

                    <br />
                    <h4> 2) Channels </h4>
                    <h6> The channel IDs collected are used to set/configure the channels to do certain actions such as: logging, suggestions, welcome and leave channels, ignoring channels for logging purposes. </h6>

                    <br />
                    <h4> 3) Users </h4>
                    <h6> The username and ID is used to create a Database entry for yourself for the currency, profile, afk and custom commands and for the server's warnings. </h6>
                    <h6> If you wish to delete your profile for currency use: <p> reset me </p> in the server that you want it to be removed from. </h6>
                    <h6> If you wish to delete your profile you'll have to join the <a href="/support" target="_blank" rel="noopener noreferrer"> support server </a> and request your data to be removed. </h6>
                    <h6> If you wish to delete your server's warnings you will have to contact that server's staff to remove them. </h6>

                    <br />
                    <h4> 4) Roles </h4>
                    <h6> The role ID is used for the welcome/autojoin role, this is given once a user joins a server. </h6>

                    <br />
                    <h4> 5) User's Guilds </h4>
                    <h6> The user's guilds is referring to the guilds that are returned when you authorized the services to access to them, This is used to make sure you're in the support server before accessing the website. </h6>

                    <br />
                    <h4> 6) Paste/Haste Content. </h4>
                    <h6> The paste/haste content is stored in the database for 2-3 weeks until being deleted unless it's set as <p> never delete </p> in that case the paste/haste content will be stored indefinitely. </h6>

                    <br />
                    <h4> 7) Message Data </h4>
                    <h6><u style={{ color: `#FAA61A` }}>NOTE:</u> ALL message content, attachments is encrypted.
                        <b> content </b>
                        <b> attachments </b>
                        <b> authorID </b>
                        <b> messageID </b>
                        <b> message_type </b>
                        <b> guildID </b>
                        <b> channelID </b>
                        <b> CreatedAt </b>
                    </h6>
                    <h6> The message is stored in the database for 1-2 days, if not deleted sooner. </h6>
                    <h6> Message data is used for the bot's message logging system for server owners or admins to use at their discretion. </h6>

                    <br />
                    <h4> 8) Announcement/Say Security Logging </h4>
                    <h6> When you use the <p> announce </p> or <p> say </p> commands, the server, channel, user and message content(content is encrypted, to avoid any security concerns) gets logged to a channel only the developer(s) have access to. </h6>
                    <h6> Due to events that's happened before with people abusing bots that have those commands, making the bot say something in a server then reporting it to Discord, I've opted to log that information and have the (ID: 123456789) userID of the person that used the command at the bottom of the embed for security purposes and to protect the bot for future use and so the bot doesn't get banned if someone does do that, I would have the logs of it and can prove it wasn't the bot posting that type of stuff. </h6>
                    <h4 style={{ display: `flex` }}><p> TLDR; It's for security purposes, to protect the bot from bad actors. </p></h4>

                    <br />
                    <br />

                    {/* Removing data section. */}
                    <h2> How to remove your data from our services </h2>
                    <h6> 1) For server data, it will be removed once the bot leaves the server. </h6>
                    <h6> 2) For user data, refer to the <a href="#data-usage"><p> How we use the data </p></a> section </h6>
                    <h6> 3) For user-guilds data this will be removed after 10 minutes to 1 day, or you can press the logout button to do it sooner. </h6>
                    <h6> 4) If it's for the non-bot services join the <a href="/support" target="_blank" rel="noopener noreferrer"> support server </a> and request the data to be deleted. </h6>
                    <h6> 5) For <p> my.elara.services </p> go to your pastes on the service and press the delete button. </h6>
                    <h6> 6) For <p> haste.elara.services </p> go to the <a href="/support" target="_blank" rel="noopener noreferrer"> support server </a> and request the haste to be deleted from the database, or wait 2-3 weeks for it to automatically be deleted. </h6>
                    <h6> 7) For message data this will be removed after 1 day, or has been deleted in the server's channel, if you wish to delete your server's messages from the database use: <p> toggle log.messages yes </p> | Note once the messages are removed they're gone forever. </h6>
                    <h4> If you're a user and you want <b style={{ color: `#F04747` }}> ALL </b> of your messages deleted from our system then join the <a href="/support" target="_blank" rel="noopener noreferrer"> support server </a> and DM one of the Bot Staff to request your messages to be removed from the system. (<u style={{ color: `#FAA61A` }}>NOTE:</u> This process may take up to 24 to 48 hours to fulfill, this does not mean you have 24 to 48 hours to appeal the deletion) </h4>

                    <br />
                    <br />

                    {/* Data access section. */}
                    <h2> Who has access to the data collected </h2>
                    <h4> Only the developer(s) for the services have access to the information and is <b style={{ color: `#F04747` }}> NEVER </b> given out to third parties, unless ordered by law. </h4>

                    <br />
                    <br />

                    {/* Data storage duration section. */}
                    <h2> How long is the data stored for </h2>
                    <h4> The data is stored indefinitely unless one of the following cases occurs:
                        <i> The bot leaves the server </i>
                        <i> The user requests a data deletion </i>
                    </h4>
                    <h4><u style={{ color: `#FAA61A` }}>NOTE:</u> Message data is stored for 1 day <b style={{ color: `#F04747` }}> (SUBJECT TO CHANGE!) </b></h4>

                    <br />
                    <br />

                    {/* Data right section. */}
                    <h2> Your rights to the data collected </h2>
                    <h4> If you want a copy of your server or user's data contact us via the <a href="/support" target="_blank" rel="noopener noreferrer"> support server</a>, we will strive to respond to your request within 30 days. </h4>
                </div>
            </div>
        )
    }
}
