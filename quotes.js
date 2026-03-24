let quotes = [
    "Never give up.","Believe in yourself.","Never give up.","Work hard in silence.","Success takes time.","Dream big.",
    "Wake up and live.","Earth laughs in flowers.","Appreciate every moment.","Be constantly curious.",
    "Act without expectation.","Always add value.","Be the charge.","Believe in God.","Build quality relationships.",
    "Be obsessively grateful.","Celebrate all success.","Happiness depends upon ourselves.","Don't worry, be happy.",
    "Wake up and live.","A light heart lives long."
    ];

let btn = document.getElementById("btns");
let para = document.querySelector("#quote");

btn.onclick = function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    para.innerText = quotes[randomIndex];
};




