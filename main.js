
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
console.log(sidebarToggle);

 
const toggleHamburgerMenu = () => {
  console.log('clicked');
  sidebar.classList.toggle('collapsed');
}

addEventListener("resize", (event) => {});

onresize = (event) => {};