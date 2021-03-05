import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Linking } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorageService from "../GetAmdSetOnLocalStorage";

import {
  Container,
  BookImage,
  SeeMore,
  SeeMoreText,
  BuyThis,
  BuyThisText,
  AddWishlist,
  WishlistText,
} from "./styles";

const Bookcard = ({ book, wishlist, setWishlist }) => {
  console.log(wishlist);

  const asyncStorageService = new AsyncStorageService();
  const { id, saleInfo, volumeInfo } = book;
  const [seeMore, SetSeeMore] = useState(false);

  const [isFavorite, setFavorite] = useState(
    wishlist.some((wishlistItem) => wishlistItem.book.id === id)
  );

  const handleAddToWishList = useCallback(
    async (isFavorite, setWishlist) => {
      if (isFavorite) {
        const filtredWishlist = wishlist.filter(
          (wishlist) => wishlist.book.id != id
        );
        setWishlist(filtredWishlist);
        setFavorite(false);
        await asyncStorageService.setValues(wishlist);
      } else {
        setWishlist([{ book }, ...wishlist]);
        await asyncStorageService.setValues(wishlist);
        setFavorite(true);
      }
    },
    [isFavorite]
  );

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

      <AddWishlist
        onPress={async () => await handleAddToWishList(isFavorite, setWishlist)}
      >
        <WishlistText> Add to wishlist</WishlistText>
      </AddWishlist>
    </View>
  );
};

export default Bookcard;
