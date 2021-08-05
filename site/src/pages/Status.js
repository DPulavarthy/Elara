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
 * @name Status
 * @memberof <React>.Component
 */

export default class Status extends Component {

    /**
     * Render website view (404 page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render() {
        return (
            <div id="status" onLoad={async _ => {
                Preloader(true)
                await this.LoadData()
            }}>

                {/* Load page META tags. */}
                <Meta title="Elara | System Status" description="Wanna see what's currently broken? Check here!" />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To Status </h2>
                    </div>
                </div>

                {/* Webpage break. */}
                <hr />
                <p id="refreshing"></p>

                {/* Webpage content. */}
                <div className="content">
                    <div className="section">

                        {/* SVG image. */}
                        <div id="svg">
                            <img alt="Elara connecting SVG" />
                        </div>

                        {/* Text. */}
                        <div id="text">
                            <div id="data">
                                <table>
                                    <tbody>

                                        {/* Table title. */}
                                        <tr>
                                            <th colSpan="8"> Elara Status </th>
                                        </tr>

                                        {/* Bot name. */}
                                        <tr>
                                            <td> Bot Name </td>
                                            <td id="bot-tag"></td>
                                        </tr>

                                        {/* Bot library. */}
                                        <tr>
                                            <td> Bot Library </td>
                                            <td id="bot-lib"></td>
                                        </tr>

                                        {/* Website status. */}
                                        <tr>
                                            <td> Website Status </td>
                                            <td id="website-status"></td>
                                        </tr>

                                        {/* Bot status. */}
                                        <tr>
                                            <td> Elara Bot Status </td>
                                            <td id="bot-status"></td>
                                        </tr>

                                        {/* Database status. */}
                                        <tr>
                                            <td> Database Status </td>
                                            <td id="database-status"></td>
                                        </tr>

                                        {/* Server count. */}
                                        <tr>
                                            <td> Server Count </td>
                                            <td id="topgg-server"></td>
                                        </tr>

                                        {/* top.gg vote count. */}
                                        <tr>
                                            <td> top.gg Monthly Vote Count </td>
                                            <td id="topgg-vote"></td>
                                        </tr>

                                        {/* discord.boats vote count. */}
                                        <tr>
                                            <td> discord.boats Monthly Vote Count </td>
                                            <td id="dboats-vote"></td>
                                        </tr>

                                        {/* BFD vote count. */}
                                        <tr>
                                            <td> BFD Monthly Vote Count </td>
                                            <td id="discords-vote"></td>
                                        </tr>

                                        {/* lifetime vote count. */}
                                        <tr>
                                            <td> Lifetime top.gg Vote Count </td>
                                            <td id="topgg-lifetime"></td>
                                        </tr>

                                        {/* Bot rating. */}
                                        <tr>
                                            <td> Bot Rating </td>
                                            <td id="bot-rating"></td>
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
        let data = await this.FetchData()

        // Set status emojis.
        for (let status of [`website`, `bot`, `database`]) document.getElementById(`${status}-status`).setAttribute(`online`, data[status]?.toString())

        // Set bot info.
        document.getElementById(`bot-tag`).innerHTML = `${data.topgg.username}#${data.topgg.discriminator}`
        document.getElementById(`bot-lib`).innerHTML = data.topgg.lib

        // Set bot stats.
        document.getElementById(`topgg-server`).innerHTML = data.topgg.server_count.toLocaleString()
        document.getElementById(`topgg-vote`).innerHTML = data.topgg.monthlyPoints.toLocaleString()
        document.getElementById(`topgg-lifetime`).innerHTML = data.topgg.points.toLocaleString()
        document.getElementById(`dboats-vote`).innerHTML = data.dboats.bot_vote_count.toLocaleString()
        document.getElementById(`discords-vote`).innerHTML = data.discords.votesMonth.toLocaleString()

        // Set bot rating.
        document.getElementById(`bot-rating`).innerHTML = rating()

        // Init refresh of data.
        this.timeoutRefresh()

        /**
         * Format rating data.
         * 
         * @name rating
         * @return A string of HTML images with rating data.
         */

        function rating() {
            let [final, key] = [[], [`one`, `two`, `three`, `four`, `five`]]
            for (let i = 0; i < Math.floor(data.dboats.bot_rate_average); i++) final.push(`<img title="${data.dboats[`bot_rate_${key[i]}`]?.toLocaleString()} people voted ${key[i]} stars" alt="star" width="20px" height="20px" />`)
            return final.join(``)
        }

    }

    /**
     * Fetch API data.
     * 
     * @name FetchData
     * @return An object with API data.
     */

    async FetchData() {
        let requestData = await fetch(`https://my.elara.services/stats?key=sspXGQmstPDL2lN3FXEZ5puIQrtxtMA3U1WHC`), body = await requestData.json()
        return body
    }

    /**
     * Data refresh function.
     * 
     * @name timeoutRefresh
     * @return Null.
     */

    timeoutRefresh() {
        // Timeout in seconds.
        global.Timeout = 100

        // Interval for countdown.
        let interval = setInterval(_ => {
            document.getElementById(`refreshing`).innerHTML = global.Timeout
            global.Timeout--
        }, 1000)
        
        // Timeout for reload data.
        setTimeout(_ => {
            clearInterval(interval)
            this.LoadData()
        }, 100 * 1000)
    }
}
