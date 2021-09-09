<template>
  <div id="mainBlock">
    <div class="d-flex justify-content-center">
      <div class="imgBox">
        <img
          id="loginImage"
          src="https://thumbs.dreamstime.com/b/happy-young-employee-sharing-vacation-photos-two-female-colleagues-taking-break-workday-laptop-screen-smiling-friendly-210494528.jpg"
          alt="Emloyee Sharing"
        />
        <div class="text-block">
             <h1>EmployeeShare</h1>
             <h5>Lets get connected.</h5>
        </div>
      </div>
      <div class="shadow-lg">
        <form action="/action_page.php" style="border: 1px solid #ccc">
          <div class="container">
            <h1>Sign Up</h1>
            <hr />

            <label for="email" style="float: left;"><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label for="psw" style="float: left;"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <label style="float: left;">
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                style="margin-bottom: 15px"
              />
              Remember me
            </label>

            <div class="clearfix">
              <button type="submit" class="signupbtn shadow">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');


.shadow-lg {
  background-color: #b8c6db;
background-image: linear-gradient(315deg, #e0e7f1 0%, #f5f7fa 74%);
    /* background-color: #bbf0f3;
    background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%); */
    background-color: white;
/* color: white; */
color: black;
font-family: 'Inter', sans-serif;
}
.imgBox {
  position: relative;
}
.text-block {
  position: absolute; /* Position the background text */
  top: 0px;
  bottom: 0px; /* At the bottom. Use top:0 to append it to the top */
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1; /* Grey text */
  width: 100%; /* Full width */
  padding: 140px 50px; /* Some padding */
  font-family: 'Inter', sans-serif;
}
.text-block h1 {
  font-family: "Pacifico", cursive;
  padding: 0px 0px 10px 0px;
}

#mainBlock {
    background-color: #bbf0f3;
    background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
    /* background-color: #000000;
background-image: linear-gradient(280deg, #000000 0%, #2c3e50 74%); */
    margin: 0px 0px;
    padding: 61px 0px;
}

.justify-content-center {
  padding: 50px 110px;
  margin: 0px 50px;
}

@media (max-width:1100px) {
  .justify-content-center {
    padding: 45px 80px;
    margin: 60px 30px;
  }
  .text-block {
    padding: 120px 150px 120px 100px;
  }
}

#loginImage {
  width: 40vw;
  height: 400px;
}

/* body {font-family: 'Inter', sans-serif;} */
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px 0;
  display: inline-block;
  border: none;
  /* background: #f1f1f1; */
  background: rgb(56, 55, 55);
  border-radius: 5px;
  color: white;
}

input[type=text]:focus, input[type=password]:focus {
  /* background-color: #ddd; */
  background-color: rgb(56, 55, 55);
  outline: none;
}

hr {
  border: 1px solid #6e6969;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #bbf0f3;
  background-image: linear-gradient(315deg, #bbf0f3 0%, #f6d285 74%);
  color: black;
  padding: 13px 20px;
  /* margin: 8px 0; */
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 5px;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn {
  width: 100%;
}

/* Add padding to container elements */
.container {
  padding: 20px;
  margin-top: 10px;
  /* width: 45vw; */
  /* height: auto; */
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}

/* @media (max-width: 550px) {
  .justify-content-center {
    padding: 25px 0px;
  }
} */

@media (max-width: 800px) {
  .imgBox {
    display: none;
  }
  .justify-content-center {
    padding: 30px 50px;
    margin: 90px 10px;
  }
}

@media ( max-width: 1000px ) {
  /* .justify-content-center {
    padding: 45px 60px;
  } */
  #loginImage {
  height: 350px;
  }
  .container {
    margin-top: 0px;
  }
  input[type=text], input[type=password] {
  width: 100%;
  padding: 7px;
  margin: 5px 0 10px 0;
  display: inline-block;
  border: none;
  background: rgb(56, 55, 55);
}

hr {
  border: 1px solid #383636;
  margin-bottom: 20px;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: black;
  padding: 9px 20px;
  /* margin: 8px 0; */
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.8;
}
}
</style>