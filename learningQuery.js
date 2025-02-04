/*
  How to load jQuery library in js file?
   jQuery(document).ready(function(){
   
   })
  Important topic in jQuery.
   1] selecter = selecter is a one type of identification for tag.
       here 5 types of selecter available
       1] normal selecter
          -id(#idname)
          -class(.classname)
          -name(element name)
       2] combinater selecter.
          -descendent selecter
          -child selecter
          -genarel sibling
          -adjusent sibling
       3] psuedoclass selecter
       4] psuedo element selecter
       5] attribute selecter
   2] event =
      syntex :- jQuery("selecter").on("eventname", function(){
      
      })
       jQuery("selecter").eventname(function(){
      
      })
       $("selecter").eventname(function(){
      
      })
   3] method 
       jQuery("slecter").methodname();
       $("selecter").methodname();
*/
jQuery(document).ready(function() {
    $("button").on('click', function() {
        console.log('click event is ganareted');
    });
    jQuery(".important").hover(function() {
        console.log('hover event is ganarated');
    });
    jQuery("#btn-hide").on('dblclick', function() {
        jQuery("#form-1").hide();
    });
    jQuery("#btn-show").on('dblclick', function() {
        jQuery("#form-1").show();
    });
    jQuery("#btn-toggle").on('click', function() {
        jQuery("#form-1").toggle(7000);
    });
    jQuery("#p-3").hover(function() {
        jQuery(this).css('color', 'blue');
    })
    jQuery("#btn-fade").on('dblclick', function() {
        jQuery("#form-1").fadeIn();
    });
    jQuery("#btn-Out").on('dblclick', function() {
        jQuery("#form-1").fadeOut();
    });
    jQuery("#btn-FADETOGLE").on('dblclick', function() {
        jQuery("#form-1").fadeToggle();
    });
})