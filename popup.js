const BanListTag = 'BanList';
if(localStorage.getItem(BanListTag) == null) localStorage.setItem(BanListTag, new Array());

let BanList = localStorage.getItem(BanListTag);

document.addEventListener('DOMContentLoaded', function() {
    $('#go').addEventListener('click', function() {
        let B = $('#url').attr('value');
        if(B) BanList.push(B);
        else alert('The input box is blank.');
        localStorage.setItem(BanListTag, BanList);
    });
});