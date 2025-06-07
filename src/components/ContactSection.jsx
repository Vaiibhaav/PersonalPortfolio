import {
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";

const email = import.meta.env.VITE_EMAIL;
const phone = import.meta.env.VITE_PHONE;
const linkedIn = import.meta.env.VITE_LINKEDIN_URL;
const twitter = import.meta.env.VITE_TWITTER_URL;
const instagram = import.meta.env.VITE_INSTAGRAM_URL;
const github = import.meta.env.VITE_GITHUB_URL;

export const ContactSection = () => {
	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary">Touch</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Have a project in mind or want to collaborate? Feel free to reach out.
					I'm always open to discussing new opportunities.
				</p>

				<div className="flex flex-col items-center space-y-12">
					<div className="space-y-8 text-center">
						<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

						<div className="space-y-6">
							<div className="flex items-center justify-center space-x-4">
								<Mail className="h-6 w-6 text-primary" />
								<a
									href={`mailto:${email}`}
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									{email}
								</a>
							</div>
							<div className="flex items-center justify-center space-x-4">
								<Phone className="h-6 w-6 text-primary" />
								<a
									href={`tel:${phone}`}
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									{phone}
								</a>
							</div>
							<div className="flex items-center justify-center space-x-4">
								<MapPin className="h-6 w-6 text-primary" />
								<span className="text-muted-foreground">Mumbai, India</span>
							</div>
						</div>

						<div className="pt-8">
							<h4 className="font-medium mb-4">Connect With Me</h4>
							<div className="flex space-x-4 justify-center">
								<a href={linkedIn} target="_blank" rel="noopener noreferrer">
									<Linkedin />
								</a>
								<a href={twitter} target="_blank" rel="noopener noreferrer">
									<Twitter />
								</a>
								<a href={instagram} target="_blank" rel="noopener noreferrer">
									<Instagram />
								</a>
								<a href={github} target="_blank" rel="noopener noreferrer">
									<Github />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
