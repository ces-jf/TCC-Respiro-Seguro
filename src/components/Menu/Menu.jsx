import { Entypo } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../../Screens/Home/Home";

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          drawerStatusBarAnimation: "slide",
          drawerIcon: ({ focused, size }) => (
            <Entypo name="list" size={size} color={focused ? "#7cc" : "#ccc"} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Perguntas"
        component={Perguntas}
        options={{
          title: "Perguntas",
          drawerIcon: ({ focused, size }) => (
            <AntDesign
              name="form"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}
