import React from "react";

const Skills = () => {
	const goToProjects = () => {
		window.location.href =
			"./#projects";
	};

	const skillsData = {
		languages: [
			"HTML5",
			"CSS",
			"JavaScript",
			"Python",
			"SQL",
			"C#",
			"TypeScript",
		],
		frameworks: [
			"React(incl. React 9)",
			"React Native",
			"Vite",
			"Expo",
		],
	};

	return (
		<section id="skills">
			<p className="section__text__p1">
				Explore My
			</p>
			<h1 className="title">
				Skills
			</h1>

			<div className="experience-details-container">
				<div className="about-containers">
					<div className="details-container">
						<h2 className="experience-sub-title">
							Languages
						</h2>
						<div className="article-container">
							{skillsData.languages.map(
								(
									skill,
									index
								) => (
									<article
										key={
											index
										}
									>
										<img
											src="/checkmark.png"
											alt="Check icon"
											className="icon"
										/>
										<h3>
											{
												skill
											}
										</h3>
									</article>
								)
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="experience-details-container">
				<div className="about-containers">
					<div className="details-container">
						<h2 className="experience-sub-title">
							Frameworks
						</h2>
						<div className="article-container">
							{skillsData.frameworks.map(
								(
									framework,
									index
								) => (
									<article
										key={
											index
										}
									>
										<img
											src="/checkmark.png"
											alt="Check icon"
											className="icon"
										/>
										<h3>
											{
												framework
											}
										</h3>
									</article>
								)
							)}
						</div>
					</div>
				</div>
			</div>

			<img
				src="/arrow.png"
				alt="Down arrow icon"
				className="icon arrow"
				onClick={goToProjects}
			/>
		</section>
	);
};

export default Skills;
