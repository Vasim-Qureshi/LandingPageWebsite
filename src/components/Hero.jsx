import heroImg from '../assets/hero-bg.jpg'; // Ensure you have this image in your assets folder

const Hero = () => (
  <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="h-full flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-5xl font-bold mb-4">Brighten Your Home in Style</h2>
      <p className="text-lg mb-6">Premium lighting solutions for every room</p>
      <a href="#products" className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition">Shop Now</a>
    </div>
  </section>
);

export default Hero;
