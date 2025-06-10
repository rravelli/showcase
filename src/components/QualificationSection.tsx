import { motion } from "framer-motion";
import { Education } from "./Education";
import { useState } from "react";
import { Experience } from "./Experience";

export default function QualificationSection() {
	const [selected, setSelected] = useState<"experience" | "education">(
		"education"
	);
	return (
		<section className="py-20 px-4 bg-gray-900/70">
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-row justify-center gap-4 mb-4">
					<motion.h2
						onClick={() => setSelected("education")}
						style={{
							color:
								selected === "education"
									? "var(--color-purple-600)"
									: undefined,
						}}
						className="text-3xl font-bold text-center p-2 rounded-md cursor-pointer transition duration-200 hover:bg-[rgba(255,255,255,0.1)]"
					>
						Education
					</motion.h2>
					<motion.h2
						onClick={() => setSelected("experience")}
						style={{
							color:
								selected === "experience"
									? "var(--color-purple-600)"
									: undefined,
						}}
						className="text-3xl font-bold text-center p-2 rounded-md cursor-pointer transition duration-200 hover:bg-[rgba(255,255,255,0.1)]"
					>
						Experience
					</motion.h2>
				</div>
				{selected === "education" && <Education />}
				{selected === "experience" && <Experience />}
			</div>
		</section>
	);
}
