import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";

import { HashRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
if (container) {
	const root = ReactDOM.createRoot(container);
	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
