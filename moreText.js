var moreText = document.querySelectorAll(".more");
var btnText = document.querySelectorAll(".btn");

btnText.forEach((item, index) =>{
    item.addEventListener('click', () =>{    
        if(moreText[index].style.display === 'none')
        {
            moreText[index].style.display = 'block';
            item.innerHTML = 'Less >>';
        }
        else
        {
            moreText[index].style.display = 'none';
            item.innerHTML = 'More >>'
        }
     })
})
