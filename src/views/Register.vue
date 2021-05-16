<template>
    <div>
        <div class="register">
            <form @submit.prevent="handleRegister" class="reg-field">
                <div class="title">
                    <h1>Register</h1>
                </div>
                <label>
                    <input
                            name="username"
                            placeholder="Username"
                            type="text"
                            v-model="user.username"
                            v-validate="'required|min:3|max:20'">
                </label>
                <div
                        class="alert-danger"
                        v-if="submitted && errors.has('username')"
                >{{errors.first('username')}}
                </div>
                <label>
                    <input
                            name="email"
                            placeholder="Email"
                            type="email"
                            v-model="user.email"
                            v-validate="'required|min:3|max:50'">
                </label>
                <div
                        class="alert-danger"
                        v-if="submitted && errors.has('email')"
                >{{errors.first('email')}}
                </div>
                <label>
                    <input
                            class="form-control"
                            name="password"
                            placeholder="Password"
                            type="password"
                            v-model="user.password"
                            v-validate="'required|min:6|max:40'">
                </label>
                <div
                        class="alert-danger"
                        v-if="submitted && errors.has('password')"
                >{{errors.first('password')}}
                </div>
                <div class="reg-btn-field content-center">
                    <button
                            :class="{'button-hover': !buttonHover,
                  'button-leave': buttonHover}"
                            @mouseleave="buttonHover = true"
                            @mouseover="buttonHover = false"
                            class="button button-90per"
                            type="submit">Sign up
                    </button>
                </div>
                <div
                        :class="successful ? 'alert-success' : 'alert-danger'"
                        class="alert"
                        v-if="message"
                >{{message}}
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
                message: '',
                buttonHover: false,
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
