import jQuery from 'jquery';
const $ = jQuery;

export default {
  initComponents() {
    this.animateMobileMenuToggle();
    this.setSkillsStyle();
  },
  
  setSkillsStyle() {
    var custom_styles = "";
    $( '.skill-container' ).each( function() {
        var value = $(this).attr('data-value');

        if( value >= 101) {
          value = '100';
        }

        if( typeof value != 'undefined' ) {
          var id = $(this).attr('id'),
          $custom_style = '#' + id + ' .skill-percentage { width: ' + value + '%; } ';
          custom_styles += $custom_style;
        }
    });
    $('head').append('<style data-styles="leven-theme-skills-css" type="text/css">' + custom_styles + '</style>');
  },

  // Mobile menu
  animateMobileMenuToggle() {
    $('.menu-toggle').on("click", function () {
      $('.site-nav').addClass('animate');
      $('.site-nav').toggleClass('mobile-menu-hide');
    });
  },

}