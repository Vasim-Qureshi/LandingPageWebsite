const products = [
  { id: 1, name: "Modern Ceiling Light", price: "₹2,499", img: "https://img.shopstyle-cdn.com/sim/31/c6/31c63c15af58ee0004aedbfb87fbb401_best/dunelm-erin-frosted-5-light-ceiling-fitting-silver.jpg" },
  { id: 2, name: "Wall Sconce Lamp", price: "₹1,499", img: "https://i.pinimg.com/originals/7a/dc/5d/7adc5da15870d9f91f5ac2bb36b94b6a.jpg" },
  { id: 3, name: "Decorative Table Lamp", price: "₹999", img: "https://i.pinimg.com/originals/5b/33/2b/5b332be3ed867b727df953b16a9c7588.jpg" },
];

const Products = () => (
  <section id="products" className="py-12 px-6 bg-white text-center">
    <h3 className="text-3xl font-bold mb-8 text-yellow-800">Featured Lights</h3>
    <div className="bg-blue-500 border rounded-lg p-6 grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      {products.map((p) => (
        <div key={p.id} className="w-full h-100 sm:mb-24 bg-amber-300 border rounded-lg p-4 shadow hover:scale-105 transition">
          <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-lg"/>
            <h4 className="mt-4 font-semibold text-lg text-blue-50">{p.name}</h4>
            <p className="text-blue-50 mt-1">{p.price}</p>
            <button className="mt-2 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 hover:text-white transition">Add to Cart</button>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
