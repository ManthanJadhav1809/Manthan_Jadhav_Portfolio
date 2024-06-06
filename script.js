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

// setTimeout(() => {
//  splashImg.style.display = 'none';
maincode.style.display = "block";
header.style.display = "flex";
footer.style.display = "block";
myBtn.style.display = "block";
contact.style.display = "block";
// }, 4500)

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
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// project container
document.addEventListener('DOMContentLoaded', () => {
  // Project data
  // const projectData = [
  //     {
  //         projectId: 1,
  //         projectImageUrl: "Images/project/mjrentify.png",
  //         projectTitle: "MjRentify",
  //         projectDesc: "MJ Rentify is a web application designed to streamline the rental property search process. Built using React for a dynamic front-end experience and Firebase for real-time database and authentication, it allows users to filter properties based on location, area, and number of bedrooms and bathrooms. The app integrates Firestore for data storage and React Router for seamless navigation. MJRentify enhances user experience by providing detailed property listings and facilitating easy communication between renters and property owners.",
  //         projectGithubLink: "https://github.com/ManthanJadhav1809/MjRentify",
  //         projectDemoLink: "https://mjrentify.web.app/",
  //     },
  //     {
  //         projectId: 2, // Changed projectId to 2 to avoid duplication
  //         projectImageUrl: "Images/project/blogpostWeb.png",
  //         projectTitle: "BLOG POST WEBAPPLICATION",
  //         projectDesc: `Designed and developed a React and Firebase-based social
  //         media application enabling users to create, delete, update,
  //         and interact with posts. Implemented user authentication,
  //         real-time data storage, and dynamic post rendering using
  //         React and Firebase. Ensured a responsive design for both
  //         mobile and desktop users. incorporate features such as likes
  //         to enhance the user experience. Firebase is implemented for
  //         effective data storage, scalability, and high-performance data
  //         retrieval`,
  //         projectGithubLink: "https://github.com/ManthanJadhav1809/BlogWebsiteByMJ",
  //         projectDemoLink: "https://blogproject-e5ad7.web.app/",
  //     },
  //     {
  //       projectId: 3, 
  //       projectImageUrl: "Images/project/fileMangement.png",
  //       projectTitle: "FILE MANAGEMENT",
  //       projectDesc: `Developed a web-based file management system using React and Firebase, enabling users to securely organize, upload, and manage files and folders. Implemented features such as user authentication, file storage.`,
  //       projectGithubLink: "https://github.com/ManthanJadhav1809/File_Management_System",
  //       projectDemoLink: "https://file-management-system-62d4a.web.app/",
  //    },
  //    {
  //     projectId: 4, 
  //     projectImageUrl: "Images/project/shopingWebsite.png",
  //     projectTitle: "Shoping_Website",
  //     projectDesc: `Swag_Of_India_Shoping_Website is a frontend project created with HTML, CSS, and JavaScript. It features an engaging and responsive design, offering a seamless shopping experience with intuitive navigation, product listings, and user-friendly interfaces`,
  //     projectGithubLink: "https://github.com/ManthanJadhav1809/Swag_Of_India_Shoping_Website",
  //     projectDemoLink: "https://manthanjadhav1809.github.io/Swag_Of_India_Shoping_Website/",
  //    },
  //    {
  //     projectId: 5, 
  //     projectImageUrl: "Images/project/expenseTracker.png",
  //     projectTitle: "Expense Tracker",
  //     projectDesc: `Expense Tracker is a React-based web application that helps users manage and track their expenses efficiently with an intuitive interface for adding and viewing transaction details.`,
  //     projectGithubLink: "https://github.com/ManthanJadhav1809/ExpenseTracker",
  //     projectDemoLink: "https://manthanjadhav1809.github.io/Swag_Of_India_Shoping_Website/index.html",
  //    },
  //    {
  //     projectId: 6, 
  //     projectImageUrl: "Images/project/quizApplication.png",
  //     projectTitle: "Quiz Application",
  //     projectDesc: `The Quiz Application, built with HTML, CSS, and JavaScript, offers an engaging and interactive platform for users to test their knowledge through various quizzes, featuring real-time feedback and user-friendly navigation`,
  //     projectGithubLink: "https://github.com/ManthanJadhav1809/Quiz_application",
  //     projectDemoLink: "https://manthanjadhav1809.github.io/Quiz_application/",
  //    },
     
  // ];

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