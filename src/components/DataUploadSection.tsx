import { useState } from "react";
import { Upload, Files, Database, BarChart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import DataVisualization from "@/components/DataVisualization";

const demoData = {
  roadGeometry: [
    { parameter: "Lane Width", value: "3.7 meters", location: "North Approach" },
    { parameter: "Lane Width", value: "3.5 meters", location: "South Approach" },
    { parameter: "Lane Width", value: "3.6 meters", location: "East Approach" },
    { parameter: "Lane Width", value: "3.8 meters", location: "West Approach" },
    { parameter: "Number of Lanes", value: "3", location: "North Approach" },
    { parameter: "Number of Lanes", value: "3", location: "South Approach" },
    { parameter: "Number of Lanes", value: "2", location: "East Approach" },
    { parameter: "Number of Lanes", value: "2", location: "West Approach" },
    { parameter: "Intersection Type", value: "Four-way Signalized", location: "Central" },
    { parameter: "Signal Cycle Length", value: "120 seconds", location: "Central" },
    { parameter: "Median Width", value: "1.5 meters", location: "All Approaches" },
    { parameter: "Shoulder Width", value: "2.0 meters", location: "All Approaches" }
  ],
  trafficFlow: [
    { timeSlot: "07:00-08:00", vehicleCount: 720, congestionLevel: "Moderate" },
    { timeSlot: "08:00-09:00", vehicleCount: 1250, congestionLevel: "Critical" },
    { timeSlot: "09:00-10:00", vehicleCount: 980, congestionLevel: "High" },
    { timeSlot: "12:00-13:00", vehicleCount: 850, congestionLevel: "Moderate" },
    { timeSlot: "13:00-14:00", vehicleCount: 780, congestionLevel: "Moderate" },
    { timeSlot: "16:00-17:00", vehicleCount: 1180, congestionLevel: "Critical" },
    { timeSlot: "17:00-18:00", vehicleCount: 1320, congestionLevel: "Critical" },
    { timeSlot: "18:00-19:00", vehicleCount: 1150, congestionLevel: "High" }
  ],
  safetyData: [
    { month: "January", incidents: 4, type: "Minor Collision", severity: "Low" },
    { month: "January", incidents: 1, type: "Pedestrian Conflict", severity: "Medium" },
    { month: "February", incidents: 3, type: "Vehicle Conflict", severity: "Low" },
    { month: "February", incidents: 2, type: "Minor Collision", severity: "Low" },
    { month: "March", incidents: 2, type: "Vehicle Conflict", severity: "Medium" },
    { month: "March", incidents: 1, type: "Major Collision", severity: "High" }
  ]
};

const extendedDemoData = {
  trafficTrends: [
    { month: "January", value: 875000 },
    { month: "February", value: 892000 },
    { month: "March", value: 915000 },
    { month: "April", value: 938000 },
    { month: "May", value: 968000 },
    { month: "June", value: 982000 },
    { month: "July", value: 995000 },
    { month: "August", value: 1015000 },
    { month: "September", value: 978000 },
    { month: "October", value: 945000 },
    { month: "November", value: 925000 },
    { month: "December", value: 890000 }
  ],
  peakHourData: [
    { hour: "06:00", value: 520 },
    { hour: "07:00", value: 720 },
    { hour: "08:00", value: 1250 },
    { hour: "09:00", value: 980 },
    { hour: "10:00", value: 850 },
    { hour: "11:00", value: 780 },
    { hour: "12:00", value: 850 },
    { hour: "13:00", value: 780 },
    { hour: "14:00", value: 820 },
    { hour: "15:00", value: 920 },
    { hour: "16:00", value: 1180 },
    { hour: "17:00", value: 1320 },
    { hour: "18:00", value: 1150 },
    { hour: "19:00", value: 880 },
    { hour: "20:00", value: 650 }
  ],
  roadSafetyMetrics: [
    { metric: "Minor Collisions", value: 28, trend: "decreasing" },
    { metric: "Major Collisions", value: 7, trend: "stable" },
    { metric: "Pedestrian Incidents", value: 12, trend: "increasing" },
    { metric: "Vehicle-Vehicle Conflicts", value: 45, trend: "stable" },
    { metric: "Signal Violations", value: 156, trend: "decreasing" },
    { metric: "Speeding Incidents", value: 89, trend: "increasing" }
  ],
  congestionFactors: [
    { factor: "Peak Hour Traffic", percentage: 35, impact: "high" },
    { factor: "Signal Timing Issues", percentage: 25, impact: "medium" },
    { factor: "Lane Capacity", percentage: 15, impact: "high" },
    { factor: "Pedestrian Crossings", percentage: 12, impact: "medium" },
    { factor: "Public Transport Stops", percentage: 8, impact: "low" },
    { factor: "Other Factors", percentage: 5, impact: "low" }
  ],
  weeklyHeatmap: [
    { hour: 8, day: "Monday", intensity: 1250 },
    { hour: 9, day: "Monday", intensity: 980 },
    { hour: 17, day: "Monday", intensity: 1320 },
    { hour: 8, day: "Tuesday", intensity: 1180 },
    { hour: 9, day: "Tuesday", intensity: 950 },
    { hour: 17, day: "Tuesday", intensity: 1280 },
    { hour: 8, day: "Wednesday", intensity: 1220 },
    { hour: 9, day: "Wednesday", intensity: 960 },
    { hour: 17, day: "Wednesday", intensity: 1350 },
    { hour: 8, day: "Thursday", intensity: 1150 },
    { hour: 9, day: "Thursday", intensity: 920 },
    { hour: 17, day: "Thursday", intensity: 1290 },
    { hour: 8, day: "Friday", intensity: 1280 },
    { hour: 9, day: "Friday", intensity: 990 },
    { hour: 17, day: "Friday", intensity: 1380 }
  ],
  comparativeData: [
    { month: "January", currentYear: 875000, previousYear: 825000, incidents: 5 },
    { month: "February", currentYear: 892000, previousYear: 848000, incidents: 5 },
    { month: "March", currentYear: 915000, previousYear: 862000, incidents: 3 },
    { month: "April", currentYear: 938000, previousYear: 880000, incidents: 4 },
    { month: "May", currentYear: 968000, previousYear: 905000, incidents: 6 },
    { month: "June", currentYear: 982000, previousYear: 928000, incidents: 4 },
    { month: "July", currentYear: 995000, previousYear: 945000, incidents: 5 },
    { month: "August", currentYear: 1015000, previousYear: 958000, incidents: 7 },
    { month: "September", currentYear: 978000, previousYear: 922000, incidents: 4 },
    { month: "October", currentYear: 945000, previousYear: 892000, incidents: 3 },
    { month: "November", currentYear: 925000, previousYear: 870000, incidents: 5 },
    { month: "December", currentYear: 890000, previousYear: 835000, incidents: 4 }
  ]
};

const DataUploadSection = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showDemoData, setShowDemoData] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [processingData, setProcessingData] = useState(false);
  const [activeData, setActiveData] = useState(extendedDemoData);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
      setShowAnalysis(false);
    }
  };

  const processData = () => {
    setProcessingData(true);
    
    setTimeout(() => {
      setProcessingData(false);
      setShowAnalysis(true);
      
      toast({
        title: "Data Analysis Complete",
        description: uploadedFiles.length > 0 
          ? "Your uploaded data has been processed successfully." 
          : "Demo data has been analyzed successfully.",
      });
      
      setActiveData(extendedDemoData);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Data Upload & Analysis</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload size={20} />
              Upload Data Files
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="dataFile">Traffic Data Files</Label>
                <Input 
                  id="dataFile" 
                  type="file" 
                  multiple 
                  accept=".xlsx,.csv,.xls"
                  onChange={handleFileUpload}
                />
              </div>
              {uploadedFiles.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2">Uploaded Files:</h4>
                  <ul className="text-sm space-y-1">
                    {uploadedFiles.map((file, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Files size={16} />
                        {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Button 
                onClick={processData} 
                disabled={processingData}
                className="mt-2 bg-blue-600 hover:bg-blue-700"
              >
                {processingData ? "Processing..." : uploadedFiles.length > 0 ? "Analyze Uploaded Data" : "Use Demo Data"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database size={20} />
              Demo Data Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <button
              onClick={() => setShowDemoData(!showDemoData)}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors mb-4"
            >
              {showDemoData ? "Hide Demo Data" : "View Demo Data"}
            </button>

            {showDemoData && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Road Geometry Data</h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left">Parameter</th>
                          <th className="text-left">Value</th>
                          <th className="text-left">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoData.roadGeometry.map((item, index) => (
                          <tr key={index}>
                            <td className="py-1">{item.parameter}</td>
                            <td>{item.value}</td>
                            <td>{item.location}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Traffic Flow Data</h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left">Time Slot</th>
                          <th className="text-left">Vehicle Count</th>
                          <th className="text-left">Congestion Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoData.trafficFlow.map((item, index) => (
                          <tr key={index}>
                            <td className="py-1">{item.timeSlot}</td>
                            <td>{item.vehicleCount}</td>
                            <td>{item.congestionLevel}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Safety Incident Data</h4>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left">Month</th>
                          <th className="text-left">Incidents</th>
                          <th className="text-left">Type</th>
                          <th className="text-left">Severity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demoData.safetyData.map((item, index) => (
                          <tr key={index}>
                            <td className="py-1">{item.month}</td>
                            <td>{item.incidents}</td>
                            <td>{item.type}</td>
                            <td>{item.severity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4">
              <Button 
                onClick={processData} 
                disabled={processingData}
                className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2 justify-center"
              >
                <BarChart size={16} />
                {processingData ? "Processing Data..." : "Analyze Demo Data"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {showAnalysis && (
        <DataVisualization data={activeData} />
      )}
    </div>
  );
};

export default DataUploadSection;
