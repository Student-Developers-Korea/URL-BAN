 let bannedUrl = new Array();

 document.addEventListener('DOMContentLoaded', function() {
    $('#go').addEventListener('click', function() {
        let B = $('#url').attr('data-value');
        if(B) bannedUrl.push(B);
        else alert('The input box is blank.');
    });
});