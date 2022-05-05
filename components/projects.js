(function () {
	//render projects
	const projectContainer = document.querySelector("#projects-container");

	const projectsList = [
		{
			img: "/assets/img/quae_app_logo.png",
			title: "Quae",
			subText: "Co-Founder of Tech Startup",
			description: "lorem",
			tags: [
				"Entrepreneurship",
				"React",
				"React Native",
				"Material UI",
				"MERN",
			],
			link: "https://quae.app",
		},
		{
			img: "/assets/img/LN_logo.png",
			title: "LeaveNow",
			subText: "School Project Turned Side Hustle",
			description: "lorem",
			tags: ["React Native", "Heroku", "Firebase"],
			link: "https://leavenow.app",
		},
		{
			img: "/assets/img/pixlow.png",
			title: "Pixlow Chat",
			subText: "Chat with friends... with an 8-bit aesthetic",
			description:
				"Pixlow Chat was the culminating project of my Intro to Software Engineering Class. The project allowed users to create temporary chatrooms using websockets.  I worked on a team of 4, and took lead on the front end design and implementation. We used react with tailwind css. My main takeaway from this project was that I personally do not like working with tailwind. I had used it once before (the Quae landing page. Looking back, my dislike was exacerbated by not using Tailwind components. If I ever reconsider using Tailwind, I will absolutely learn how to implement components.",
			tags: ["React Native", "Tailwind", "Web Sockets"],
			link: "https://leavenow.app",
		},
	];
	for (let project of projectsList) {
		console.log(project);
		let newProject = document.createElement("article");
		newProject.className = "project";
		newProject.id = project.title;
		console.log(newProject);
		newProject.innerHTML = /* html */ `
		<div class="header">
			<img src=${project.img} alt=${project.imgAlt} class="project-img" />
			<div class="text">
			<div>
			<h3>${project.title}</h3>
			<h6>${project.subText}</h6>
			</div>
				<a href=${project.link} class="learn-more">
				<p>Learn More</p>
				</a>
				</div>
		</div>
		<div class="content">
			<p>${project.description}</p>
		</div>
		<ul id="${project.title}-tags" class="tags">
		</ul>
		
	`;
		projectContainer.appendChild(newProject);

		let tagContainer = document.getElementById(`${project.title}-tags`);
		for (let tag of project.tags) {
			console.log("here");
			let item = document.createElement("li");

			item.innerHTML = tag;
			console.log(tag);
			console.log("item:", item);
			console.log("container", tagContainer);
			tagContainer.appendChild(item);
			console.log("now here");
		}
	}
})();
