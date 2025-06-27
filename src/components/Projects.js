import React from "react";

const Projects = () => {
	const goToContact = () => {
		window.location.href =
			"./#contact";
	};

	const projectsData = [
		{
			image: "/project-1.png",
			alt: "Recipe App",
			title: "FlashyMind App",
			githubUrl:
				"https://github.com/joshuagnes/FlashyMind",
			liveUrl: null,
		},
		{
			image: "/project-2.png",
			alt: "project img",
			title: "Travel Itinerary Planner",
			githubUrl:
				"https://github.com/joshuagnes/travel-itinerary-planner.git",
			liveUrl: null,
		},
		{
			image: "/project-3.png",
			alt: "Stock MA Tracker project",
			title: "Memory Card Game",
			githubUrl:
				"https://github.com/joshuagnes/memory-card-game-react.git",
			liveUrl:
				"https://joshuagnes.github.io/memory-card-game/",
		},
	];

	const openUrl = (url) => {
		window.open(url, "_blank");
	};

	return (
		<section id="projects">
			<p className="section__text__p1">
				Browse My Recent
			</p>
			<h1 className="title">
				Projects
			</h1>
			<div className="experience-details-container">
				<div className="about-containers">
					{projectsData.map(
						(
							project,
							index
						) => (
							<div
								key={
									index
								}
								className="details-container color-container"
							>
								<div className="article-container">
									<img
										src={
											project.image
										}
										alt={
											project.alt
										}
										className="project-img"
									/>
								</div>
								<h2 className="experience-sub-title project-title">
									{
										project.title
									}
								</h2>
								<div className="btn-container">
									<button
										className="btn btn-color-2 project-btn"
										onClick={() =>
											openUrl(
												project.githubUrl
											)
										}
									>
										Github
									</button>
									{project.liveUrl && (
										<button
											className="btn btn-color-2 project-btn"
											onClick={() =>
												openUrl(
													project.liveUrl
												)
											}
										>
											Link
										</button>
									)}
								</div>
							</div>
						)
					)}
				</div>
			</div>
			<img
				src="/arrow.png"
				alt="Down arrow icon"
				className="icon arrow"
				onClick={goToContact}
			/>
		</section>
	);
};

export default Projects;
