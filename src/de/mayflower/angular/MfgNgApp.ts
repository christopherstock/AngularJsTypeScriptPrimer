
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



        }
    }

    /*****************************************************************************
    *   This is the application's point of entry.
    *****************************************************************************/
    window.onload = function()
    {
        //invoke main method
        MfgNgApp.main();
    };

    /*****************************************************************************
    *   This is the application's point of termination.
    *****************************************************************************/
    window.onunload = function()
    {
    };



    /*****************************************************************************
    *   Angular code to move to TS.
    *****************************************************************************/
    MfgNgApp.myModule = angular.module(
        'chrisApp',
        [
            'ngAnimate',
            'ngRoute'
        ]
    );

    MfgNgApp.myModule.controller(
        'ArticlesCtrl',
        function( $scope ) {
            MfgNgTest.specifyArticlesController( $scope );
        }
    );

    MfgNgApp.myModule.controller(
        'FlyerArticlesCtrl',
        function( $scope, $http ) {
            MfgNgTest.specifyFlyerArticlesController( $scope, $http );
        }
    );

    MfgNgApp.myModule.factory(
        'Cart',
        function() {
            return MfgNgTest.specifyCartServiceFactory()
        }
    );

    MfgNgApp.myModule.controller(
        'CartArticlesCtrl',
        function( $scope, $http, Cart ) {
            MfgNgTest.specifyCartArticlesController( $scope, $http, Cart );
        }
    );

    MfgNgApp.myModule.controller(
        'CartCartCtrl',
        function( $scope, Cart ) {
            $scope.cart = Cart;
        }
    );

    MfgNgApp.myModule.directive(
        'price',
        function() {
            return MfgNgTest.directivePriceFunction();
        }
    );

    //specify route provider
    MfgNgApp.myModule.config(
        function( $routeProvider ) {
            MfgNgTest.routeFunction( $routeProvider );
        }
    );
