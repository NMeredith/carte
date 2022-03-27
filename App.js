import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { initDb } from './src/helper/db';
import { MainNavigator } from './src/navigation/Navigator';
import buildStore from './src/store/store';

const fetchFonts = async () => {
	await Font.loadAsync({
		'comfortaa': require('./src/assets/fonts/Comfortaa-VariableFont_wght.ttf'),
	})
}

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const store = buildStore();

initDb().then(() => console.log('DB initialized')).catch(e => console.error(`Failed to initialize DB: ${e}`));


export default function App() {
	const [isFontsLoaded, setFontsLoaded] = React.useState(false);
	
	if (!isFontsLoaded) {
		return (
			<AppLoading startAsync={fetchFonts}
				onFinish={() => setFontsLoaded(true)}
				onError={() => console.log('error')} />
		)
	}
	return (
		<Provider store={store}>
			<NavigationContainer>
				<MainNavigator />
			</NavigationContainer>
		</Provider>
	);
}