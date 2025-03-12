import React from "react"; // Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

// Only update the value of this array
const navlinkItems = [
	<ul class="nav">
		<li class="nav-item">
			<a class="nav-link" href="#">
				Link to google.com
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">
				Link to facebook.com
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">
				Link to amazon.com
			</a>
		</li>
	</ul>,
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
