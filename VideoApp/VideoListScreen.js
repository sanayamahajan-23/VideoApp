import React, { useState,useCallback } from "react";
import { View, TextInput, FlatList, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
const videos = [
  {
    id: "1",
    title: "React Native Tutorial",
    thumbnail: "https://i.ytimg.com/vi/0-S5a0eXPoc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
  },
  {
    id: "2",
    title: "JavaScript Crash Course",
    thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
  },
];

export default function VideoListScreen({ navigation }) {
     const [search, setSearch] = useState("");

      useFocusEffect(
    useCallback(() => {
      return () => {
        console.log("VideoListScreen Unmounted"); // 👈 This runs when the screen is left
      };
    }, [])
  );
  return (
    <Container>
         <TextInput
        placeholder="Search videos..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        style={{ height: 40, borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Title>Videos</Title>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card onPress={() => navigation.navigate("VideoDetail", { video: item })}>
            <Thumbnail source={{ uri: item.thumbnail }} />
            <TextContainer>
              <VideoTitle>{item.title}</VideoTitle>
            </TextContainer>
          </Card>
        )}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #121212;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

const Card = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #1e1e1e;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
`;

const Thumbnail = styled.Image`
  width: 100px;
  height: 80px;
`;

const TextContainer = styled.View`
  flex: 1;
  padding: 10px;
`;

const VideoTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
