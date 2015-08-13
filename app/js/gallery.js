$(function() {
    $("a.gallery-img-group").colorbox(
      { 
        opacity: 0.5 , 
        rel: "group1", 
        open: true,
        width: 250
        //loop: false 
      }
    );
});

$(document).bind("cbox_complete", function(){
  var $element = $.colorbox.element();
  
  if(!$element.hasClass("last")){
      setTimeout($.colorbox.next, 2000);
  }else{
      setTimeout($.colorbox.close, 2000);
      $(document).unbind("cbox_complete");
  }
  
});