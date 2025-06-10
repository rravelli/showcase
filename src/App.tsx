import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import QualificationSection from "./components/QualificationSection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<QualificationSection />
			<ContactSection />
		</div>
	);
}
