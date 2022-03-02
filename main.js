// Function For Check Your Password

/* Redirection Link */
let goLink = "https://tom-website.github.io/OurBookcase/"

/* Log in With UserName And Password */
// My DataBases
let userName = ["admin", "Tom-website"];
let password = ["admin", "Tom"];
function buttonSend() {
  let inpName = document.getElementById("userName").value;
  let inpPassword = document.getElementById("password").value;
  for (let i = 0; i < userName.length; i++) {
    if (password[i] == inpPassword && userName[i] == inpName) {
      // document.getElementById("send").innerHTML = `<a href="https://google.com/">send</a>`;
      document.getElementById("massge").innerHTML = "True"
      window.location = goLink;
      break;
    } else {
      console.log("false");
      document.getElementById("massge").innerHTML = "Sorry For This Error:<br/> There's Wring Your Username Or Pasword";
      document.getElementById("massge").style.cssText = `
        color: red;
        font-size: 0.9rem;`;
    }
  }
}

/* Go To Show Log in With OTP */
function buttonShowOTP() {
  document.getElementById("user").style.display = "none";
  document.getElementById("OTP").style.display = "flex";
  document.getElementById("massge").innerHTML = "";

}

/* Make Numbers Random */
function buttonSendOTP() {

  let inpPasswordOTP = document.getElementById("inputOTP").value;
  if (passwordOTP[0] === inpPasswordOTP) {
    let passwordOTP = [];
    let numbserOTP = "1234567890";
    let makePasswordOTP = passwordOTP.push(Math.round(Math.random() * numbserOTP));
    console.log(passwordOTP[0]);
    console.log("true");
    window.location = goLink;
  } else {
    console.log("false");
    document.getElementById("massge").innerHTML = "Sorry For This Error:<br/> There's Wring Your OTP";
    document.getElementById("massge").style.cssText = `
      color: red;
      font-size: 0.9rem;`;
  }
}
/* Go To Show Log in With UserName And Password */
function buttonShowUser() {
  document.getElementById("OTP").style.display = "none";
  document.getElementById("user").style.display = "flex";
  document.getElementById("massge").innerHTML = "";
}

/* Make Page Login in Day 2022/02/14 */
