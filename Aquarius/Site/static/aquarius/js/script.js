$('#one').addClass("bg-cyan-400 rounded");

$("#one").click(function() {
//    $("li").children().removeClass("bg-pink-600 rounded");
    $('#one').addClass("bg-cyan-400 rounded");
    console.log($('#main').offset());
    $('html, body').animate({
               scrollTop:        $("#main").offset().top-130
           }, 1000);
    return false;
});

$("#two").click(function() {
//    $("li").children().removeClass("bg-pink-600 rounded");
    $('#two').addClass("bg-cyan-400 rounded");
    console.log($('#about').offset());
    $('html, body').animate({
               scrollTop:        $("#about").offset().top-125
           }, 1000);
    return false;
});

$("#three").click(function() {
//    $("li").children().removeClass("bg-pink-600 rounded");
    $('#three').addClass("bg-cyan-400 rounded");
    console.log($('#achievements').offset());
    $('html, body').animate({
               scrollTop:        $("#achievements").offset().top-125
           }, 1000);
    return false;
});

$("#four").click(function() {
//    $("li").children().removeClass("bg-pink-600 rounded");
    $('#four').addClass("bg-cyan-400 rounded");
    console.log($('#contacts').offset());
    $('html, body').animate({
               scrollTop:        $("#contacts").offset().top-0
           }, 1000);
    return false;
});

$("#clickAbout").click(function() {
//    $("li").children().removeClass("bg-pink-600 rounded");
    $('#two').addClass("bg-cyan-400 rounded");
    console.log($('#about').offset());
    $('html, body').animate({
               scrollTop:        $("#about").offset().top-125
           }, 1000);
    return false;
});

$("#main").waypoint(function() {
    $("li").children().removeClass("bg-cyan-400 rounded");
    $("#one").addClass("bg-cyan-400 rounded");
    }, { offset: 0 });

$("#about").waypoint(function(direction) {
    if (direction === 'down') {
        $("li").children().removeClass("bg-cyan-400 rounded");
        $("#two").addClass("bg-cyan-400 rounded");
        }
    }, { offset: '126' });

$("#about").waypoint(function(direction) {
    if (direction === 'up') {
        $("li").children().removeClass("bg-cyan-400 rounded");
        $("#two").addClass("bg-cyan-400 rounded");
        }
    }, { offset: '125' });

$('#achievements').waypoint(function(direction) {
    if (direction === 'down') {
        $("li").children().removeClass("bg-cyan-400 rounded");
        $("#three").addClass("bg-cyan-400 rounded");
        }
    }, { offset: '126' });

$('#achievements').waypoint(function(direction) {
    if (direction === 'up') {
        $("li").children().removeClass("bg-cyan-400 rounded");
        $("#three").addClass("bg-cyan-400 rounded");
        }
    }, { offset: '125' });

$("#contacts").waypoint(function() {
    $("li").children().removeClass("bg-cyan-400 rounded");
    $("#four").addClass("bg-cyan-400 rounded");
    }, { offset: 'bottom-in-view' });