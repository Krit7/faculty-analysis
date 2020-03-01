<template>
  <section class="main-section">
    <section class="nav-section">
      <nav-bar></nav-bar>
    </section>

    <section class="profile-section">
      <div class="info container">
        <div class="row">
          <div class="col-md-5">
            <div class="link-div">
              <router-link to="/RajivRatanShah" class="profile-link">
                <div class="div-profile-img">
                  <img
                    class="profile-img"
                    src="../../assets/img/shah_profile.jpg"
                    alt="Rajiv Ratn Shah"
                  />
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-md-6 div-name">
            <span class="name">
              Rajiv
              <span class="name-border">Ratn</span> Shah
            </span>
            <div class="div-details">
              <p class="details">
                <strong>Email:</strong>
                {{Email}}
              </p>
              <p class="details">
                <strong>Phone No:</strong>
                {{Phone[0]}}
              </p>
              <p class="details">
                <strong>Website:</strong>
                <a :href="Website[0]" target="blank">Midas@IIITD</a>
              </p>
              <p class="details">
                <strong>Date of Birth:</strong>
                Month: {{DOB_Month}} , Day: {{DOB_Day}}
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
                <strong>Location:</strong>
                {{Location}}, {{Country}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="linkedin">
      <div class="container">
        <div class="media-name">
          <h1>Linkedin</h1>
        </div>
        <div class="div-education">
          <div class="education">
            <h2 class="title-heading">Connections</h2>
            <p>
              <strong>No Of Connections:</strong>
              {{No_Of_Conn}}
            </p>
          </div>
        </div>
        <div class="div-education">
          <div class="education">
            <h2 class="title-heading">Education</h2>
          </div>
          <div class="row">
            <div v-for="(i,j) in Education" :key="j" class="col-md-4 iter-div">
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
        <div class="div-experience">
          <div class="experience">
            <h2 class="title-heading">Experience</h2>
          </div>
          <div class="row">
            <div v-for="(i,j) in Experience" :key="j" class="col-md-4 iter-div">
              <div class="content-div col-md-4">
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
        <div class="div-skills">
          <div class="experience">
            <h2 class="title-heading">Skills</h2>
          </div>
          <p>{{Skills}}</p>
        </div>
      </div>
    </section>

    <section class="scholar">
      <div class="container">
        <div class="media-name">
          <h1>Google Scholar</h1>
        </div>
        <div class="title">
          <h2>Published Papers</h2>
        </div>
        <div class="row">
          <div v-for="(i,j) in Scholar_data" :key="j" class="col-md-4 iter-div">
            <div class="content-div">
              <p>
                <strong>Paper Title:</strong>
                {{i['Title']}}
              </p>
              <p>
                <strong>URL:</strong>
                <a :href="i['title']">Link To Paper</a>
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
    </section>
    
    <section class="twitter">
      <div class="container">
        <div class="media-name">
          <h1>Twitter</h1>
        </div>
        <div class="content">
            <p><strong>No. of Followers: </strong>{{Twitter_Followers}}</p>
            <p><strong>No. of Tweets: </strong>{{Tweet_Count}}</p>
            <p><strong>Top Retweeters</strong></p>
            <ul>
                <li><strong>Account Name:</strong> divyanshuaggarw, <strong>Times:</strong> 1</li>
                <li><strong>Account Name:</strong> tweetstulip, <strong>Times:</strong> 1</li>
            </ul>
        </div>
      </div>
    </section>

    <section class="facebook">
      <div class="container">
        <div class="media-name">
          <h1>Facebook</h1>
        </div>
        <div class="title">
          <h2>TimeLine</h2>
        </div>
        <div class="row">
          <div v-for="(i,j) in Facebook_data" :key="j" class="col-md-4 iter-div">
            <div class="content-div">
              <p>
                <strong>Post Type:</strong>
                {{i['TYPE']}}
              </p>
              <p>
                <strong>URL:</strong>
                <a :href="i['LINKS(Shared Posts/Shared Links etc)']">Link To Post</a>
              </p>
              <p>
                <strong>Time:</strong>
                {{i['TIME']}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>




  </section>
</template>

<script>
import NavBar from "../HomePage/NavBar.vue";
import Shah_data from "../../assets/data/shah_data.json";

const facebook = Shah_data["facebook"];
const linkedin = Shah_data["linkedin"];
const scholar = Shah_data["scholar"];
const twitter = Shah_data["twitter"];

function getskills() {
  var skills = "";
  var skill_array = linkedin["skills"];
  skill_array.forEach(element => {
    skills = skills + element + ", ";
  });
  return skills;
}
const conn_len = Object.keys(linkedin["coonections"]).length;

const followers=twitter['followers'].length
const tweets=twitter['tweets'].length
const Skills = getskills();

export default {
  data() {
    return {
      Email: linkedin["contact"]["email_address"],
      Phone: linkedin["contact"]["phone_numbers"],
      Website: linkedin["contact"]["websites"],
      DOB_Month: linkedin["contact"]["birthdate"]["month"],
      DOB_Day: linkedin["contact"]["birthdate"]["day"],
      Job_Post: linkedin["headline"],
      Location: linkedin["geo"],
      Country: "India",
      WorkPlace: "Indraprastha Institute Of Information technology, Delhi",
      No_Of_Conn: conn_len,
      Skills: Skills,
      Education: linkedin["education"],
      Experience: linkedin["experience"],
      Scholar_data: scholar,
      Twitter_Followers:followers,
      Ret_Freq:twitter['retweeters_freq'],
      Tweet_Count:tweets,
      Facebook_data:facebook
    };
  },
  methods: {},
  components: {
    NavBar: NavBar
  }
};
</script>

<style scoped>
.info {
  margin-top: 5%;
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
  color: #303133;
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
  margin: 60px 0;
  text-align: left !important;
}
.details {
  margin: 5px 0;
  line-height: 1.75;
  color: #777777;
}
.iter-div {
  box-shadow: 0px 1px 5px 1px #3a454e;
  border-radius: 10px;
}
</style>