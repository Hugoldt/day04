window.onload = function()  {
    var couleurBoutton = document.querySelector(".cart-btn");
    couleurBoutton.textContent = "CHANGE COLOR";
    couleurBoutton.addEventListener("click", function() {
        var rdmColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = rdmColor;
    });
};