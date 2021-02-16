<template>
  <div class="nav-ls">
    <div>
      <div
        class="nav-ls-link"
        :class="{'nav-ls-link nav-ls-link > a': !buttonHover,
                  'nav-ls-link-mouseleave': buttonHover}"
        @mouseover="buttonHover = false"
        @mouseleave="buttonHover = true">
        <router-link to="/user/profile">Private office</router-link>
      </div>
      <div style="position: relative"
        @mouseover="dropdown = true"
        @mouseleave="dropdown = false">
        <ButtonDivLink :NavLeftSideButton="buttonHRI"/>
        <div
          class="nav-hri-dropdown-content"
          v-show="dropdown === true">
          <ButtonDivLinkDropdown :NavLeftSideButton="buttonPersonalData"/>
          <ButtonDivLinkDropdown :NavLeftSideButton="buttonQualificationDocuments"/>
          <ButtonDivLinkDropdown :NavLeftSideButton="buttonWorkExperience"/>
          <ButtonDivLinkDropdown :NavLeftSideButton="buttonPositionsHeld"/>
          <ButtonDivLinkDropdown :NavLeftSideButton="buttonMedicalInfo"/>
          <ButtonDivLinkDropdown :NavLeftSideButton="buttonAwards"/>
        </div>
      </div>
      <ButtonDivLink :NavLeftSideButton="buttonWorkers"/>
      <ButtonDivLink :NavLeftSideButton="buttonChat"/>
      <ButtonDivLink :NavLeftSideButton="buttonLessons"/>
    </div>
  </div>
</template>

<script>
  import ButtonDivLink from "../views/ButtonDivLink";
  import ButtonDivLinkDropdown from "../views/ButtonDivLinkDropdown";

  export default {
    name: "NavLeftSide",
    data() {
      return {
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
          link: "/user/lessons"
        },
        buttonHover: false,
        dropdown: false
      }
    },
    components: {
      ButtonDivLink,
      ButtonDivLinkDropdown
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/nav-left-side.css';
</style>
