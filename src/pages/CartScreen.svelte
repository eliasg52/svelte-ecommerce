<script lang="ts">
  import { cart, products } from '../stores/productStore';
  import { user } from '../stores/authStore';
  import { link, replace } from 'svelte-spa-router';

  let price: number = 0;

  $cart.map((product) => (price += product.precio));

  const handlePaid = () => {
    replace('/paid');
  };
</script>

{#if $user}
  <div class="mx-5 row">
    <div class="col-12 col-md-8">
      <h4>SubTotal: ${(price - price * 0.16).toFixed(2)}</h4>
      <h4>Envio: ${(price * 0.1).toFixed(2)}</h4>
      <hr />
      <h4>Total: {(price * 1.1).toFixed(2)}</h4>
      <button class="btn btn-success" on:click={handlePaid}
        >Realizar pago</button
      >
    </div>
  </div>
{:else}
  <div class="text-center my-5 container">
    <h2>Login required</h2>
    <div class="row mt-5">
      <div class="col-12 col-md-6">
        <a href="/login" class="btn btn-primary w-50" use:link>Login</a>
      </div>
      <div class="col-12 col-md-6">
        <a href="/login" class="btn btn-warning w-50" use:link>Register</a>
      </div>
    </div>
  </div>
{/if}
