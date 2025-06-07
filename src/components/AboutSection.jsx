import { Code, Server, ShieldCheck } from "lucide-react";
const resumeLink = import.meta.env.VITE_RESUME_LINK;

export const AboutSection = () => {
	return (
		<section id="about" className="py-24 px-4 relative">
			{" "}
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					About <span className="text-primary"> Me</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold">
							Passionate Data Engineer & Tech Enthusiast
						</h3>

						<p className="text-muted-foreground">
							Skilled in building efficient data pipelines, Data Governance and
							cloud-based workflows, I combine a strong grasp of C++, DSA, and
							modern data tools to create scalable solutions.
						</p>

						<p className="text-muted-foreground">
							With hands-on experience in end-to-end data systems and a passion
							for clean, optimized engineering, I’m aiming for impactful roles
							in data engineering and infrastructure development.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="cosmic-button">
								{" "}
								Get In Touch
							</a>

							<a
								href={resumeLink}
								download="Vaibhav_Saxena_CV.pdf"
								className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
							>
								Download CV
							</a>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Server className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">
										Big Data Technologies
									</h4>
									<p className="text-muted-foreground">
										Building scalable data pipelines and E.T.L. solutions using modern
										Big Data technologies like Azure.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<ShieldCheck className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">Data Governance</h4>
									<p className="text-muted-foreground">
										Designing data architectures, scripting solutions for data
										quality issues, and implementing governance using tools like
										Microsoft Purview.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>

								<div className="text-left">
									<h4 className="font-semibold text-lg">Problem Solving</h4>
									<p className="text-muted-foreground">
										Solving complex problems with a strong command over DSA and
										SQL.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
