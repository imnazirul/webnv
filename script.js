function openMenu(_this) {
    const side = document.querySelector('.side-bar')
    const thisEl = _this;

    side.classList.toggle('show')

    if(side.classList.contains('show')){
        
          thisEl.innerHTML ="&#10005"
       
    }else{
       setTimeout(function () {
         thisEl.innerHTML = '<i class="fa-solid fa-bars"></i>'
        },500)
  }

}

function goHtml(url) {
    window.location.assign(url);
}