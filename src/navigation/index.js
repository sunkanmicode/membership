// import React from "react"
import  React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from './HomeNavigaton';

const AppNarContainer = ()=>{
  
      return (
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      );
}
export default AppNarContainer;