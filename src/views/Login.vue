<template>
    <div>
        <div class="register">
            <form @submit.prevent="handleLogin" class="reg-field">
                <div class="title"><h1>Login</h1></div>
                <label>
                    <input
                            name="username"
                            placeholder="Username"
                            type="text"
                            v-model="user.username"
                            v-validate="'required'">
                </label>
                <div
                        class="alert alert-danger"
                        role="alert"
                        v-if="errors.has('username')">
                    Username is required!
                </div>
                <label>
                    <input
                            class="form-control"
                            name="password"
                            placeholder="Password"
                            type="password"
                            v-model="user.password"
                            v-validate="'required'">
                </label>
                <div
                        class="alert alert-danger"
                        role="alert"
                        v-if="errors.has('password')"
                >Password is required!
                </div>
                <div class="reg-btn-field content-center">
                    <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                    <button
                            :class="{'button-hover': !buttonHover,
                  'button-leave': buttonHover}"
                            @mouseleave="buttonHover = true"
                            @mouseover="buttonHover = false"
                            class="button button-90per"
                            type="submit">Sign in
                    </button>
                </div>
                <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
            </form>
        </div>
        <!--    <div class="card card-container">-->
        <!--      <img-->
        <!--        id="profile-img"-->
        <!--        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"-->
        <!--        class="profile-img-card"-->
        <!--      />-->
        <!--      <form name="form" @submit.prevent="handleLogin">-->
        <!--        <div class="form-group">-->
        <!--          <label for="username">Username</label>-->
        <!--          <input-->
        <!--            v-model="user.username"-->
        <!--            v-validate="'required'"-->
        <!--            type="text"-->
        <!--            class="form-control"-->
        <!--            name="username"-->
        <!--          />-->
        <!--          <div-->
        <!--            v-if="errors.has('username')"-->
        <!--            class="alert alert-danger"-->
        <!--            role="alert"-->
        <!--          >Username is required!</div>-->
        <!--        </div>-->
        <!--        <div class="form-group">-->
        <!--          <label for="password">Password</label>-->
        <!--          <input-->
        <!--            v-model="user.password"-->
        <!--            v-validate="'required'"-->
        <!--            type="password"-->
        <!--            class="form-control"-->
        <!--            name="password"-->
        <!--          />-->
        <!--          <div-->
        <!--            v-if="errors.has('password')"-->
        <!--            class="alert alert-danger"-->
        <!--            role="alert"-->
        <!--          >Password is required!</div>-->
        <!--        </div>-->
        <!--        <div class="form-group">-->
        <!--          <button class="btn btn-primary btn-block" :disabled="loading">-->
        <!--            <span v-show="loading" class="spinner-border spinner-border-sm"></span>-->
        <!--            <span>Login</span>-->
        <!--          </button>-->
        <!--        </div>-->
        <!--        <div class="form-group">-->
        <!--          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>-->
        <!--        </div>-->
        <!--      </form>-->
        <!--    </div>-->
    </div>
</template>

<script>
    import User from '../models/user';

    export default {
        name: 'Login',
        data() {
            return {
                user: new User('', ''),
                loading: false,
                message: '',
                buttonHover: false,
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/user/profile/info');
            }
        },
        methods: {
            handleLogin() {
                this.loading = true;
                this.$validator.validateAll().then(isValid => {
                    if (!isValid) {
                        this.loading = false;
                        return;
                    }

                    if (this.user.username && this.user.password) {
                        this.$store.dispatch('auth/login', this.user).then(
                            () => {
                                this.$router.push('/user/profile/'+this.$store.state.auth.user.id+'/info');
                            },
                            error => {
                                this.loading = false;
                                this.message =
                                    (error.response && error.response.data) ||
                                    error.message ||
                                    error.toString();
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
