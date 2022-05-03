<script lang="ts">
  import { link, replace } from 'svelte-spa-router';
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
  import { onMount } from 'svelte';

  onMount(() => {
    getAuth().onAuthStateChanged((userLog) => {
      if (userLog) {
        replace('/');
      }
    });
  });

  let email = '';
  let pass = '';
  let pass2 = '';

  const handleRegister = async () => {
    /*     await getAuth().onAuthStateChanged((userLog) => {}); */
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error);
      });
  };
</script>

<div class="container text-center">
  <form on:submit|preventDefault={handleRegister} class="mt-3">
    <h1>Register</h1>
    <hr />
    <div class="mb-3">
      <label class="form-label w-75"
        >Email Adress: <input
          bind:value={email}
          type="email"
          class="form-control"
          placeholder="example@gmail.com"
        /></label
      >
    </div>
    <div class="mb-3">
      <label class="form-label w-75"
        >Password: <input
          bind:value={pass}
          type="password"
          class="form-control"
          placeholder="Insert a secure password"
        /></label
      >
    </div>
    <div class="mb-3">
      <label class="form-label w-75"
        >Confirm Password: <input
          bind:value={pass2}
          type="password"
          class="form-control"
          placeholder="Confirm your password"
        /></label
      >
    </div>
    <button type="submit" class="btn btn-primary w-25">Register</button>

    <div class="mt-3">
      <a class="text-dark fs-5" use:link href="/login">or, Login</a>
    </div>
  </form>
</div>
