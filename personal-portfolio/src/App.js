import React from "react";
import "./styles/App.css";
import headShot from "assets/picture.jpg";
function App() {
	const MailAddress = ({ email, subject, body, children }) => {
		return (
			<a
				href={`mailto:${email}?subject=${
					encodeURIComponent(subject) || ""
				}&body=${encodeURIComponent(body) || ""}`}
			>
				{children}
			</a>
		);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={headShot} className="picture" />
				<h2>Hi, Website Coming Soon</h2>
				<h5>
					If you need to contact me, please email{" "}
					<MailAddress
						email="bprobst1029@gmail.com"
						subject="Hi! I found your website"
						body=""
					>
						bprobst1029@gmail.com
					</MailAddress>{" "}
					or{" "}
					<MailAddress
						email="bprobst@quae.app"
						subject="Hi! I found your website"
						body=""
					>
						bprobst@quae.app
					</MailAddress>{" "}
					or{" "}
					<MailAddress
						email="bprobst@stevens.edu"
						subject="Hi! I found your website"
						body=""
					>
						bprobst@stevens.edu
					</MailAddress>
				</h5>
			</header>
		</div>
	);
}

export default App;
