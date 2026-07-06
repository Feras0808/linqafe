import Image from "next/image";

const menuImages = [
  "/menu1.png",
  "/menu2.png",
  "/menu3.png",
  "/menu4.png",
  "/menu5.png",
  "/menu6.png",
];

export default function ViewMenu() {
  return (
    <main className="min-h-screen bg-[#6B2733] px-4 py-8">
      <div className="mx-auto max-w-md">
        <h1 className="mb-2 text-center font-serif text-4xl text-[#F6E8DD]">
          Our Menu
        </h1>

        <p className="mb-8 text-center text-sm text-[#F6E8DD]/70">
          Explore our coffee, drinks & desserts.
        </p>

        <div className="space-y-6">
          {menuImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-xl"
            >
              <Image
                src={image}
                alt={`Menu ${index + 1}`}
                width={1200}
                height={1800}
                className="h-auto w-full"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}