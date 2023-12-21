import * as Font from "expo-font";
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

  return <RootNavigation />;
};

export default App;
