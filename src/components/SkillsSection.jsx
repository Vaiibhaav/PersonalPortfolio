import { useState } from "react";
import { cn } from "@/lib/utils";

const skillGroups = [
	{
		category: "languages",
		title: "Languages",
		skills: ["C++ (11/14/17)", "Python", "SQL"],
	},
	{
		category: "fundamentals",
		title: "CS Fundamentals",
		skills: [
			"Data Structures & Algorithms",
			"OOP",
			"Operating Systems",
			"Computer Networks",
			"Multithreading & Concurrency",
		],
	},
	{
		category: "backend",
		title: "Backend & APIs",
		skills: ["FastAPI", "Django REST Framework", "Node.js", "REST APIs"],
	},
	{
		category: "ai",
		title: "AI & Agentic",
		skills: [
			"Model Context Protocol (MCP)",
			"LangGraph",
			"RAG & Hybrid Retrieval",
			"LLM Integration",
			"Agentic Workflows",
			"Tool Calling",
			"DeepEval (LLM evaluation)",
		],
	},
	{
		category: "cloud",
		title: "Cloud & DevOps",
		skills: [
			"Microsoft Azure",
			"Microsoft Fabric",
			"GCP (Cloud Run, Vertex AI)",
			"AWS (Lambda, EventBridge, S3)",
			"AWS AI (Bedrock, Textract, Comprehend Medical)",
			"Terraform",
			"Docker",
			"CI/CD (GitHub Actions)",
			"Git",
		],
	},
	{
		category: "data",
		title: "Data & Databases",
		skills: ["PySpark", "MySQL", "Redis"],
	},
	{
		category: "frontend",
		title: "Frontend",
		skills: ["React", "Angular", "TypeScript"],
	},
];

const categories = ["all", ...skillGroups.map((group) => group.category)];

export const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredGroups = skillGroups.filter(
		(group) => activeCategory === "all" || group.category === activeCategory
	);

	return (
		<section id="skills" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					My <span className="text-primary"> Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={cn(
								"px-5 py-2 rounded-full transition-colors duration-300 capitalize",
								activeCategory === category
									? "bg-primary text-primary-foreground"
									: "bg-card border border-border text-foreground hover:bg-primary/10"
							)}
						>
							{category === "ai" ? "AI" : category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredGroups.map((group) => (
						<div
							key={group.category}
							className="bg-card p-6 rounded-lg shadow-xs card-hover text-left"
						>
							<h3 className="font-semibold text-lg mb-4">{group.title}</h3>
							<div className="flex flex-wrap gap-2">
								{group.skills.map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
