// Import react rendering modules.
import { Component } from 'react'

// Import webpage elements.
import Meta from '../functions/Meta.js'
import Navbar from '../functions/Navbar.js'
import Preloader from '../functions/Preloader.js'
import Notification from '../functions/Notification.js'

// Import webpage styles.
import '../styles/_pages.scss'

// Import webpage modules.
import fetch from 'node-fetch'

// Globally usable variable.
let [groups, commands] = [[], []]

/**
 * @name Commands
 * @memberof <React>.Component
 */

export default class Commands extends Component {

    /**
     * Render website view (Commands page).
     * 
     * @name render
     * @return HTML code with API data and functionality.
     */

    render() {
        window.onhashchange = _ => this.QueryCommands(window.location.hash)

        return (
            <div id="commandspage" onLoad={async _ => {
                Preloader(true)
                await this.LoadCommands()
                this.checkForPath()
                document.getElementById(`search-box`).addEventListener(`change`, () => {
                    let value = document.getElementById(`search-box`).value
                    if (value) window.location.hash = value
                })
            }}>

                {/* Load page META tags. */}
                <Meta title="Elara | Commands" description="Looking for a command? Did you look here? 👀" />

                {/* Webpage navbar. */}
                <div className="nav">
                    <Navbar />
                </div>

                {/* Webpage title. */}
                <div className="title">
                    <h1> Welcome, </h1>
                    <div id="pageDefiner">
                        <h2> To Cmds </h2>
                    </div>
                </div>

                {/* Webpage break. */}
                <hr />

                {/* Commands search box. */}
                <input type="text" id="search-box" name="Elara-Commands-Search-Box" placeholder="Search for commands here!" />

                {/* Webpage (default) content. */}
                <div id="cmds">
                    {/* All content contained here will be replaced by the JS fetch. */}
                    {/* Loading elements. */}
                    <div id="loading">
                        <img alt="Elara loading" />
                        Fetching data, please wait a moment...
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Load command data from API to webpage.
     * 
     * @name LoadCommands
     * @return Null.
     */

    async LoadCommands() {

        let [request, tableReturnData, groupMap, commandCount] = [
            // API data request.
            await fetch(`https://my.elara.services/commands/elara`),

            // Final storage array.
            [],

            // A map to orgainze API data.
            new Map(),

            // Total command count.
            0
        ],
            // API data body.
            body = await request.json()

        // For every command.
        for await (let command of body.commands) {
            // Increase command count.
            commandCount++

            // Check if map already exists, else init a new array.
            let groupData = groupMap.get(command.group.id) || []

            // Push to map array.
            groupData.push(command)

            // Set map to corresponding group.
            groupMap.set(command.group.id, groupData)
        }

        // Add command count to the final storage array.
        tableReturnData.push(`<h3 id="commandCount" title="Click me to view all commands">${commandCount.toLocaleString()}</h3>`)

        // For every group in the map.
        for (let [i, keys] = [0, groupMap.keys()]; i < groupMap.size; i++) {

            // Get the key definer.
            let key = keys.next().value, [value, title] = [
                // Value (Command list).
                groupMap.get(key),
                // Replace all "_" with " " in the key definer + make the first letter of each word uppercase.
                key.split(`_`).map(arg => `${arg.slice(0, 1).toUpperCase()}${arg.slice(1).toLowerCase()}`).join(` `)]

            // Push group heading data to storage array.
            tableReturnData.push(`<div id="group" class="${title.toLowerCase().split(` `).join(``)}"><div class="heading">${title}<p>${value.length.toLocaleString()}</p></div><div class="hide"><div id="definer"><h1>Command</h1><hr /><h2>Aliases</h2><hr /><h3>Description</h3><hr /><h4></h4></div>`)

            // Push group name to file global variable.
            groups.push(title.toLowerCase().split(` `).join(``))

            // For every command in group.
            for (let cmd of value) {
                // Push command name to file global variable.
                commands.push(cmd.name.toLowerCase())

                // Push command data to storage array.
                tableReturnData.push(`
                    <!-- Command main info. -->
                    <div id="${cmd.name.toLowerCase()}" parent="${title.toLowerCase()}">
                        <h1>${cmd.name}</h1>
                        <hr />
                        <h2>${cmd.aliases.join(`<b>,</b> `) || `None`}</h2>
                        <hr />
                        <h3>${cmd.description}</h3>
                        <hr />
                        <h4 id="${cmd.name.toLowerCase()}-info">&lt;</h4>
                    </div>

                    <!-- More detail section. -->
                    <div id="${cmd.name.toLowerCase()}-hidden" class="cmd-hidden">

                        <div>

                            <!-- Cooldown info. -->
                            <table id="cooldown">
                                <tr>
                                    <th>Cooldown Info</th>
                                </tr>
                                <tr>
                                <td> ${cmd.cooldown.usages ?? 1} </td>
                                    <td> Usages </td>
                                </tr>
                                <tr>
                                <td> ${cmd.cooldown.duration ?? 0}s </td>
                                    <td> Duration </td>
                                </tr>
                            </table> 

                            <!-- Command run environment info. -->
                            <table id="only">
                                <tr>
                                    <th>Run Environment</th>
                                </tr>
                                <tr>
                                    <td class="${cmd.only.dms || (!cmd.only.owner && !cmd.only.guild && !cmd.only.dms) || (cmd.only.owner && !cmd.only.guild && !cmd.only.dms) ? `check` : `cross`}"> <img /> </td>
                                    <td> DMs </td>
                                </tr>
                                <tr>
                                    <td class="${cmd.only.guild || (!cmd.only.owner && !cmd.only.guild && !cmd.only.dms) || (cmd.only.owner && !cmd.only.guild && !cmd.only.dms) ? `check` : `cross`}"> <img /> </td>
                                    <td> Server </td>
                                </tr>
                                <tr>
                                    <td class="${cmd.only.owner ? `check` : `cross`}"> <img /> </td>
                                    <td> Owner only </td>
                                </tr>
                                <tr>
                                    <td class="${(!cmd.only.owner && !cmd.only.guild && !cmd.only.dms) || (cmd.only.owner && !cmd.only.guild && !cmd.only.dms) ? `check` : `cross`}"> <img /> </td>
                                    <td> Anywhere </td>
                                </tr>
                            </table>  

                            <!-- Command group info. -->
                            <div id="group-info">
                                <h1>Group</h1>
                                <h2>Name: <p> ${title} </p></h2>
                                <h3>Description: <p> ${cmd.group.name} </p></h3>
                            </div>

                            <!-- Command permission info. -->
                            <div id="perms-info">
                                <h1>Permissions</h1>
                                <h2>Bot (In general): <p> ${Array.exists(cmd.permissions.bot) ? format(cmd.permissions.bot) : `None`} </p></h2>
                                <h2 title="In addition to general" style="cursor: default">Bot (Server): <p> ${Array.exists(cmd.permissions.guild.bot) ? format(cmd.permissions.guild.bot) : `None`} </p></h2>
                                <h2>User (In general): <p> ${Array.exists(cmd.permissions.user) ? format(cmd.permissions.user) : `None`} </p></h2>
                                <h2 title="In addition to general" style="cursor: default">User (Server): <p> ${Array.exists(cmd.permissions.guild.user) ? format(cmd.permissions.guild.user) : `None`} </p></h2>
                            </div>
                        </div>

                        <div>
                            <!-- Command overview info. -->
                            <div id="overview">
                                <h1>Command Overview</h1>
                                <h2>Name: <p> ${cmd.name} </p></h2>
                                <h2>Aliases: <p> ${Array.exists(cmd.aliases) ? `e!${cmd.aliases.join(`<b>,</b> e!`)}` : `None`} </p></h2>
                                <h3>Description: <p> ${cmd.description} </p></h3>
                            </div>
                            
                            <!-- Command examples info. -->
                            <div id="examples">
                                <h1>Command Examples</h1>
                                <h2>${cmd.examples.join(`<br /><br />`).replace(/%PREFIX%/g, `e!`)}</h2>
                            </div>
                        </div>
                    </div>
                `)
            }
            // Push closing elements to storage array.
            tableReturnData.push(`</div></div></div>`)
        }

        // Set the content of the 'cmds' element to the storage data (removing the loading elements).
        document.getElementById(`cmds`).innerHTML = tableReturnData.join(``)

        // Set commandCount click event.
        document.getElementById(`commandCount`).addEventListener(`click`, _ => { window.location.href = `${window.location.origin}/commands#all` })

        // For every group label in groups.
        for (let group of groups) {
            // Fetch group element by class.
            let groupLabel = document.getElementsByClassName(group)[0]

            // Add heading click event for functionality.
            groupLabel.getElementsByClassName(`heading`)[0].addEventListener(`click`, _ => {

                // Hide all groups other than the one that was clicked on.
                this.hideGroups(group)

                // Hide all commands for global formatting purposes.
                this.hideCommands()

                // Get group commands classlist.
                let data = groupLabel.getElementsByClassName(`hide`)[0].classList

                // Modify classlist.
                data.contains(`show`) ? data.remove(`show`) : data.add(`show`)
            })
        }

        // For every command label in commands.
        for (let command of commands) {
            // Fetch command by id + string definer and add a click event.
            document.getElementById(`${command}-info`).addEventListener(`click`, _ => {

                // Hide all commands other than the one that was clicked on.
                this.hideCommands(command)
                let [info, hidden] = [
                    // Fetch command by id + string definer.
                    document.getElementById(`${command}-info`).classList,

                    // Fetch command hider by id + string definer.
                    document.getElementById(`${command}-hidden`).classList
                ]

                // Open more data icon modifications.
                info.contains(`turn`) ? info.remove(`turn`) : info.add(`turn`)

                // Toggle more data visibility.
                hidden.contains(`cmd-show`) ? hidden.remove(`cmd-show`) : hidden.add(`cmd-show`)
            })
        }

        /**
         * Format an array of strings.
         * 
         * @name format
         * @param {Array} [perms] An array of strings.
         * @return String with proper letter capitalization and spaces.
         */

        function format(perms) {
            return perms.map(flag => flag.replace(/_/g, ` `).split(` `).map(arg => `${arg.slice(0, 1)}${arg.slice(1).toLowerCase()}`).join(` `)).join(`, `)
        }
    }

    /**
     * Check for URL paths.
     * 
     * @name checkForPath
     * @param {Array} [paths] A custom param array of URL paths.
     * @return Null.
     */

    checkForPath(paths = window.location.pathname.split(`/`).filter(e => e !== ``)) {
        // If the window has a hash, query the hash.
        if (window.location.hash) this.QueryCommands(window.location.hash)

        // Remove the 'commands' path.
        paths.shift()

        // If there is no more path, do not continue.
        if (paths.length < 1) return

        // Otherwise change the path to a hash and query the command.
        else window.location.href = `${window.location.origin}/commands#${paths.join(`/`)}`
    }

    /**
     * Query for command from URL hash.
     * 
     * @name QueryCommands
     * @param {String} [query] Window URL hash.
     * @return Null.
     */

    QueryCommands(query) {
        // Replace all "#", "_", and "-" with empty string, then splity by back-slash and remove the last item.
        query = query.replace(/#|_|-/g, ``).split(`/`).pop()

        // If back to top, return.
        if (query.toLowerCase() === `content`) return

        // Fetch element.
        let cmd = document.getElementById(query)

        // If no element found.
        if (!cmd) {

            // Check for group.

            // Case "ALL", open all command groups.
            if (query.toLowerCase() === `all`) {

                // For every group in groups.
                for (let group of groups) {
                    // Fetch the group element.
                    cmd = document.getElementsByClassName(group)[0]

                    // Toggle child visibility.
                    cmd.getElementsByClassName(`hide`)[0].classList.add(`show`)
                }

            }

            // Otherwise if a group is found.
            else if (groups.filter(g => g === query.toLowerCase())[0]) {
                // Fetch the command group.
                cmd = document.getElementsByClassName(query.toLowerCase())[0]

                // Hide all command groups.
                this.hideGroups()

                // Toggle command group child visibility.
                cmd.getElementsByClassName(`hide`)[0].classList.add(`show`)
                let [offset, position] = [
                    // Offset scroll by 58 pixels.
                    58,
                    // Get header location.
                    cmd.getBoundingClientRect().top
                ]

                // Scroll to header with offset.
                window.scrollTo({ top: position - offset, behavior: `smooth` })

                // Set the window hash to group name for formatting purposes.
                window.location.hash = query


            }

            // Else return a site notification with a 10 second timeout.
            else return Notification({ title: `Not found!`, description: `"${query}" was not a vaild command or group.`, type: `error`, timeout: 10 * 1000 })
        }

        // If found.
        else {

            // Hide all groups.
            this.hideGroups()

            // Hide all commands "more detail" page.
            this.hideCommands()

            // Get the command parent (Group name) and toggle child visibility.
            document.getElementsByClassName(cmd?.getAttribute(`parent`))[0].getElementsByClassName(`hide`)[0].classList.add(`show`)
            let [offset, position] = [
                // Offset scroll by 58 pixels.                
                58,
                // Get command location.
                cmd.getBoundingClientRect().top
            ]

            // Scroll to command with offset.
            window.scrollTo({ top: position - offset, behavior: `smooth` })

            // Set the window hash to command name for formatting purposes.
            window.location.hash = query
        }
    }

    /**
     * Toggle all group visibility to hidden.
     * 
     * @name hideGroups
     * @param {String} [ignore] A group name to ignore.
     * @return Null.
     */

    hideGroups(ignore) {
        // For every group, if the group name is not equal to the ignore param, set toggle visibility to hidden.
        for (let group of groups) if (group !== ignore) document.getElementsByClassName(group.toLowerCase())[0].getElementsByClassName(`hide`)[0].classList?.remove(`show`)
    }

    /**
     * Toggle all command visibility to hidden.
     * 
     * @name hideCommands
     * @param {String} [ignore] A command name to ignore.
     * @return Null.
     */

    hideCommands(ignore) {
        // For every command, if the command name is not equal to the ignore param.
        for (let command of commands) if (command !== ignore) {
            // Set the turn icon to default.
            document.getElementById(`${command}-info`).classList?.remove(`turn`)

            // Hide the command "more detail" section.
            document.getElementById(`${command}-hidden`).classList?.remove(`cmd-show`)
        }
    }
}
