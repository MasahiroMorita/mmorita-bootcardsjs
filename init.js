(function () {
  Meteor.startup(function () {
    Template.body.rendered = function () {
    /*
     * Initialize Bootcards.
     * 
     * Parameters:
     * - offCanvasBackdrop (boolean): show a backdrop when the offcanvas is shown
     * - offCanvasHideOnMainClick (boolean): hide the offcanvas menu on clicking outside the off canvas
     * - enableTabletPortraitMode (boolean): enable single pane mode for tablets in portraitmode
     * - disableRubberBanding (boolean): disable the iOS rubber banding effect
     * - disableBreakoutSelector (boolean) : for iOS apps that are added to the home screen:
                          jQuery selector to target links for which a fix should be added to not
                          allow those links to break out of fullscreen mode.
     */

      bootcards.init( {
        offCanvasBackdrop : true,
        offCanvasHideOnMainClick : true,
        enableTabletPortraitMode : true,
        disableRubberBanding : true 
      });
  
      //activate the sub-menu options in the offcanvas menu
      $('.collapse').collapse();
    };
  });
});
