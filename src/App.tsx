import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { QualificationSection } from "./components/QualificationSection";

export default function App() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<SkillsSection />
			<QualificationSection />
			<ContactSection />
		</div>
	);
}
