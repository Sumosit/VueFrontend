<template>
    <div class="nav-ls">
        <div>
            <ButtonDivLink :ButtonNameAndLink="buttonProfile" :lighter="false" v-if="isUser"/>
            <ButtonDivLink :ButtonNameAndLink="buttonWorkers" :lighter="false" v-if="isUser"/>
            <ButtonDivLink :ButtonNameAndLink="buttonChat" :lighter="false" v-if="isUser"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Memory', link: '/user/memory/  '+$store.getters.getMainMemory.id}"
                           :lighter="false"
                           v-if="isUser"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'News', link: '/news/'}" :lighter="false"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Calendar', link: '/user/calendar/  '+new Date().getFullYear()}"
                           :lighter="false"
                           v-if="isUser"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Tasks', link: '/user/tasks'}" :lighter="false" v-if="isUser"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Salary', link: '/user/salary'}" :lighter="false" v-if="isUser"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Admin news', link: '/admin/news'}" :lighter="false"
                           v-if="isAdmin"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Admin tasks', link: '/admin/tasks/  '+new Date().getFullYear()}"
                           :lighter="false"
                           v-if="isAdmin"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Admin global storage', link: '/admin/storage'}" :lighter="false"
                           v-if="isAdmin"/>
            <ButtonDivLink :ButtonNameAndLink="{name: 'Admin salary', link: '/admin/salary'}" :lighter="false"
                           v-if="isAdmin"/>
            <a @click.prevent="logOut" href>
                <ButtonDivLink :ButtonNameAndLink="{name: 'Exit', link: '/user/storage'}" :lighter="false"
                               v-if="isAdmin"/>
            </a>
        </div>
    </div>
</template>

<script>
    import ButtonDivLink from "../Buttons/ButtonRouterLink";
    import ButtonDivLinkDropdown from "../Buttons/ButtonDivLinkDropdown";

    export default {
        name: "NavLeftSide",
        data() {
            return {
                buttonProfile: {
                    name: "Profile",
                    link: '/user/profile/'+this.$store.state.auth.user.id+'/info'
                },
                buttonHRI: {
                    name: "Human Resources Information",
                    link: "/user/hri"
                },
                buttonChat: {
                    name: "Chat",
                    link: "/user/chat"
                },
                buttonWorkers: {
                    name: "Workers",
                    link: "/user/workers"
                },
                buttonAwards: {
                    name: "Awards",
                    link: "/user/awards"
                },
                buttonMedicalInfo: {
                    name: "Medical Information",
                    link: "/user/medical-information"
                },
                buttonPositionsHeld: {
                    name: "Position Held",
                    link: "/user/position-held"
                },
                buttonWorkExperience: {
                    name: "Work Experience",
                    link: "/user/work-experience"
                },
                buttonQualificationDocuments: {
                    name: "Qualification Documents",
                    link: "/user/qualification-documents"
                },
                buttonPersonalData: {
                    name: "Personal Data",
                    link: "/user/personal-data"
                },
                buttonLessons: {
                    name: "Lessons",
                    link: "/user/memories"
                },
                buttonHover: false,
                dropdown: false
            }
        },
        components: {
            ButtonDivLink,
            ButtonDivLinkDropdown
        },
        async mounted() {
            await this.$store.dispatch("fetchMainMemory", this.$store.state.auth.user.id);
        },
        computed: {
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            },
            loggedIn() {
                return this.$store.state.auth.user;
            },
            isUser() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_USER')
                }
            },
            isAdmin() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_ADMIN')
                }
            },
            isModerator() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_MODERATOR')
                }
            },
            currentUser() {
                return this.$store.state.auth.user;
            },
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            }
        },
        methods: {}
    }
</script>

<style scoped>
    @import '../../assets/css/nav-left-side.css';
</style>
