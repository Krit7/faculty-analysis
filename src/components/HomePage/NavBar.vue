<template>
  <div>
    <section class="navpanel">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Faculty Analysis</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <router-link to="/SumitDarak" class="nav-link">Sumit Darak</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/BNJain" class="nav-link">B.N Jain</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/RajivRatanShah" class="nav-link" >Rajiv Ratn Shah</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped="scoped">
.bg-light {
    background-color: #f7c033 !important;
}

.container-fluid {
  padding: 0 !important;
}
.navbar {
  box-shadow: 0 1px 5px 1px #e0dbdb47;
}

.navbar-light .navbar-brand {
  padding-left: 40px;
  font-size: 26px;
  position: relative;
  top: -2px;
}

.nav-item {
  padding: 0 11px 2px;
}

</style>s