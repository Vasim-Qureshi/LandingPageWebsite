import heroImg from '../assets/hero-bg.jpg'; // Ensure you have this image in your assets folder

const Hero = () => (
  <section className="bg-cover bg-no-repeat bg-center h-screen text-white" style={{ backgroundImage: `url(${heroImg})`, height: '100vh' }}>
    <div className="h-full flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-bold mb-4 2xl:text-9xl xl:text-5xl md:text-4xl sm:text-2xl text-xl">Brighten Your Home in Style</h2>
      <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg mb-6">Premium lighting solutions for every room</p>
      <a href="#products" className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition">Shop Now</a>
    </div>
  </section>
);

export default Hero;
