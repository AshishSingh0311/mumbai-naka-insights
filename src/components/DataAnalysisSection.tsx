
import { BarChart2, PieChart, TrendingUp, Zap, List } from "lucide-react";

const DataAnalysisSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Data Analysis</h2>
      
      <div className="space-y-4 mb-6">
        <p className="text-gray-700">
          Collected data will be analyzed using accessible statistical methods and visualization techniques to identify patterns, correlations, and areas for improvement in road design and traffic management.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-purple-50 p-5 rounded-lg">
          <h3 className="font-semibold text-lg flex items-center mb-4">
            <List className="mr-2 text-purple-600" size={20} />
            Statistical Methods
          </h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-purple-100">
              <h4 className="font-medium text-gray-800">Descriptive Statistics</h4>
              <p className="text-sm text-gray-600 mt-1">Mean, median, mode, and frequency distributions of key parameters like traffic volume and lane width.</p>
            </div>
            
            <div className="p-3 bg-white rounded border border-purple-100">
              <h4 className="font-medium text-gray-800">Correlation Analysis</h4>
              <p className="text-sm text-gray-600 mt-1">Examining relationships between road geometry factors and congestion/accident rates.</p>
            </div>
            
            <div className="p-3 bg-white rounded border border-purple-100">
              <h4 className="font-medium text-gray-800">Comparative Analysis</h4>
              <p className="text-sm text-gray-600 mt-1">Comparing different segments of Mumbai Naka to identify critical factors influencing traffic flow.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="font-semibold text-lg flex items-center mb-4">
            <BarChart2 className="mr-2 text-blue-600" size={20} />
            Visualization Techniques
          </h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-blue-100">
              <h4 className="font-medium text-gray-800">Bar Charts & Histograms</h4>
              <p className="text-sm text-gray-600 mt-1">For comparing traffic volumes, accident frequencies, and road dimension measurements.</p>
            </div>
            
            <div className="p-3 bg-white rounded border border-blue-100">
              <h4 className="font-medium text-gray-800">Pie Charts</h4>
              <p className="text-sm text-gray-600 mt-1">For visualizing vehicle type distributions and causative factors in congestion.</p>
            </div>
            
            <div className="p-3 bg-white rounded border border-blue-100">
              <h4 className="font-medium text-gray-800">Heat Maps</h4>
              <p className="text-sm text-gray-600 mt-1">For identifying congestion hotspots and accident-prone areas across Mumbai Naka.</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Analysis Outputs</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <div className="flex items-center mb-2">
            <TrendingUp className="text-green-600 mr-2" size={18} />
            <h4 className="font-semibold text-gray-800">Congestion Patterns</h4>
          </div>
          <p className="text-sm text-gray-600">
            Time-based analysis of traffic flow revealing peak congestion periods and correlating them with geometric design elements.
          </p>
        </div>
        
        <div className="p-4 bg-red-50 rounded-lg border border-red-100">
          <div className="flex items-center mb-2">
            <Zap className="text-red-600 mr-2" size={18} />
            <h4 className="font-semibold text-gray-800">Safety Hotspots</h4>
          </div>
          <p className="text-sm text-gray-600">
            Identification of high-risk areas correlated with specific design features like inadequate lane width or poor signage.
          </p>
        </div>
        
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <div className="flex items-center mb-2">
            <PieChart className="text-amber-600 mr-2" size={18} />
            <h4 className="font-semibold text-gray-800">Design Impact Assessment</h4>
          </div>
          <p className="text-sm text-gray-600">
            Measuring how specific geometric design elements impact traffic flow efficiency and safety outcomes.
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-2">Analysis Approach</h4>
        <p className="text-sm text-gray-700">
          All analysis will be performed using Excel's built-in statistical and charting functions, making it accessible to all stakeholders without specialized software. For more advanced analysis, open-source tools like QGIS may be used for spatial data visualization, with clear documentation to ensure reproducibility.
        </p>
      </div>
    </div>
  );
};

export default DataAnalysisSection;
