import { useGetAllProductsQuery } from "../redux/api/productApiSlice";
import ProductCard from "./product/ProductCard.jsx";

const TopProducts = () => {
  const { data: topProducts } = useGetAllProductsQuery();
  return (
    <section className="mt-10 mb-25 p-10 w-3/4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ">
            Check Out Our Top Products
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Discover our top-rated products and elevate your shopping.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {topProducts?.map((arrival) => (
            <ProductCard key={arrival._id} product={arrival} />
          ))}
        </div>
    </section>
  );
}

export default TopProducts;
