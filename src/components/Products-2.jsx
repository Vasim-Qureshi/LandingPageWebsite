import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "Modern Ceiling Light",
    price: "₹2,499",
    img: "https://img.shopstyle-cdn.com/sim/31/c6/31c63c15af58ee0004aedbfb87fbb401_best/dunelm-erin-frosted-5-light-ceiling-fitting-silver.jpg",
  },
  {
    id: 2,
    name: "Wall Sconce Lamp",
    price: "₹1,499",
    img: "https://i.pinimg.com/originals/7a/dc/5d/7adc5da15870d9f91f5ac2bb36b94b6a.jpg",
  },
  {
    id: 3,
    name: "Table Lamp",
    price: "₹999",
    img: "https://i.pinimg.com/originals/5b/33/2b/5b332be3ed867b727df953b16a9c7588.jpg",
  },
  {
    id: 4,
    name: "LED Strip Light",
    price: "₹699",
    img: "https://i.pinimg.com/originals/5b/33/2b/5b332be3ed867b727df953b16a9c7588.jpg",
  },
  {
    id: 5,
    name: "Hanging Pendant Light",
    price: "₹1,999",
    img: "https://i.pinimg.com/originals/5b/33/2b/5b332be3ed867b727df953b16a9c7588.jpg",
  },
];

const ProductsSlider = () => {
  return (
    <section id="products" className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-yellow-800 mb-8">Our Best Sellers</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="bg-yellow-50 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-yellow-700 font-medium">{p.price}</p>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
