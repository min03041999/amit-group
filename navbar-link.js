window.addEventListener('DOMContentLoaded', () => {
    let navLink = document.querySelectorAll('.navbar-content a');
    for(let i = 0; i < navLink.length; i++) {
        let path = navLink[i].getAttribute('href');
        let pathCurrent = window.location.pathname;
        if(path.includes(pathCurrent)) {
            navLink[i].classList.add('active');
            console.log(navLink[i])
        } 
    }
})
