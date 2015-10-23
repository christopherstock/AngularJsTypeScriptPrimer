
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
    }
