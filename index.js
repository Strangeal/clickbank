// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu-main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => (n).addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// featured speakers synamic rendering
const ListObj = [{
  mainTitle: 'Featured Speakers',
  name: 'Kelly Householder',
  role: 'Chief Executive Officer for solutions and technology',
  desc: 'Kelly empowers hundreds of thousands of ClickBank partners worldwide with the tools, and platform they crave to achieve their entrepreneurial goals.',
  img: 'img/Kelly-clickbank.jpeg',
},
{
  name: 'Chad Blodgett',
  role: 'Chief Revenue Officer of revenue driving teams',
  desc: 'Chad brings 18 years of experience building high performing, revenue driving teams within startups as well as inside large publicly traded enterprises.',
  img: 'img/Chad-Blodgett-clickbank.jpeg',
},
{
  name: 'Jason Scherer',
  role: 'Chief Technical Officer focused on enterprise organizations.',
  desc: 'Scherer believes in the importance of teamwork as much as technology, and is passionate about building a high-performing organizations to drive innovation.',
  img: 'img/Jason-clickbank.jpeg',
},
{
  name: 'Ryan Vestal',
  role: 'Chief Financial Officer and leader in the Boise tech community.',
  desc: 'Ryan began his career with KPMG, ascending into roles with leading Boise-based companies including KTVB News Group.',
  img: 'img/Ryan-clickbank.jpeg',
},
{
  name: 'Jennifer Beevers',
  role: 'Vice President of Customer Advocacy and Compliance',
  desc: 'Jen oversees the Business Product Approval Team, the Physical Product Compliance Team, and the Risk Team which manages fraud control.',
  img: 'img/Jen-clickbank.jpeg',
},
{
  name: 'Jenny Shelton',
  role: 'Vice President of Talent.',
  desc: 'Jenny focuses on creating innovative ways to attract and retain top talent, and empower all ClickBank team members to be the best version of themselves.',
  img: 'img/Jenny-clickbank.jpeg',
},
];

const speakersEl = document.querySelector('.speakers');
ListObj.forEach((obj) => {
  speakersEl.innerHTML += `
    <ul class="speaker-team">
        <li class="team">
         <img src="${obj.img}" alt="">
          <div class="team-content">
            <h3>${obj.name}</h3>
            <h6 href="#">${obj.role}</h6>
            <p>${obj.desc}</p>
          </div>
        </li>
      </ul>
    `;
});