import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Excavator</span>
              <span className="text-yellow-400">Foot</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Patented ground stabilization technology for excavators.
            </p>
            <p className="text-gray-500 text-xs">
              Patent Application: 18/594,097
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact?inquiry=licensing" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Licensing Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Related Sites */}
          <div>
            <h4 className="text-white font-semibold mb-4">More by Kable Record</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://osqr.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  OSQR <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://fourthgenformula.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Fourth Gen Formula <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://kablerecord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Kable Record <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Excavator Foot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
