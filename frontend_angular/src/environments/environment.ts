// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPoint: {
    booksUrl: 'http://localhost:80/books',
    registerUrl: 'http://localhost:80/api/register',
    loginUrl: 'http://localhost:80/api/login',
    usersUrl: `http://localhost:80/users`,
    sendGridUrl: `http://localhost:80/mail`,
    stripeUrl: `http://localhost:80/customers`,
    stripePublicKey: `pk_test_COpeWdtqWHKjrXwVJa8FzERh00HWGQVHP3`,
    authorUrl: 'http://localhost:80/authors',
    totalPriceUrl: 'http://localhost:80/books/cart',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
