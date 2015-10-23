/************************************************************************************
*   The main class contains the application's points of entry and termination.
*
*   @author     Christopher Stock
*   @version    0.0.1
*****************************************************************************/
var MfgNgApp = (function () {
    function MfgNgApp() {
    }
    /*****************************************************************************
    *   This method is invoked when the application starts.
    *****************************************************************************/
    MfgNgApp.main = function () {
        alert("TypeScript is onboard!");
    };
    return MfgNgApp;
})();
/*****************************************************************************
*   This is the application's point of entry.
*****************************************************************************/
window.onload = function () {
    //invoke main method
    MfgNgApp.main();
};
/*****************************************************************************
*   This is the application's point of termination.
*****************************************************************************/
window.onunload = function () {
};
//# sourceMappingURL=MfgNgApp.js.map