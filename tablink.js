var stepCircle = document.querySelectorAll('.seven-steps-circle-item');


stepCircle.forEach((item, i) => {
    stepCircle[i].addEventListener('click', ()=>{
        stepCircle.forEach((item1) => {
            item1.firstElementChild.classList.remove('active')
            item1.children[1].classList.remove('active')
            item1.lastElementChild.classList.remove('active')
        })
        item.firstElementChild.classList.add('active')
        item.children[1].classList.add('active')
        item.lastElementChild.classList.add('active')
        var id = item.getAttribute('data-toggle')
        var data = document.getElementById(id)
        var content = document.querySelectorAll('.content')
        content.forEach((item2) => {
            item2.classList.remove('active')
        })
        data.classList.add('active')
        console.log(id)
    })
});