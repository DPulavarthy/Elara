// Import react rendering modules.
import { Component } from 'react'
import { Helmet } from 'react-helmet'

/**
 * @name Meta
 * @memberof <React>.Component
 */

export default class Meta extends Component {

    /**
     * Website meta tags.
     * 
     * @name render
     * @return HTML code with Meta-tag data and functionality.
     */

    render() {

        // Content defaults.
        this.defaults = {
            title: 'Elara',
            description: 'A multiple purpose bot with Fun, Information, Moderation commands, And logging features.'
        }

        return (
            <Helmet>
                {/* Website title. */}
                <title> {this?.props?.title ?? this?.defaults?.title} </title>

                {/* Basic Meta Tags. */}
                <meta charset="UTF-8" />
                <meta name="theme-color" content="#790c9e" />
                <meta name="keywords" content="SUPERCHIEFYT#0001, Elara#1162" />
                <meta name="description" content={this?.props?.description ?? this?.defaults?.description} />
                <meta name="subject" content="Elara's website" />
                <meta name="copyright" content="SUPERCHIEFYT" />
                <meta name="language" content="EN" />
                <meta name="robots" content="index,follow" />
                <meta name="revised" content="Monday, May 31th, 2021, 07:55 AM" />
                <meta name="Classification" content="Profile" />
                <meta name="owner" content="SUPERCHIEFYT" />
                <meta name="url" content={window?.location?.origin} />
                <meta name="identifier-URL" content={window?.location?.origin} />
                <meta name="directory" content="submission" />
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="rating" content="General" />
                <meta name="subtitle" content={this?.props?.description ?? this?.defaults?.description} />
                <meta name="target" content="all" />
                <meta name="HandheldFriendly" content="True" />
                <meta name="MobileOptimized" content="320" />
                <meta name="DC.title" content="SUPERCHIEFYT" />
                <meta name="ResourceLoaderDynamicStyles" content="" />
                <meta name="medium" content="website" />
                <meta name="pageKey" content="guest-home" />
                <meta http-equiv="Pragma" content="no-cache" />
                <meta http-equiv="Cache-Control" content="no-cache" />
                <meta http-equiv="imagetoolbar" content="no" />
                <meta http-equiv="x-dns-prefetch-control" content="off" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* OpenGraph Meta Tags. */}
                <meta name="og:title" content={this?.props?.title ?? this?.defaults?.title} />
                <meta name="og:type" content="Bot Website" />
                <meta name="og:url" content={window?.location?.origin} />
                <meta name="og:image" content={global?.Data?.Icon} />
                <meta name="og:site_name" content="SUPERCHIEFYT#0001" />
                <meta name="og:description" content={this?.props?.description ?? this?.defaults?.description} />
                <meta name="application-name" content="Elara's Website" />

                {/* Apple Meta Tags. */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta content="yes" name="apple-touch-fullscreen" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Website icon. */}
                <link rel="icon" href={global?.Data?.Icon} />
            </Helmet>
        )
    }
}
