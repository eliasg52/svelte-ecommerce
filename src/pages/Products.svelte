<script lang="ts">
  import { products } from '../stores/productStore';
  import { db } from '../models/db';
  import { onMount } from 'svelte';
  import Products from '../components/Products.svelte';

  onMount(() => {
    products.set(db);
  });
</script>

<div class="row mt-3">
  <h1>Products</h1>
  {#each $products as product}
    <Products {product} />
  {/each}
</div>
