// App.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Cards } from "./components";
import api from "./services/api";
import { setData } from "./states/card/cardsSlice.js";

const App = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await api.get("v1/c/en/subcategory/1");
      const data = res.data.cards;

      dispatch(setData(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Cards />
    </>
  );
};

export default App;
