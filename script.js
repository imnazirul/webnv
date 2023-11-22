function openMenu(_this) {
    const side = document.querySelector('.side-bar')
    const thisEl = _this;

    side.classList.toggle('show')

    if(side.classList.contains('show')){
        setTimeout(function () {
          thisEl.innerHTML ="&#10005"
        },500)
       
    }else{
       setTimeout(function () {
         thisEl.innerHTML = '<i class="fa-solid fa-bars"></i>'
        },1000)
  }

}

function goHtml(url) {
    window.location.assign(url);
}