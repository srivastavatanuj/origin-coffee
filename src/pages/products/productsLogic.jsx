import { useQuery } from "react-query";
import useApi from "../../APIs/useApi";
import { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import { useParams } from "react-router-dom";

const OrderLogic = () => {
  const { getAllProducts, getMyCatalog, getMyCatalogProduct } = useApi();
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1);
  const params = useParams();

  const { refetch: fetchAllProducts } = useQuery({
    queryKey: ["allProducts", page],
    queryFn: () =>
      getAllProducts(page).then((res) => {
        console.log(page);
        setAllProducts(res);
        return res;
      }),
    enabled: false,
  });

  const { refetch: fetchMyCatalog } = useQuery({
    queryKey: ["myCatalog"],
    queryFn: () =>
      getMyCatalog().then((res) => {
        setAllProducts(res);
        return res;
      }),
    enabled: false,
  });

  const { refetch: fetchMyCatalogProduct } = useQuery({
    queryKey: ["myCatalog"],
    queryFn: () =>
      getMyCatalogProduct(params.str).then((res) => {
        return res;
      }),
    enabled: false,
  });

  return {
    allProducts,
    fetchAllProducts,
    fetchMyCatalog,
    fetchMyCatalogProduct,
    setPage,
    page,
  };
};

export default OrderLogic;
