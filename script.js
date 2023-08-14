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

const header = document.getElementById('header');
const footer = document.getElementById('footer');
const splashImg = document.getElementById('splashImg')
const maincode = document.getElementById('maincode')


maincode.style.display = 'none'
header.style.display = 'none'
footer.style.display = 'none'

setTimeout(() => {
    splashImg.style.display = 'none';
    maincode.style.display = 'block';
    header.style.display = 'flex';
    footer.style.display = 'block';

}, 3500)



// Sticky scrollbar

function getYPosition() {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
  }

document.addEventListener('scroll', () => {
    var scroll = getYPosition()
    if (scroll < 150) {
        header.classList.remove("sticky");
    } else {
        header.classList.add("sticky");
    }

})

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
