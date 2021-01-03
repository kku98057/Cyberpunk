

// ------------------메인페이지 버튼---------------------////
const mainBn = document.getElementById("mainBn"),
    mainBnLeft = document.getElementById("mainBnLeft"),
    mainBnRight = document.getElementById("mainBnRight"),
    mainBnCenter = document.getElementById("mainBnCenter"),
    goBtn = document.getElementById("goBtn");
handleGoBtn = () => {
    mainBnLeft.style.width = 0;
    mainBnRight.style.width = 0;
    goBtn.style.display = "none";
}
//----------------------------------------------------//
// -------------- 메인 fly ---------------------------//
// const SHOWING_FLY = 'fly_showing',
//     flyList = document.querySelector(".main_bg_pic");

// flyHandle = () => {
//     flyList.classList.add(SHOWING_FLY);
// }

/////------------- footer email(미완성)---------------/////////////
const emailText = document.getElementById("emailText"),
    emailBtn = document.getElementById("emailBtn"),
    placeHolder = emailText.placeholder,
    textLangth = placeHolder.length;

let text = 0;

emailBtnStop = (event) => {
    event.preventDefault();
}
emailBtnEvent = () => {
    emailBtn.addEventListener('click', emailBtnStop);
}
emailTextLength = () => {
    if (placeHolder == '.c' && placeHolder == '.n') {
        emailBtn.style.opacity = '1';
    }
}
emailEventHandle = () => {
    emailTextLength();
}
////////////////////////////////////////////////////////////////






//////---------실행-------------/////////////////////////////////////////////////
init = () => {
    goBtn.addEventListener("click", handleGoBtn);
    emailBtnEvent();
    // flyHandle();
}

init();

