
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList, Database, BarChart, FileText, Users, Upload } from "lucide-react";
import DataCollectionSection from "@/components/DataCollectionSection";
import DataStorageSection from "@/components/DataStorageSection";
import DataAnalysisSection from "@/components/DataAnalysisSection";
import ReportGenerationSection from "@/components/ReportGenerationSection";
import UserAccessSection from "@/components/UserAccessSection";
import DataFlow from "@/components/DataFlow";
import StakeholdersSection from "@/components/StakeholdersSection";
import DataUploadSection from "@/components/DataUploadSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mumbai Naka Traffic Research System</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive architectural framework for studying the relationship between 
            road geometric design, traffic congestion, and safety in the Mumbai Naka area of Nashik.
          </p>
        </div>

        <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-8">
            <TabsTrigger value="overview" className="font-medium">
              Overview
            </TabsTrigger>
            <TabsTrigger value="upload" className="font-medium flex items-center gap-2 bg-blue-50 text-blue-700 data-[state=active]:bg-blue-600">
              <Upload size={16} />
              <span className="hidden sm:inline">Upload & Analyze</span>
              <span className="sm:hidden">Upload</span>
            </TabsTrigger>
            <TabsTrigger value="collection" className="font-medium flex items-center gap-2">
              <ClipboardList size={16} />
              <span className="hidden sm:inline">Data Collection</span>
              <span className="sm:hidden">Collection</span>
            </TabsTrigger>
            <TabsTrigger value="storage" className="font-medium flex items-center gap-2">
              <Database size={16} />
              <span className="hidden sm:inline">Data Storage</span>
              <span className="sm:hidden">Storage</span>
            </TabsTrigger>
            <TabsTrigger value="analysis" className="font-medium flex items-center gap-2">
              <BarChart size={16} />
              <span className="hidden sm:inline">Data Analysis</span>
              <span className="sm:hidden">Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="reporting" className="font-medium flex items-center gap-2">
              <FileText size={16} />
              <span className="hidden sm:inline">Report Generation</span>
              <span className="sm:hidden">Reports</span>
            </TabsTrigger>
            <TabsTrigger value="access" className="font-medium flex items-center gap-2">
              <Users size={16} />
              <span className="hidden sm:inline">User Access</span>
              <span className="sm:hidden">Access</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="focus:outline-none">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">System Architecture Overview</h2>
                
                <div className="mb-8">
                  <p className="text-gray-700 mb-4">
                    This research system architecture provides a comprehensive framework for studying traffic patterns and road safety at Mumbai Naka in Nashik. It focuses on practical implementation using accessible tools and methodologies suitable for academic research and civic applications.
                  </p>
                  <p className="text-gray-700">
                    The architecture consists of five integrated components that form a complete workflow from data collection to stakeholder access, designed for simplicity, clarity, and real-world application in developing urban contexts.
                  </p>
                </div>
                
                <DataFlow />
                
                <div className="p-5 bg-blue-50 rounded-lg border border-blue-100 mt-6">
                  <h3 className="font-semibold text-lg mb-2">Key System Principles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mr-3 mt-0.5">1</span>
                      <div>
                        <span className="font-medium text-gray-800">Accessibility</span>
                        <p className="text-sm text-gray-600">Uses readily available tools like Microsoft Excel and Google Drive to ensure all stakeholders can engage with the research.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-medium text-sm mr-3 mt-0.5">2</span>
                      <div>
                        <span className="font-medium text-gray-800">Practicality</span>
                        <p className="text-sm text-gray-600">Focuses on manual data collection and basic analysis methods suitable for the local context and available resources.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mr-3 mt-0.5">3</span>
                      <div>
                        <span className="font-medium text-gray-800">Transparency</span>
                        <p className="text-sm text-gray-600">Clearly documents methodologies and provides access to findings for verification and further research.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 font-medium text-sm mr-3 mt-0.5">4</span>
                      <div>
                        <span className="font-medium text-gray-800">Adaptability</span>
                        <p className="text-sm text-gray-600">Can be scaled or modified for different urban contexts or expanded with additional parameters as needed.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <StakeholdersSection />
            </div>
          </TabsContent>

          <TabsContent value="upload" className="focus:outline-none">
            <DataUploadSection />
          </TabsContent>

          <TabsContent value="collection" className="focus:outline-none">
            <DataCollectionSection />
          </TabsContent>

          <TabsContent value="storage" className="focus:outline-none">
            <DataStorageSection />
          </TabsContent>

          <TabsContent value="analysis" className="focus:outline-none">
            <DataAnalysisSection />
          </TabsContent>

          <TabsContent value="reporting" className="focus:outline-none">
            <ReportGenerationSection />
          </TabsContent>

          <TabsContent value="access" className="focus:outline-none">
            <UserAccessSection />
          </TabsContent>
        </Tabs>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Mumbai Naka Traffic Research System Architecture • Developed for Academic & Civic Implementation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
