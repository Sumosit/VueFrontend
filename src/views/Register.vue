<template>
  <div>
    <div class="register">
      <form class="reg-field" @submit.prevent="handleRegister">
        <div class="title">
          <h1>Register</h1>
        </div>
        <label>
          <input
            placeholder="Username"
            v-model="user.username"
            v-validate="'required|min:3|max:20'"
            type="text"
            name="username">
        </label>
        <div
          v-if="submitted && errors.has('username')"
          class="alert-danger"
        >{{errors.first('username')}}</div>
        <label>
          <input
            placeholder="Email"
            v-model="user.email"
            v-validate="'required|min:3|max:50'"
            type="email"
            name="email">
        </label>
        <div
          v-if="submitted && errors.has('email')"
          class="alert-danger"
        >{{errors.first('email')}}</div>
        <label>
          <input
            placeholder="Password"
            v-model="user.password"
            v-validate="'required|min:6|max:40'"
            type="password"
            class="form-control"
            name="password">
        </label>
        <div
          v-if="submitted && errors.has('password')"
          class="alert-danger"
        >{{errors.first('password')}}</div>
        <div class="reg-btn-field">
          <button class="reg-btn" type="submit">Submit</button>
          <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import User from '../models/user';

  export default {
    name: 'Register',
    data() {
      return {
        user: new User('', '', ''),
        submitted: false,
        successful: false,
        message: ''
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
      handleRegister() {
        this.message = '';
        this.submitted = true;
        this.$validator.validate().then(isValid => {
          if (isValid) {
            this.$store.dispatch('auth/register', this.user).then(
                data => {
                  this.message = data.message;
                  this.successful = true;
                },
                error => {
                  this.message =
                      (error.response && error.response.data) ||
                      error.message ||
                      error.toString();
                  this.successful = false;
                }
            );
          }
        });
      }
    }
  };
</script>

<style scoped>
  @import '../assets/css/register-login.css';
</style>