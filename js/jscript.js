$("#navHead")
    .html("<nav class='navbar'><div><h4><b> SPACE BREAKER </b> <span><i>2D Game</i></span></h4></div><div class='floatRight'><h6>algorithmsEvolve</h6></div></nav>")

$(".closeButton")
    .on("click", function () {
        window.location.href = "./index.html";
    })

$(".againButton")
    .on("click", function () {
        document.location.reload();
    })

$(".close")
    .on("click", function () {
        document.location.reload();
    })

function saveData() {
    var uName = document.getElementById("username").value;
    localStorage.setItem("userName", uName);
    window.location.href = "./page3.html";
}

$("input.userNameInput")
    .attr("value", localStorage.getItem("userName"))

$(".loseModalLabel")
    .html("You Lose, <span class='user'>" + localStorage.getItem("userName") + "</span>. Don't lose hope. Try again.")

$(".winModalLabel")
    .html("You Win, " + localStorage.getItem("userName") + ". Congratulations!")