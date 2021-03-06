GenerateTeams = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  
  Cache: {},
  
  cacheDom: function() {
    this.Cache.$addteam = $( '#add-team-button' ); // Add Team Button
    this.Cache.$leaguecontainter = $( '.league-container' );
    this.Cache.$container = $ ( '.container' );
    this.Cache.$teaminfo = $( '.user-container' );
    this.Cache.$playerselect = $( '#team-quantity__select' );
    this.Cache.$validateteams = $( '#validate-button' );
    this.Cache.$nflteamselect = $( '.nfl-team__select' ); // Select created from JS
    this.Cache.$teamlist = [ "Arizona","Atlanta", "Baltimore", "Buffalo", "Carolina", "Chicago", "Cincinnati", "Cleveland", "Dallas", "Denver", "Detroit", "Green Bay", "Houston", "Indianapolis", "Jacksonville", "Kansas City", "LA Rams", "LA Chargers", "Miami", "Minnesota", "New England", "New Orleans", "NY Jets", "NY Giants", "Oakland", "Philadelphia", "Pittsburgh", "San Francisco", "Seattle", "Tampa Bay", "Tennessee", "Washington" ];
  },
  
  bindEvents: function() {
    this.Cache.$addteam.on( 'click', function() {
      GenerateTeams.quantityPlayers();
    });

    this.Cache.$nflteamselect.on( 'change', function() {
    });

    this.Cache.$validateteams.on( 'click', function() {
      GenerateTeams.shuffle( GenerateTeams.Cache.$teamlist );
      $( this ).attr( 'disabled', 'true' );
    });
  },
  
  quantityPlayers: function() {
    GenerateTeams.Cache.$leaguecontainter.append( GenerateTeams.containerTemplate() );
  },

  containerTemplate: function() {
    let generatedNumber = GenerateTeams.randomInteger(),
    template = 
    `<div class="user-container">
    <div class="form-group">
      <label for="team-input-${generatedNumber}">Team Name</label>

      <input id="team-input-${generatedNumber}" type="text" class="form-control team-name-input">
    </div>
    
    <label for="team-select-${generatedNumber}">Keeper</label>

    <select id="team-select-${generatedNumber}" class="nfl-team__select custom-select" name="nfl-team-dropdown"><option value="none">None</option><option value="Arizona">Arizona</option><option value="Atlanta">Atlanta</option><option value="Baltimore">Baltimore</option><option value="Buffalo">Buffalo</option><option value="Carolina">Carolina</option><option value="Chicago">Chicago</option><option value="Cincinnati">Cincinnati</option><option value="Cleveland">Cleveland</option><option value="Dallas">Dallas</option><option value="Denver">Denver</option><option value="Detroit">Detroit</option><option value="Green Bay">Green Bay</option><option value="Houston">Houston</option><option value="Indianapolis">Indianapolis</option><option value="Jacksonville">Jacksonville</option><option value="Kansas City">Kansas City</option><option value="LA Rams">LA Rams</option><option value="LA Chargers">LA Chargers</option><option value="Miami">Miami</option><option value="Minnesota">Minnesota</option><option value="New England">New England</option><option value="New Orleans">New Orleans</option><option value="NY Jets">NY Jets</option><option value="NY Giants">NY Giants</option><option value="Oakland">Oakland</option><option value="Philadelphia">Philadelphia</option><option value="Pittsburgh">Pittsburgh</option><option value="San Francisco">San Francisco</option><option value="Seattle">Seattle</option><option value="Tampa Bay">Tampa Bay</option><option value="Tennessee">Tennessee</option><option value="Washington">Washington</option></select>
    <br/>
    <button class="btn btn-link delete-team">Delete Team</button>
  </div>`;

    return template;
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

  randomInteger: function( minimumInteger = 1, maximumInteger = 100 ) {
    let min = Math.ceil( minimumInteger ),
        max = Math.floor( maximumInteger );

    return Math.floor( Math.random() * ( max - min ) ) + min;
  }
};

GenerateTeams.init();
