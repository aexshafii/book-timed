import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Linking } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import {
  Container,
  BookImage,
  SeeMore,
  SeeMoreText,
  BuyThis,
  BuyThisText,
} from "./styles";

const Bookcard = ({ book }) => {
  const { id, saleInfo, volumeInfo } = book;
  const [seeMore, SetSeeMore] = useState(false);

  const visibility = seeMore ? "flex" : "none";
  const { thumbnail } = volumeInfo.imageLinks;

  return (
    <View>
      <Text>{volumeInfo.title}</Text>
      {volumeInfo.authors !== undefined &&
        volumeInfo.authors.map((author) => (
          <Text key={`${id}_${author}`}>{author}</Text>
        ))}
      <Text>{volumeInfo.pageCount}</Text>

      <Text>{volumeInfo.publishedDate}</Text>

      <BookImage source={{ uri: thumbnail }} />

      <Text style={{ display: visibility }}>{volumeInfo.description}</Text>

      <SeeMore onPress={() => SetSeeMore(!seeMore)}>
        <SeeMoreText>
          {" "}
          Description - See {seeMore ? "Less" : "More"}
        </SeeMoreText>
      </SeeMore>

      {saleInfo.saleability !== "NOT_FOR_SALE" && (
        <BuyThis onPress={() => Linking.openURL(saleInfo.buyLink)}>
          <BuyThisText>
            {saleInfo.saleability !== "FREE" ? "Buy this book" : "Free Ebook"}
          </BuyThisText>
        </BuyThis>
      )}
    </View>
  );
};

export default Bookcard;
