import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Limit Order Book, FIX Engine & Agentic Simulation",
		description:
			"Multithreaded C++ matching engine with price-time priority, fed by a lock-free MPSC ring buffer, with O(1) cancels, a FIX 4.2 encode/decode layer exposed to Python, and an MCP server driving a multi-agent market simulation.",
		image:
			"https://opengraph.githubassets.com/1/Vaiibhaav/multi-orderTypeOrderbook",
		tags: ["C++", "Lock-Free Concurrency", "FIX 4.2", "Python", "MCP"],
		githubUrl: "https://github.com/Vaiibhaav/multi-orderTypeOrderbook",
	},
	{
		id: 2,
		title: "ClauseIQ",
		description:
			"Multi-agent LangGraph system that flags unfair clauses in Indian contracts and cites the governing section of law. Hybrid retrieval (BM25 + dense, RRF) reaches 1.00 citation accuracy and 0.90 faithfulness at about $0.007 per contract.",
		image: "https://opengraph.githubassets.com/1/Vaiibhaav/ClauseIQ",
		tags: ["Python", "LangGraph", "MCP", "FastAPI", "ChromaDB", "GCP"],
		demoUrl: "https://clause-iq-mu.vercel.app/",
		githubUrl: "https://github.com/Vaiibhaav/ClauseIQ",
	},
	{
		id: 3,
		title: "Customer Purchase Analysis ETL Pipeline",
		description:
			"End-to-end ETL pipeline on Databricks to process and analyze raw transactional data, delivering actionable insights on customer purchasing patterns.",
		image:
			"https://images.icon-icons.com/2699/PNG/512/apache_spark_logo_icon_170561.png",
		tags: ["PySpark", "Apache Spark", "Databricks", "Delta Lake", "SQL"],
		githubUrl: "https://github.com/Vaiibhaav/ApacheSparkETLPipeline",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					Featured <span className="text-primary"> Projects </span>
				</h2>

				<p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
					Things I've built outside work, from a lock-free C++ matching engine
					to an LLM contract analyzer.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-6 flex flex-col flex-1">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
								<p className="text-foreground/80 text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center mt-auto">
									<div className="flex space-x-3">
										{project.demoUrl && (
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`${project.title} live demo`}
												className="text-foreground/80 hover:text-primary transition-colors duration-300"
											>
												<ExternalLink size={20} />
											</a>
										)}
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`${project.title} on GitHub`}
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/Vaiibhaav"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
