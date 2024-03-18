import Navigation from "./Navigation.jsx";
import SecondNavigation from "./SecondNavigation.jsx";
import { useGetFiltersProductsQuery } from "../redux/api/productApiSlice.js";
import { useGetAllCategoriesQuery } from "../redux/api/categoryApiSlice.js";
import ProductCard from "./product/ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setProducts,
  setChecked,
} from "../redux/features/shop/shopSlice.js";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Products = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { products, categories, checked, radio } = useSelector(
    (state) => state.shop
  );

  const { data: categoriesQuery, isLoading: loadingCategories } =
    useGetAllCategoriesQuery();

  const { data: filteredProducts, isLoading: loadingProducts } =
    useGetFiltersProductsQuery({ checked, radio });

  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    if (!loadingCategories) {
      dispatch(setCategories(categoriesQuery));
    }
  });

  useEffect(() => {
    if (!checked.length || !radio.length) {
      if (!loadingProducts) {
        const filteredProductsQuery = filteredProducts.filter((product) => {
          return product.price.toString().includes(priceFilter);
        });
        dispatch(setProducts(filteredProductsQuery));
      }
    }
  }, [checked, radio, filteredProducts, priceFilter, dispatch]);

  const handleBrandClick = (brand) => {
    const filterByBrand = filteredProducts.filter(
      (product) => product.brand === brand
    );
    dispatch(setProducts(filterByBrand));
  };

  const handleCheck = (value, id) => {
    const updatedChecked = value
      ? [...checked, id]
      : checked.filter((c) => c !== id);
    dispatch(setChecked(updatedChecked));
  };

  // const brands = [
  //   ...Array.from(
  //     new Set(
  //       filteredProducts
  //          ?.map((product) => product.brand.name)
  //         .filter((brand) => brand !== undefined)
  //     )
  //   ),
  // ];

  return (
    <div className="h-[100vh] ">
      <Navigation />
      <SecondNavigation />
      {/* <div className="flex w-[100wh] sticky top-[53px] "> */}
      <div className="flex w-[100wh] h-full ">
        <div className="bg-gray-50 w-[15%] border">
          <h1 className="mx-10 my-6 font-bold text-xl">Filter</h1>
          <hr />

          <div className="m-2 flex flex-col">
            <h1 className="font-medium mb-2">Filter By Category</h1>
            <hr />
            {categories?.map((category) => (
              <div key={category._id} className="mx-2">
                <div className="gap-2 flex my-1 ">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="cat"
                    id={category._id}
                    onChange={(e) =>
                      handleCheck(e.target.checked, category._id)
                    }
                  />
                  <label className="cursor-pointer " htmlFor={category._id}>
                    {category.name}
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="m-2 flex flex-col">
            <hr />
            <h1 className="font-medium my-2">Filter By Brand</h1>
            <hr />
            {brands?.map((brand) => (
              <div key={brand} className="mx-2">
                <div className="gap-2 flex  my-1 ">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="brand"
                    id={brand._id}
                    onChange={() => {handleBrandClick(brand)}}
                  />
                  <label className="cursor-pointer " htmlFor={brand._id}>
                    {brand.name}
                  </label>
                </div>
              </div>
            ))}
          </div> */}

          <div className="m-2 flex flex-col">
            <hr />
            <h1 className="font-medium my-2">Filter By Price</h1>
            <hr />
            <div className="my-2">
              <input
                type="text"
                placeholder="Enter price..."
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="bg-gray-200 w-full py-2 pl-2 rounded"
              />
            </div>
            <div className="my-2">
              <button
                className="bg-black text-white w-full py-2 rounded"
                onClick={() => location.reload()}
              >
                Reset to default
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white w-[85%] ">
          <div className="flex justify-between sticky top-10 bg-white z-10 border-b-2">
            {!products?.length ? (
              <h1 className="mx-10 my-6 font-bold text-xl">There Is No Products In Stock</h1>
            ) : (
              <h1 className="mx-10 my-6 font-bold text-xl">Our Products</h1>
            )}

            <div className="flex items-center mr-10">
              <input
                type="text"
                placeholder="Search products here..."
                className="border p-2 outline-none w-[300px] rounded"
                onChange={(e) => setSearch(e.target.value)}
                id="search-input"
              />
              <button
                className="border h-[42px] w-[42px] flex items-center justify-center bg-gray-800 text-white"
                onClick={() => document.getElementById("search-input").focus()}
              >
                <IoSearchSharp />
              </button>
            </div>
          </div>

          <hr />
          <div className=" w-full h-full flex flex-wrap">
            {products
              ?.filter((item) =>
                search.toLocaleLowerCase() === ""
                  ? item
                  : item.name.toLocaleLowerCase().includes(search)
              )
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Products;
