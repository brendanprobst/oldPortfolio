var footer = /*html*/ `
<footer>
	<div id="footer-contact">
		<h6>Find Us Online</h6>
		<ul class="social-icons">
		
			<li>
				<a
					aria-label="visit quae's linkedin account"
					class="linkedin"
					href="https://www.linkedin.com/company/quae/ "
					target="_blank"
					rel="noopener noreferrer"
					><i class="fa fa-linkedin"></i
				></a>
			</li>
			
			<li>
				<a
					aria-label="visit quae's instagram account"
					class="instagram"
					href="https://www.instagram.com/quaeapp/"
					target="_blank"
					rel="noopener noreferrer"
					><i class="fa fa-instagram"></i
				></a>
			</li>
		
		</ul>
		
		<a href="mailto:bprobst1029@gmail.com" id="contact-me-button">
			<button class="white icon">
				<i class="material-icons">mail</i>
				<p>Get In Touch</p>
			</button>
		</a>
	</div>
	<div id="footer-navigation">
		<div class="nav-links">
			<a href="#landing" class = "home">
				<p>Back To Top</p>
			</a>
			<a href="#projects" rel="noopener" class="blog">
				<p>Projects</p>
			</a>
			<a href="#education" rel="noopener" class="docs">
				<p>Education</p>
			</a>
			<a href="#skills" class="about-us">
				<p>Skills</p>
			</a>
			<a href="#about-me" class="about-us">
				<p>About Me</p>
			</a>
		</div>
		
	</div>
</footer>
`;

function renderFooter() {
	const placeholder = document.querySelector("#footer-placeholder");
	placeholder.innerHTML = footer;
}
renderFooter();
