$( document ).ready( function() { 
    var now = new Date(); 
    var from = new Date(2015, 00, 00, 00); 
    var date = new Date(2015, 00, 28, 10, 30); 
    var diff = ( ( date.getTime() - now.getTime() ) / 1000 ); 
    clock = $( '.itbegins' ).FlipClock( diff, { clockFace: 'DailyCounter', countdown: true } ); 
    var pos = perc( now, from, date );
    var width = $( 'img.carpentry' ).width(); var end = 220; 
    var res = ( pos / 100 ) * width; if( res <= end ) res = end; $( '.we' ).animate( { right: res + 'px' }, 10000 ); } );
function perc( now, start, end ) { n = now.getTime(); s = start.getTime(); e = end.getTime(); if( n >= e ) { return 0; } if( n <= s ) { return 100; } return Math.round( 100 - ( ( e - n ) * 100 / ( e - s ) ) ); }

