import { Button } from "@mantine/core";
import { frameworkStyles } from "../constants";

type CButtonProps = {
  label: string;
  onClick: () => void;
  Icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: "outline" | "filled";
};
export default function CButton({ label, onClick, Icon, disabled, loading, variant = "filled" }: CButtonProps) {
  return (
    <Button
      className={frameworkStyles.button}
      onClick={onClick}
      leftIcon={Icon}
      disabled={disabled}
      loading={loading}
      variant={variant}
    >
      {label}
    </Button>
  );
}
