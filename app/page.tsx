"use client";

import { useState } from "react";
import {
  CalendarDays,
  Coffee,
  Gift,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react";

const links = [
  {
    title: "View Menu",
    subtitle: "Explore our drinks & desserts",
    icon: Coffee,
    href: "#",
  },
  {
    title: "Reserve Meeting Room",
    subtitle: "Book your private meeting space",
    icon: CalendarDays,
    href: "https://calendar.app.google/VcLrrtFTd5Xu9Szt8",
  },
  {
    title: "Loyalty Card",
    subtitle: "Collect stamps & rewards",
    icon: Gift,
    href: "https://loyalty.is/vk7zb0",
  },
  {
    title: "Find Us",
    subtitle: "Open Google Maps",
    icon: MapPin,
    href: "https://maps.app.goo.gl/2fDqVB2MyFopgjTD6",
  },
  {
    title: "WhatsApp",
    subtitle: "Chat with us instantly",
    icon: MessageCircle,
    href: "https://wa.me/97433805071",
  },
];

const menuImages = [
  "/menu1.png",
  "/menu2.png",
  "/menu3.png",
  "/menu4.png",
  "/menu5.png",
  "/menu6.png",
];

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#6B2733] text-[#F6E8DD]">
      <section className="relative mx-auto flex min-h-screen max-w-md flex-col px-6 py-10">
        <div className="text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#F6E8DD]/20 bg-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <span className="font-serif text-7xl">Q</span>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#F6E8DD]/60">
            Coffee Shop
          </p>

          <h1 className="mt-2 font-serif text-5xl">LinQafé</h1>

          <p className="mt-5 text-sm leading-7 text-[#F6E8DD]/70">
            Crafted coffee, premium meetings,
            <br />
            unforgettable moments.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "View Menu" ? undefined : "_blank"}
                rel={
                  item.title === "View Menu"
                    ? undefined
                    : "noopener noreferrer"
                }
                onClick={(e) => {
                  if (item.title === "View Menu") {
                    e.preventDefault();
                    setShowMenu(true);
                  }
                }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-[#F6E8DD]/40 hover:bg-white/20 hover:shadow-2xl active:scale-[0.98]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F6E8DD] text-[#6B2733] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Icon size={22} />
                </div>

                <div>
                  <h2 className="font-medium transition-all duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-[#F6E8DD]/60">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <footer className="mt-auto pt-12 text-center">
          <p className="text-xs text-[#F6E8DD]/55">
            © 2026 LinQafé Coffee Shop
          </p>
        </footer>
      </section>

      {showMenu && (
        <div className="fixed inset-0 z-50 bg-[#6B2733]/95 backdrop-blur-sm">
          <div className="mx-auto flex h-screen max-w-md flex-col">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#6B2733] px-5 py-5">
              <h2 className="font-serif text-3xl text-[#F6E8DD]">
                Our Menu
              </h2>

              <button
                onClick={() => setShowMenu(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:rotate-90 hover:bg-white/20 active:scale-90"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="grid grid-cols-2 gap-4 pb-10">
                {menuImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Menu ${index + 1}`}
                    className="w-full cursor-pointer rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:scale-105 hover:border-[#F6E8DD]/40 hover:shadow-2xl active:scale-95"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}