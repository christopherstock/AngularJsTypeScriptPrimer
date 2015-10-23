
    /***********************************************************************************
    *   A joyride with AngularJS.
    *
    *   TODO ASAP   Solve all functionality from the AngularJS tutorial.
    *   TODO HIGH   Apply AngularJS animations.
    *   TODO HIGH   Outsource all css style attributes.
    *   TODO INIT   Move all JS files to TS.
    *   TODO LOW    Separate functionality to different TS classes.
    *   TODO WEAK   Give TS modules one more try?
    *
    *   @type chrisApp
    ***********************************************************************************/
    var myModule = angular.module(
        'chrisApp',
        [
            'ngAnimate',
            'ngRoute'
        ]
    );

    console.log( "myModule is: [" + myModule + "]" );

    myModule.controller(
        'ArticlesCtrl',
        function( $scope ) {

            $scope.articles = [
                {   id: 7,  name: "Pizza Vegetaria", price: 5    },
                {   id: 13, name: "Pizza Salami",    price: 5.5  },
                {   id: 19, name: "Pizza Thunfisch", price: 6    }
            ];
        }
    );

    myModule.controller(
        'FlyerArticlesCtrl',
        function( $scope, $http ) {

            $http.get( 'res/data/articles.json' ).then(

                function( articlesResponse ) {

                    $scope.flyerArticles = articlesResponse.data;
                }
            );
        }
    );

    myModule.factory(
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

    myModule.controller(
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

    myModule.controller(
        'CartCartCtrl',
        function( $scope, Cart ) {

            $scope.cart = Cart;
        }
    );

    myModule.directive(
        'price',
        function() {

            return {
                restrict:   'E',
                scope:      {
                    value:  '='
                },
                template:       '<span ng-show="value == 0">kostenlos</span>'
                            +   '<span ng-show="value > 0">{{value | currency}}</span>'
            }
        }
    );

    myModule.config(
        function( $routeProvider ) {

            $routeProvider
                .when( '/',         { template:     'Willkommen zur Startseite' } )
                .when( '/about',    { template:     'Über unsere Pizzeria'      } )
                .when( '/contact',  { templateUrl:  'res/html/contact.html'     } )
                .when( '/imprint',  { template:     'Impressums-Angaben'        } )
                .otherwise(         { redirectTo:   '/'                         } );
        }
    );
