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

// price range

  var mySlider = new rSlider({
    target: '#slider',
    values: [300, 400, 500, 600,700,800,900,1000,1500,2000,2500,3000,3500,4000,4500,5000],
    range: true,
    set:    null, // an array of preselected values
    width:    null,
    scale:    false,
    labels:   false,
    tooltip:  true,
    step:     null, // step size
    disabled: false, // is disabled?
    onChange: null // callback
});