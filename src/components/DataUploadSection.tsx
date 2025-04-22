
import { useState } from "react";
import { Upload, Files, Database } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const DataUploadSection = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showDemoData, setShowDemoData] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Data Upload & Demo Access</h2>
      
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataUploadSection;
