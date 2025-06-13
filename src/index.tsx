import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "~/components/App";
import { theme } from "~/theme";

const container = document.querySelector("#root");
if (!container) {
	throw new Error("No root element found");
}

const root = createRoot(container);

root.render(
	<StrictMode>
		<MantineProvider theme={theme}>
			<App />
		</MantineProvider>
	</StrictMode>,
);
