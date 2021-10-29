import { useEffect, useState } from "react";
import axios from "axios";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("http://localhost:5000/services");
    setItems(result.data);
  };
  return [items, setItems];
};

export default useItems;
