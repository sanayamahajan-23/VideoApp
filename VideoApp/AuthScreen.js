import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styled from "styled-components/native";

export default function AuthScreen({ navigation }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }
    Alert.alert("Success", isSignup ? "Account Created!" : "Logged In!");
    navigation.replace("VideoList");
  };

  return (
    <Container>
      <Title>{isSignup ? "Sign Up" : "Login"}</Title>

      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={handleAuth}>
        <ButtonText>{isSignup ? "Sign Up" : "Login"}</ButtonText>
      </Button>

      <SwitchText onPress={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </SwitchText>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 90%;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #333;
  color: white;
`;

const Button = styled.TouchableOpacity`
  background-color: #1db954;
  padding: 15px;
  width: 90%;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const SwitchText = styled.Text`
  color: #bbb;
  margin-top: 15px;
  font-size: 14px;
`;
