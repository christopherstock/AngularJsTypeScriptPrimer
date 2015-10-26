
    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO HIGH   Outsource all css style attributes.
    *   TODO LOW    Separate functionality to different TS classes.
    *   TODO WEAK   Give TS modules one more try?
    *
    *   DONE        Moved all JS files to TS.
    *   DONE        Tried .d.ts.
    *   DONE        Applied AngularJS animations.
    *   DONE        Solved all functionality from the AngularJS tutorial.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgNgApp
    {
        public      static          myModule            :any            = null;

        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            MfgNgTest.initModule();
        }
    }

    /*****************************************************************************
    *   This is the application's point of entry.
    *****************************************************************************/
    window.onload = function()
    {
        // do NOT place the init code here!
    };

    /*****************************************************************************
    *   This is the application's point of termination.
    *****************************************************************************/
    window.onunload = function()
    {
    };

    //invoke main method HERE!
    MfgNgApp.main();
