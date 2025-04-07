import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
	<ChakraProvider value={defaultSystem}>
		<StrictMode>
			<Theme appearance="ligth" colorPalette="blue">
				<App />
			</Theme>
		</StrictMode>
	</ChakraProvider>,
);
