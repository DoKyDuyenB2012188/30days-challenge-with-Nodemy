window.onload = () => {
    var size = document.getElementsByClassName("card__size__value");
    var color = document.getElementsByClassName("card__color__value");
    var heart = document.getElementsByClassName("bx")[0];
    for (let i = 0; i < size.length; i++) {
        size[i].onclick = () => {
            for (let j = 0; j < size.length; j++) {
                size[j].setAttribute("style", "background-color: antiquewhite;");
            }
            size[i].setAttribute("style", "background-color: #4daf54;color: #fff;");
        }
    }
    for (let i = 0; i < color.length; i++) {
        color[i].onclick = () => {
            for (let j = 0; j < color.length; j++) {
                color[j].setAttribute("style", "border: none;");
            }
            color[i].setAttribute("style", "border: 3px solid white");
        }
    }
    heart.onclick = () => {
        if(heart.className == "bx bx-heart")
            heart.className = "bx bxs-heart";
        else{
            heart.className ="bx bx-heart";
        }
    }
}