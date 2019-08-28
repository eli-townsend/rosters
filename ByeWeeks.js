ByeWeeks = {
	init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  
  Cache: {},
  
  cacheDom: function () {
    this.Cache.$byeWeeks = {
      "Week 4" :	"New York Jets, San Francsico 49ers",
      "Week 5" :	"Miami Dolphins, Detroit Lions",
      "Week 6" :	"Buffalo Bills, Chicago Bears, Indianapolis Colts, Oakland Raiders",
      "Week 7" :	"Carolina Panthers, Cleveland Browns, Tampa Bay Buccaneers, Pittsburgh Steelers",
      "Week 8" :	"Dallas Cowboys, Baltimore Ravens",
      "Week 9" :	"Cincinnati Bengals, Atlanta Falcons, Los Angeles Rams, New Orleans Saints",
      "Week 10" :	"Denver Broncos, Jacksonville Jaguars, Houston Texans, New England Patriots, Philadelphia Eagles, Washington Redskins",
      "Week 11" :	"New York Giants, Green Bay Packers, Seattle Seahawks, Tennessee Titans",
      "Week 12" :	"Kansas City Chiefs, Los Angeles Chargers, Arizona Cardinals, Minnesota Vikings"
      };
  },
  
  bindEvents: function() {
    var result = ByeWeeks.filterByes(ByeWeeks.Cache.$byeWeeks, 'ari'); // search "items" for a query value

    $( '#generate-teams' ).on( 'click', function() {
      console.log(result);
    });
  },

  filterByes: function( arr, searchKey ) {
    var matches = [], i, key;
    
    for( i = arr.length; i--; )
        for( key in arr[i] )
            if( arr[i].hasOwnProperty( key ) && arr[i][key].indexOf( searchKey ) > -1 )
                matches.push( arr[i] );  // <-- This can be changed to anything

    return matches;
  }
};

ByeWeeks.init();
