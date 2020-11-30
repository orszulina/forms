const popup = document.querySelector("#select-popup");

const btn = document.querySelector("#btn-select");

const span = document.querySelector(".close");

// POP-UP
btn.addEventListener('click', function(){
    popup.style.display = "block";
});

span.addEventListener('click', function(){
    popup.style.display = "none";
});

window.addEventListener('click', function(event){
    if (event.target == popup) {
        popup.style.display = "none";
      }
});
