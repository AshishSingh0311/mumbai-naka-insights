
import { ArrowDown } from "lucide-react";

const DataFlow = () => {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="w-full max-w-md p-6 bg-traffic-collection/10 rounded-lg shadow-sm mb-6">
        <h3 className="font-bold text-traffic-collection">1. Data Collection</h3>
        <p className="text-sm text-gray-600">Manual field surveys gathering road parameters</p>
      </div>
      
      <ArrowDown className="text-gray-400 my-2" />
      
      <div className="w-full max-w-md p-6 bg-traffic-storage/10 rounded-lg shadow-sm mb-6">
        <h3 className="font-bold text-traffic-storage">2. Data Entry & Storage</h3>
        <p className="text-sm text-gray-600">Organized storage in accessible spreadsheets</p>
      </div>
      
      <ArrowDown className="text-gray-400 my-2" />
      
      <div className="w-full max-w-md p-6 bg-traffic-analysis/10 rounded-lg shadow-sm mb-6">
        <h3 className="font-bold text-traffic-analysis">3. Data Analysis</h3>
        <p className="text-sm text-gray-600">Statistical methods and visual representations</p>
      </div>
      
      <ArrowDown className="text-gray-400 my-2" />
      
      <div className="w-full max-w-md p-6 bg-traffic-report/10 rounded-lg shadow-sm mb-6">
        <h3 className="font-bold text-traffic-report">4. Report Generation</h3>
        <p className="text-sm text-gray-600">Visual reports for diverse stakeholders</p>
      </div>
      
      <ArrowDown className="text-gray-400 my-2" />
      
      <div className="w-full max-w-md p-6 bg-traffic-access/10 rounded-lg shadow-sm">
        <h3 className="font-bold text-traffic-access">5. User Access</h3>
        <p className="text-sm text-gray-600">Access for authorities, students, and faculty</p>
      </div>
    </div>
  );
};

export default DataFlow;
