function inicio() {
  event.target.style.opacity = "0.88";
  /*
    const name = event.target.name;
    console.log(name);
    event.target.classList.add("dragging");
    $(event.target).css("style:opacity(0.77)");
    element.addEventListener("input", function(event){
        //event.target is now accessible
        console.log(event.target)
      })
      */
}

function fin() {
  event.target.style.opacity = 1;
}
function leave() {
  event.target.style.border = "none";
}

function over() {
  event.target.style.border = "4px solid #aaa";
  event.preventDefault();
}
function drop() {
  event.target.appendChild(document.getElementById("arrastra"));
  event.target.style.border = "none";
  event.target.style.border = "none";
}
