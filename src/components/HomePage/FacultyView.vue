<template>
  <section>
    <div class="main">
      <div class="container main-container">
        <div class="faculties">
          <h2>Faculty Names</h2>
        </div>
        <div class="row">
          <div class="col-md-4 content">
            <div class="img-thumbnail">
              <router-link to="/SumitDarak" class="profile-link">
                <div class="div-profile-img">
                  <img class="profile-img" src="../../assets/img/darak_profile.jpg" alt="Sumit Darak" />
                </div>
                <div class="caption">
                  <p class="name">Sumit Darak</p>
                  <p class="pos">Assistant Professor (ECE)</p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-md-4 content">
            <div class="img-thumbnail">
              <router-link to="/BNJain" class="profile-link">
                <div class="div-profile-img">
                  <img class="profile-img" src="../../assets/img/jain_profile.jpg" alt="B.N Jain" />
                </div>
                <div>
                  <p class="name">B.N Jain</p>
                  <p class="pos">(Visiting Distinguished Professor)</p>
                </div>
              </router-link>
            </div>
          </div>

          <div class="col-md-4 content">
            <div class="img-thumbnail">
              <router-link to="/RajivRatanShah" class="profile-link">
                <div class="div-profile-img">
                  <img class="profile-img" src="../../assets/img/shah_profile.jpg" alt="Rajiv Ratn Shah" />
                </div>
                <div>
                  <p class="name">Rajiv Ratn Shah</p>
                  <p class="pos">Assistant Professor (CSE, HCD)</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  data() {
    return {

    };
  }
};
</script>

<style  scoped>
.main {
  padding-bottom: 5%;
  margin-bottom: 0.2%; 
  text-align: center;
  box-shadow: 0px 1px 5px 1px #3a454e;
}
.faculties {
  margin-bottom: 2%;
  padding: 3% 0 1% 0;
}
.faculties > h2 {
  font-size: 3rem;
  color: #3f5f7a;
}
.img-thumbnail{
    background-color: #283744;
    padding: 3rem 3rem 2rem 3rem;
    box-shadow: 0px 1px 5px 1px #443d2d;
}
.profile-link {
  color: #658eac;
}
a.profile-link:hover {
  color: #f7c033;
  text-decoration: none;
}

.profile-img{
    box-shadow: 0px 1px 5px 1px #e4aa16;
}
.content {
  text-align: center;
}
.name {
  margin-top: 1.5rem;
  margin-bottom: 0;
}
.pos {
  margin: 0;
}
</style>