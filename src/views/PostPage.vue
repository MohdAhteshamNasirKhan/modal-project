<template>
  <div>
    <Navbar />
    <div class="d-flex flex-column align-items-center mt-5">
      
      <form @submit.prevent enctype="multipart/form-data">
        <div
          class="d-flex flex-column align-items-center form-group background"
        >
          <div class="m-4 border">
            <h3 class="font p-2"><label for="img">Upload post:</label></h3>
            <input
              type="file"
              ref="file"
              id="img"
              name="img"
              accept="audio/*,video/*,image/*"
              class="form-control ml-5"
              @change="onSelect"
            />
          </div>
          <div class="m-4 border form-group">
            <h3 class="font p-2">
              <label for="description">Post description:</label>
            </h3>
            <textarea
              class="form-control"
              v-model="postData.Description"
              rows="2"
              cols="40"
              id="comment"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="button button1 m-4" @click="PostDataHome">Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "./Navbar.vue";

export default {
  name: "PostPage",
  components: {
    Navbar,
  },
  data() {
    return {
      UserContent: {
        // Username: this.$route.params.Username,
        Username: "",
      },
      postData: {
        Name: "",
        Description: "",
        UserId:"",
        // file: "",
        Contents: [
          
        ],
        Likes: 0,
        Comments: [
          {
            CommentData: "",
            Username: "",
          },
        ],
      },
      file: "",
      cnt:{
        ContentData:[],
        ContentDate: "",
        ContentType:""
      }
    };
  },
  methods: {
    onSelect(){
      console.log("heee")
      const file = this.$refs.file.files[0]
      this.file = file
      // console.log(this.postData.file)
      const formdata = new FormData()
      formdata.append("file",this.file)
       axios.post('http://localhost:5000/upload',formdata)
      .then(response => {
        console.log("hvhg",response)
        this.cnt.ContentData.push(response.data.data)
        this.cnt.ContentType="img"
        const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        const date = new Date().getDate() + " " + monthNames[new Date().getMonth()] + " " + new Date().getFullYear() + " " 
        this.cnt.ContentDate = date
        this.postData.Contents.push(this.cnt)
        console.log("hvhg",this.postData)
      })
     
    },
    PostDataHome() {
      // var fs = require('fs')
      // const monthNames = ["January","Feb","March"]
      // const dir = './database/'+ new Date().getFullYear()
      //  console.log(dir)
      // this.postData.Contents.push(ContentData.push(this.ContentData)) 
      //  this.cnt.ContentType="img"
      //  this.cnt.ContentData.push(this.file)
      // this.postData.Contents.push(this.cnt)
      //  this.cnt.ContentData.push(this.$refs.file.files[0]) 
      // this.postData.Contents.push(this.cnt)
      this.postData.Name = this.$store.state.loginDetail.Username
      console.log("Name",this.postData.Name)
      this.postData.UserId = this.$store.state.loginDetail.UserId
      console.log("Name",this.postData.UserId)
      // this.UserContent.Username = this.$store.state.loginDetail.Username
      axios.post('http://localhost:5000/create',this.postData)
      .then(response => {
        console.log(response.data)
        this.$router.push('/home')
      })
    }
  }
};
</script>

<style scoped>
.font {
  font-family: "Pacifico", cursive;
}

.background {
  background-color: rgb(237, 243, 241);
  border-radius: 6%;
}

.button {
  background-color: #4caf50; /* Green */
  background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 10%;
}

.button1 {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.button1:hover {
  box-shadow: 0 0px 0px 0 white;
}
</style>