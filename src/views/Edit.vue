<template>
<div class="d-flex flex-column align-items-center">
    <div class="post" v-for="user in users" :key="user.name">
        <div class="post_top d-flex justify-content-start border">
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
        <div class="post_description d-flex justify-content-start">
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
              border
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

<style scoped>

   .profileText {
    font-family: 'Anton', sans-serif;
  } 
  
  .post__image img {
    width: 50vw;
    height: auto;
  }

   .post_description .material-icons {
    margin: 0 10px;
    padding-top: 5px;
    font-size: 30px;
    margin-top: 0px;  
  }

  .post_description .other:hover {
    color: coral;
  }

   .post_description .fav {
      color: red;
  }
  
  @media (max-width: 768px) {
     .post__image img {
         width: 60vw;
     }
  }

</style>