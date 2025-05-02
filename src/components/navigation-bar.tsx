
"use client";

import Link from 'next/link';
import { Mountain, Info } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavigationBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Mountain className="w-6 h-6" />
          <span>Chilean Terrains</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/') ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
              isActive('/about') ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Info className="w-4 h-4" />
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
