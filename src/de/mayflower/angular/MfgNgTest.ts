
    /************************************************************************************
    *   Just a TS test class.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgNgTest
    {
        /*****************************************************************************
        *   Specifies a route provider.
        *****************************************************************************/
        public static routeFunction( routeProvider:angular.route.IRouteProvider ):void
        {
            routeProvider
            .when( '/',         { template:     'Willkommen zur Startseite'     } )
            .when( '/about',    { template:     '&Uuml;ber unsere Pizzeria'     } )
            .when( '/contact',  { templateUrl:  'res/html/contact.html'         } )
            .when( '/imprint',  { template:     'Impressums-Angaben'            } )
            .otherwise(         { redirectTo:   '/'                             } );
        }

        /*****************************************************************************
        *   Specifies the <price> directive.
        *****************************************************************************/
        public static directivePriceFunction()
        {
            return {
                restrict:   'E',
                scope:      {
                    value:  '='
                },
                template:       '<span ng-show="value == 0">kostenlos</span>'
                            +   '<span ng-show="value > 0">{{value | currency}}</span>'
            };
        }

        /*****************************************************************************
        *   Specifies the Articles controller.
        *****************************************************************************/
        public static specifyArticlesController( scope:any )
        {
            scope.articles = [
                {   id: 7,  name: "Pizza Vegetaria", price: 5    },
                {   id: 13, name: "Pizza Salami",    price: 5.5  },
                {   id: 19, name: "Pizza Thunfisch", price: 6    }
            ];
        }

        /*****************************************************************************
        *   Specifies the FlyerArticles controller.
        *****************************************************************************/
        public static specifyFlyerArticlesController( scope:any, http:any )
        {
            http.get( 'res/data/articles.json' ).then(
                function( articlesResponse ) {
                    scope.flyerArticles = articlesResponse.data;
                }
            );
        }

        /*****************************************************************************
        *   Specifies the CartService-Factory.
        *****************************************************************************/
        public static specifyCartServiceFactory()
        {
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

        /*****************************************************************************
        *   Specifies the CartArticles controller.
        *****************************************************************************/
        public static specifyCartArticlesController( scope, http, Cart )
        {
            scope.cart = Cart;

            http.get( 'res/data/cartArticles.json' ).then(
                function( articlesResponse ) {
                    scope.cartArticles = articlesResponse.data;
                }
            );
        }
    }
