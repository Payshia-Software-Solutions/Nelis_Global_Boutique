
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full">
      <div className="relative hidden flex-1 items-center justify-center lg:flex">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="A market stall with various natural products"
          layout="fill"
          objectFit="cover"
          data-ai-hint="natural products market"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-md space-y-4 text-center text-white">
          <h1 className="text-4xl font-bold">Nelis Global Boutique</h1>
          <p className="text-lg">
            Discover the finest natural products from Sri Lanka, crafted with
            sustainable practices and community care.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background p-4 lg:p-8">
        {children}
      </div>
    </div>
  );
}
