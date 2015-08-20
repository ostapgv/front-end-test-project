/* global $ */
$(function() {
    $("a.gallery-img-group").colorbox(
      { 
        opacity: 0.5 , 
        rel: "group1", 
        open: true,
        width: 250
      }
    );
});

$(document).bind("cbox_complete", function(){
  var $element = $.colorbox.element();
  
  if(!$element.hasClass("last")){
      $(this).data({timeout_id: setTimeout($.colorbox.next, 2000)});
  }else{
      setTimeout($.colorbox.close, 2000);
      $(this).unbind("cbox_complete");
  }
});

$(document).bind("cbox_closed", function(){
  $(this).unbind("cbox_complete");
  clearTimeout($(this).data().timeout_id);
});
