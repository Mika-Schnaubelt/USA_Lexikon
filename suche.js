const input = document.getElementById('wikiSearch');
const list = document.getElementById('searchResults');
const root = document.body.dataset.root || '';
input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    list.innerHTML = '';
    if (!q) return;
    SEITEN
        .filter(s => s.titel.toLowerCase().startsWith(q))
        .slice(0, 6)
        .forEach(s => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = root + s.url;
            a.textContent = s.titel;
            li.append(a);
        list.append(li);
    });
});

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const first = list.querySelector('a');
        if (first) window.location.href = first.href;
    }
});
document.addEventListener('click', e => {
    if (!input.parentElement.contains(e.target)) list.innerHTML = '';
});