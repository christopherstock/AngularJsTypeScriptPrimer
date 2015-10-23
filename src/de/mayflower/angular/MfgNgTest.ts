
    /************************************************************************************
    *   Just a TS test class.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *****************************************************************************/
    class MfgNgTest
    {
        /*****************************************************************************
        *   Just a test function.
        *****************************************************************************/
        public static routeFunction( routeProvider ):void
        {
            routeProvider
            .when( '/',         { template:     'Willkommen zur Startseite' } )
            .when( '/about',    { template:     'Über unsere Pizzeria'      } )
            .when( '/contact',  { templateUrl:  'res/html/contact.html'     } )
            .when( '/imprint',  { template:     'Impressums-Angaben'        } )
            .otherwise(         { redirectTo:   '/'                         } );
        }
    }
