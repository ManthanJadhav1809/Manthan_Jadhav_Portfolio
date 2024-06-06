const userurl = "https://api.github.com/users/ManthanJadhav1809/repos";

// async function getRepos(userurl) {
//   try {
//     const { data } = await axios(userurl);
//     console.log(data);
//     addReposToCard(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getRepos(userurl);

// function addReposToCard(repos) {
//   const reposEl = document.getElementById("projectArea");
//   repos.slice(0, 5);
//   repos.forEach((repo) => {
//     const repoEl = document.createElement("a");
//     repoEl.classList.add("repo");
//     repoEl.href = repo.html_url;
//     repoEl.target = "_blank";
//     repoEl.innerText = repo.name;
//     reposEl.appendChild(repoEl);
//   });
// }

const header = document.querySelector(".header");
const footer = document.getElementById("footer");
const splashImg = document.getElementById("splashImg");
const maincode = document.getElementById("maincode");
const myBtn = document.getElementById("myBtn");
const contact = document.getElementById("contact");

maincode.style.display = "none";
header.style.display = "none";
footer.style.display = "none";
myBtn.style.display = "none";
contact.style.display = "none";

setTimeout(() => {
  splashImg.style.display = 'none';
maincode.style.display = "block";
header.style.display = "flex";
footer.style.display = "block";
myBtn.style.display = "block";
contact.style.display = "block";
}, 4500)

// Sticky scrollbar

header.classList.toggle("sticky", window.scrollY > 100);

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".Navbar");

menuIcon.onclick = () => {
  // alert("hh");
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyTbQ6L7ikLv2CZO9acGbpUGv0LO6QXISoHnaFW1VBnittRAKO42bmMdw_Fj_NCt4IX/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent Sucessfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// text
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Developer","React.js Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// project container
document.addEventListener('DOMContentLoaded', () => {
  // Project data
  

  const projectData = [
    {
        projectId: 1,
        projectImageUrl: "Images/project/mjrentify.png",
        projectTitle: "MjRentify",
        projectDesc: "MJ Rentify is a React and Firebase web app for streamlined rental property searches, offering filters by location, area, bedrooms, and bathrooms. It includes Firestore for data storage and seamless navigation with React Router.",
        projectGithubLink: "https://github.com/ManthanJadhav1809/MjRentify",
        projectDemoLink: "https://mjrentify.web.app/",
    },
    {
        projectId: 2,
        projectImageUrl: "Images/project/blogpostWeb.png",
        projectTitle: "BLOG POST WEBAPPLICATION",
        projectDesc: "A React and Firebase-based social media app enabling users to create, delete, update, and interact with posts. Features include user authentication, real-time data storage, dynamic post rendering, and responsive design for all devices.",
        projectGithubLink: "https://github.com/ManthanJadhav1809/BlogWebsiteByMJ",
        projectDemoLink: "https://blogproject-e5ad7.web.app/",
    },
    {
        projectId: 3,
        projectImageUrl: "Images/project/fileMangement.png",
        projectTitle: "FILE MANAGEMENT",
        projectDesc: "A web-based file management system using React and Firebase. Allows users to securely organize, upload, and manage files and folders. Includes features like user authentication and secure file storage.",
        projectGithubLink: "https://github.com/ManthanJadhav1809/File_Management_System",
        projectDemoLink: "https://file-management-system-62d4a.web.app/",
    },
    {
        projectId: 4,
        projectImageUrl: "Images/project/shopingWebsite.png",
        projectTitle: "Shoping_Website",
        projectDesc: "Swag_Of_India_Shoping_Website is a frontend project using HTML, CSS, and JavaScript. It features a responsive design, intuitive navigation, product listings, and user-friendly interfaces for an engaging and seamless shopping experience.",
        projectGithubLink: "https://github.com/ManthanJadhav1809/Swag_Of_India_Shoping_Website",
        projectDemoLink: "https://manthanjadhav1809.github.io/Swag_Of_India_Shoping_Website/",
    },
    {
        projectId: 5,
        projectImageUrl: "Images/project/expenseTracker.png",
        projectTitle: "Expense Tracker",
        projectDesc: "Expense Tracker is a React-based web app for managing and tracking expenses. It provides an intuitive interface for adding and viewing transaction details, helping users efficiently manage their finances.",
        projectGithubLink: "https://github.com/ManthanJadhav1809/ExpenseTracker",
        projectDemoLink: "https://manthanjadhav1809.github.io/Swag_Of_India_Shoping_Website/index.html",
    },
    {
        projectId: 6,
        projectImageUrl: "Images/project/quizApplication.png",
        projectTitle: "Quiz Application",
        projectDesc: "The Quiz Application, built with HTML, CSS, and JavaScript, offers an interactive platform for users to test their knowledge through various quizzes. It features real-time feedback and user-friendly navigation.",
        projectGithubLink: "https://github.com/ManthanJadhav1809/Quiz_application",
        projectDemoLink: "https://manthanjadhav1809.github.io/Quiz_application/",
    }
  ];
  
  // Getting the container element
  const projectCardContainer = document.getElementById("projectCardContainer");

  // Creating and appending project cards
  projectData.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'projectCard';

      projectCard.innerHTML = `
          <img src="${project.projectImageUrl}" id="projectImage" alt="${project.projectTitle}">
          <h4 id="projectTile">${project.projectTitle}</h4>
          <div class="projectContent">
              <p id="projectDescription">${project.projectDesc}</p>
              <div class="projectButtonContainer">
                  <button id="projectCode">Project Code</button>
                  <button id="projectDemo">Project Demo</button>
              </div>
          </div>
      `;

      // Adding event listeners
      projectCard.querySelector('#projectCode').addEventListener('click', () => {
          window.open(project.projectGithubLink, '_blank');
      });

      projectCard.querySelector('#projectDemo').addEventListener('click', () => {
          window.open(project.projectDemoLink, '_blank');
      });

      // Appending to container
      projectCardContainer.appendChild(projectCard);
  });
});


// certification details add
document.addEventListener('DOMContentLoaded', () => {
  const certifications = [
      {
          imageUrl: "./Images/FrontEnd.jpg",
          title: "Complete Front End Developer 2.0",
          link: "https://skill-lync.com/certification/individual/paidlmo0shr29tgf"
      },
      {
          imageUrl: "./Images/Practical Javascript.jpg",
          title: "Practical Javascript",
          link: "https://skill-lync.com/certification/individual/75j90scbqfkx4hn8"
      },
      {
          imageUrl: "./Images/React js.jpg",
          title: "React.JS",
          link: "https://skill-lync.com/certification/individual/h8wi0e1t3upfr46m"
      },
      {
          imageUrl: "./Images/javaSololearn.png",
          title: "Java",
          link: "https://www.sololearn.com/certificates/CC-X19H8PPM"
      },
      {
          imageUrl: "./Images/JavaScriptSololearn.png",
          title: "JavaScript",
          link: "https://www.sololearn.com/certificates/CC-IDMHU4IU"
      },
      {
          imageUrl: "./Images/WebDevelopmentSololearn.png",
          title: "Web Development",
          link: "https://www.sololearn.com/certificates/CC-HDTNKY7X"
      }
  ];

  const certificationContainer = document.getElementById('certification');

  certifications.forEach(cert => {
      const certCard = document.createElement('div');
      certCard.className = 'certificationCard';
      
      certCard.innerHTML = `
          <img src="${cert.imageUrl}" id="CertificationImage" alt="${cert.title}" />
          <h4>${cert.title}</h4>
          <div>
              <a id="viewCertificate" target="_blank" href="${cert.link}">View Certificate</a>
          </div>
      `;

      certificationContainer.appendChild(certCard);
  });
});
