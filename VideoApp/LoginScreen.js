import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "YOUR_EXPO_GOOGLE_CLIENT_ID", // Expo uses a different client ID
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => navigation.navigate("VideoList"))
        .catch((error) => console.error("Login Error", error));
    }
  }, [response]);

  return (
    <View>
      <Button title="Login with Google" onPress={() => promptAsync()} />
    </View>
  );
}
