<script lang="ts">
  import { push, link } from 'svelte-spa-router';
  import { user } from '../stores/authStore';
  import { getAuth } from 'firebase/auth';

  const handleLogin = () => {
    push('/login');
  };

  const handleRegister = () => {
    push('/register');
  };

  const handleLogOut = () => {
    getAuth().signOut();
  };
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand" href="#">Navbar</span>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a use:link class="nav-link active" aria-current="page" href="/"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a use:link class="nav-link" href="/products">Products</a>
        </li>
      </ul>
      <div class="d-flex gap-2">
        {#if $user}
          <button class="btn btn-outline-danger" on:click={handleLogOut}
            >Logout</button
          >
        {:else}
          <button class="btn btn-outline-success" on:click={handleLogin}
            >Login</button
          >
          <button class="btn btn-outline-primary" on:click={handleRegister}
            >Register</button
          >
        {/if}
      </div>
    </div>
  </div>
</nav>
