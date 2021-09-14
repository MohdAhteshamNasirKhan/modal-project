<template>
  <div>
    <div>{{Username}}</div>
    <div class="d-flex flex-column align-items-center set_backgraound">
      <div
        class="post mt-2"
        v-for="user in users"
        :key="user._id"
        style="background-color: white; z-index: 20"
      >
        <!-- profile name and image -->
        <div class="post_top d-flex justify-content-start border">
          <div class="p-2">
            <img
              class="profilePic rounded-circle"
              style="width: 50px"
              src="data:image/jpeg;base64,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"
              :alt="user.name"
            />
          </div>
          <div class="pt-3">
            <h4 class="profileText">{{ user.name }}ram</h4>
          </div>
        </div>

        <!-- post heading -->
        <div class="d-flex justify-content-between border border-top-0 px-2">
          <div id="postDescription" title="I am post description">
            {{ user.description }}
          </div>
          <div
            class="text-black-50"
            v-for="content in user.contents"
            :key="content._id"
          >
            {{ content.contentdate }}
          </div>
        </div>

        <!-- post -->
        <div
          class="post__image border border-top-0"
          v-for="content in user.contents"
          :key="content._id"
        >
          <img
            class="postContent"
            :src="content.contentdata"
            :alt="user.description"
          />
        </div>

        <!-- likes, share, comments -->
        <div
          class="
            post_description
            d-flex
            justify-content-start
            border border-bottom-0
          "
        >
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
            border border-top-0
          "
        >
          <div>
            <h6>Likes: {{ user.likes }}</h6>
          </div>
          <div>
            <h6>Comments</h6>
          </div>
        </div>
        <form class="form-inline" @submit.prevent>
          <div class="input-group mb-3" v-for="comment in user.comments" :key="comment._id">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your comments..."
              v-model="comment.commentdata"
            />
            <div class="input-group-append">
              <button
                class="btn button1 button border"
                type="submit"
                @click="CommentPost(user._id,comment.commentdata)"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLike: false,
      likes: 0,
      message: "",
      timestamp: "",
      CommentId: "",
      users: [],
       comments:{
        CommentData: "",
        CommentDate: "",
        Username: "",
        CommentId: ""
      } 
    };
  },
   props:{
    Username: String
  },
  created() {
    axios.get("http://localhost:5000/allpost").then((res) => {
      this.users = res.data;
      console.log("all post data",this.users);
    });
  },
  methods: {
    checkLike() {
      this.isLike = !this.isLike;
      this.likes = this.likes++;
    },
    CommentPost(id,commentdatatest) {
      console.log("id",id);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
     
      const date =
        new Date().getDate() +
        " " +
        monthNames[new Date().getMonth()] +
        " " +
        new Date().getFullYear() +
        " ";
      this.comments.CommentId = id;
      this.comments.Username = "govind";
      this.comments.CommentDate = date;
      this.comments.CommentData = commentdatatest
      console.log("user comment data", this.comments)
      axios.post("http://localhost:5000/comment", this.comments).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style scoped>
.set_backgraound {
  background-color: rgb(245, 250, 250);
  z-index: 0;
}

.profileText {
  font-family: "Anton", sans-serif;
}

.post__image img {
  width: 50vw;
  height: auto;
}

#postDescription {
  font-family: "Anton", sans-serif;
}

.post_description .material-icons {
  margin: 0 10px;
  padding-top: 5px;
  font-size: 30px;
  margin-top: 0px;
}

.post_description .other:hover {
  color: #f7cb6d;
}

.post_description .fav {
  color: red;
}

@media (max-width: 768px) {
  .post__image img {
    width: 60vw;
  }
}

.button {
  /* background-color: #4caf50; 
  background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%); */
  border: none;
  color: black;
  padding: 7px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  /* margin: 4px 2px; */
  cursor: pointer;
  /* -webkit-transition-duration: 0.4s;  */
  /* transition-duration: 0.4s; */
  border-radius: 5%;
}

.button1 {
  /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  box-shadow: 0 0px 0px 0 white;
}

.button1:hover {
  /* box-shadow: 0 0px 0px 0 white; */
  /* background-color: #4caf50;  */
  background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
</style>


<!--<template>
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
</template>-->

<!--<script>
import axios from 'axios';
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLike: false,
      likes: 0,
      message: "",
      users: [
        // {
        //   profilePic:
        //     "https://assets.codepen.io/5977385/internal/avatars/users/default.png?format=auto&version=1623049488&width=300&height=300",
        //   name: "Ahtesham Khan",
        //   description: "Back to the home town",
        //   postContent:
        //     "https://media.istockphoto.com/photos/illustration-of-generic-red-car-front-view-picture-id1145720458?k=20&m=1145720458&s=612x612&w=0&h=51ooOfUOao-3k9MJdmqsoEITBgdMQjdEdG35sczCgJs=",
        // },
        // {
        //   profilePic:
        //     "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        //   name: "Zargham Ahmad",
        //   description: "Back to the home town",
        //   postContent:
        //     "https://cdn.theatlantic.com/thumbor/vpPg8fB1KvU13EkNeEOvUlurR3g=/420x0:1500x1080/1080x1080/media/img/mt/2015/05/man/original.jpg",
        // },
      ],
    };
  },
  created(){
    axios.get('http://localhost:5000/allpost')
    .then(res => {
      this.users = res.data
      console.log(this.users)
    })
  },
  methods: {
    checkLike() {
      this.isLike = !this.isLike;
      this.likes = this.likes++;
    },
  },
};
</script>-->

<!--<style scoped>

   /* .profileText {
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
  } */

</style>-->