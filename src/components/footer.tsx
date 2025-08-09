
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-[#93c2d4] text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Nelis Global Boutique */}
          <div className="space-y-4">
            <Logo useDarkText={true} />
            <p className="text-sm text-gray-700">
              Premium natural herbal teas and dried fruits from Sri Lanka, crafted with care for your wellness.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-700 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary">About</Link></li>
              <li><Link href="/products" className="text-gray-700 hover:text-primary">Products</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-700">info@nelisglobal.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-700">+94 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-700">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-700 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} Nelis Global Boutique. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
