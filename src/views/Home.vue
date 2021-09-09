<template>
  <div>
    <!-- header starts -->
    <div class="header">
      <div class="header__left">
        <div class="logo">
          <a id="bigLogo" class="no-underline" href="#"> EmployeeShare </a>
          <a id="resLogo" class="no-underline" href="#"> Eshare </a>
        </div>
      </div>

      <div class="header__middle">
        <div class="header__input">
          <span class="material-icons"> search </span>
          <input type="text" placeholder="Search Employees" />
        </div>
      </div>

      <div class="header__right">
        <div class="header__option">
          <span class="material-icons"> home </span>
          <router-link to="/post"><span class="material-icons"> post_add </span></router-link>
          <!-- <span class="material-icons"> post_add </span> -->
          <span class="material-icons"> account_circle </span>
        </div>
      </div>
    </div>
    <!-- header ends -->

    <!-- main body starts -->
    <div class="main__body">
      <!-- sidebar starts -->
      <div class="sidebar">

      </div>
      <!-- sidebar ends -->

      <!-- feed starts -->
      <div class="feed">

        <!-- post starts -->
        <div class="post border" v-for="user in users" :key="user.name">
          <div class="post_top d-flex justify-content-start">
            <div class="p-2">
              <img
                class="profilePic rounded-circle"
                style="width: 50px"
                :src="user.profilePic"
                :alt="user.name"
              />
            </div>
            <div class="pt-3">
              <h4 class="profileText">{{ user.name }}</h4>
            </div>
          </div>

          <div class="post__image border">
            <img
              class="postContent"
              :src="user.postContent"
              :alt="user.description"
            />
          </div>

          <div class="post_description d-flex justify-content-start border">
            <div @click="checkLike">
              <span :class="{ fav: isLike }" class="material-icons">
                favorite
              </span>
            </div>
            <div>
              <span class="material-icons other"> chat_bubble_outline </span>
            </div>
            <div><span class="material-icons other"> share_outline </span></div>
          </div>

          <div
            class="
              post_description_bottom
              d-flex
              flex-column
              align-items-start
              p-2
            "
          >
            <div>
              <h6>Likes: {{ likes++ }}</h6>
            </div>
            <div>
              <h6>Comments</h6>
            </div>
          </div>
          <form class="form-inline" action="/action_page.php">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter your comments..." />
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button">
                  Basic Button
                </button>
              </div>
            </div>
          </form>
        </div>
       
      </div>
      <!-- feed ends -->

      <div style="flex: 0.33" class="widgets">
        <div
          class="fb-page"
          data-href="https://www.facebook.com/facebook"
          data-tabs="timeline"
          data-width="500"
          data-height="1000"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
      </div>
    </div>
    <!-- main body ends -->

    <!-- <div id="fb-root"><h1>Helllo</h1></div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLike: false,
      likes: 0,
      message: "",
      users: [
        {
          profilePic:
            "https://assets.codepen.io/5977385/internal/avatars/users/default.png?format=auto&version=1623049488&width=300&height=300",
          name: "Ahtesham Khan",
          description: "Back to the home town",
          postContent:
            "https://media.istockphoto.com/photos/illustration-of-generic-red-car-front-view-picture-id1145720458?k=20&m=1145720458&s=612x612&w=0&h=51ooOfUOao-3k9MJdmqsoEITBgdMQjdEdG35sczCgJs=",
        },
        {
          profilePic:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Zargham Ahmad",
          description: "Back to the home town",
          postContent:
            "https://cdn.theatlantic.com/thumbor/vpPg8fB1KvU13EkNeEOvUlurR3g=/420x0:1500x1080/1080x1080/media/img/mt/2015/05/man/original.jpg",
        },
      ],
    };
  },
  methods: {
    checkLike() {
      this.isLike = !this.isLike;
      this.likes = this.likes++;
    },
  },
};
</script>

<style scoped src="../style/home.css">
</style>