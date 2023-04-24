import { View } from "react-native";
import { Post } from "../components/Post";
import { Alert } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { RefreshControl } from "react-native";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components/native";

export const Header = styled.View`
  background-color: white;
  height: 60px;
`;

export const HomePage = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const FetchData = () => {
    setIsLoading(true);
    axios
      .get("https://64466634ee791e1e29fdf9ae.mockapi.io/articles")
      .then(({ data }) => setItems(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
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
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={FetchData} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Post title={item.title} imageUrl={item.imageUrl} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
