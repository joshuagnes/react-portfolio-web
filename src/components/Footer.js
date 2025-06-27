import React from "react";

const Footer = () => {
	return (
		<footer>
			<nav>
				<div className="nav-link-container">
					<ul className="nav-links">
						<li>
							<a href="#about">
								About
							</a>
						</li>
						<li>
							<a href="#skills">
								Skills
							</a>
						</li>
						<li>
							<a href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
			<p>
				&copy; 2023 Joshua Wang.
				All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
