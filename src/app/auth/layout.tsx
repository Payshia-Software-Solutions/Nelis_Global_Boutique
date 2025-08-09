
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A market stall with various natural products"
        layout="fill"
        objectFit="cover"
        data-ai-hint="natural products market"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-1 items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
