import { FaFlutter } from "react-icons/fa6";
import { GiCobweb } from "react-icons/gi";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type PlatformToggleProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export function PlatformToggle({ value, onValueChange }: PlatformToggleProps) {
  return (
    <ToggleGroup
      value={value}
      onValueChange={onValueChange}
      type="single"
      variant="outline"
      spacing={2}
      size="lg"
    >
      <ToggleGroupItem value="web" aria-label="toggle web projects">
        <GiCobweb className="text-orange-500 dark:text-orange-400" />
        <span
          className={cn(
            "transition-colors",
            value === "web" && "text-orange-500 dark:text-orange-400",
          )}
        >
          Web
        </span>
      </ToggleGroupItem>
      <ToggleGroupItem value="flutter" aria-label="toggle flutter projects">
        <FaFlutter className="text-blue-400" />
        <span
          className={cn(
            "transition-colors",
            value === "flutter" && "text-blue-400",
          )}
        >
          Flutter
        </span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
