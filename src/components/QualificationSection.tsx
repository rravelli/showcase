import { motion } from "framer-motion";
import { Education } from "./Education";
import { useState } from "react";
import { Experience } from "./Experience";
import { useTranslation } from "react-i18next";

export default function QualificationSection() {
	const { t } = useTranslation();
	const [selected, setSelected] = useState<"experience" | "education">(
		"education"
	);
	return (
		<section className="py-20 px-4 bg-gray-900/70">
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
					<motion.h2
						onClick={() => setSelected("education")}
						style={{
							color:
								selected === "education"
									? "var(--color-purple-600)"
									: undefined,
							textDecorationLine:
								selected === "education"
									? "underline"
									: undefined,
						}}
						className="text-3xl font-bold text-center p-2 rounded-md cursor-pointer transition duration-200 hover:bg-[rgba(255,255,255,0.1)]"
					>
						{t("qualification.education.title")}
					</motion.h2>
					<motion.h2
						onClick={() => setSelected("experience")}
						style={{
							color:
								selected === "experience"
									? "var(--color-purple-600)"
									: undefined,
							textDecorationLine:
								selected === "experience"
									? "underline"
									: undefined,
						}}
						className="text-3xl font-bold text-center p-2 rounded-md cursor-pointer transition duration-200 hover:bg-[rgba(255,255,255,0.1)]"
					>
						{t("qualification.experience.title")}
					</motion.h2>
				</div>
				{selected === "education" && <Education />}
				{selected === "experience" && <Experience />}
			</div>
		</section>
	);
}
