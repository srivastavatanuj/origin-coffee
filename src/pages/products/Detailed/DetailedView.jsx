import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "../../../store/store";
import OrderLogic from "../productsLogic";
import useApi from "../../../APIs/useApi";

function DetailedView(productname, data = []) {
  const { state } = useLocation();
  const { loginStatus } = useStore();
  const { fetchMyCatalogProduct } = OrderLogic();
  const { product: initialProduct } = state || {};
  const [product, setProduct] = useState(initialProduct);
  const [variants, setVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart, getBasicProfile } = useApi();

  useEffect(() => {
    fetchMyCatalogProduct().then((res) => {
      setProduct(res.data.product);
      setVariants(res.data.variants);
    });
  }, []);

  const handleAddItem = () => {
    if (selectedVariant == null) {
      alert("select variant first");
    }
    const data = {
      quantity: quantity,
      productVariant: selectedVariant.id,
    };
    addItemToCart(data)
      .then((res) => {
        getBasicProfile();
        alert("Added to cart");
      })
      .catch((error) => {
        alert("select variant first");
      });
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]?.image);
  const [showCategories, setShowCategories] = useState(false);
  const [showBrandDetails, setShowBrandDetails] = useState(false);
  const [showVariantDetails, setShowVariantDetails] = useState(false);

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= stock) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    if (quantity < selectedVariant.stock_inventory) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="pt-[150px] bg-[#333232]"></div>

      <div className="flex flex-col md:flex-row gap-20 px-12 py-10 min-h-[100vh] h-full">
        {/* Left Section - Images */}
        <div className="w-full md:w-1/2 flex gap-10">
          <div className="flex flex-col gap-3  min-w-[70px]">
            {product.images.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={img.alt_text}
                onClick={() => setSelectedImage(img.image)}
                className={`w-16 h-16 object-cover cursor-pointer border-2 rounded ${
                  selectedImage === img.image
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="w-full">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-[80%] h-[400px] object-cover rounded shadow"
            />
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <div>
            <strong>Status:</strong> {product.status}
          </div>
          <div>
            <strong>Barcode:</strong> {product.barcode}
          </div>
          {loginStatus && (
            <div>
              <strong>Price:</strong> $
              {selectedVariant ? selectedVariant.price : "Select variant first"}
            </div>
          )}
          <div>
            <div className="flex space-x-4 items-center">
              <strong>Variants:</strong>
              {variants.map((item) => (
                <div
                  key={item.id}
                  className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ${
                    selectedVariant === item
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => handleVariantClick(item)}
                >
                  {item.size}
                </div>
              ))}
            </div>
            {loginStatus && (
              <div>
                <div
                  className={`flex items-center mt-5 gap-3 ${
                    selectedVariant == null && "hidden"
                  }`}
                >
                  <strong>Quantity:</strong>
                  <div>
                    <button
                      onClick={handleDecrement}
                      className="bg-gray-200 px-5 py-3 rounded-4xl cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      max={selectedVariant?.stock_inventory || 0}
                      className="mx-3 p-2 w-12 text-center border rounded"
                    />
                    <button
                      onClick={handleIncrement}
                      className="bg-gray-200 px-5 py-3 rounded-4xl cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="font-bold py-3 px-6 border-2 rounded mt-5 cursor-pointer bg-[#333232] text-white"
                  onClick={handleAddItem}
                >
                  Add to cart
                </button>
              </div>
            )}
          </div>

          <div>
            <strong>Supplier Note:</strong>
            <p className="text-gray-600 mt-1 whitespace-pre-line">
              {product.supplier_note}
            </p>
          </div>

          {/* Variant Dropdown */}
          <div className={`mt-4 ${!loginStatus && "hidden"}`}>
            <button
              onClick={() => setShowVariantDetails(!showVariantDetails)}
              className="font-semibold text-lg text-left w-full bg-gray-200 px-4 py-2 rounded shadow"
            >
              Variant Details
            </button>
            {showVariantDetails && (
              <div className="bg-white mt-2 rounded p-3 space-y-4">
                {variants.map((detail) => (
                  <div key={detail.id} className="flex items-start gap-4">
                    <div>
                      <div className="font-medium">Size: {detail.size}</div>
                      <div className="text-sm text-gray-600">
                        Weight: {detail.weight} {detail.weight_unit}
                      </div>
                      <div className="text-sm text-gray-600">
                        Price: ${detail.price}
                      </div>
                      <div className="text-sm text-gray-600">
                        Dimensions: {detail.packer_length.toFixed(2)} x{" "}
                        {detail.packer_width.toFixed(2)} x{" "}
                        {detail.packer_height.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600">
                        Stock Inventory: {detail.stock_inventory}
                      </div>
                      <div className="text-sm text-gray-600">
                        Expiry Date: {detail.expiry}
                      </div>
                      <div className="text-sm text-gray-600">
                        Product ID: {detail.product}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div className="mt-4">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="font-semibold text-lg text-left w-full bg-gray-200 px-4 py-2 rounded shadow"
            >
              Categories
            </button>
            {showCategories && (
              <div className="bg-white mt-2 rounded p-3 space-y-4">
                {product.category.map((cat) => (
                  <div key={cat.id} className="flex items-start gap-4">
                    <div>
                      <img
                        src={cat.logo}
                        alt={cat.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{cat.name}</div>
                      <div className="text-sm text-gray-600">
                        {cat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Brand Dropdown */}
          <div className="mt-4">
            <button
              onClick={() => setShowBrandDetails(!showBrandDetails)}
              className="font-semibold text-lg text-left w-full bg-gray-200 px-4 py-2 rounded shadow"
            >
              Brand: {product.brand?.name}
            </button>
            {showBrandDetails && (
              <div className="bg-white mt-2 rounded p-3 flex gap-5">
                <div>
                  <img
                    src={product.brand.logo}
                    alt={product.brand.name}
                    className="w-12 h-12 mb-2 object-contain"
                  />
                </div>

                <div>
                  <div>
                    <strong>Name:</strong> {product.brand.name}
                  </div>
                  <div>
                    <strong>Country:</strong> {product.brand.country_of_origin}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedView;
