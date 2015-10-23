
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
            .when( '/',         { template:     'Willkommen zur Startseite' } )
            .when( '/about',    { template:     'Über unsere Pizzeria'      } )
            .when( '/contact',  { templateUrl:  'res/html/contact.html'     } )
            .when( '/imprint',  { template:     'Impressums-Angaben'        } )
            .otherwise(         { redirectTo:   '/'                         } );
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
        *   Specifies all articles in the given scope.
        *****************************************************************************/
        public static specifyArticlesControllerArticles( scope:any )
        {
            scope.articles = [
                {   id: 7,  name: "Pizza Vegetaria", price: 5    },
                {   id: 13, name: "Pizza Salami",    price: 5.5  },
                {   id: 19, name: "Pizza Thunfisch", price: 6    }
            ];
        }
    }
