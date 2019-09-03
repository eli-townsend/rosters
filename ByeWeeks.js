ByeWeeks = {
	init: function() {
    this.cacheDom();
    this.bindEvents();
    this.displayTeamsOnBye();
  },
  
  Cache: {},
  
  cacheDom: function () {
    this.Cache.$byeWeeks = {
      "Week 4" :	[ "New York Jets", "San Francsico 49ers" ],
      "Week 5" :	[ "Miami Dolphins", "Detroit Lions" ],
      "Week 6" :	[ "Buffalo Bills", "Chicago Bears", "Indianapolis Colts", "Oakland Raiders" ],
      "Week 7" :	[ "Carolina Panthers", "Cleveland Browns", "Tampa Bay Buccaneers", "Pittsburgh Steelers" ],
      "Week 8" :	[ "Dallas Cowboys", "Baltimore Ravens" ],
      "Week 9" :	[ "Cincinnati Bengals", "Atlanta Falcons", "Los Angeles Rams", "New Orleans Saints" ],
      "Week 10" :	[ "Denver Broncos", "Jacksonville Jaguars", "Houston Texans", "New England Patriots", "Philadelphia Eagles", "Washington Redskins" ],
      "Week 11" :	[ "New York Giants", "Green Bay Packers", "Seattle Seahawks", "Tennessee Titans" ],
      "Week 12" :	[ "Kansas City Chiefs", "Los Angeles Chargers", "Arizona Cardinals", "Minnesota Vikings" ]
      };
  },
  
  bindEvents: function() {},

  getWeekNumber: function() {
    Date.prototype.getWeek = function() {
      var onejan = new Date( this.getFullYear(), 0, 1) ;
      var today = new Date( this.getFullYear(), this.getMonth(), this.getDate() );
      var dayOfYear = ( ( today - onejan + 1 ) / 86400000 );
      return Math.ceil( dayOfYear / 7 )
    };

    var today = new Date();
    var weekno = today.getWeek();

    return weekno;
  },

  displayTeamsOnBye: function( ) {
    var teams;

    switch ( ByeWeeks.getWeekNumber() ) {
      case 39:
        teams = "New York Jets, San Francsico 49ers";
        break;
      case 40:
        teams = "Miami Dolphins, Detroit Lions";
        break;
      case 41:
        teams = "Buffalo Bills, Chicago Bears, Indianapolis Colts, Oakland Raiders";
        break;
      case 42:
        teams = "Carolina Panthers, Cleveland Browns, Tampa Bay Buccaneers, Pittsburgh Steelers";
        break;
      case 43:
        teams = "Dallas Cowboys, Baltimore Ravens";
        break;
      case 44:
        teams = "Cincinnati Bengals, Atlanta Falcons, Los Angeles Rams, New Orleans Saints";
        break;
      case 45:
        teams = "Denver Broncos, Jacksonville Jaguars, Houston Texans, New England Patriots, Philadelphia Eagles, Washington Redskins";
        break;
      case 46:
        teams = "New York Giants, Green Bay Packers, Seattle Seahawks, Tennessee Titans";
        break;
      case 47:
        teams = "Kansas City Chiefs, Los Angeles Chargers, Arizona Cardinals, Minnesota Vikings";
        break;
      default:
        teams = "No Teams On Bye";
    }

    $( '#byeTeams' ).html( teams );

    return teams;
  },

  // byeWeekValues: function() {
  //   var teamObject = ByeWeeks.$byeWeeks;
  //   var fk = teamObject.keys();

  //   for (x of fk) {
  //     // document.getElementById("demo").innerHTML += x + "<br>";
  //     console.log( x );
  //   }
  // }
};

ByeWeeks.init();
