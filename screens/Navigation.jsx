import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { FullPost } from "./FullPost";
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Новости" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{ title: "Новость" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
