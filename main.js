
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
console.log(sidebarToggle);

sidebarToggle.addEventListener('click',
 
() => {
  console.log('clicked');
  sidebar.classList.toggle('collapsed');
});

addEventListener("resize", (event) => {});

onresize = (event) => {};