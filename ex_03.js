 document.addEventListener("DOMContentLoaded", function() {
        var description = document.getElementById('description');
        var nvPara = document.createElement('p');
        nvPara.textContent = "Now featuring a headphone jack!";
        description.appendChild(nvPara);
    });