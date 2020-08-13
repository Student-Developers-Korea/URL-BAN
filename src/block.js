const BanListTag = 'URLBAN-BanList';

localStorage.getItem(BanListTag).forEach(e => {
    if(location.href.includes(e)) window.open('')
})