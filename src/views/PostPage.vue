<template>
  <div>
    <Navbar />
    <div class="d-flex flex-column align-items-center mt-5">
      <form>
        <div class="d-flex flex-column align-items-center form-group background">
          <div class="m-4 border">
            <h3 class="font p-2"><label for="img">Upload post:</label></h3>
            <input
              type="file"
              id="img"
              name="img"
              accept="audio/*,video/*,image/*"
              class="form-control ml-5"
            />
          </div>
          <div class="m-4 border form-group">
            <h3 class="font p-2"><label for="description">Post description:</label></h3>
            <textarea
              class="form-control"
              rows="2"
              cols="40"
              id="comment"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="button button1 m-4">Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "PostPage",
  components: {
    Navbar,
  },
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