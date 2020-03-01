<template>
    <div>
        <nav-bar></nav-bar>
        <main-header></main-header>
        <faculty-view></faculty-view>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import MainHeader from "./Header.vue";
import FacultyView from "./FacultyView.vue";
export default {
  data() {
    return {
      msg: "Welcome to Faculty Analysis App"
    };
  },
  components: {
    NavBar: NavBar,
    MainHeader: MainHeader,
    FacultyView:FacultyView
  }
};
</script>