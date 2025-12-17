import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
      <div className="flex items-center gap-2">
        <Image 
          src="https://content-provider.payshia.com/nelis-global/nelis-logo-optimized.webp" 
          alt="Nelis Global Boutique Logo"
          width={150}
          height={40}
          className={cn("h-10 w-auto", className)}
        />
      </div>
    );
  }
