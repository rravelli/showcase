import { motion } from "framer-motion";

export function Education() {
	return (
		<>
			<div
				style={{
					gridTemplateColumns: "1fr max-content 1fr",
					display: "grid",
					columnGap: "1rem",
				}}
				className="mb-4"
			>
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-right"
				>
					<h3 className="text-xl font-bold">
						Engineering degree (Equivalent to a Master Degree)
					</h3>
					<span>Centrale Nantes, France</span>
					<div className="text-gray-400">Jan 2018 - Dec 2021</div>
				</motion.div>

				<motion.span
					initial={{ height: "0%" }}
					whileInView={{ height: "100%" }}
					transition={{ duration: 1 }}
					className="w-1 h-full bg-red-100 block"
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
				/>
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<h3 className="text-xl font-bold">
						Classe préparatoire MPSI/MP
					</h3>
					<span>Lycée Montaigne, Bordeaux (France)</span>
					<div className="text-gray-400">Jan 2018 - Dec 2021</div>
				</motion.div>
			</div>
		</>
	);
}
