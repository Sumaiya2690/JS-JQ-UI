
$(document).ready(function(){
	// hide message
	$('#btn1').click(function(){
		$('h2').hide("slow");
	});
		// show message
	$('#btn2').click(function(){
		$('h2').show("fast");
	});
	// toggle
	$('#btn3').click(function(){
		$('h2').toggle(2000);
	});

});
$(document).ready(function(){
	// hide message
	$('#btn4').click(function(){
		$('h3').fadeOut();
	});
		// show message
	$('#btn5').click(function(){
		$('h3').fadeIn();
	});
	// toggle
	$('#btn6').click(function(){
		$('h3').fadeToggle(1000);
	});
	// fade to
		$('#btn7').click(function(){
		$('h3').fadeTo(1000, .5);
	});

});

$(document).ready(function(){
	// show message
	$('.panel').click(function(){
		$('.flip').slideToggle();
	});
	

});

$(document).ready(function(){
	// draggable
	$( "#draggable" ).draggable();
});

$(document).ready(function(){
	// accordian
	$( "#accordion" ).accordion({
      collapsible: true
    });
});
$(document).ready(function(){
	// autocomplete
	var test= [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#data" ).autocomplete({
      source: test
    });
});
$(document).ready(function(){
	// datepicker
	$( "#datepicker" ).datepicker();
});

$(document).ready(function(){
	// dialog
	$( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
});
$(document).ready(function(){
	// menu
	$( "#menu" ).menu();
});
$(document).ready(function(){
	// progressbar
	$( "#progressbar" ).progressbar({
      value: 75
    });
});
$(document).ready(function(){
	// selectmenu
	$( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
});

$(document).ready(function(){
	// tabs
	$( "#tabs" ).tabs();
});

$(document).ready(function(){
	// tooltip
	var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    $( "<button>" )
      .text( "Show help" )
      .button()
      .on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
});
$(document).ready(function(){
	// checkboxradio
    $( "input" ).checkboxradio();
    $( "fieldset" ).controlgroup();
});
$(document).ready(function(){
	// droppable
	$( "#drag" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
});

$(document).ready(function(){
	// resizable
$( "#resizable" ).resizable({
      animate: true
    });
});

$(document).ready(function(){
	// selectable
  $( "#selectable" ).selectable();
});

$(document).ready(function(){
	// sortable
  $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
 
    $( ".portlet-toggle" ).on( "click", function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
});

$(document).ready(function(){
	// slider
function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
});

$(document).ready(function(){
	// color animation
var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
});
$(document).ready(function(){
	// hide
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effectt" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effectt" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#buttonn" ).on( "click", function() {
      runEffect();
    });
});
$(document).ready(function(){
	// spinner
    $( "#spinner" ).spinner({
      spin: function( event, ui ) {
        if ( ui.value > 10 ) {
          $( this ).spinner( "value", -10 );
          return false;
        } else if ( ui.value < -10 ) {
          $( this ).spinner( "value", 10 );
          return false;
        }
      }
    });
});