Validation = {
	init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  
  Cache: {},
  
  cacheDom: function () {
    this.Cache.$addteam = $( '#add-team-button' ); // Add Team Button
    this.Cache.$generateteam = $( '#validate-button' ); // Generate Teams Button
    this.Cache.$teaminfo = $( '.user-container' ); // Team User Container
    this.Cache.$teamquantity = this.Cache.$teaminfo.length;
    this.Cache.$teamselect = $( '.nfl-team__select' ); //Team Select Options
  },
  
  bindEvents: function() {
    this.Cache.$addteam.on( 'click', function() {
      Validation.teamValidation();
    });

    this.Cache.$teamselect.on( 'change', function() {
      Validation.keeperValidation( this );
    });

    $( document ).on( 'click', '.delete-team', function(e) {
      const $thisTarget = $( this ).closest( '.user-container' );
      e.preventDefault();
      $thisTarget.addClass( 'is-selected' );
      Validation.removeTemplate();

      setTimeout( function() {
        Validation.teamValidation();
      }, 700);
    });
  },

  teamValidation: function() {
    if( $( '.user-container' ).length >= 10 ) {
      $( '#add-team-button' ).prop("disabled", true);
    } else {
      $( '#add-team-button' ).removeAttr("disabled");
    }

    if( $( '.user-container' ).length < 6 ) {
      $( '#validate-button' ).prop("disabled", true);
      
      $( '#add-more-teams' ).removeClass( 'invisible' ).addClass( 'show' );
    } else {
      $( '#validate-button' ).removeAttr("disabled");
    }
  },

  keeperValidation: function(e) {
    Validation.Cache.$teamselect.each( function( i, ele ){
      if( ele != e && ele.value == e.value ) {
        setTimeout( function() {
          $( '#multiple-teams' ).removeClass( 'invisible' ).addClass( 'show' );
        }, 10);
      }
    });
  },

  removeTemplate: function() {
    var $thisTarget = $( '.is-selected' );

    $thisTarget.remove();
  },
};

Validation.init();
