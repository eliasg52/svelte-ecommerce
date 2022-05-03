<script lang="ts">
  import { link, replace } from 'svelte-spa-router';
  import GoogleAuthButton from '../components/GoogleAuthButton.svelte';
  import { googleAuth } from '../firebase/config';
  import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
  import { onMount } from 'svelte';
  import { user } from '../stores/authStore';

  let email: string = '';
  let password: string = '';

  onMount(() => {
    getAuth().onAuthStateChanged((userLog) => {
      if (userLog) {
        replace('/');
      } else {
        user.set(null);
      }
      console.log(userLog);
    });
  });

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorMessage);
      });
  };

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
</script>

<div class="container text-center">
  <form on:submit|preventDefault={handleLogin} class="mt-3">
    <h1>Login</h1>
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
          bind:value={password}
          type="password"
          class="form-control"
          placeholder="Insert a secure password"
        /></label
      >
    </div>

    <button type="submit" class="btn btn-primary w-25">Log In</button>
    <GoogleAuthButton handleLogin={handleGoogleLogin} />

    <div class="mt-3">
      <a class="text-dark fs-5" use:link href="/register">Create a acount</a>
    </div>
  </form>
</div>
