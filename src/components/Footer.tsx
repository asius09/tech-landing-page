import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-background pt-20 pb-10 overflow-hidden relative">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-2 pr-8">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl text-background">
                <span className="text-primary">Reel</span>matic
              </span>
            </Link>
            <p className="text-background/60 mb-6 max-w-sm">
              The AI-powered video marketing studio built exclusively for modern real estate professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors"><FaFacebook className="w-5 h-5" /></a>
              <a href="#" className="text-background/60 hover:text-background transition-colors"><FaTwitter className="w-5 h-5" /></a>
              <a href="#" className="text-background/60 hover:text-background transition-colors"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-background/60 hover:text-background transition-colors"><FaLinkedin className="w-5 h-5" /></a>
              <a href="#" className="text-background/60 hover:text-background transition-colors"><FaYoutube className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-background">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Features</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Updates</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-background">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Video Tutorials</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-background">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-background/60 hover:text-background transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Reelmatic Inc. All rights reserved.</p>
        </div>
      </div>
      
      {/* Giant watermark text */}
      <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 text-[15vw] font-black text-background/[0.03] select-none pointer-events-none whitespace-nowrap">
        Reelmatic
      </div>
    </footer>
  );
}
