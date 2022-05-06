(function () {
	const schoolContainer = document.querySelector("#school-container");

	const schoolList = [
		{
			img: "/assets/img/stevens_logo.png",
			title: "Stevens Institute of Technology",
			subText: "Bachelors of Engineering in Software Engineering",
			location: "Hoboken, New Jersey",
			description: "",
			subCards: [
				{
					title: "Launchpad",
					subText: "Startup Accelerator",
					img: "/assets/img/launchpad.png",
					imgAlt: "launchpad logo",
					link: "",
				},
			],
			link: "https://quae.app",
		},
		{
			title: "Governor Livingston",
			location: "Berkeley Heights, New Jersey",
			subText: "Class of 2019",
			description: "",
			subCards: [
				{
					title: "Launchpad",
					subText: "Startup Accelerator",
					img: "/assets/img/launchpad.png",
					imgAlt: "launchpad logo",
					link: "",
				},
			],
			link: "https://quae.app",
		},
	];
	for (let school of schoolList) {
		console.log(school);
		let newSchool = document.createElement("article");
		newSchool.id = school.title;
		newSchool.innerHTML = /* html */ `
		<div class="header">
		
		<div class="text">
		<div>
		<h5>${school.title}</h5>
		<p class="secondary">${school.location}</p>
		<p>${school.subText}</p>
					
				</div>
				</div>
		</div>
		<div class="content">
			<p>${school.description}</p>
		</div>
		
	`;
		schoolContainer.appendChild(newSchool);
	}
})();
