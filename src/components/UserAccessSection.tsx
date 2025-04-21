
import { Share2, Lock, Download, Globe, ArrowUpRight } from "lucide-react";

const UserAccessSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">User Access</h2>
      
      <div className="space-y-4 mb-6">
        <p className="text-gray-700">
          Research findings and recommendations will be made accessible to all relevant stakeholders through multiple channels, ensuring both ease of access and appropriate security for sensitive data.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Access Methods</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Globe className="text-blue-600 mr-2" size={22} />
            <h3 className="font-semibold">Online Repository</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            A centralized Google Drive folder containing all reports, data summaries, and visualization files, organized by category.
          </p>
          <div className="bg-white p-3 rounded border border-blue-100">
            <h4 className="font-medium text-gray-800 text-sm">Features:</h4>
            <ul className="text-xs text-gray-600 list-disc list-inside mt-1 space-y-1">
              <li>Organized folder structure</li>
              <li>Searchable document repository</li>
              <li>Controlled access permissions</li>
              <li>Version history tracking</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Download className="text-green-600 mr-2" size={22} />
            <h3 className="font-semibold">Downloadable Packages</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Curated report packages tailored for specific stakeholder groups, available for download and offline use.
          </p>
          <div className="bg-white p-3 rounded border border-green-100">
            <h4 className="font-medium text-gray-800 text-sm">Package Types:</h4>
            <ul className="text-xs text-gray-600 list-disc list-inside mt-1 space-y-1">
              <li>Municipal planning package</li>
              <li>Academic research package</li>
              <li>Traffic engineering package</li>
              <li>Community information package</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Access Controls</h3>
      
      <div className="overflow-hidden rounded-lg shadow border border-gray-200 mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stakeholder Group</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distribution Method</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Research Team</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full access to all data and reports</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Direct repository access</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Municipal Authorities</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full access to findings and recommendations</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Secure sharing + presentation</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Academic Users</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Access to research findings and methodology</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Educational package access</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Community Members</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Access to community reports and summaries</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Public website + community meetings</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <div className="flex items-center mb-2">
            <Lock className="text-red-600 mr-2" size={18} />
            <h4 className="font-semibold text-gray-800">Data Security</h4>
          </div>
          <p className="text-sm text-gray-600">
            Sensitive data will be protected through access controls, password protection, and appropriate redaction in public-facing reports. Personal information from any collected data will be anonymized.
          </p>
        </div>
        
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div className="flex items-center mb-2">
            <Share2 className="text-amber-600 mr-2" size={18} />
            <h4 className="font-semibold text-gray-800">Sharing Protocols</h4>
          </div>
          <p className="text-sm text-gray-600">
            Clear processes will be established for requesting access to different levels of research data, with documented approval workflows and access logging for sensitive information.
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 flex items-start">
        <ArrowUpRight className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Future Accessibility</h4>
          <p className="text-sm text-gray-600">
            The research architecture is designed to ensure longevity of access. All materials will be maintained in the online repository for a minimum of 5 years, with periodic reviews to ensure information remains relevant and accessible as technology platforms evolve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAccessSection;
