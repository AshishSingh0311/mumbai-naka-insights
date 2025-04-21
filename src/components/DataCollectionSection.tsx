
import { Ruler, BarChart, Users, Car, Map } from "lucide-react";

const DataCollectionSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Data Collection Methodology</h2>
      
      <div className="space-y-4 mb-6">
        <p className="text-gray-700">
          Manual field surveys will be conducted at Mumbai Naka in Nashik to gather comprehensive data on road geometric design, traffic patterns, and safety indicators.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Parameters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
            <Ruler size={20} />
          </div>
          <div>
            <h4 className="font-semibold">Road Geometry</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
              <li>Lane width</li>
              <li>Number of lanes</li>
              <li>Intersection layout</li>
              <li>Median types and width</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg flex items-start gap-3">
          <div className="p-2 bg-green-100 rounded-full text-green-600 mt-1">
            <Car size={20} />
          </div>
          <div>
            <h4 className="font-semibold">Traffic Parameters</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
              <li>Vehicle count by type</li>
              <li>Peak hour patterns</li>
              <li>Average speed</li>
              <li>Traffic density</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg flex items-start gap-3">
          <div className="p-2 bg-purple-100 rounded-full text-purple-600 mt-1">
            <Users size={20} />
          </div>
          <div>
            <h4 className="font-semibold">Pedestrian Factors</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
              <li>Pedestrian movement patterns</li>
              <li>Crossing facilities</li>
              <li>Sidewalk conditions</li>
              <li>Pedestrian-vehicle interaction</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg flex items-start gap-3">
          <div className="p-2 bg-amber-100 rounded-full text-amber-600 mt-1">
            <Map size={20} />
          </div>
          <div>
            <h4 className="font-semibold">Safety Indicators</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside mt-1">
              <li>Signage inventory</li>
              <li>Signal timing</li>
              <li>Accident-prone areas</li>
              <li>Traffic control devices</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
          <BarChart size={18} className="mr-2 text-gray-600" />
          Data Collection Schedule
        </h4>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><span className="font-medium">Weekday Peak Hours:</span> 8:00-10:00 AM, 5:00-7:00 PM</li>
          <li><span className="font-medium">Weekend Analysis:</span> Saturday 11:00 AM-1:00 PM</li>
          <li><span className="font-medium">Duration:</span> 2 weeks for comprehensive data</li>
          <li><span className="font-medium">Collection Method:</span> Manual observation with structured forms</li>
        </ul>
      </div>
    </div>
  );
};

export default DataCollectionSection;
