import { FaFlutter } from "react-icons/fa6";
import { GiCobweb } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { cn } from "@/lib/utils";

type PlatformToggleProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export function PlatformToggle({ value, onValueChange }: PlatformToggleProps) {
  return (
    <ButtonGroup>
      <Button
        variant="outline"
        aria-label="toggle web projects"
        onClick={() => onValueChange("web")}
      >
        <GiCobweb className="text-orange-500 dark:text-orange-400" />
        <span
          className={cn(
            "transition-colors",
            value === "web" && "text-orange-500 dark:text-orange-400",
          )}
        >
          Web
        </span>
      </Button>
      <ButtonGroupSeparator />
      <Button
        variant="outline"
        aria-label="toggle flutter projects"
        onClick={() => onValueChange("flutter")}
      >
        <FaFlutter className="text-blue-400" />
        <span
          className={cn(
            "transition-colors",
            value === "flutter" && "text-blue-400",
          )}
        >
          Flutter
        </span>
      </Button>
    </ButtonGroup>
  );
}
