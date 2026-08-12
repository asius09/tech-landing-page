import React from 'react';
import Link from 'next/link';

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block text-xl">
              <span className="text-primary">Reel</span>matic
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>
            <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="hidden sm:inline-flex" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
