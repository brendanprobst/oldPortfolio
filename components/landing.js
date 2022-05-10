const landing = /*html*/ `
<div class="section landing-view">
	<div class="container skew-scroll" id="landing-container">
		<img src="/assets/img/brendan_probst.jpg" id="profile-picture" alt="my picture" />
		<div class="content">
			<h1 id="title">Hi, I'm Brendan</h1>
			<div class="subtext" id="landing-subtext">
				<div class="typing">
					<h2>
						<h2 class="typed-text"></h2>
						<span id="cursor"></span>
					</h2>
				</div>
			</div>
		</div>
	</div>
</div>
`;
(function () {
	const placeholder = document.querySelector("#landing");
	placeholder.innerHTML = landing;
})();
