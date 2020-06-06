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

  setupContactForm() {
    $('#contact_form').on('submit', (e) => {
      if (!e.isDefaultPrevented()) {
        var url = "contact_form/contact_form.php";

        $.ajax({
          type: "POST",
          url: url,
          data: $(this).serialize(),
          success: (data) => {
            var messageAlert = 'alert-' + data.type;
            var messageText = data.message;

            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            if (messageAlert && messageText) {
                $('#contact_form').find('.messages').html(alertBox);
                $('#contact_form')[0].reset();
            }
          }
        });
        return false;
      }
    });
  }

}