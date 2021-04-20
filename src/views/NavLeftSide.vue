<template>
  <div class="nav-ls">
    <div>
      <ButtonDivLink :ButtonNameAndLink="buttonProfile" :lighter="false"/>
      <div style="position: relative"
        @mouseover="dropdown = true"
        @mouseleave="dropdown = false">
        <ButtonDivLink :ButtonNameAndLink="buttonHRI" :lighter="false"/>
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
      <ButtonDivLink :ButtonNameAndLink="buttonWorkers" :lighter="false"/>
      <ButtonDivLink :ButtonNameAndLink="buttonChat" :lighter="false"/>
      <ButtonDivLink :ButtonNameAndLink="buttonLessons" :lighter="false"/>
      <ButtonDivLink :ButtonNameAndLink="{name: 'Calendar', link: '/user/calendar/  '+new Date().getFullYear()}" :lighter="false"/>
    </div>
  </div>
</template>

<script>
  import ButtonDivLink from "../components/Buttons/ButtonRouterLink";
  import ButtonDivLinkDropdown from "../components/Buttons/ButtonDivLinkDropdown";

  export default {
    name: "NavLeftSide",
    data() {
      return {
        buttonProfile: {
          name: "Profile",
          link: "/user/profile"
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
