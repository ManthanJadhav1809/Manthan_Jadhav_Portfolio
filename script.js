const userurl = "https://api.github.com/users/ManthanJadhav1809/repos"


async function getRepos(userurl) {
    try {
        const {
            data
        } = await axios(userurl)
        console.log(data)
        addReposToCard(data)
    } catch (error) {
        console.log(error)
    }
}


getRepos(userurl)

function addReposToCard(repos) {
    const reposEl = document.getElementById('projectArea')
    repos.slice(0, 5)
    console.log(repos.error)
    repos.forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = "_blank"
        repoEl.innerText = repo.name
        reposEl.appendChild(repoEl)
    });
}

const header = document.querySelector('.header');
const footer = document.getElementById('footer');
const splashImg = document.getElementById('splashImg')
const maincode = document.getElementById('maincode')
const myBtn = document.getElementById('myBtn')
const contact = document.getElementById('contact')

maincode.style.display = 'none'
header.style.display = 'none'
footer.style.display = 'none'
myBtn.style.display = 'none'
contact.style.display = 'none'

setTimeout(() => {
     splashImg.style.display = 'none';
    maincode.style.display = 'block';
    header.style.display = 'flex';
    footer.style.display = 'block';
    myBtn.style.display = 'block'

}, 3500)



// Sticky scrollbar

 header.classList.toggle('sticky',window.scrollY>100);

 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.Navbar');
 
 menuIcon.onclick=()=>{
  // alert("hh");
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
 }

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Save contact details to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyTbQ6L7ikLv2CZO9acGbpUGv0LO6QXISoHnaFW1VBnittRAKO42bmMdw_Fj_NCt4IX/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent Sucessfully"
        setTimeout(()=>{
            msg.innerHTML=""
        },4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// text
const typed=new Typed('.multiple-text',{
  strings:['Frontend Developer','Web Developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});
