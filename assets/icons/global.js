const $ = query => document.querySelector(query)
const $$ = query => document.querySelectorAll(query)
const { style } = document.documentElement
let mode = window.matchMedia("(prefers-color-scheme: dark)").matches
let cache = {}

const ext = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.818 194.818"><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04C194.818,6.19,190.789,2.161,185.818,2.161z"/></g></svg>'
$$("[external]").forEach(elem => elem.insertAdjacentHTML("beforeend", ext));

window.onscroll = _ => {
    $('[top]').style.opacity = window.scrollY < 10 || window.innerWidth < 1100 ? 0 : 1
    $('[top]').style.pointerEvents = window.scrollY < 10 || window.innerWidth < 1100 ? 'none' : 'auto'
}

window.onload = _ => {
    $('[top]').onclick = _ => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.innerWidth > 1100 ? new Notification('Hello There!<p>&#x1F44B;</p>', `Looking for help? Join the <a href="#">support server${ext}</a>!`, null, true) : void 0
    // setTimeout(_ => {
    //     $('[preloader]').classList.add('hide')
    //     setTimeout(_ => $('[preloader]').remove(), 500)
    // }, 1200)
}

function toggle() {
    style.setProperty('--background', mode ? '#eeeeee' : '#111111')
    style.setProperty('--color', mode ? '#111111' : '#eeeeee')
    style.setProperty('--elements', mode ? '#dddddd' : '#222222')
    style.setProperty('--hover', mode ? '#0000001a' : '#ffffff1a')
    style.setProperty('--shadow', mode ? '#808080' : '#000000')
    mode = !mode
}

const random = (sections = 5, phrase = 5, join = '-') => {
    const list = [...[...Array(26)].map((_, i) => String.fromCharCode(i + 65)), ...[...Array(26)].map((_, i) => String.fromCharCode(i + 65).toLowerCase()), ...[...Array(10).keys()]]
    const pick = _ => list[Math.floor(Math.random() * list.length)]
    return [...Array(sections)].map(_ => [...Array(phrase)].map(pick).join('')).join(join);
};

const hash = {
    parse: _ => {
        const args = window.location.hash.slice(1).split('&')
        if (!args.length) return
        const obj = {}
        args.map(e => e.split('=')).map(([key, value]) => obj[key] = value)
        const result = {
            mode: mode ? 'light' : 'dark',
            scroll: null,
            ...obj
        }
        cache = result
        return result
    },
    build: _ => {
        const result = []
        for (const key in cache) if (cache[key]) result.push(`${key}=${cache[key]}`)
        // $$('a').forEach(elem => elem.href = `${window.location.href.split('#')[0]}#${result.join('&')}`)
        return `#${result.join('&')}`
    }
}