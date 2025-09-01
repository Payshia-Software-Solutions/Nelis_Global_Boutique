
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A market stall with various natural products"
        layout="fill"
        objectFit="cover"
        data-ai-hint="natural products market"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 grid md:grid-cols-2 min-h-screen">
        <div className="hidden md:flex flex-col justify-center items-start p-16 text-white">
            <h1 className="text-4xl mb-4">Nelis Global Boutique</h1>
            <h2 className="text-2xl mb-4">Welcome to Nelis Global Boutique</h2>
            <p className="max-w-md">
                Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.
            </p>
        </div>
        <div className="flex items-center justify-center p-4">
            {children}
        </div>
      </div>
    </div>
  );
}
