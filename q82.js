const LOGIN_ID = "111";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;

var idd;
var pww;
var pwww;
var name;
var email;
var birthday;
var sex;
var ponnumber;
var loginbutton;

function  login(){
    id=i.value;
    pw=p.value;
if(id == LOGIN_ID && pw == LOGIN_PW){
    procLogin();
    // alert("로그인성공");
      }else{
        alert("로그인실패");
    }
   
}


function procLogin(){
    loginBox.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}


window.onload = function () {
    i = document.getElementById("i");
    p = document.getElementById("p");
    loginBox=document.getElementById("login_box");

}

