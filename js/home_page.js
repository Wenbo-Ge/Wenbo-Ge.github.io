
// anchor

$( ".anchor_link" ).click(function( event ) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
});


$(function() {
  var message = {
    message: [
      'I can develop website with WordPress;',
      'I am familiar with HTML5/CSS3/JS/PHP/SQL;',
      'I can perform data mining and data analysis;',
      'I am familiar with R and SQL language;'
    ],
    counterS: 0,
    counterL: 0,
    deleteS: false,

    init: function() {
      this.cacheElem();
      this.type();
    },

    cacheElem: function() {
      this.$text = $('.text_content');
    },

    type: function() {
      var message 	= this.message[this.counterS],
          that 	    = this,
          speed 	  = 0;

      message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
      if(this.message[this.counterS] != message && !this.deleteS) {
        this.$text.text(message);
        speed = 90;
      }
      else {
        this.deleteS = true;
        speed = this.message[this.counterS] == message ? 1000 : 40;
        this.$text.text(message);
        if (message == '') {
          this.deleteS = false;
          this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
        }
      }
      setTimeout(function(){that.type()}, speed);
    }
  };
  message.init();
});

// form js
$("#contact input, #contact textarea").on('focusout', function(){

  var text_val = $(this).val();
  if (text_val === "") {
    $(this).removeClass('has-value');
  } else {
    $(this).addClass('has-value');
  }

});