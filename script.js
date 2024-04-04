const buttons = {
    yes: document.querySelector(".yes"),
    no: document.querySelector(".no")
}

const getRandomPos = () => {
    const size = {
        w: document.body.offsetHeight - 500,
        h: spaceHeight = document.body.offsetWidth - 500
    }

    return {
        x: Math.round(Math.random() * size.w),
        y: Math.round(Math.random() * size.h)
    }
}

buttons.yes.addEventListener("click", () => {
    document.querySelector("img").src = "assets/yes.gif";

    buttons.no.style.display = "none";
    buttons.yes.querySelector("span").textContent = "Ty <3";
});

buttons.no.addEventListener("click", () => {
    const { x, y } = getRandomPos();

    buttons.no.style.position = "absolute";
    buttons.no.style.left = x + "px";
    buttons.no.style.top = y + "px";
});