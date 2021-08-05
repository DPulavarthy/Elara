// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'

// Import webpage styles.
import '../styles/_pages.scss'

// Import webpage modules.
import fetch from 'node-fetch'

/**
 * @name Vote
 * @memberof <React>.Component
 */

export default class Vote extends Component {

    /**
     * Render website view (404 page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render({ External } = global) {
        return (
            <div id="vote" onLoad={async _ => {
                Preloader(true)
                await this.LoadData()
            }}>

                {/* Load page META tags. */}
                <Meta title="Elara | Vote" description="Vote for Elara to show your support!" />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To Vote </h2>
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
                            <div id="data">
                                <table>
                                    <tbody>

                                        {/* Table title. */}
                                        <tr>
                                            <th colSpan="8"> Vote for Elara </th>
                                        </tr>

                                        <tr>
                                            <th colSpan="8"> Voting for Elara is one of the best ways to show your support! It allows Elara to be discovered by more people and makes the devs happy 😊 </th>
                                        </tr>

                                        {/* top.gg vote count. */}
                                        <tr>
                                            <td> Discord Bot List </td>
                                            <td id="topgg-vote"></td>
                                        </tr>

                                        {/* discord.boats vote count. */}
                                        <tr>
                                            <td> Discord Boats </td>
                                            <td id="dboats-vote"></td>
                                        </tr>

                                        {/* BFD vote count. */}
                                        <tr>
                                            <td> Discords.com </td>
                                            <td id="discords-vote"></td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p>Vote on</p>
                                                <div id="links">
                                                    <div>
                                                        <div>
                                                            <img id="topgg" alt="topgg" onClick={_ => window.open(`https://top.gg/bot/455166272339181589/vote`, `_blank`)} />
                                                            <External />
                                                        </div>
                                                        <p>top.gg</p>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <img id="dboats" alt="dboats" onClick={_ => window.open(`https://discord.boats/bot/455166272339181589/vote`, `_blank`)} />
                                                            <External />
                                                        </div>
                                                        <p>dboats</p>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <img id="discords" alt="discords" onClick={_ => window.open(`https://discords.com/bots/bot/455166272339181589/vote`, `_blank`)} />
                                                            <External />
                                                        </div>
                                                        <p>BFD</p>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <img id="dbl" alt="dbl" onClick={_ => window.open(`https://discordbotlist.com/bots/elara/upvote`, `_blank`)} />
                                                            <External />
                                                        </div>
                                                        <p>DBL</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Load API data to site.
     * 
     * @name LoadData
     * @return Null.
     */

    async LoadData() {
        // Fetch data.
        let requestData = await fetch(`https://my.elara.services/stats?key=sspXGQmstPDL2lN3FXEZ5puIQrtxtMA3U1WHC`), data = await requestData.json()

        document.getElementById(`topgg-vote`).innerHTML = data.topgg.monthlyPoints.toLocaleString()
        document.getElementById(`dboats-vote`).innerHTML = data.dboats.bot_vote_count.toLocaleString()
        document.getElementById(`discords-vote`).innerHTML = data.discords.votesMonth.toLocaleString()
    }
}
