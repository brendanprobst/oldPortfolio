const procedureContainer = document.querySelector("#procedure-container");
const procedureExample = document.querySelector("#procedure-example");
const groupContainer = document.querySelector("#group-hierarchy");
const groupSubText = document.querySelector("#sub-communities-subtext");
const procedureTypeText = document.querySelector("#procedure-type");
const procedureExampleTitle = document.querySelector("#example-procedure-name");
const procedureExampleDescription = document.querySelector(
	"#example-procedure-description"
);
var groupVisible = 0;

//HEADER
window.addEventListener("scroll", fixCommunityHeader);
function fixCommunityHeader() {
	const communityHeader = document.querySelector(".community-header");
	if (window.scrollY > 600) {
		communityHeader.classList.add("scrolled");
	} else {
		communityHeader.classList.remove("scrolled");
	}
}
function universityHeaderTab() {
	universitySubCommunity();
	console.log("here now");
	learnMoreScrollGroups();
}
function companyHeaderTab() {
	companySubCommunity();
	learnMoreScrollGroups();
}
function projectHeaderTab() {
	projectSubCommunity();
	learnMoreScrollGroups();
}
function learnMoreScrollGroups() {
	console.log("here");
	const element = document.getElementById("sub-groups");
	element.scrollIntoView(true);
}
//shared
function universitySubCommunity() {
	clearDiv(groupContainer);
	clearDiv(procedureExample);
	renderTree(groupContainer, universityGroup);
	groupSubText.innerHTML = universitySubText;
	procedureTypeText.innerHTML = "University";
	procedureExampleTitle.innerHTML = universityProcedureName;
	procedureExampleDescription.innerHTML = universityProcedureDescription;
	renderProcedure(procedureExample, universityProcedure);
}
function companySubCommunity() {
	clearDiv(groupContainer);
	clearDiv(procedureExample);

	renderTree(groupContainer, companyGroup);
	groupSubText.innerHTML = companySubText;
	procedureTypeText.innerHTML = "Company";
	procedureExampleTitle.innerHTML = companyProcedureName;
	procedureExampleDescription.innerHTML = companyProcedureDescription;

	renderProcedure(procedureExample, companyProcedure);
}
function projectSubCommunity() {
	clearDiv(groupContainer);
	clearDiv(procedureExample);

	renderTree(groupContainer, projectGroup);
	groupSubText.innerHTML = projectSubText;
	procedureTypeText.innerHTML = "Movement";

	procedureExampleTitle.innerHTML = projectProcedureName;
	procedureExampleDescription.innerHTML = projectProcedureDescription;
	renderProcedure(procedureExample, projectProcedure);
}
function selectGroup() {
	if (groupVisible === 0) {
		universitySubCommunity();
	}
	if (groupVisible === 1) {
		companySubCommunity();
	}
	if (groupVisible === 2) {
		projectSubCommunity();
	}
}
function nextGroup() {
	groupVisible = handleGroupChange(1);
	selectGroup();
}
function prevGroup() {
	groupVisible = handleGroupChange(-1);
	selectGroup();
}
function handleGroupChange(change) {
	var newGroupVisible = groupVisible + change;
	if (newGroupVisible === 3) {
		newGroupVisible = 0;
	}
	if (newGroupVisible === -1) {
		newGroupVisible = 2;
	}
	return newGroupVisible;
}
function clearDiv(container) {
	while (container.childNodes.length !== 0) {
		container.firstChild.remove();
	}
}
//SUBCOMMUNITY SECTION
function renderTree(container, node) {
	if (node.name) {
		var element = document.createElement("div");
		for (c of node.class) {
			element.classList.add(c);
		}
		if (node.class.indexOf("root") !== -1) {
			var title = document.querySelector("#group-title");
			title.innerHTML = node.name;
		} else {
			element.innerHTML = `<p>${node.name}</p>`;
		}

		if (node.children) {
			for (child of node.children) {
				element.appendChild(renderTree(container, child));
			}
		}
		container.appendChild(element);
		return element;
	}
}

//PROCEDURE SECTION

function procedureExplained(container, procedure) {
	for (let i = 0; i < procedure.length; i++) {
		var phase = document.createElement("div");
		phase.className = "phase";

		//number
		var icon = document.createElement("number");
		icon.className = "material-icons";
		icon.innerHTML = procedure[i].icon;
		phase.appendChild(icon);
		//title
		var title = document.createElement("h4");
		title.className = "phase-title";
		title.innerHTML = procedure[i].title;
		phase.appendChild(title);
		// description
		var description = document.createElement("h6");
		description.innerHTML = procedure[i].description;
		phase.appendChild(description);

		container.appendChild(phase);
	}
}

function renderProcedure(container, procedure) {
	for (let i = 0; i < procedure.length; i++) {
		var phase = document.createElement("div");
		//status and voters
		var voters = document.createElement("div");
		voters.className = "phase-voters";

		var status = document.createElement("i");
		status.className = "material-icons";
		for (c of procedure[i].class) {
			phase.classList.add(c);
			if (c === "active") {
				status.innerHTML = "how_to_vote";
			}
			if (c === "locked") {
				status.innerHTML = "lock";
			}
			if (c === "complete") {
				status.innerHTML = "check_circle";
			}
		}
		voters.appendChild(status);
		var voterTitle = document.createElement("h6");
		voterTitle.innerHTML = procedure[i].voters;
		voters.appendChild(voterTitle);
		phase.appendChild(voters);
		//number
		var number = document.createElement("number");
		number.className = "number";
		number.innerHTML = `<h3>${i + 1}</h3>`;
		phase.appendChild(number);
		//turnout
		var turnoutContainer = document.createElement("div");
		turnoutContainer.classList.add("turnout");
		var turnoutBar = document.createElement("div");
		turnoutBar.classList.add("turnout-bar");
		turnoutBar.style.width = procedure[i].turnout[0];
		turnoutContainer.appendChild(turnoutBar);
		var turnoutText = document.createElement("p");
		turnoutText.className = "label";
		turnoutText.innerHTML = "Required Turnout: " + procedure[i].turnout[1];
		turnoutContainer.appendChild(turnoutText);
		var turnoutGoal = document.createElement("div");
		turnoutGoal.className = "goal";
		turnoutGoal.style.width = procedure[i].turnout[1];
		turnoutContainer.appendChild(turnoutGoal);
		phase.appendChild(turnoutContainer);
		//consensus
		var consensusContainer = document.createElement("div");
		consensusContainer.classList.add("consensus");
		var consensusBar = document.createElement("div");
		consensusBar.classList.add("consensus-bar");
		consensusBar.style.width = procedure[i].consensus[0];
		consensusContainer.appendChild(consensusBar);
		var consensusText = document.createElement("p");
		consensusText.className = "label";
		consensusText.innerHTML =
			"Required Consensus: " + procedure[i].consensus[1];
		consensusContainer.appendChild(consensusText);
		var consensusGoal = document.createElement("div");
		consensusGoal.className = "goal";
		consensusGoal.style.width = procedure[i].consensus[1];
		consensusContainer.appendChild(consensusGoal);
		phase.appendChild(consensusContainer);
		container.appendChild(phase);
	}
}
const universitySubText =
	"Universities operate with just as much complexity as a city. Give students, faculty, and campus organizations a way to speak up.";
const universityGroup = {
	name: "University",
	class: ["root"],
	children: [
		{
			name: "Students",
			class: ["sub"],
			children: [
				{
					name: "SGA",
					class: ["sub"],
					children: [],
				},
				{
					name: "Student Body",
					class: ["sub"],
					children: [],
				},
			],
		},
		{
			name: "Faculty",
			class: ["sub", "subB"],
			children: [
				{
					name: "Administration",
					class: ["sub"],
					children: [],
				},
				{
					name: "Teachers",
					class: ["sub"],
					children: [],
				},
			],
		},
	],
};
const companySubText =
	"Companies that value employee feedback and prioritize employee representation out perform those that don't";
const companyGroup = {
	name: "Company",
	class: ["root"],
	children: [
		{
			name: "Employees",
			class: ["sub"],
			children: [
				{
					name: "Accounting",
					class: ["sub"],
					children: [],
				},
				{
					name: "Sales",
					class: ["sub", "small"],
					children: [],
				},
			],
		},
		{
			name: "Executives",
			class: ["sub", "subB"],
			children: [
				{
					name: "Board",
					class: ["sub"],
					children: [],
				},
				{
					name: "Executive Officers",
					class: ["sub"],
					children: [],
				},
			],
		},
	],
};
const projectSubText =
	"Movements are hard to organize with no real leadership. Let everyone lead - together - by democratizing your movement. ";
const projectGroup = {
	name: "Movement",
	class: ["root"],
	children: [
		{
			name: "Organizers",
			class: ["sub"],
			children: [
				{
					name: "Social Media",
					class: ["sub"],
					children: [],
				},
				{
					name: "Logistics",
					class: ["sub", "small"],
					children: [],
				},
			],
		},
		{
			name: "Attendees",
			class: ["sub", "subB"],
			children: [
				{
					name: "Demonstrators",
					class: ["sub"],
					children: [],
				},
				{
					name: "Picketers",
					class: ["sub"],
					children: [],
				},
			],
		},
	],
};
const procedure1 = [
	{
		title: "Create Procedure",
		icon: "person",
		description:
			"Customize procedures to match real-world processes your community already uses.",
	},
	{
		title: "Members Act",
		icon: "person",
		description:
			"Members can initiate a procedure with a proposal or a poll and get the ball rolling. ",
	},
	{
		title: "Get Results",
		icon: "person",
		description:
			"When phases are satisfied, the procedure will move to the next phase.",
	},
];
const universityProcedure = [
	{
		class: ["phase", "complete"],
		voters: "Students",
		turnout: ["60%", "51%"],
		consensus: ["80%", "67%"],
	},
	{
		class: ["phase", "active"],
		voters: "SGA",
		turnout: ["20%", "51%"],
		consensus: ["70%", "67%"],
	},
	{
		class: ["phase", "locked"],
		voters: "Administration",
		turnout: ["0%", "51%"],
		consensus: ["0%", "67%"],
	},
];
const universityProcedureName = "New Organization";
const universityProcedureDescription = `"Create a new club on campus"`;
const companyProcedure = [
	{
		class: ["phase", "complete"],
		voters: "Employees",
		turnout: ["60%", "51%"],
		consensus: ["80%", "67%"],
	},
	{
		class: ["phase", "active"],
		voters: "HR",
		turnout: ["20%", "51%"],
		consensus: ["70%", "67%"],
	},
	{
		class: ["phase", "locked"],
		voters: "Administration",
		turnout: ["0%", "51%"],
		consensus: ["0%", "67%"],
	},
];
const companyProcedureName = "Initiate Company Retreat";
const companyProcedureDescription = `"Choose a place and exercise"`;
const projectProcedure = [
	{
		class: ["phase", "complete"],
		voters: "Attendees",
		turnout: ["60%", "51%"],
		consensus: ["80%", "67%"],
	},
	{
		class: ["phase", "active"],
		voters: "Organizers",
		turnout: ["20%", "51%"],
		consensus: ["70%", "67%"],
	},
	{
		class: ["phase", "locked"],
		voters: "Administration",
		turnout: ["0%", "51%"],
		consensus: ["0%", "67%"],
	},
];
const projectProcedureName = "Plan a Demonstration";
const projectProcedureDescription = `"Decide on what best sends the message"`;
// procedureExplained(procedureContainer, procedure1);
selectGroup();
