import { BrainCircuit, Cpu, Server } from "lucide-react";

const resumeLink = "/Vaibhav_Saxena_Resume.pdf";

const highlights = [
	{
		icon: Server,
		title: "Backend & Platform",
		text: "Redesigned Keycloak auth to cut per-request auth DB queries by 75%, rebuilt onboarding with Stripe and Razorpay for 30,000+ users, and delivered HAProxy load-balancer autoscaling.",
	},
	{
		icon: BrainCircuit,
		title: "Data & AI Systems",
		text: "Built an LLM-assisted entity-resolution engine that cut pairwise comparisons by 99%, an event-driven schema-drift service, and a data-quality framework that runs 87% faster over 8M+ rows.",
	},
	{
		icon: Cpu,
		title: "Systems & Problem Solving",
		text: "Wrote a multithreaded C++ matching engine on a lock-free ring buffer with a FIX 4.2 layer, and earned the LeetCode Knight badge (max rating 1857).",
	},
];

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
							Software Engineer: Backend, Data & AI Systems
						</h3>

						<p className="text-foreground/80">
							I'm a Software Engineer at Adrosonic in Mumbai with 2 years of
							experience designing, building and shipping production systems end
							to end, from authentication and payments to autoscaling and data
							platforms on Microsoft Fabric.
						</p>

						<p className="text-foreground/80">
							I care about clean, secure, high-performance code and strong
							fundamentals: data structures and algorithms, operating systems,
							networks and concurrency. I also build GenAI systems with MCP, RAG
							and LangGraph.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="cosmic-button">
								{" "}
								Get In Touch
							</a>

							<a
								href={resumeLink}
								download="Vaibhav_Saxena_Resume.pdf"
								className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
							>
								Download CV
							</a>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6">
						{highlights.map((item) => (
							<div key={item.title} className="gradient-border p-6 card-hover">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10">
										<item.icon className="h-6 w-6 text-primary" />
									</div>
									<div className="text-left">
										<h4 className="font-semibold text-lg">{item.title}</h4>
										<p className="text-foreground/80">{item.text}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
