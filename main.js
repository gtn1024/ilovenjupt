import "./style.css";

let cnt = 0;
let flag = false;
let last = Math.random() * screen.availHeight;
const app = document.getElementById("app");
app.style.height = `${screen.availHeight}px`;

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
  ele.innerHTML = `<p style="font-size: 48px;">I❤️NJUPT</p>`;
  cnt++;
  console.log(`cnt: ${cnt}`);
  if (cnt > 150) {
    clearInterval(interval);
  }
  setTimeout(() => {
    app.removeChild(ele);
    if (app.childElementCount === 0) {
      flag = true;
    }
  }, 3500);
}, 200);

const setFlag = setInterval(() => {
  if (flag) {
    clearInterval(setFlag);
    drawBigLove();
  }
}, 1000);

function drawBigLove() {
  app.innerHTML = `<span class="big-word">I❤️NJUPT</span>`;
}
