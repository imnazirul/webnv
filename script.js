function openMenu(_this) {
    const side = document.querySelector('.side-bar')
    const thisEl = _this;

    side.classList.toggle('show')

    if(side.classList.contains('show')){
       thisEl.innerHTML ="&#10005"
    }else{
       thisEl.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }

}

function goHtml(url) {
    window.location.assign(url);
}