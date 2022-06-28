import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorite: 0,
  addFavorite: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  itemIsFavorite: (meetUpId) => {},
});

export function FavoriteContextProvider(props) {
  const [userList, setUserList] = useState([]);
  const context = {
    favorites: userList,
    totalFavorite: userList.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  function addFavoriteHandler(favoriteMeetUp) {
    setUserList((prev) => {
      return prev.concat(favoriteMeetUp);
    });
  }
  function removeFavoriteHandler(meetUpId) {
    userList.filter((meetUp) => {
      meetUp.id !== meetUpId;
    });
  }
  function itemIsFavoriteHandler(meetUpId) {
    userList.some((meetUp) => {
      meetUp.id == meetUpId;
    });
  }
  <FavoriteContext.Provider value={context}>
    {props.children}
  </FavoriteContext.Provider>;
}
export default FavoriteContext;
