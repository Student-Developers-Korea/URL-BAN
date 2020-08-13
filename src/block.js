const BanListTag = 'URLBAN-BanList';

localStorage.getItem(BanListTag).forEach(e => {
    if(location.href.includes(e)) window.open('https://student-developers-korea.github.io/URL-BAN/src/blocked/index.html');
})