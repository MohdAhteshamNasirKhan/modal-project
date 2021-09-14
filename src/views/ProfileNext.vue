<template>
  <div>
    <div>{{ $route.params.Username }}</div>
    <Navbar />
    <div class="container mt-4">
      <!-- <div>{{$router.params.Username}}</div> -->
      <div class="row mx-5 my-2 py-3 shadow" id="profileBox">
        <div class="col-sm-5">
          <img
            id="profilePic"
            class="img-fluid rounded-circle"
            width="300"
            height="200"
            :src="person.profilePic"
            :alt="person.name"
          />
        </div>
        <div class="col-sm-7 deatilsParent">
          <div class="mr-auto d-flex flex-cloumn align-items-start">
            <h2>{{ person.name }}</h2>
          </div>
          <div class="d-flex flex-column align-items-start details">
            <div style="margin-left: 10px">
              <kbd>{{ person.mailID }}</kbd>
            </div>
            <div style="margin-left: 10px" class="addPadding">
              {{ person.number }}
            </div>
            <div id="moveRight">{{ person.about }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="d-flex flex-column align-items-center">
            <div id="posts" class="m-3">
              <h2>Posts</h2>
            </div>
            <div
             class="d-flex justify-content-center"
             v-for="items in users"
             :key="items.postID"
            >
                <div class="set" v-for="image in items.images" :key="image">
                  <img id="imageSize" :src="image" alt="" />
                 </div>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";

export default {
  name: "PostPage",
  components: {
    Navbar,
  },
  data() {
    return {
      fav: true,
      check: true,

      UserContent: {
        
        Username: this.$route.params.Username,
        
      },
      // profile: [
      //   {
      //     profilePic:
      //       "https://assets.codepen.io/5977385/internal/avatars/users/default.png?format=auto&version=1623049488&width=300&height=300",
      //     name: "Ahtesham Nasir Khan",
      //     mailID: "ahteshamk@mkcl.org",
      //     number: "8793347257",
      //     about: "Hi, I am Mohd Ahtesham Khan, I work as Project Trainee (Software Development ). I joined MKCL on Aug 02, 2021.",
      //     postContent:
      //       "https://media.istockphoto.com/photos/illustration-of-generic-red-car-front-view-picture-id1145720458?k=20&m=1145720458&s=612x612&w=0&h=51ooOfUOao-3k9MJdmqsoEITBgdMQjdEdG35sczCgJs=",
      //   }
      // ],
      // users: [
      //   {
      //     postID: 1,
      //     images: [
      //       "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop",
      //       "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
      //       "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
      //     ],
      //   },
      //   {
      //     postID: 2,
      //     images: [
      //       "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
      //       "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      //     ],
      //   },
      // ],
      person: {
        ProfilePic: "",
        name: "",
        mailID: "",
        number: "",
        about: "",
        postContent: "",
      },
    };
  },
  mounted() {
    // if (this.check) {
    //       localStorage.setItem('Userda',  this.UserContent.Username)
    //       this.check = false
    // }
    
    this.$store.dispatch('SetUserContent',this.UserContent)
    console.log(this.$store.state.studentData)
    axios
      .post("http://localhost:5000/getUser", this.UserContent)
      .then((res) => {
        this.person = res.data;
        this.person.mailID = res.data.Email
        this.person.name = res.data.FirstName + " " + res.data.LastName
        this.person.ProfilePic = res.data.ProfilePic
        this.person.number = res.data.Mobile
        console.log(this.person);
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

.container {
  font-family: "Inter", sans-serif;
}

#profileBox {
  background-color: rgb(241, 247, 247);
}
.deatilsParent {
  padding-top: 25px;
}

.details {
  margin-top: 20px;
}

.details .addPadding {
  padding: 10px 0px;
}

#moveRight {
  margin-left: -37px;
}

@media (max-width: 765px) {
  #moveRight {
    display: none;
  }
}

@media (max-width: 574px) {
  .details {
    margin-top: 0px !important;
    padding: 0px;
  }
}

#posts {
  width: 100px;
  border-bottom: 2px solid black;
}
/*  below posts */
.set {
  padding: 25px;
}

#imageSize {
  position: relative;
  width: 22vw;
  height: 47vh;
}

@media (max-width: 1000px) {
  .set {
    padding: 15px;
  }
  #imageSize {
    height: 37vh;
  }
  .details {
    margin-top: 10px;
  }

  .details .addPadding {
    padding: 5px 0px;
  }
  #moveRight {
    margin-left: 0px;
  }
  .deatilsParent {
    padding-top: 5px;
  }
}

@media (max-width: 850px) {
  #imageSize {
    height: 30vh;
  }
  .set {
    padding: 10px;
  }
}

@media (max-width: 600px) {
  #imageSize {
    height: 20vh;
  }
  .set {
    padding: 5px;
  }
}
</style>