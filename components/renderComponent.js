const render = (element, component) => {
	//element - html element
	//component - js var in component file
	const placeholder = document.querySelector(element);
	placeholder.innerHTML = component;
};
module.exports = render;
