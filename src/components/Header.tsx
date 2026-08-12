import React from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Home, Camera } from 'lucide-react';

export function Header() {
  return (
    <header className="absolute top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto border border-secondary-500/60 rounded-full px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Custom 3D Logo Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center transform -rotate-12">
            <div className="absolute top-0 right-0 w-4 h-4 bg-primary-500 skew-y-30 origin-bottom-right" />
            <div className="absolute bottom-0 left-0 w-4 h-6 bg-secondary-500 skew-y-[-30deg] origin-top-left" />
            <div className="absolute bottom-0 right-0 w-4 h-6 bg-black skew-y-30 origin-top-right" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-black">
            Reelmatic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#examples" className="text-sm font-bold text-black hover:text-black/70 transition-colors">
            Examples
          </Link>
          <Link href="#features" className="text-sm font-bold text-black hover:text-black/70 transition-colors">
            Features
          </Link>
          <div className="relative group cursor-pointer flex items-center space-x-1 py-2">
            <span className="text-sm font-bold text-black group-hover:text-black/70 transition-colors">
              Use Cases
            </span>
            <ChevronDown className="w-4 h-4 text-black group-hover:text-black/70" />

            {/* Hover Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-70 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
              <div className="flex items-start p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-purple flex items-center justify-center mr-3 shrink-0">
                  <Home className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black mb-0.5">For Real Estate Agents</h4>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">Create videos from photos in minutes</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-50 my-1" />
              <div className="flex items-start p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-pastel-pink flex items-center justify-center mr-3 shrink-0">
                  <Camera className="w-5 h-5 text-brand-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black mb-0.5">For Photographers</h4>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight">Save time and generate more revenue</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="#pricing" className="text-sm font-bold text-black hover:text-black/70 transition-colors">
            Pricing
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-sm font-bold text-black hover:text-black/70 transition-colors hidden md:block">
            Login
          </Link>
          <Link href="/signup" className="text-sm font-bold bg-black text-white px-6 py-3 rounded-full hover:bg-black/80 transition-colors flex items-center">
            Get Started
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>
    </header>
  );
}
