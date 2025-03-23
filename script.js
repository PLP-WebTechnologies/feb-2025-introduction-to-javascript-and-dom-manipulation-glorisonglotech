const menu = document.getElementById("menu");

const sidenav = document.getElementById("sidenav");

sidenav.style.right = '-250px';
menu.onclick = function(){
    if(sidenav.style.right === '-250px'){
        sidenav.style.right = '0';
    }else{
        sidenav.style.right = '-250px';
    }
}
const more_paragraph = document.getElementById("more")
const more_btn = document.getElementById('more-btn')
more_btn.onclick = function(){
    more_btn.innerText = "Read less"
    const newElement = document.getElementById('new-element');
    if (newElement) {
        newElement.remove();
        more_btn.innerText = "Read more"
    } else {
        const element = document.createElement('div');
        element.id = 'new-element';
        element.innerText = " Transform Your Workflow with Our All-in-One Task Manager Stay organized, collaborate seamlessly, and get things done faster. Sign up now for a free trial.";
        element.style.color = 'white';
        element.style.marginLeft = '10%';
         element.style.marginTop = '4%'
        document.body.appendChild(element);
    }
}