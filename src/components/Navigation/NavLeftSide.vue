<template>
  <div class="nav-ls">
    <div>
      <ButtonDivLink v-if="isUser" :ButtonNameAndLink="buttonProfile" :lighter="false"/>
      <ButtonDivLink v-if="isUser" :ButtonNameAndLink="buttonWorkers" :lighter="false"/>
      <ButtonDivLink v-if="isUser" :ButtonNameAndLink="buttonChat" :lighter="false"/>
      <ButtonDivLink v-if="isUser"
                     :ButtonNameAndLink="{name: 'Memory', link: '/user/memory/  '+$store.getters.getMainMemory.id}"
                     :lighter="false"/>
      <ButtonDivLink :ButtonNameAndLink="{name: 'News', link: '/news/'}" :lighter="false"/>
      <ButtonDivLink v-if="isUser"
                     :ButtonNameAndLink="{name: 'Calendar', link: '/user/calendar/  '+new Date().getFullYear()}"
                     :lighter="false"/>
      <ButtonDivLink v-if="isUser" :ButtonNameAndLink="{name: 'Tasks', link: '/user/tasks'}" :lighter="false"/>
      <ButtonDivLink v-if="isUser" :ButtonNameAndLink="{name: 'Salary', link: '/user/salary'}" :lighter="false"/>
      <ButtonDivLink v-if="isAdmin" :ButtonNameAndLink="{name: 'Admin news', link: '/admin/news'}" :lighter="false"/>
      <ButtonDivLink v-if="isAdmin"
                     :ButtonNameAndLink="{name: 'Admin tasks', link: '/admin/tasks/  '+new Date().getFullYear()}"
                     :lighter="false"/>
      <ButtonDivLink v-if="isAdmin" :ButtonNameAndLink="{name: 'Admin global storage', link: '/admin/storage'}" :lighter="false"/>
      <ButtonDivLink v-if="isAdmin" :ButtonNameAndLink="{name: 'Admin salary', link: '/admin/salary'}" :lighter="false"/>
      <a href @click.prevent="logOut">
        <ButtonDivLink v-if="isAdmin" :ButtonNameAndLink="{name: 'Exit', link: '/user/storage'}" :lighter="false"/>
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
          link: "/user/profile/info"
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
    methods: {
    }
  }
</script>

<style scoped>
  @import '../../assets/css/nav-left-side.css';
</style>
