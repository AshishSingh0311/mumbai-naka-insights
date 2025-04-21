
import { Database, Table, FileSpreadsheet, HardDrive } from "lucide-react";

const DataStorageSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Data Entry & Storage</h2>
      
      <div className="space-y-4 mb-6">
        <p className="text-gray-700">
          All collected data will be organized and stored in accessible spreadsheet formats, ensuring easy retrieval and analysis by researchers and stakeholders.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <FileSpreadsheet className="text-green-600 mr-2" size={22} />
            <h3 className="font-semibold">Excel-Based Storage</h3>
          </div>
          <p className="text-sm text-gray-600">
            Microsoft Excel will be used as the primary data storage tool for its accessibility, familiar interface, and widespread availability among stakeholders.
          </p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <Table className="text-blue-600 mr-2" size={22} />
            <h3 className="font-semibold">Structured Format</h3>
          </div>
          <p className="text-sm text-gray-600">
            Data will be organized in clearly labeled sheets with consistent formatting, including headers, categories, and metadata for easy interpretation.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Data Organization Strategy</h3>
      
      <div className="overflow-hidden rounded-lg shadow border border-gray-200 mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storage Format</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access Level</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Road Geometry Data</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excel Worksheets with Parameter Categories</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">All Researchers</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Traffic Flow Measurements</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Time-Series Data Sheets</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">All Researchers</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Safety Incident Records</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Categorized Incident Sheets</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Project Leaders</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pedestrian Movement Data</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Zone-Based Count Sheets</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">All Researchers</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 flex items-start">
        <Database className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Backup & Security</h4>
          <p className="text-sm text-gray-600">
            All data will be regularly backed up to cloud storage services (like Google Drive) and local external drives. Version control will be maintained by dating each file update, and access management will ensure data integrity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataStorageSection;
