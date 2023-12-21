import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import RootNavigation from "./src";

const fetchFonts = () => {
  return Font.loadAsync({
    "Title-Bold": require("./assets/fonts/title-bold.otf"),
    "Title-Regular": require("./assets/fonts/title-regular.otf"),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#000000" />
      <RootNavigation />
    </>
  );
};

export default App;
