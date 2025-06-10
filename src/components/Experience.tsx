import { motion } from "framer-motion";

export function Experience() {
	return (
		<>
			<div
				style={{
					gridTemplateColumns: "1fr max-content 1fr",
					display: "grid",
					columnGap: "1rem",
				}}
				className="mb-6"
			>
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-right py-6"
					viewport={{ once: true }}
				>
					<h3 className="text-xl font-bold">
						Frontend Developer Intern
					</h3>
					<span>Merica s.r.o, Prague (Czechia)</span>
					<div className="text-gray-400">April 2024 - Sept 2024</div>
				</motion.div>

				<motion.span
					initial={{ height: "0%" }}
					whileInView={{ height: "100%" }}
					transition={{ duration: 1 }}
					className="w-1 h-full bg-red-100 block"
					viewport={{ once: true }}
				/>
			</div>
			<div
				style={{
					gridTemplateColumns: "1fr max-content 1fr",
					display: "grid",
					columnGap: "1rem",
				}}
			>
				<div />
				<motion.span
					initial={{ height: "0%" }}
					whileInView={{ height: "100%" }}
					transition={{ duration: 1 }}
					className="w-1 h-full bg-red-100 block"
					viewport={{ once: true }}
				/>
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="py-6"
					viewport={{ once: true }}
				>
					<h3 className="text-xl font-bold">
						Software Engineer Intern
					</h3>
					<span>Ripple Motion, Nantes (France)</span>
					<div className="text-gray-400">Sept 2019 - Sept 2021</div>
				</motion.div>
			</div>
		</>
	);
}
