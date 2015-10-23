
    /************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO HIGH   Outsource all css style attributes.
    *   TODO INIT   Move all JS files to TS.
    *   TODO LOW    Separate functionality to different TS classes.
    *   TODO WEAK   Give TS modules one more try?
    *
    *   DONE        Try .d.ts !
    *   DONE        Apply AngularJS animations.
    *   DONE        Solve all functionality from the AngularJS tutorial.
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

    console.log( "myModule is: [" + MfgNgApp.myModule + "]" );

    MfgNgApp.myModule.controller(
        'ArticlesCtrl',
        function( $scope ) {

            $scope.articles = [
                {   id: 7,  name: "Pizza Vegetaria", price: 5    },
                {   id: 13, name: "Pizza Salami",    price: 5.5  },
                {   id: 19, name: "Pizza Thunfisch", price: 6    }
            ];
        }
    );

    MfgNgApp.myModule.controller(
        'FlyerArticlesCtrl',
        function( $scope, $http ) {

            $http.get( 'res/data/articles.json' ).then(

                function( articlesResponse ) {

                    $scope.flyerArticles = articlesResponse.data;
                }
            );
        }
    );

    MfgNgApp.myModule.factory(
        'Cart',
        function() {

            var items = [];
            return {

                getItems: function() {

                    return items;
                },
                addArticle: function( article ) {

                    items.push( article );
                },
                sum: function() {

                    return items.reduce(
                        function( total, article ) {
                            return total + article.price;
                        },
                        0
                    );
                }
            };
        }
    );

    MfgNgApp.myModule.controller(
        'CartArticlesCtrl',
        function( $scope, $http, Cart ) {

            $scope.cart = Cart;

            $http.get( 'res/data/cartArticles.json' ).then(
                function( articlesResponse ) {
                    $scope.cartArticles = articlesResponse.data;
                }
            );
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
