import HomeScreen from '../pages/HomeScreen.svelte';
import Error from '../pages/Error.svelte';
import Login from '../pages/Login.svelte';
import Register from '../pages/Register.svelte';
import Products from '../pages/Products.svelte';
import CartScreenSvelte from '../pages/CartScreen.svelte';
import PaidScreenSvelteSvelte from '../pages/PaidScreenSvelte.svelte';

export const routes = {
  '/': HomeScreen,
  '/login': Login,
  '/register': Register,
  '/products': Products,
  '/cart': CartScreenSvelte,
  '/paid': PaidScreenSvelteSvelte,
  '*': Error,
};
