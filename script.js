const box = document.querySelector(".box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

document.addEventListener("keydown", function (e) {
  const key = e.key;
  const code = e.code;
  const keyCode = e.keyCode;

  box1.textContent = `Key: ${key} `;
  box2.textContent = ` Code: ${code}`;
  box3.textContent = `Keycode: ${keyCode}`;
});

document.addEventListener("keydown", (e) => {
  console.log(e);
});
