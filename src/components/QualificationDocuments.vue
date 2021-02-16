<template>
  <div class="backgroundColor-padding5">
    <div class="i-form">
      <div class="p-d-nav-field">
        <div
          class="button-inline-block button button-hover"
          :class="{'button-link button-link > a': !buttonHover,
                  'button-link-mouseleave': buttonHover}"
          @mouseover="buttonHover = false"
          @mouseleave="buttonHover = true">
        <router-link
          to="/user/qualification/education">
          Education
        </router-link>
        </div>
        <router-link
          class="button-inline-block button button-hover"
          :class="{'button-link button-link > a': !buttonHover,
                  'button-link-mouseleave': buttonHover}"
          @mouseover="buttonHover = false"
          @mouseleave="buttonHover = true"
          to="/user/qualification/training">
          Training
        </router-link>
      </div>
      <router-view class="p-d-router-view"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QualificationDocuments",
    data() {
      return {
        buttonHover: false
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/profile-grid.css';
  @import '../assets/css/personal-data.css';
</style>
