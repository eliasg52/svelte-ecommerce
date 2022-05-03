<script>
  import { cart } from '../stores/productStore';
  import { link } from 'svelte-spa-router';
</script>

{#if $cart.length > 0}
  <div class="text-center">
    <h3>Cart: {$cart.length} Products</h3>
    <a use:link href="/cart">Go to Cart</a>
  </div>
{:else}
  <p class="text-center">No hay productos en el carrito</p>
{/if}
