
import { Users, BookOpen, Building, Map } from "lucide-react";

const StakeholdersSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Key Stakeholders</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow-sm flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-full text-blue-600">
            <Building size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Local Authorities</h3>
            <p className="text-sm text-gray-600">City planners and traffic management officials who can implement recommendations for improved road design.</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm flex items-start gap-3">
          <div className="p-2 bg-green-100 rounded-full text-green-600">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Academic Researchers</h3>
            <p className="text-sm text-gray-600">Faculty and students conducting research on urban planning, transportation, and road safety.</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm flex items-start gap-3">
          <div className="p-2 bg-purple-100 rounded-full text-purple-600">
            <Map size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Traffic Engineers</h3>
            <p className="text-sm text-gray-600">Professionals who can use findings to optimize traffic flow and implement safety measures.</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm flex items-start gap-3">
          <div className="p-2 bg-amber-100 rounded-full text-amber-600">
            <Users size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Community Members</h3>
            <p className="text-sm text-gray-600">Local residents who benefit from improved road safety and reduced congestion in the Mumbai Naka area.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeholdersSection;
