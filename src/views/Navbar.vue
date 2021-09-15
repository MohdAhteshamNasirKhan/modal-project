<template>
  <div>
    <div class="header">
      <div class="header__left">
        <div class="logo">
          <a id="bigLogo" class="no-underline" href="#"> EmployeeShare </a>
          <a id="resLogo" class="no-underline" href="#"> Eshare </a>
        </div>
      </div>

      <div class="header__middle">
        <!-- <div class="header__input">
          <span class="material-icons"> search </span>
          <input type="text" placeholder="Search Employees" />
        </div> -->
      </div>

      <div class="header__right">
        <div class="header__option">
          <span class="material-icons" @click="HomePage"> home </span>
          <span class="material-icons" @click="AddPost"> post_add </span>
          <span class="material-icons" @click="ProfileNext"> account_circle </span>
          <span class="material-icons" @click="Logout"> exit_to_app</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    Logout(){
      // this.$store.state.loginDetail = ""
      this.$router.push('/')
    },
    HomePage(){
      this.$router.push('home')
    },
    AddPost(){
      this.$router.push('post')
    },
    ProfileNext(){
      this.$router.push('profilext')
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

#bigLogo {
  position: relative;
  color: #000000;
  font-size: 30px;
  /* font-family: "billabong", sans-serif; */
  font-family: "Pacifico", cursive;
  text-decoration: none;
}
#resLogo {
  display: none;
}

.header__left img {
  height: 45px;
}

.header {
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  /* background-color: aqua; */
  background-color: #bbf0f3;
  background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
}

.header__left {
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  margin-left: 4vw;
}

.header__input {
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 999px;
}

.header__input input {
  border: none;
  background-color: transparent;
  outline-width: 0;
}

.header__middle {
  display: flex;
  flex: 1;
  justify-content: center;
}

.header__option {
  display: flex;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
}

.header__right {
  display: flex;
  align-items: center;
  margin-right: 3vw;
}

.header__right .header__option .material-icons {
  /* color: gray; */
  margin: 0 10px;
  font-size: 40px;
  margin-top: 0px;
  opacity: 0.5;
}

.header__right .header__option .material-icons:hover {
  color: black;
  opacity: 1;
  cursor: pointer;
}

@media (max-width: 768px) {
  #bigLogo {
    display: none;
  }

  #resLogo {
    display: block;
    position: relative;
    color: #000000;
    font-size: 30px;
    /* font-family: "billabong", sans-serif; */
    font-family: "Pacifico", cursive;
    text-decoration: none;
  }

  .header__left {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-evenly; */
    margin-left: 2vw;
  }

  .sidebar {
    display: none;
  }

  .header__input input {
    display: none;
  }

  .header__middle {
    display: none;
  }

  /* .header__right {
      display: none;
    } */
  .header__right .header__option .material-icons {
    /* color: gray; */
    margin: 0 10px;
    font-size: 35px;
    margin-top: 5px;
    opacity: 0.5;
  }

  .header__option {
    /* display: flex; */
    /* align-items: center; */
    padding: 0 10px;
    /* cursor: pointer; */
  }

  .header__right {
    /* display: flex; */
    /* align-items: center; */
    margin-right: 1vw;
  }
}
</style>>
