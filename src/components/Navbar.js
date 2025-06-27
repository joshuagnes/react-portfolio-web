import React, { useState } from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] =
		useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			{/* Desktop Navigation */}
			<nav id="desktop-nav">
				<div className="logo">
					Shu Yu Wang
				</div>
				<div>
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

			{/* Mobile Navigation */}
			<nav id="hamburger-nav">
				<div className="logo">
					Shu Yu Wang
				</div>
				<div className="hamburger-menu">
					<button
						className={`hamburger-icon ${
							isMenuOpen
								? "open"
								: ""
						}`}
						onClick={
							toggleMenu
						}
						aria-label="Toggle menu"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<div
						className={`menu-links ${
							isMenuOpen
								? "open"
								: ""
						}`}
					>
						<li>
							<a
								href="#about"
								onClick={
									handleLinkClick
								}
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#skills"
								onClick={
									handleLinkClick
								}
							>
								Skills
							</a>
						</li>
						<li>
							<a
								href="#projects"
								onClick={
									handleLinkClick
								}
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#contact"
								onClick={
									handleLinkClick
								}
							>
								Contact
							</a>
						</li>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
