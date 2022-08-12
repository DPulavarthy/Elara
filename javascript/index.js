$$('[config] code').forEach(command => {
    command.onclick = _ => {
        command.parentNode.classList.add('active')
        navigator.clipboard.writeText(command.innerText);
        new Notification('Copied', `<code>${command.innerText}</code>`, 5000);
        setTimeout(_ => command.parentNode.classList.remove('active'), 1000)
    }
})