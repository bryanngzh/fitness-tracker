import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { SIZES } from "./constants/theme";
import AddWorkoutScreen from "./screens/add-workout/AddWorkoutScreen";
import HomeScreen from "./screens/home/HomeScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomHeader = ({ title }) => (
  <SafeAreaView style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </SafeAreaView>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "account-circle-outline";
          }

          // Return your tab icon component
          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const UserStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <CustomHeader title="FitnessTracker" />,
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="AddWorkout" component={AddWorkoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
  },
  headerText: {
    fontSize: SIZES.LARGE,
    fontFamily: "Title-Bold",
  },
});

export default UserStack;
