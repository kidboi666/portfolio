import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
        <span>Web</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="flutter" aria-label="toggle flutter projects">
        <span>Flutter</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
