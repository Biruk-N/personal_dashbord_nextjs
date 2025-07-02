'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/nav-items";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="  fixed left-0 top-0 h-screen w-56 z-40 flex flex-col gap-2 bg-sidebar p-4">
      <div className="flex h-[60px] items-center px-2">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl">Dashboard</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto">
        <nav className="grid items-start gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  pathname === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 