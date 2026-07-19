import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black mb-4">LISHAYZ</h2>

            <p className="text-gray-400 leading-7">
              Fresh food, great coffee, and unforgettable moments.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#">
                <FaInstagram size={24} />
              </a>

              <a href="#">
                <FaTiktok size={24} />
              </a>

              <a href="#">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/order-online">Order Online</a>
              </li>

              <li>
                <a href="/catering">Catering</a>
              </li>

              <li>
                <a href="/food-network">Food Network</a>
              </li>

              <li>
                <a href="/gallery">Gallery</a>
              </li>

              <li>
                <a href="/sitemap">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">Contact Us</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-500" />
                <p>
                  7/11 Short St,
                  <br />
                  Southport QLD 4215,
                  <br />
                  Australia
                </p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-red-500 mt-1" />
                <a
                  href="tel:0755329893"
                  className="hover:text-red-500 transition-colors"
                >
                  0755329893
                </a>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-red-500 mt-1" />
                <a
                  href="mailto:cafelishayz@gmail.com"
                  className="hover:text-red-500 transition-colors"
                >
                  cafelishayz@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          © 2026 LISHAYZ Cafe. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
