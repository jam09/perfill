$(document).ready(function() {
    $('i').hide();
})

$(window).load(function() {
    $('i').show();

    var twitterPos = $('#twitter').position();
    var githubPos = $('#github').position();
    var stackPos = $('#stack').position();
    var linkedinPos = $('#linkedin').position();
    var codePos = $('#code').position();
    var plusPos = $('#plus').position();
    var mailPos = $('#mail').position();
    var imgPos = $('.me').position();
    var inspos = $('#instagram').position();
    var dispos = $('#discord').position();
    var youpos = $('#youtube').position();
    $('i').css({
        position: 'absolute',
        zIndex: '1',
        top: imgPos.top + 100,
        left: '47%'
    });

    setTimeout(function() {
        $('#youtube').animate({
            top: youpos.top + 10,
            left: youpos.left - 10
        }, 500);
    }, 250);

    setTimeout(function() {
        $('#youtube').animate({
            top: youpos.top,
            left: youpos.left
        }, 250);

        $('#github').animate({
            top: githubPos.top + 10,
            left: githubPos.left - 6
        }, 500);
    }, 500);

    setTimeout(function() {
        $('#github').animate({
            top: githubPos.top,
            left: githubPos.left
        }, 250);

        $('#discord').animate({
            top: dispos.top + 10,
            left: dispos.left - 3
        }, 500);
    }, 750);

    setTimeout(function() {
        $('#discord').animate({
            top: dispos.top,
            left: dispos.left
        }, 250);

        $('#instagram').animate({
            top: inspos.top + 10,
            left: inspos.left
        }, 500);
    }, 1000);

    setTimeout(function() {
        $('#instagram').animate({
            top: inspos.top,
            left: inspos.left
        }, 250);

        $('#code').animate({
            top: codePos.top + 10,
            left: codePos.left + 3
        }, 500);
    }, 1250);

    setTimeout(function() {
        $('#code').animate({
            top: codePos.top,
            left: codePos.left
        }, 250);

        $('#plus').animate({
            top: plusPos.top + 10,
            left: plusPos.left + 6
        }, 500);
    }, 1500);

    setTimeout(function() {
        $('#plus').animate({
            top: plusPos.top,
            left: plusPos.left
        }, 250);

        $('#mail').animate({
            top: mailPos.top + 10,
            left: mailPos.left + 10
        }, 500);
    }, 1750);

    setTimeout(function() {
        $('#mail').animate({
            top: mailPos.top,
            left: mailPos.left
        }, 250);
    }, 2000);

})