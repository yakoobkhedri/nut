// menu

let openFilter = document.getElementById('openFilter');
let closeFilter = document.getElementById('closeFilter');
let filterSidebar = document.getElementById('filterSidebar');

openFilter.addEventListener('click', function () {
  document.querySelector('#filterSidebar').classList.add('active');
});
closeFilter.addEventListener('click', function () {
 document.querySelector('#filterSidebar').classList.remove('active');
});