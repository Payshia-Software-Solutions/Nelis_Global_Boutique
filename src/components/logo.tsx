import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ useDarkText = false }: { useDarkText?: boolean }) {
    return (
      <div className="flex items-center gap-2">
        <Image 
          src="https://content-provider.payshia.com/nelis-global/logo.webp" 
          alt="Nelis Global Boutique Logo"
          width={150}
          height={40}
          className="h-10 w-auto"
        />
      </div>
    );
  }
