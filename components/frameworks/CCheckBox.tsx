import { Checkbox } from "@mantine/core";
import { frameworkStyles } from "../constants";

type CCheckBoxProps = {
  label: React.ReactNode;
  value: boolean;
  onChange: (e: boolean) => void;
};

export default function CCheckBox({ label, onChange, value }: CCheckBoxProps) {
  return (
    <Checkbox
      classNames={{
        input: frameworkStyles.checkbox,
        label: frameworkStyles.checkboxLabel,
      }}
      label={label}
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
    />
  );
}
