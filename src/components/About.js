import React from "react";

const About = () => {
	const goToSkills = () => {
		window.location.href =
			"./#skills";
	};

	return (
		<section id="about">
			<p className="section__text__p1">
				Get to Know More
			</p>
			<h1 className="title">
				About Me
			</h1>
			<div className="section-container">
				<div className="section__pic-container">
					<img
						src="/about-pic.jpg"
						alt="About me profile"
						className="about-pic"
					/>
				</div>
				<div className="about-details-container">
					<div className="about-containers">
						<div className="details-container">
							<img
								src="/experience.png"
								alt="Experience icon"
								className="icon"
							/>
							<h3>
								Experience
							</h3>
							<p>
								2 years
								<br />
								Software
								Development
							</p>
						</div>
						<div className="details-container">
							<img
								src="/education.png"
								alt="Education icon"
								className="icon"
							/>
							<h3>
								Education
							</h3>
							<p>
								BA
								Bachelor's
								Degree
								<br />
								BAS
								Bachelor's
								Degree
								(Expected
								2027)
							</p>
						</div>
					</div>
					<div className="text-container">
						<p>
							Hello, I'm
							Shuyu — you
							can also
							call me
							Joshua. I am
							a passionate
							and driven
							sophomore
							studying
							software
							development,
							with a focus
							on web
							application
							design. My
							journey
							began
							uniquely,
							combining
							culinary
							arts with
							technology,
							giving me a
							diverse
							skill set
							and a
							creative
							approach to
							problem-solving.
						</p>
						<p>
							I am
							actively
							seeking
							opportunities
							to apply my
							skills and
							make a
							tangible
							impact in
							the tech
							industry.
							I'm open to
							internships
							and
							full-time
							roles,
							particularly
							those where
							I can
							contribute
							to
							meaningful
							projects and
							grow as a
							web
							developer.
						</p>
					</div>
				</div>
			</div>
			<img
				src="/arrow.png"
				alt="Down arrow icon"
				className="icon arrow"
				onClick={goToSkills}
			/>
		</section>
	);
};

export default About;
