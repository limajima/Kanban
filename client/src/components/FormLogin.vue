<template>
  <div>
    <div class="container-fluid d-flex justify-content-between w-75 mx-auto mt-5 h-35">
      <div class="w-100 p-3 text-center">
        <h3>Work with agile and effectively with Kanban</h3>
        <p>Get work done faster</p>
        <img class="img" src="https://www.integrify.com/site/assets/files/2473/kanban-project-management.png" alt="">
      </div>
      <div class="w-75">
        <div class="shadow rounded">
          <div id="login" class="p-5">
            <div class="mb-3 text-center">
              <h4>Login</h4>
              <p>Not Yet Registered ? Please <a href="#" @click="changePage('register')">register first</a></p>
            </div>
            <form @submit.prevent="handleLogin" class="w-100 mb-3" id="form-login">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="user.email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="user.password">
              </div>
              <button type="submit" class="btn btn-primary w-100" id="submit-login">Login</button>
            </form>
            <button class="btn btn-success w-100">
              <g-signin-button
                  :params="googleSignInParams"
                  @success="onSignInSuccess"
                  @error="onSignInError">
                  Sign in with Google
              </g-signin-button>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FormLogin",
    props: ['changePage', 'user'],
    data() {
      return {
        googleSignInParams: {
        client_id: '173792685-5ulqqkaebkfj79s6an47tb0n9jlqggb4.apps.googleusercontent.com'
      }
      }
    },
    methods: {
      handleLogin(){
        this.$emit('handleLogin', this.user)
      },
      onSignInSuccess (googleUser) {
        const id_token = googleUser.getAuthResponse().id_token
        this.$emit('googleLogin', id_token)
      },

      onSignInError (error) {
        console.log('Oh No', error)
      }
    }
  }
</script>

<style>

</style>