import "./style.css";

let cnt = 0;
let flag = false;
let last = Math.random() * screen.availHeight;
const app = document.getElementById("app");
app.style.height = `${screen.availHeight}px`;
const arr = ["I❤️NJUPT", "我爱南邮", "我爱通达"];

const interval = setInterval(() => {
  const ele = document.createElement("div");
  ele.className = "marquee";
  let top = (last * 1.5 + 45) % screen.availHeight;
  if (top > screen.availHeight - 50) {
    top -= 50;
  }
  ele.style.top = top + "px";
  app.appendChild(ele);
  last = top;
  ele.innerHTML = `<p style="font-size: 48px;">${
    arr[parseInt(Math.random() * arr.length)]
  }</p>`;
  cnt++;
  if (cnt > 150) {
    clearInterval(interval);
  }
  setTimeout(() => {
    app.removeChild(ele);
    if (app.childElementCount === 0) {
      flag = true;
    }
  }, 4000);
}, 115);

const setFlag = setInterval(() => {
  if (flag) {
    clearInterval(setFlag);
    drawLove();
  }
}, 1000);

function drawLove() {
  const aP = document.createElement("p");
  app.appendChild(aP);
  addSentence(aP, 0);
}

function addSentence(target, sentenceIndex) {
  if (sentenceIndex >= arr.length) return;
  addWord(target, sentenceIndex, 0);
  setTimeout(() => {
    target.innerHTML += "<br>";
    addSentence(target, sentenceIndex + 1);
  }, (arr[sentenceIndex].length + 1) * 300);
}

function addWord(target, sentenceIndex, wordIndex) {
  if (wordIndex >= arr[sentenceIndex].length) return;
  const span = document.createElement("span");
  let word = arr[sentenceIndex][wordIndex];
  if (word === "❤") {
    word = "❤️";
  }
  span.innerHTML = word;
  target.appendChild(span);
  setTimeout(() => {
    addWord(target, sentenceIndex, wordIndex + 1);
  }, 300);
}
