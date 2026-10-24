import { Briefcase } from "lucide-react";

const roles = [
	{
		company: "ADROSONIC",
		title: "Software Engineer (Research and Innovation Engineer)",
		period: "Jan 2024 – Present",
		location: "Mumbai, India",
		points: [
			<>
				Delivered load-balancer autoscaling: built a pipeline that syncs
				HAProxy backends with VM scale groups via Ansible AWX, with
				reconciliation so no new VM misses traffic.
			</>,
			<>
				Redesigned platform-wide authentication after a VAPT flagged 365-day
				tokens, shipping 30-min access / rotating refresh tokens on Keycloak
				(OAuth 2.0 + PKCE) with stateless JWT validation at the gateway,
				cutting per-request auth DB queries <strong>75%</strong> (4 → 1) and
				adding fingerprint-bound cookies to block token replay.
			</>,
			<>
				Re-engineered the end-to-end customer onboarding pipeline for{" "}
				<strong>30,000+ users</strong>, integrating Stripe and Razorpay payment
				gateways and revamping the signup flow to improve onboarding conversion
				by <strong>15%</strong>.
			</>,
			<>
				Led development of an LLM-assisted entity-resolution engine (PySpark,
				Delta Lake, Microsoft Fabric) that deduplicates records with no shared
				keys; multi-key blocking cut pairwise comparisons by{" "}
				<strong>99%</strong> (86K → 547) and batched, cached LLM adjudication
				resolved <strong>157 ambiguous pairs in 3 API calls</strong>, with
				union-find clustering.
			</>,
			<>
				Led development of an event-driven schema-drift service that detects
				renamed, new and retyped columns via sampled-value type inference and
				LLM-scored matching to a canonical schema, auto-resolving confident
				renames and reusing stored reviewer decisions for repeat drift.
			</>,
		],
		tags: ["Python", "Keycloak", "Stripe", "HAProxy", "Ansible AWX", "PySpark", "Microsoft Fabric"],
	},
	{
		company: "ADROSONIC",
		title: "Software Engineer Intern (Research and Innovation Engineer Intern)",
		period: "Jun 2023 – Dec 2023",
		location: "Mumbai, India",
		points: [
			<>
				Built a config-driven data-quality framework (PySpark, Microsoft
				Fabric) evaluating 15 rules over <strong>8M+ rows</strong> in a single
				pass per table, cutting runtime by <strong>87%</strong> (2 hrs → 15
				min) and surfacing <strong>250K+ duplicate</strong> and{" "}
				<strong>1K+ orphaned</strong> source records, each routed to a named
				owner via Power BI dashboards and Teams alerts.
			</>,
			<>
				Replaced Stripe's hosted Checkout with a custom payment flow built on
				the Stripe Payment Intents &amp; Payment Methods APIs, enabling saved
				cards for returning users and removing repeated billing-address entry
				to improve checkout conversion.
			</>,
		],
		tags: ["PySpark", "Microsoft Fabric", "Power BI", "Stripe"],
	},
];

export const ExperienceSection = () => {
	return (
		<section id="experience" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					Work <span className="text-primary">Experience</span>
				</h2>

				<div className="space-y-8">
					{roles.map((role) => (
						<div key={role.title} className="gradient-border p-5 md:p-8 text-left">
							<div className="flex items-start gap-4">
								<div className="hidden sm:block p-3 rounded-full bg-primary/10 shrink-0">
									<Briefcase className="h-6 w-6 text-primary" />
								</div>

								<div className="flex-1 min-w-0">
									<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
										<h3 className="text-xl font-semibold">{role.company}</h3>
										<span className="text-sm text-primary font-medium">
											{role.period}
										</span>
									</div>
									<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
										<p className="italic text-foreground/80">{role.title}</p>
										<span className="text-sm text-foreground/60">
											{role.location}
										</span>
									</div>

									<ul className="list-disc pl-5 space-y-2 text-foreground/80 marker:text-primary">
										{role.points.map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>

									<div className="flex flex-wrap gap-2 mt-5">
										{role.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
