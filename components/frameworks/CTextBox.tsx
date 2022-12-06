import { PasswordInput, TextInput } from "@mantine/core";
import { Eye, EyeOff } from "react-feather";
import { frameworkStyles } from "../constants";

type CTextBoxProps = {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
  Icon?: React.ReactNode;
};
export default function CTextBox({ label, onChange, placeholder, value, Icon }: CTextBoxProps) {
  return (
    <TextInput
      classNames={{
        input: frameworkStyles.inputBox,
      }}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      icon={Icon && Icon}
    />
  );
}

export function CPassBox({ label, onChange, placeholder, value, Icon }: CTextBoxProps) {
  return (
    <PasswordInput
      classNames={{
        input: frameworkStyles.inputBox,
        innerInput: frameworkStyles.inputBoxInner,
      }}
      visibilityToggleIcon={({ reveal, size }) => (reveal ? <Eye size={16} /> : <EyeOff size={16} />)}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      icon={Icon && Icon}
    />
  );
}
