import { motion } from "framer-motion";

const skills = [
	{ skill: "React/Next.js", level: 95 },
	{ skill: "TypeScript", level: 90 },
	{ skill: "UI/UX Design", level: 85 },
	{ skill: "CSS/Sass/Tailwind", level: 95 },
	{ skill: "JavaScript", level: 90 },
	{ skill: "Responsive Design", level: 95 },
];

const languages = [
	{ name: "Typescript", icon: "/showcase/icons/typescript.png", level: 95 },
	{ name: "Python", icon: "/showcase/icons/python.png", level: 90 },
	{ name: "Java", icon: "/showcase/icons/java.png", level: 80 },
	{ name: "C++", icon: "/showcase/icons/cpp.png", level: 50 },
	{
		name: "PostgreSQL/SQL",
		icon: "/showcase/icons/postgresql.png",
		level: 92,
	},
];

export default function SkillsSection() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-4xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Technical Skills
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skills.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="space-y-2"
						>
							<div className="flex justify-between text-sm">
								<span>{item.skill}</span>
								<span>{item.level}%</span>
							</div>
							<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: `${item.level}%` }}
									viewport={{ once: true }}
									transition={{
										duration: 1,
										ease: "easeOut",
									}}
									className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
								/>
							</div>
						</motion.div>
					))}
				</div>

				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold m-12 text-center"
				>
					Languages
				</motion.h2>

				<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
					{languages.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="space-y-2 grow-1 flex flex-col"
						>
							<img
								src={item.icon}
								className="w-full object-contain"
								style={{ aspectRatio: 1 }}
							/>
							<div className="flex-1" />
							<div className="flex justify-between text-sm">
								<span>{item.name}</span>
								<span>{item.level}%</span>
							</div>
							<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: `${item.level}%` }}
									viewport={{ once: true }}
									transition={{
										duration: 1,
										ease: "easeOut",
									}}
									className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
								/>
							</div>
						</motion.div>
					))}
				</div>

				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold m-12 text-center"
				>
					Frameworks
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex"
				>
					<motion.img src="/showcase/django.png" className="h-30" />
					<p>Django</p>
				</motion.div>
				<motion.div
					className="flex-row-reverse flex"
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.7 }}
				>
					<motion.img src="/showcase/next.png" className="h-30" />
					<p>Next JS</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.9 }}
					className="flex"
				>
					<motion.img src="/showcase/spring.png" className="h-30" />
					<p>Spring</p>
				</motion.div>
			</div>
		</section>
	);
}
