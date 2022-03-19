AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Developer & Designer Intern",
    cardImage: "assets/images/experience-page/oasis.jpg",
    place: "Oasis Infobyte",
    time: "(Feb 2022 - Mar 2022)",
    desp: "<li>Designed many Websites as per requiments .</li> <li> On the Basis html, css and javascript created a web app</li>",
  },
  {
    title: "Graphic Designer Intern",
    cardImage: "assets/images/experience-page/Gra.jpg",
    place: "SIDALCAS Edutech",
    time: "(Jan 2022 - Feb 2022)",
    desp: "<li>Created many Graphic Designes.</li><li>Created Logoes, Business Cards, Fashine Mazgine Covers</li>",
  },
  {
    title: "Campus Ambassador  Intern",
    cardImage: "assets/images/experience-page/int.jpg",
    place: "International Model Of United Nations",
    time: "(Feb, 2022 - Mar, 2022)",
    desp: "<li>Worked on the inportance of knowledge and Communication</li>",
  },
  {
    title: "Student Partner",
    cardImage: "assets/images/experience-page/sa.png",
    place: "Internshala",
    time: "(Mar 2022 - Present)",
    desp: "<li>Creating awareness about internships and Courses Which Internshala offers in My Institute.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

