import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const education = [{ id: 1 }, { id: 2 }];

export function Education() {
	const { t } = useTranslation();
	return (
		<>
			{education.map((exp, index) => (
				<div
					style={{
						gridTemplateColumns: "1fr max-content 1fr",
						display: "grid",
						columnGap: "1rem",
						direction: index == 0 ? "ltr" : "rtl",
					}}
					className="mb-6"
				>
					<motion.div
						initial={{ x: index % 2 == 0 ? -100 : 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="py-6"
						style={{ textAlign: index % 2 == 0 ? "right" : "left" }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-bold">
							{t(`qualification.education.list.${exp.id}.title`)}
						</h3>
						<span>
							{t(`qualification.education.list.${exp.id}.place`)}
						</span>
						<div className="text-gray-400">
							{t(`qualification.education.list.${exp.id}.dates`)}
						</div>
					</motion.div>

					<motion.span
						initial={{ height: "0%" }}
						whileInView={{ height: "100%" }}
						transition={{ duration: 1 }}
						className="w-1 h-full bg-red-100 block"
						viewport={{ once: true }}
					/>
				</div>
			))}
		</>
	);
}
