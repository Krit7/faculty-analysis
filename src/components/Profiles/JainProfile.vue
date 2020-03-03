<template>
  <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
  <section class="main-section">
    <!-- ----------------------------------------------------NAVBAR SECTION------------------------------------------------------------------------------------------------------------ -->
    <section class="nav-section">
      <nav-bar></nav-bar>
    </section>
    <!-- ---------------------------------------------------------------MAIN PROFILE SECTION------------------------------------------------------------------------------------------------- -->
    <section class="profile-section">
      <div class="info container">
        <div class="row">
          <div class="col-md-5">
            <div class="link-div">
              <router-link to="/bnjain" class="profile-link">
                <div class="div-profile-img">
                  <img
                    class="profile-img"
                    src="../../assets/img/jain_profile.jpg"
                    alt="BN Jain"
                  />
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-md-6 div-name">
            <span class="name">
              B.<span class="name-border"> N.  Ja</span>in
            </span>
            <div class="div-details">
              <p class="details">
                <strong>Full Name: </strong>
                Bijendra Nath Jain
              </p>
              <p class="details">
                <strong>Website:</strong>
                <a :href="Website[0]" target="blank"> Website</a>
              </p>
              <p class="details">
                <strong>Age:</strong>
                70
              </p>
              <p class="details">
                <strong>Job Position :</strong>
                {{Job_Post}}
              </p>
              <p class="details">
                <strong>WorkPlace:</strong>
                {{WorkPlace}}
              </p>
              <p class="details">
                <strong>Experience In Months:</strong>
                420
              </p>
              <p class="details">
                <strong>Work Friends :</strong>
                <ul>
                    <li>
                        Pankaj Jalote 
                    </li>
                    <li>
                        Dheeraj Singh
                    </li>
                    <li>
                        Rahul Purandare 
                    </li>
                    <li>
                        Pushpendra Singh
                    </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- -----------------------------------------------------------------------MEDIA SECTION----------------------------------------------------------------------------------------- -->
    <section class="media-section">
      <!-- -----------------------------------------------------------------LINKEDIN SECTION----------------------------------------------------------------------------------------------- -->
      <section class="linkedin">
        <div class="container">
          <div class="media-name">
            <h1>Linkedin</h1>
          </div>
          <div class="div-education main-div">
            <div class="education div-title-heading">
              <h2 class="title-heading">Education</h2>
            </div>
            <div class="row">
              <div v-for="(i,j) in Education" :key="j" class="iter-div edu">
                <div class="content-div">
                  <p>
                    <strong>Degree Name:</strong>
                    {{i['degreeName']}}
                  </p>
                  <p>
                    <strong>School Name:</strong>
                    {{i['schoolName']}}
                  </p>
                  <p>
                    <strong>Field Of Study:</strong>
                    {{i['fieldOfStudy']}}
                  </p>
                  <p>
                    <strong>Time Period:</strong>
                    {{i['timePeriod']}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="div-experience main-div">
            <div class="div-title-heading experience">
              <h2 class="title-heading">Experience</h2>
            </div>
            <div class="row">
              <div v-for="(i,j) in Experience" :key="j" class="iter-div exp">
                <div class="content-div">
                  <p>
                    <strong>Company Name:</strong>
                    {{i['companyName']}}
                  </p>
                  <p>
                    <strong>Title:</strong>
                    {{i['title']}}
                  </p>
                  <p>
                    <strong>Location:</strong>
                    {{i['locationName']}}
                  </p>
                  <p>
                    <strong>Time Period:</strong>
                    {{i['timePeriod']}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="div-connection main-div">
            <div class="div-title-heading connection">
              <h2 class="title-heading">Connections</h2>
            </div>
            <div class="row">
              <div class="conn iter-div">
                <p>
                  <strong>No Of Connections:</strong>
                  {{No_Of_Conn}}
                </p>
              </div>
            </div>
          </div>
          <div class="div-skills main-div">
            <div class="div-title-heading skills">
              <h2 class="title-heading">Skills</h2>
            </div>
            <div class="row">
              <div class="conn iter-div">
                <p>{{Skills}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ----------------------------------------------------------------------------------GOOGLE SCHOLAR SECION------------------------------------------------------------------------------ -->
      <section class="scholar">
        <div class="container">
          <div class="media-name">
            <h1>Google Scholar</h1>
          </div>
          <div class="published-paper main-div">
            <div class="div-title-heading">
              <h2 class="title-heading">Published Papers</h2>
            </div>
            <div class="row">
              <div v-for="(i,j) in Scholar_data" :key="j" class="iter-div schol">
                <div class="content-div">
                  <p>
                    <strong>Paper Title:</strong>
                    {{i['Title']}}
                  </p>
                  <p>
                    <strong>URL:</strong>
                    <a :href="i['URL'].slice(26,)" target="blank"> Link To Paper</a>
                  </p>
                  <p>
                    <strong>Published In:</strong>
                    {{i['Year']}}
                  </p>
                  <p>
                    <strong>Citation Count:</strong>
                    {{i['Citations']}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- --------------------------------------------------------------------------TWITTER SECTION-------------------------------------------------------------------------------------- -->
      <section class="twitter">
        <div class="container">
          <div class="media-name">
            <h1>Twitter</h1>
          </div>
          <div class="eng-analysis main-div">
            <div class="div-title-heading">
              <h2 class="title-heading">Engagement Analysis</h2>
            </div>
            <div class="row">
              <div class="conn iter-div">
                <div class="content-div">
                  <p>
                    <strong>No. of Followers:</strong>
                    {{Twitter_Followers}}
                  </p>
                  <p>
                    <strong>No. of Tweets:</strong>
                    {{Tweet_Count}}
                  </p>
                  <div class="embed-responsive embed-responsive-21by9">
                    <iframe class="embed-responsive-item" src="https://inspiring-wozniak-198f5f.netlify.com/" width="640" height="480"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ---------------------------------------------------------------------------------FACEBOOK SECTION------------------------------------------------------------------------------- -->
      <section class="facebook">
        <div class="container">
          <div class="media-name">
            <h1>Facebook</h1>
          </div>
          <div class="timeline main-div">
            <div class="div-title-heading">
              <h2 class="title-heading">Timeline</h2>
            </div>
            <div class="row">
              <div v-for="(i,j) in Facebook_data" :key="j" class="iter-div fb">
                <div class="content-div">
                  <p>
                    <strong>Post Type:</strong>
                    {{i['TYPE']}}
                  </p>
                  <p>
                    <strong>URL:</strong>
                    <a :href="i['LINKS(Shared Posts/Shared Links etc)']" target="blank"> Link To Post</a>
                  </p>
                  <p>
                    <strong>Time:</strong>
                    {{i['TIME']}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <copyright-footer></copyright-footer>
  </section>
</template>



<script>
import NavBar from "../HomePage/NavBar.vue";
import CopyrightFooter from "../HomePage/CopyrightFooter.vue";
import Jain_data from "../../assets/data/jain_data.json";


const facebook = Jain_data["facebook"];
const linkedin = Jain_data["linkedin"];
const scholar = Jain_data["scholar"];
const twitter = Jain_data["twitter"];

function getskills() {
  var skills = "";
  var skill_array = linkedin["skills"];
  skill_array.forEach(element => {
    skills = skills + element + ", ";
  });
  return skills;
}
function filterPost() {
  var Post = [];
  var year = 2019;
  var month = 8;
  facebook.forEach(post => {
    var p_time = post["TIME"];
    console.log(month);
    
    var p_month = parseInt(p_time.slice(3, 5));
    var p_year = parseInt(p_time.slice(6, 10));
    if (p_month > month && p_year == year) {
      Post.push(post);
    }
    if (p_year > year) {
      Post.push(post);
    }
  });
  console.log(Post);
  
  return Post;
}

const conn_len = Object.keys(linkedin["coonections"]).length;
const followers = twitter["followers"].length;
const tweets = twitter["tweets"].length;

const Skills = getskills();
const FilteredPost = filterPost();

export default {
  data() {
    return {
      Website: linkedin["contact"]["websites"],
      Job_Post: linkedin["headline"],
      Location: linkedin["geo"],
      Country: "India",
      WorkPlace: "Indraprastha Institute Of Information technology, Delhi",
      No_Of_Conn: conn_len,
      Skills: Skills,
      Education: linkedin["education"],
      Experience: linkedin["experience"],
      Scholar_data: scholar,
      Twitter_Followers: followers,
      Ret_Freq: twitter["retweeters_freq"],
      Tweet_Count: tweets,
      Facebook_data: FilteredPost
    };
  },
  methods: {},
  components: {
    NavBar: NavBar,
    CopyrightFooter
  }
};
</script>







<style scoped>
.info {
  margin-top: 80px;
}
.info > .row {
  background-color: #3a454e;
  padding: 15px;
  height: auto;
}
.info > .row > .col-md-5 {
  padding: 165px 80px 95px;
}
.info > .row > .col-md-6 {
  padding: 10px 0 10px 70px;
}

.profile-img {
  box-shadow: 0px 1px 5px 1px #e4aa16;
  width: auto;
  height: 400px;
}
.div-name {
  text-align: center;
}
.name {
  font-size: 64px;
  font-weight: 700;
  color: balck;
}
.name-border {
  position: relative;
}
.name-border::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #f7c033;
  bottom: 0;
  left: 20%;
  width: 75%;
  margin-bottom: -15%;
}
.div-details {
  margin: 60px 0 0 0;
  text-align: left !important;
}
.details {
  margin: 8px 0;
  line-height: 1.75;
  color: #658eac;
}

/* --------------------------------------------------------------------------------------------------------------------------------------------- */
.media-name {
  margin-top: 80px;
  background-color: #f7c033;
  padding: 15px 25px;
  box-shadow: 0px 1px 5px 1px #3a454e;
}
.media-name > h1 {
  font-size: 3.5rem;
}
.main-div {
  margin-bottom: 35px;
}
.div-education {
  margin-top: 40px !important;
}
.div-title-heading {
  background-color: #3a454e;
  box-shadow: 0px 1px 5px 1px #f7c033;
}
.title-heading {
  color: #f7c033;
  padding: 20px 35px;
  height: auto;
}
.title {
  background-color: #3a454e;
}

.iter-div {
  box-shadow: 0px 1px 5px 1px #3a454e;
  border: 1px black solid;
  background-color: #658eac;
}
.conn {
  width: 100%;
  margin: 20px 15px 0;
  padding: 25px 35px 17px;
  height: auto;
}
.edu {
  width: 45%;
  margin: 20px 18px;
  height: auto;
}
.schol {
  width: 45%;
  margin: 20px 18px;
  height: auto;
}
.exp {
  width: 45%;
  margin: 20px 18px;
  height: auto;
}
.fb {
  width: 24%;
  margin: 5px;
}

.tweet {
}
.content-div {
  margin: 25px 0px 5px 20px;
}

.content-div > p > a {
  color: #303133;
}

.content-div > p > a:hover {
  color: #f7c033;
  text-decoration: none;
}
</style>