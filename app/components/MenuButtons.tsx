import { Button } from "@/components/ui/button";

interface MBProps {
  onClick: any;
  className: string;
  name: string;
}

const MenuButtons = ({ name, onClick, className }: MBProps) => {
  return (
    <Button className={className} onClick={onClick}>
      {name}
    </Button>
  );
};

export default MenuButtons;
