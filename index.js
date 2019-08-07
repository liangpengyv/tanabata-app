let agree = document.querySelector("#agree");
agree.onclick = function () {
    alert("洗白白床上等我哦 ^_^");
};

let disagree = document.querySelector("#disagree");
disagree.onmouseenter = function () {
    let x = Math.random() * document.body.clientWidth;
    let y = Math.random() * document.body.clientHeight;
    disagree.style.left = x + "px";
    disagree.style.top = y + "px";
};
