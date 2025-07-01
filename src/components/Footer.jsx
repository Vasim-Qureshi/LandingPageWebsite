const Footer = () => {
  return (
    <footer className="bg-yellow-900 text-yellow-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h4 className="text-xl font-bold mb-2">GlowNest Lights</h4>
          <p>Your trusted lighting partner for home and office decor. Designed to shine, built to last.</p>
        </div>
        
        {/* Contact Info */}
        <div id="contact">
          <h4 className="text-xl font-bold mb-2">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              📞 <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a>
            </li>
            <li>
              📧 <a href="mailto:info@glownest.in" className="hover:underline">info@glownest.in</a>
            </li>
            <li>
              🌐 <a href="https://glownest.in" target="_blank" className="hover:underline">www.glownest.in</a>
            </li>
          </ul>
        </div>
        
        {/* Address */}
        <div>
          <h4 className="text-xl font-bold mb-2">Visit Us</h4>
          <p>
            GlowNest Showroom<br />
            123 Light Avenue,<br />
            Green City, Mumbai - 400001<br />
            Maharashtra, India
          </p>
        </div>
      </div>

      <hr className="my-6 border-yellow-700" />

      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} GlowNest Lights. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
