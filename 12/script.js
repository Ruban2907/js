const user = document.getElementById("user-name");
const button = document.getElementById("clickbutton");
const username = document.getElementById("username");

button.addEventListener("click", () => {
    const value = user.value;
    localStorage.setItem("name",value);
    location.reload();
});



window.addEventListener("load", () => {
    const value = localStorage.getItem("name");
    username.innerText = value
})