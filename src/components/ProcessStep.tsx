
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  color?: string;
}

const ProcessStep = ({ number, title, description, color = "#3b82f6" }: ProcessStepProps) => {
  return (
    <div className="flex mb-6">
      <div className={cn("relative flex items-center justify-center w-10 h-10 rounded-full mr-4 flex-shrink-0", `bg-${color}`)}>
        <span className="text-white font-bold">{number}</span>
        {number < 5 && (
          <div className={cn("absolute top-10 h-full w-0.5", `bg-${color}`)}></div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
