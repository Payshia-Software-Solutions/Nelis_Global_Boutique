
import { cn } from "@/lib/utils";

export function Logo({ useDarkText = false }: { useDarkText?: boolean }) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          useDarkText ? "bg-primary" : "bg-white"
        )}>
          <span className={cn(
            "font-bold text-lg",
             useDarkText ? "text-white" : "text-primary"
          )}>
            N
          </span>
        </div>
        <span
          className={cn(
            "text-sm font-semibold tracking-wider",
            useDarkText ? "text-foreground" : "text-white"
          )}
        >
          Nelis Global Boutique
        </span>
      </div>
    );
  }
