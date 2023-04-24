import styled from "styled-components/native";
import { RefreshControl } from "react-native";
import { View } from "react-native";
import { Header } from "./Home";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Text } from "react-native";
import axios from "axios";
import { Alert } from "react-native";

const FullImage = styled.Image`
border-radius:10px;
width:100%
height:250px;
margin-bottom:20px
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
export const FullPost = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { id, title } = route.params;
  const FetchData = () => {
    navigation.setOptions({
      title,
    });
    setIsLoading(true);
    axios
      .get("https://64466634ee791e1e29fdf9ae.mockapi.io/articles/" + id)
      .then(({ data }) => setItems(data))
      .then(console.log(items))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить данные");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(FetchData, []);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
        <Text
          style={{
            marginTop: 15,
          }}
        >
          Идёт загрузка...
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <FullImage
        source={{
          uri: items.imageUrl,
        }}
      />
      <PostText>{items.text}</PostText>
    </View>
  );
};
