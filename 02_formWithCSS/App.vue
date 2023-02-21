<template>
  <div class="login-body">
    <form>
      <h1>Login Form</h1>
      <hr />
      <div class="login-container">
        <div class="login-field">
          <label>user name</label>
          <input placeholder="user name" />
        </div>
        <div class="login-field">
          <label>e-mail</label>
          <input placeholder="e-mail" />
        </div>
        <div class="login-field">
          <label>password</label>
          <input placeholder="password" />
        </div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  
};
</script>
<style>
body {
  background: rgb(252, 252, 252);
  background: linear-gradient(
    90deg,
    rgba(252, 252, 252, 1) 0%,
    rgba(17, 145, 255, 1) 100%,
    rgba(28, 157, 215, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  overflow-y: hidden;
}
.login-body {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  text-align: center;
}
.login-body form {
  background-color: rgb(253, 248, 248);
  width: 70%;
  max-width: 450px;
  padding: 30px;
  border-radius: 10px;
  border: solid 1px #dfdfdf;
  box-shadow: 4px 2px 21px 2px #777777;
  border-radius: 8px;
}
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
}
.login-field {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.login-field input {
  border: solid 1px grey;
  padding: 20px;
  border-radius: 4px;
}
.login-field input:focus {
  outline: none;
}
.login-field label {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
}
button {
  background-color: rgb(97, 97, 236);
  color: white;
  border: none;
  width: 100%;
  margin-top: 10px;
  padding: 10px 30px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s;
}
button:hover {
  background-color: rgb(122, 122, 235);
}
</style>
