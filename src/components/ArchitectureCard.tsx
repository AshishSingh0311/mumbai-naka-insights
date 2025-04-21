
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ArchitectureCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  color: string;
  children?: ReactNode;
}

const ArchitectureCard = ({ title, icon, description, color, children }: ArchitectureCardProps) => {
  return (
    <div className={cn("rounded-lg shadow-md p-6 border-t-4", `border-t-${color}`)}>
      <div className="flex items-center gap-3 mb-4">
        <div className={cn("p-2 rounded-full", `bg-${color}/10 text-${color}`)}>
          {icon}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default ArchitectureCard;
