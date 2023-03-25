import projectsList from "./assets/projectsList.js";

const projectsContainer = document.querySelector("main .projects-container");

projectsList.forEach((project, index) => {
  const card = document.createElement("div")
  card.classList.add("card")
  card.innerHTML = `
    <a href="${project.live}" target="_blank">
      <img
        src="${project.preview}"
        alt="${project.altPreview}" />
    </a>
    <div class="details">
      <h3><span>id</span>${index + 1}</h3>
      <h3><span>level</span>${project.level}</h3>
      <h3><span>name</span>${project.name}</h3>
      <h3>
        <span>source</span>
        <a href="${project.source}" target="_blank">
          <div class="source-code-icon">&#60;&#47;&#62;</div>${project.source.split("rocketseat-explorer/tree/main").slice(-1)}
        </a>
      </h3>
    </div>
  `;
  projectsContainer.appendChild(card);
});