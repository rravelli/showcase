import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
	{
		id: 1,
		title: "Nantral Platform",
		image: "/showcase/images/nantral_platform.png",
		github: "https://github.com/3cn-ecn/nantralPlatform",
		url: "https://nantral-platform.fr",
	},
	{
		id: 2,
		title: "The Youtube Quiz",
		image: "/showcase/images/theytquiz.png",
		url: "https://theytquiz.vercel.app",
	},
];

export default function ProjectsSection() {
	const { t } = useTranslation();
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				{t("projects.title")}
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<img
							src={project.image}
							alt={project.title}
							className="object-cover h-full w-full transition-transform group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">
								{t(`projects.list.${project.id}.title`)}
							</h3>
							<p className="text-gray-300 mb-4">
								{t(`projects.list.${project.id}.description`)}
							</p>
							<div className="flex gap-4">
								{project?.url && (
									<a
										href={project.url}
										className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
									>
										{t("projects.viewProject")}
									</a>
								)}
								{project?.github && (
									<a
										href={project.github}
										className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
									>
										GitHub
									</a>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
