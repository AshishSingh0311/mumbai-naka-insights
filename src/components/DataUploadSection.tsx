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
    { parameter: "Lane Width", value: "3.5 meters", location: "North Approach" },
    { parameter: "Number of Lanes", value: "3", location: "East Approach" },
    { parameter: "Intersection Type", value: "Signalized", location: "Central" },
  ],
  trafficFlow: [
    { timeSlot: "8:00-9:00", vehicleCount: 850, congestionLevel: "High" },
    { timeSlot: "12:00-13:00", vehicleCount: 650, congestionLevel: "Medium" },
    { timeSlot: "16:00-17:00", vehicleCount: 920, congestionLevel: "Critical" },
  ],
  safetyData: [
    { month: "January", incidents: 3, type: "Minor Collision" },
    { month: "February", incidents: 1, type: "Pedestrian Conflict" },
    { month: "March", incidents: 2, type: "Vehicle Conflict" },
  ]
};

// Extended demo data for analysis
const extendedDemoData = {
  trafficTrends: [
    { month: "January", value: 750 },
    { month: "February", value: 820 },
    { month: "March", value: 880 },
    { month: "April", value: 790 },
    { month: "May", value: 850 },
    { month: "June", value: 920 }
  ],
  peakHourData: [
    { hour: "6:00", value: 320 },
    { hour: "8:00", value: 850 },
    { hour: "10:00", value: 540 },
    { hour: "12:00", value: 650 },
    { hour: "14:00", value: 580 },
    { hour: "16:00", value: 920 },
    { hour: "18:00", value: 780 },
    { hour: "20:00", value: 450 }
  ],
  roadSafetyMetrics: [
    { metric: "Minor Collisions", value: 12 },
    { metric: "Major Collisions", value: 5 },
    { metric: "Pedestrian Incidents", value: 8 },
    { metric: "Vehicle-Vehicle Conflicts", value: 18 }
  ],
  congestionFactors: [
    { factor: "Inadequate Lane Width", percentage: 35 },
    { factor: "Poor Signal Timing", percentage: 25 },
    { factor: "Illegal Parking", percentage: 15 },
    { factor: "Pedestrian Crossings", percentage: 10 },
    { factor: "Other Factors", percentage: 15 }
  ],
  weeklyHeatmap: [
    { hour: 8, day: "Monday", intensity: 850 },
    { hour: 9, day: "Monday", intensity: 920 },
    { hour: 17, day: "Monday", intensity: 880 },
    { hour: 8, day: "Tuesday", intensity: 830 },
    { hour: 9, day: "Tuesday", intensity: 890 },
    { hour: 17, day: "Tuesday", intensity: 850 },
    { hour: 8, day: "Wednesday", intensity: 870 },
    { hour: 9, day: "Wednesday", intensity: 940 },
    { hour: 17, day: "Wednesday", intensity: 890 },
    { hour: 8, day: "Thursday", intensity: 840 },
    { hour: 9, day: "Thursday", intensity: 900 },
    { hour: 17, day: "Thursday", intensity: 860 },
    { hour: 8, day: "Friday", intensity: 890 },
    { hour: 9, day: "Friday", intensity: 960 },
    { hour: 17, day: "Friday", intensity: 920 },
  ],
  comparativeData: [
    { month: "January", currentYear: 750, previousYear: 680, incidents: 5 },
    { month: "February", currentYear: 820, previousYear: 720, incidents: 4 },
    { month: "March", currentYear: 880, previousYear: 780, incidents: 6 },
    { month: "April", currentYear: 790, previousYear: 760, incidents: 3 },
    { month: "May", currentYear: 850, previousYear: 800, incidents: 5 },
    { month: "June", currentYear: 920, previousYear: 830, incidents: 7 }
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
                        </tr>
                      </thead>
                      <tbody>
                        {demoData.safetyData.map((item, index) => (
                          <tr key={index}>
                            <td className="py-1">{item.month}</td>
                            <td>{item.incidents}</td>
                            <td>{item.type}</td>
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
