import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview"; // WebView for video playback
export default function VideoDetailScreen({ route }) {
  const { video } = route.params;
  const navigation = useNavigation(); // ✅ Fix: Ensure navigation is available

  useFocusEffect(
    useCallback(() => {
      return () => {
        console.log("VideoDetailScreen Unmounted");
      };
    }, [])
  );

  return (
    <Container>
      {/* Back Button at the Top */}
      <BackButton onPress={() => navigation.navigate("VideoList")}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </BackButton>

      <Title>{video.title}</Title>
       <VideoContainer>
        <WebView
          source={{ uri: video.url.replace("watch?v=", "embed/") }} // Converts YouTube URL to embed format
          style={{ flex: 1 }}
          allowsFullscreenVideo
        />
      </VideoContainer>

    </Container>
  );
}

// Styled Components
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  padding: 20px;
`;

// ✅ Fix: Use TouchableOpacity without styled-components syntax error
const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 10;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 60px;
  margin-bottom: 10px;
  text-align: center;
`;

const VideoContainer = styled.View`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;