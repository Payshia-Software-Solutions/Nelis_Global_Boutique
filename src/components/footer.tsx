
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-[#93c2d4] text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Nelis Global Boutique */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Premium natural herbal teas and dried fruits from Sri Lanka, crafted with care for your wellness.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">About</Link></li>
              <li><Link href="/store" className="text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">Online Store</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">Refund & Return Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-primary">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-gray-700 dark:text-gray-400">info@nelisglobal.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-gray-700 dark:text-gray-400">+94 718 885 777</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-gray-700 dark:text-gray-400">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/16w7i6f3Qg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/nelisglobalboutique?igsh=MTkxcWxxNGxlczhhcg==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm text-gray-700 dark:text-gray-400 space-y-2 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Nelis Global Boutique. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a 
              href="https://payshia.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-white hover:underline"
            >
              Payshia Software Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
