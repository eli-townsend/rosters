OtherFunctions = {
	init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  
  Cache: {},
  
  cacheDom: function () {
    this.Cache.$startOver = $( '#start-over' );
  },
  
  bindEvents: function() {
    this.Cache.$startOver.on( 'click', function() {
      OtherFunctions.startOverClick();
    });
  },

  startOverClick: function() {
     window.location.reload( false );
  },

};

OtherFunctions.init();
