
import { FileText, Users, Presentation, BookOpen, Lightbulb } from "lucide-react";

const ReportGenerationSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Report Generation</h2>
      
      <div className="space-y-4 mb-6">
        <p className="text-gray-700">
          Comprehensive visual reports will be created to effectively communicate findings and recommendations to various stakeholders, focusing on clarity, accessibility, and actionable insights.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Report Types by Audience</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-amber-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Presentation className="text-amber-600 mr-2" size={22} />
            <h3 className="font-semibold">Technical Reports</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Detailed documentation for engineers and technical stakeholders with comprehensive data analysis and specific design recommendations.
          </p>
          <div className="bg-white p-3 rounded border border-amber-100">
            <h4 className="font-medium text-gray-800 text-sm">Key Elements:</h4>
            <ul className="text-xs text-gray-600 list-disc list-inside mt-1 space-y-1">
              <li>Detailed statistical findings</li>
              <li>Engineering specifications</li>
              <li>Technical drawings and measurements</li>
              <li>Methodological documentation</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <Users className="text-blue-600 mr-2" size={22} />
            <h3 className="font-semibold">Executive Summaries</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Concise overviews for decision-makers and municipal authorities highlighting key findings, impacts, and priority recommendations.
          </p>
          <div className="bg-white p-3 rounded border border-blue-100">
            <h4 className="font-medium text-gray-800 text-sm">Key Elements:</h4>
            <ul className="text-xs text-gray-600 list-disc list-inside mt-1 space-y-1">
              <li>High-level findings visualization</li>
              <li>Cost-benefit analysis</li>
              <li>Prioritized action items</li>
              <li>Implementation roadmap</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <BookOpen className="text-green-600 mr-2" size={22} />
            <h3 className="font-semibold">Educational Materials</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Curriculum-ready resources for students and faculty studying urban planning, transportation engineering, and road safety.
          </p>
          <div className="bg-white p-3 rounded border border-green-100">
            <h4 className="font-medium text-gray-800 text-sm">Key Elements:</h4>
            <ul className="text-xs text-gray-600 list-disc list-inside mt-1 space-y-1">
              <li>Case study presentations</li>
              <li>Methodology explanations</li>
              <li>Practical exercises</li>
              <li>Research extension suggestions</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-50 p-5 rounded-lg">
          <div className="flex items-center mb-3">
            <FileText className="text-purple-600 mr-2" size={22} />
            <h3 className="font-semibold">Community Reports</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Accessible summaries for local residents and community organizations explaining findings and improvements in non-technical language.
          </p>
          <div className="bg-white p-3 rounded border border-purple-100">
            <h4 className="font-medium text-gray-800 text-sm">Key Elements:</h4>
            <ul className="text-xs text-gray-600 list-disc list-inside mt-1 space-y-1">
              <li>Visual before/after comparisons</li>
              <li>Safety and quality-of-life benefits</li>
              <li>Simple explanatory graphics</li>
              <li>Implementation timelines</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Report Components</h3>
      
      <div className="overflow-hidden rounded-lg shadow border border-gray-200 mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Executive Summary</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quick overview of findings and recommendations</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-2 page PDF with infographics</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Methodology Documentation</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Detail data collection and analysis methods</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Technical appendix with diagrams</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Findings Visualization</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Illustrate key data patterns and correlations</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Charts, maps, and visual comparisons</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Recommendation Matrix</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Prioritized action items with impact assessment</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tabular format with color coding</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 flex items-start">
        <Lightbulb className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Report Creation Process</h4>
          <p className="text-sm text-gray-600">
            Reports will be created using Microsoft Office tools, ensuring accessibility for all stakeholders. Template formats will be established for consistency across report types, with standardized data visualizations to maintain clarity. Draft reports will undergo stakeholder review before finalization to ensure usability and relevance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerationSection;
