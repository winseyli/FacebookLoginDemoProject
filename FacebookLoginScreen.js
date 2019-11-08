import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
} from 'react-native';
import { LoginManager } from "react-native-fbsdk";

const onLoginPress = () => {
  LoginManager.logInWithPermissions(["public_profile", "email", "user_gender", "user_location"]).then(
    function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log(
          "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
    },
    function(error) {
      console.log("Login fail with error: " + error);
    }
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          title="Login"
          onPress={onLoginPress}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
