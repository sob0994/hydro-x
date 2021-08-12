import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(false);
	const changeMode = () => {
		setMode(!mode);
	};

	return (
		<ThemeContext.Provider value={{ mode, changeMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
