const $ = query => document.querySelector(query)
const $$ = query => document.querySelectorAll(query)
const { style } = document.documentElement
let mode = !window.matchMedia("(prefers-color-scheme: dark)").matches

const handler = {
    set(data, prop, receiver) {
        Reflect.set(...arguments);
        build()
        console.log(prop, receiver)
        return true
    },
};

let cache = new Proxy({ scroll: null, mode: mode ? 'light' : 'dark', notif: null, load: null }, handler)

const ext = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.818 194.818"><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04C194.818,6.19,190.789,2.161,185.818,2.161z"/></g></svg>'
$$("[external]").forEach(elem => {
    elem.setAttribute('target', '_blank')
    elem.insertAdjacentHTML("beforeend", ext)
});

window.onscroll = _ => {
    $('[top]').style.opacity = window.scrollY < 10 || window.innerWidth < 1100 ? 0 : 1
    $('[top]').style.pointerEvents = window.scrollY < 10 || window.innerWidth < 1100 ? 'none' : 'auto'
}

window.onbeforeunload = _ => window.scrollTo(0, 0);

window.onload = _ => {
    parse()
    if (cache.mode !== (mode ? 'light' : 'dark')) {
        style.setProperty('--background', cache.mode ? '#eeeeee' : '#111111')
        style.setProperty('--color', cache.mode ? '#111111' : '#eeeeee')
        style.setProperty('--elements', cache.mode ? '#dddddd' : '#222222')
        style.setProperty('--hover', cache.mode ? '#0000001a' : '#ffffff1a')
        style.setProperty('--shadow', cache.mode ? '#808080' : '#000000')
        mode = !mode
    }
    const result = []
    if (cache.mode === (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')) delete cache.mode
    for (const key in cache) if (cache[key]) result.push(`${key}=${cache[key]}`)
    $$('[navbar] a').forEach(elem => {
        if (!elem.hasAttribute('external')) elem.href = `${elem.href.split('#')[0]}#${result.join('&')}`
    })
    $('[top]').onclick = _ => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.innerWidth > 1100 && !cache.notif ? new Notification('Hello There!<p>&#x1F44B;</p>', `Looking for help? Join the <a href="https://discord.gg/qafHJ63" external target="_blank">support server${ext}</a>!`, null, true) : void 0
    setTimeout(_ => {
        $('[preloader]').classList.add('hide')
        setTimeout(_ => {
            $('[preloader]').remove()
            if (cache.scroll && $(`[${cache.scroll}]`)) $(`[${cache.scroll}]`).scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }, 1200)
}

function toggle(force) {
    mode = force ? force === 'light' : mode
    style.setProperty('--background', !mode ? '#eeeeee' : '#111111')
    style.setProperty('--color', !mode ? '#111111' : '#eeeeee')
    style.setProperty('--elements', !mode ? '#dddddd' : '#222222')
    style.setProperty('--hover', !mode ? '#0000001a' : '#ffffff1a')
    style.setProperty('--shadow', !mode ? '#808080' : '#000000')
    mode = !mode
    cache.mode = mode ? 'light' : 'dark'
    build()
}

const random = (sections = 5, phrase = 5, join = '-') => {
    const list = [...[...Array(26)].map((_, i) => String.fromCharCode(i + 65)), ...[...Array(26)].map((_, i) => String.fromCharCode(i + 65).toLowerCase()), ...[...Array(10).keys()]]
    const pick = _ => list[Math.floor(Math.random() * list.length)]
    return [...Array(sections)].map(_ => [...Array(phrase)].map(pick).join('')).join(join);
};

function parse(href, flip) {
    const args = href ? href.split('#')[1].split('&') : window.location.hash.slice(1).split('&') || []
    if (!args.length) return
    const obj = []
    args.map(e => e.split('=')).map(([key, value]) => obj[key] = value)
    const result = { ...cache, ...obj }
    cache = href ? cache : result
    return result
}

function build() {
    const result = []
    if (cache.mode === (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light')) delete cache.mode
    for (const key in cache) if (cache[key]) result.push(`${key}=${cache[key]}`)
    $$('[navbar] a').forEach(elem => {
        if (!elem.hasAttribute('external')) elem.href = `${elem.href.split('#')[0]}#${result.join('&')}`
    })
    window.location.hash = result.length ? result.join('&') : ''
}

function scrollFrom(element) {
    if (element.href) {
        $(`[${parse(element.href).scroll}]`).scrollIntoView({ behavior: 'smooth' })
        cache.scroll = parse(element.href).scroll
    }
}