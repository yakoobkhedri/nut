let banks = Array.from(document.getElementsByClassName('bank'));

banks.forEach((item)=>{
    item.addEventListener('click',function () {
        banks.forEach((items)=>items.classList.remove('active'));
        item.classList.add('active');
    })
})