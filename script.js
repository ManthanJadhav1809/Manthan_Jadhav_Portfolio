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
const splashImg = document.getElementById('splashImg')
const container = document.getElementById('container')
let audiohi = document.getElementById("myAudio");


// container.style.display = 'none'
// header.style.display = 'none'

audiohi.play();
setTimeout(() => {
    audiohi.pause();
    splashImg.style.display = 'none';
    container.style.display = 'flex';
    header.style.display = 'flex';

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