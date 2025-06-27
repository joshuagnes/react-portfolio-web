import React from "react";

const Profile = () => {
	const downloadCV = () => {
		window.open(
			"/Resume_ShuYu_2025.pdf"
		);
	};

	const goToContact = () => {
		window.location.href =
			"./#contact";
	};

	const openLinkedIn = () => {
		window.location.href =
			"https://www.linkedin.com/in/shuyw/";
	};

	const openGitHub = () => {
		window.location.href =
			"https://github.com/joshuagnes";
	};

	return (
		<section id="profile">
			<div className="section__pic-container">
				<img
					className="profile-pic"
					src="/profile-pic.png"
					alt="Profile picture of Shu Yu Wang"
				/>
			</div>
			<div className="section__text">
				<p className="section__text__p1">
					Hello, I'm
				</p>
				<h1 className="title">
					Shu Yu Wang
				</h1>
				<p className="section__text__p2">
					Web Application
					Developer
				</p>
				<div className="btn-container">
					<button
						className="btn btn-color-2"
						onClick={
							downloadCV
						}
					>
						Download CV
					</button>
					<button
						className="btn btn-color-1"
						onClick={
							goToContact
						}
					>
						Contact Info
					</button>
				</div>
				<div id="socials-container">
					<img
						src="/linkedin.png"
						alt="LinkedIn profile icon"
						className="icon"
						onClick={
							openLinkedIn
						}
					/>
					<img
						src="/github.png"
						alt="GitHub profile icon"
						className="icon"
						onClick={
							openGitHub
						}
					/>
				</div>
			</div>
		</section>
	);
};

export default Profile;
