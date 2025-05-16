import React, { useEffect } from "react";
import orderBanner from "../../assets/orderBanner.png";
import ProductsLogic from "./productsLogic";
import { useStore } from "../../store/store";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Products() {
  const { allProducts, fetchAllProducts, fetchMyCatalog, setPage, page } =
    ProductsLogic();
  const { loginStatus } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    loginStatus ? fetchMyCatalog() : fetchAllProducts(); // or fetchMyCatalog() based on logic
  }, [page, loginStatus]);

  return (
    <div>
      <div
        className="h-[70vh] flex justify-center items-center pt-[120px] brightness-75"
        style={{
          backgroundImage: `url(${orderBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-white text-center leading-[8vw] "
          style={{ fontFamily: "Rubik One" }}
        >
          <p style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}>All Our Products</p>
        </div>
      </div>

      <div className="bg-[var(--theme-color)] sm:p-10 p-5">
        {/* <h1>House Blends</h1> */}
        <div
          className="grid gap-8 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,20%))",
          }}
        >
          {allProducts.results?.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() =>
                navigate(
                  `/products/${loginStatus ? product.product : product.sku}`,
                  {
                    state: { product },
                  }
                )
              }
            >
              <img
                src={product.images[0].image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-8 flex items-center text-white justify-center">
          <span>
            <GrFormPrevious
              className="cursor-pointer"
              onClick={() => {
                page > 1 && setPage(page - 1);
              }}
            />
          </span>
          <span>
            {Array.from(
              { length: Math.ceil(allProducts.count / 8) },
              (_, i) => (
                <span
                  key={i}
                  className={`p-2 border rounded-sm mx-3 cursor-pointer ${
                    page === i + 1 ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </span>
              )
            )}
          </span>
          <span>
            <GrFormNext
              className="cursor-pointer"
              onClick={() => {
                page < Math.ceil(allProducts.count / 8) && setPage(page + 1);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Products;
