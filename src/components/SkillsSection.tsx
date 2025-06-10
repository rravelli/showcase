import { motion } from "framer-motion";

const languages = [
	{ name: "Typescript", icon: "/showcase/icons/typescript.png", level: 95 },
	{ name: "Python", icon: "/showcase/icons/python.png", level: 90 },
	{ name: "Java", icon: "/showcase/icons/java.png", level: 80 },
	{ name: "C++", icon: "/showcase/icons/cpp.png", level: 50 },
	{
		name: "Bash",
		icon: "/showcase/icons/bash.png",
		level: 92,
	},
];

const techs = [
	{ name: "Django", icon: "/showcase/icons/django.png" },
	{ name: "NextJS", icon: "/showcase/icons/next.png" },
	{ name: "React", icon: "/showcase/icons/react.png" },
	{ name: "Vue", icon: "/showcase/icons/vue.png" },
	{ name: "NodeJS", icon: "/showcase/icons/node.png" },
	{ name: "Spring", icon: "/showcase/icons/spring.png" },
	{ name: "Git", icon: "/showcase/icons/git.png" },
	{ name: "Docker", icon: "/showcase/icons/docker.png" },
	{ name: "Ansible", icon: "/showcase/icons/ansible.png" },
	{ name: "Kafka", icon: "/showcase/icons/kafka.png", invert: true },
	{ name: "TensorFlow", icon: "/showcase/icons/tensorflow.png" },
	{ name: "Pytorch", icon: "/showcase/icons/pytorch.png" },
	{ name: "Redis", icon: "/showcase/icons/redis.png" },
	{
		name: "PostgreSQL",
		icon: "/showcase/icons/postgresql.png",
	},
	{ name: "SQLite", icon: "/showcase/icons/sqlite.png" },
	{ name: "MongoDB", icon: "/showcase/icons/mongodb.png" },
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

				<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
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
				{/* 
				<motion.h3
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-2xl font-bold m-12 text-center"
				>
					Technologies
				</motion.h3> */}
				<div className="mt-24 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
					{techs.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{
								opacity: 0,
								scale: 0.8,
							}}
							whileInView={{
								opacity: 1,
								scale: 1,
								transition: {
									duration: 0.4,
									delay: index * 0.1,
								},
							}}
							viewport={{ once: true }}
							transition={{ duration: 0.4 }}
							className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
						>
							<img
								src={item.icon}
								className="w-full object-contain max-w-10"
								style={{
									aspectRatio: 1,
									filter: item?.invert
										? "invert(100%)"
										: undefined,
								}}
							/>
							<h3 className="text-lg font-semibold">
								{item.name}
							</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
