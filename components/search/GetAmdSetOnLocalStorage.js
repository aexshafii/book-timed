import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AsyncStorageService {
  async setValues(data) {
    try {
      await AsyncStorage.setItem("@bookFinderWishList", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  async getValue() {
    try {
      const wishList = await AsyncStorage.getItem("@bookFinderWishList");
      return wishList != null ? JSON.parse(wishList) : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
