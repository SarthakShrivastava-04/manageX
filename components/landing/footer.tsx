"use client";
import { Users } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "About",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
  {
    title: "API",
    href: "https://jsonplaceholder.typicode.com/users"
  },
];

export default function FooterSection() {
  return (
    <footer className="border-b bg-zinc-50 dark:bg-zinc-950 pt-12 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-12 justify-between">
          <div className="md:col-span-2">
            <Link
              href="/"
              aria-label="go home"
              className="flex items-center space-x-1"
            >
              <Users className="h-6 w-6 text-primary" />
              <span className="text-xl">ManageX</span>
            </Link>
          </div>

          <div className="flex gap-4 md:gap-12 sm:gap-8">
            {links.map((link, index) => (
              <div key={index} className="space-y-8 text-sm">
                <Link
                  href={link.href}
                  className="text-zinc-700 dark:text-muted-foreground hover:text-primary block duration-150"
                >
                  <span>{link.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} ManageX, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
              Made by Sarthak
            </span>
            <Link
              href="https://github.com/SarthakShrivastava-04/Managex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary block"
            ></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
