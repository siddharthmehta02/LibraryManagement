import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Cart: {
            screens: {
              CartScreen: 'Cart',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'Search',
            },
          },
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          Books: {
            screens: {
              BooksScreen: 'Books',
            },
          },
          User: {
            screens: {
              UserScreen: 'User',
            },
          },
          Login: {
            screens: {
              LoginScreen: 'Login',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
