<script lang="ts">
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import Navbar from './components/Navbar.svelte';
  import { routes } from './router/routes';
  import { user } from './stores/authStore';
  import { getAuth } from 'firebase/auth';
  import Cart from './components/Cart.svelte';

  onMount(() => {
    getAuth().onAuthStateChanged((userLog) => {
      if (userLog) {
        user.set(userLog);
        console.log('seteado');
      } else {
        user.set(null);
      }
      console.log(userLog);
    });
  });
</script>

<div>
  <Navbar />
  <Cart />
  <Router {routes} />
</div>
