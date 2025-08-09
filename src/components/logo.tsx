
import { cn } from "@/lib/utils";

export function Logo({ useDarkText = false }: { useDarkText?: boolean }) {
    return (
      <div className="flex items-center gap-2">
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
        <div className="flex flex-col items-start leading-tight">
          <span
            className={cn(
              "text-sm font-semibold tracking-wider",
              useDarkText ? "text-foreground" : "text-white"
            )}
          >
            Nelis Global
          </span>
          <span
            className={cn(
              "text-sm font-semibold tracking-wider",
              useDarkText ? "text-foreground" : "text-white"
            )}
          >
            Boutique
          </span>
        </div>
      </div>
    );
  }
