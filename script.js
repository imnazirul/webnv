function openMenu(_this) {
    const side = document.querySelector('.side-bar')

    side.classList.toggle('show')
  if(side.classList.contains('show')){
    _this.innerHTML ="&#10005"
  }else{
    _this.innerHTML = ""
  }

}

function goHtml(url) {
    window.location.assign(url);
}