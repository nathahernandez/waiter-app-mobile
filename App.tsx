import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import { THEME } from "./src/styles/theme";
import { fonts } from "./src/styles/fonts";
// import Routes from "./src/routes";
import FontsLoading from "./src/components/FontsLoading";
import Home from "./src/screens/Home";

export default function App() {

	const [ loaded ] = useFonts(fonts);

	return (
		<SafeAreaView>
			<ThemeProvider theme={THEME}>
				{loaded ? <Home/> : <FontsLoading />}
				<StatusBar style="dark" />
			</ThemeProvider>
		</SafeAreaView>
	);
}