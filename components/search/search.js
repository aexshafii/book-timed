import React from "react";
import {
  IMG,
  Container,
  SearchBooks,
  InputSearch,
  ContainerInput,
  TitleText,
} from "./style";
import api from "axios";
import BookCard from "./bookCard/index";
import { StyleSheet, Text, ScrollView } from "react-native";

import { useState } from "react";
import { useCallback } from "react";
import { ActivityIndicator } from "react-native";
import { useEffect } from "react";
import AsyncStorageService from "./GetAmdSetOnLocalStorage";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const asyncStorageService = new AsyncStorageService();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const value = asyncStorageService.getValue();

    value.then((value) => {
      if (value === null) {
        setWishlist([]);
        return;
      }

      setWishlist(value);
    });
  }, [wishlist]);

  const handleSetSearchValue = useCallback(
    async (text) => setSearchValue(text),
    []
  );

  const handleGetValueFromApi = useCallback(
    async (searchValue) => {
      const apiKey = "AIzaSyCdSyEevxF_s_tiuYUaTnkJbID1LTr7Ig0";
      let url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${apiKey}`;

      if (!searchValue) {
        setError("This field cannot be empty");
        return;
      } else setError("");

      setLoading(true);
      const response = await api.get(url);
      if (response.status != 200) {
        setError("Book not found");
        setLoading(false);
        return;
      }

      setBooks(response.data.items);

      setLoading(false);
    },
    [searchValue]
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 10, alignItems: "center" }}>
      <TitleText>Book finder</TitleText>
      <ContainerInput>
        <InputSearch
          value={searchValue}
          onChangeText={async (text) => await handleSetSearchValue(text)}
        />
      </ContainerInput>
      <SearchBooks
        onPress={async () => await handleGetValueFromApi(searchValue)}
      >
        <TitleText>Search</TitleText>
      </SearchBooks>
      {error.length > 0 && (
        <TitleText style={{ color: "#ffc6d0", fontSize: 20 }}>
          {" "}
          {error}{" "}
        </TitleText>
      )}

      {loading === true && (
        <ActivityIndicator size="large" color="#fff" style={{ margin: 20 }} />
      )}

      {books != undefined &&
        books.length > 0 &&
        books.map((book, index) => (
          <BookCard
            wishlist={wishlist}
            setWishlist={setWishlist}
            book={book}
            key={book.id}
          />
        ))}

      {books == undefined && (
        <TitleText style={{ color: "#ffc6d0", fontSize: 20 }}>
          We don't find any book with this title
        </TitleText>
      )}
    </ScrollView>
  );
};

export default Search;
