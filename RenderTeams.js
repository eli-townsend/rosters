RenderTeams = {
	init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  
  Cache: {},
  
  cacheDom: function() {
    this.Cache.$generateteam = $( '#generate-teams' );
    this.Cache.$leaguecontainter = $( '.league-container' );
    this.Cache.$container = $ ( '.container' );
    this.Cache.$teaminfo = $( '.user-container' );
    this.Cache.$playerselect = $( '#team-quantity__select' );
    this.Cache.$validateteams = $( '#validate-button' );
    this.Cache.$printresults = $( '#print-button' );
    this.Cache.$nflteamselect = $( '.nfl-team__select' ); // Select created from JS
    this.Cache.$teamlist = [ "Arizona","Atlanta", "Baltimore", "Buffalo", "Carolina", "Chicago", "Cincinnati", "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis", "Jacksonville", "Kansas City", "LA Rams", "LA Chargers", "Miami", "Minnesota", "New England", "New Orleans", "NY Jets", "NY Giants", "Oakland", "Philadelphia", "Pittsburgh", "San Francisco", "Seattle", "Tampa Bay", "Tennessee", "Washington" ];
  },
  
  bindEvents: function() {
    this.Cache.$validateteams.on( 'click', function() {
      $( '.user-container' ).each(function(){
        RenderTeams.objectLit( $(this) );
      });
  
    });

    $( document ).on( 'click', '.delete-team', function(e) {
      const $thisTarget = $( this ).closest( '.user-container' );
      e.preventDefault();

      $thisTarget.addClass( 'is-selected' );
    });

    this.Cache.$printresults.on( 'click', RenderTeams.printPage );
  },

  shuffle: function( arra1 ) {
    //Used for shuffling array values which will be distributed to each team
    var ctr = arra1.length, temp, index;
    while ( ctr > 0 ) {
        index = Math.floor( Math.random() * ctr );
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  },

  randomArray: function() {
    var $nflArray = RenderTeams.Cache.$teamlist,
        randomArrayValue = $nflArray[Math.floor(Math.random()*$nflArray.length)];
    
    for( var i = 0; i < $nflArray.length; i++ ){ 
            if ( $nflArray[i] === randomArrayValue ) {
              $nflArray.splice( i, 1 ); 
            }
     }
    
    return randomArrayValue;
  },
  
  objectLit: function( input ) {
    var $teamName = $( input ).find( '.team-name-input' ).val(),
        $nflArray = RenderTeams.Cache.$teamlist,
        $keeperValue = $( input ).find( '.nfl-team__select option:selected' ).val(),
        denim = {};
    
    denim.team = $teamName;
      
    if( $keeperValue !== 'none' ){         
      denim.keeper = true;

      denim.teamOne = $keeperValue;

      for( var i = 0; i < $nflArray.length; i++ ){ 
        if ( $nflArray[i] === $keeperValue ) {
          $nflArray.splice( i, 1 ); 
        }
      }

      $( '.potential-keeper' ).find( '.keeper-text' ).removeClass( '.keeper-text' );
      $( '.potential-keeper' ).find( '.keeper-text' ).addClass( '.keeper-text__show' );

      denim.teamTwo = RenderTeams.randomArray();

      denim.teamThree = RenderTeams.randomArray(); 
    } else {
      denim.keeper = false;

      $( '.keeper-text' ).hide();

      denim.teamOne = RenderTeams.randomArray();

      denim.teamTwo = RenderTeams.randomArray();

      denim.teamThree = RenderTeams.randomArray();
    }
  
    renderTemplate = 
      `<div class="rendered-container">
        <div class="team-tile">
          <label class="team-title">${denim.team}</label>
          <ul>
            <li>Team 1:<div class="potential-keeper">${denim.teamOne} <span class="keeper-text">(Keeper)</span></div></li>
            <li>Team 2: ${denim.teamTwo}</li>
            <li>Team 3: ${denim.teamThree}</li>
          </ul>
        </div>
      </div>`;

      $( '#results-title' ).after(renderTemplate);
  },

  printPage: function() {
    var divToPrint = document.getElementById( "renderedTeams" );
    newWin = window.open( "" );
    newWin.document.write( divToPrint.outerHTML );
    newWin.print();
    newWin.close();
  }
};

RenderTeams.init();