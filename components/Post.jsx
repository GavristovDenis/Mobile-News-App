import styled from "styled-components/native";

import { View, Text } from "react-native";

const PostView = styled.View`
display:flex;
flex-direction:row;
padding:15px;
margin-top:10px;
margin-bottom:10px;
background-color: rgb(247, 245, 245)
border-width:1px;
border-color:rgb(250, 250, 250);
border-style:solid;
shadowColor: '#171717';
    shadowOffset: {width: -2, height: 4};
    shadowOpacity: 0.2
`;
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 12px;
`;
const PostTitle = styled.Text`
  font-size: 20px;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;
const PostDetails = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Post = ({ title, imageUrl }) => {
  return (
    <View>
      <PostView>
        <PostImage
          source={{
            uri: imageUrl,
          }}
        />
        <PostDetails>
          <PostTitle>{title}</PostTitle>
        </PostDetails>
      </PostView>
    </View>
  );
};
