var typed = new Typed("#text", {
  strings: [`خلفيات للتصوير المنزلي و خلفيات تصوير استديوهات `],
  typeSpeed: 100,
  loop: true,
});
var li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i = i + 1) {
  console.log(li[i]);

  li[i].addEventListener("click", () => {
    console.log(true);
    window.location.reload();
  });
}
