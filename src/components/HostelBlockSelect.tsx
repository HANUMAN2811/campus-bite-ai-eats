
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface HostelBlockSelectProps {
  value?: string;
  onChange?: (block: string) => void;
}

const HostelBlockSelect = ({ value, onChange }: HostelBlockSelectProps) => {
  const [selectedBlock, setSelectedBlock] = useState(value ?? "");

  const handleSelect = (block: string) => {
    setSelectedBlock(block);
    onChange?.(block);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-xs mx-auto">
      <Label htmlFor="hostel-block-select" className="text-lg font-semibold text-food-black">
        Select Your Hostel Block
      </Label>
      <Select value={selectedBlock} onValueChange={handleSelect}>
        <SelectTrigger id="hostel-block-select" className="bg-white text-food-black shadow-md shadow-food-orange/10 border-food-orange focus:ring-2 focus:ring-food-orange/70 transition-all">
          <SelectValue placeholder="Choose your block" />
        </SelectTrigger>
        <SelectContent className="bg-white z-50 animate-scale-in shadow-xl border border-food-orange">
          <SelectLabel>Hostel Blocks</SelectLabel>
          {[...Array(12)].map((_, i) => (
            <SelectItem value={`C${i + 1}`} key={i + 1} className="hover:bg-food-orange/20">
              C{i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedBlock && (
        <div className="text-food-orange font-bold text-base animate-fade-in">
          Delivering to {selectedBlock}
        </div>
      )}
    </div>
  );
};

export default HostelBlockSelect;
