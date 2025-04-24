import { 
  TrendingUp, AlertTriangle, ThumbsUp, TrendingDown, ChartBar, ChartPie,
  Clock, Target, CheckCircle2, ClipboardCheck, LineChart 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";
import TrafficHeatmap from "@/components/graphs/TrafficHeatmap";
import ComparativeAnalysis from "@/components/graphs/ComparativeAnalysis";

interface DataVisualizationProps {
  data: {
    trafficTrends: { month: string; value: number }[];
    peakHourData: { hour: string; value: number }[];
    roadSafetyMetrics: { metric: string; value: number }[];
    congestionFactors: { factor: string; percentage: number }[];
    weeklyHeatmap: { hour: number; day: string; intensity: number }[];
    comparativeData: { month: string; currentYear: number; previousYear: number; incidents: number }[];
  };
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const DataVisualization = ({ data }: DataVisualizationProps) => {
  const peakHours = data.peakHourData.filter(item => item.value > 800).map(item => item.hour);
  
  const trafficValues = data.trafficTrends.map(item => item.value);
  const firstHalf = trafficValues.slice(0, Math.floor(trafficValues.length / 2));
  const secondHalf = trafficValues.slice(Math.floor(trafficValues.length / 2));
  const firstHalfAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
  const secondHalfAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
  const trendIncreasing = secondHalfAvg > firstHalfAvg;
  
  const primarySafetyConcern = [...data.roadSafetyMetrics].sort((a, b) => b.value - a.value)[0];
  
  const mainCongestionFactor = [...data.congestionFactors].sort((a, b) => b.percentage - a.percentage)[0];

  return (
    <div className="space-y-6 mt-8 animate-fade-in">
      <div className="flex items-center gap-2 border-b pb-2 mb-4">
        <ChartBar className="text-blue-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">Data Analysis & Recommendations</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className={trendIncreasing ? "border-amber-200" : "border-green-200"}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              {trendIncreasing ? (
                <TrendingUp className="text-amber-500" size={18} />
              ) : (
                <TrendingDown className="text-green-500" size={18} />
              )}
              Traffic Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">
              {trendIncreasing 
                ? "Increasing Traffic Volume" 
                : "Stable or Decreasing Traffic"
              }
            </p>
            <p className="text-sm text-gray-500">
              {trendIncreasing 
                ? "Traffic volumes show an increasing trend over time." 
                : "Traffic volumes are stable or show a decreasing trend."
              }
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={18} />
              Primary Safety Concern
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{primarySafetyConcern.metric}</p>
            <p className="text-sm text-gray-500">
              {primarySafetyConcern.value} incidents recorded
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <ChartPie className="text-blue-500" size={18} />
              Main Congestion Factor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{mainCongestionFactor.factor}</p>
            <p className="text-sm text-gray-500">
              Accounts for {mainCongestionFactor.percentage}% of congestion
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="charts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="charts">Charts & Visualizations</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Analysis</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="charts" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Traffic Trends</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={data.trafficTrends}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        name="Vehicle Count" 
                        stroke="#8884d8" 
                        strokeWidth={2} 
                        activeDot={{ r: 8 }} 
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Daily Traffic Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.peakHourData}>
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Vehicle Count" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Road Safety Incidents</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={data.roadSafetyMetrics}
                      layout="vertical"
                    >
                      <XAxis type="number" />
                      <YAxis dataKey="metric" type="category" width={150} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" name="Incidents" fill="#ff8042" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Congestion Factors</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data.congestionFactors}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="percentage"
                        nameKey="factor"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {data.congestionFactors.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrafficHeatmap data={data.weeklyHeatmap} />
            <ComparativeAnalysis data={data.comparativeData} />
          </div>
        </TabsContent>
        
        <TabsContent value="recommendations" className="space-y-4">
          <Alert className="bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800 font-bold flex items-center gap-2">
              <ThumbsUp className="h-4 w-4" /> Traffic Analysis Recommendations
            </AlertTitle>
            <AlertDescription className="text-blue-700">
              Based on comprehensive analysis of traffic data at Mumbai Naka, we recommend the following prioritized actions:
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  High Priority Actions (0-3 months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-800 text-xs flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <strong>Signal Timing Optimization</strong>
                      <p className="text-gray-600 mt-1">Implement adaptive signal control during peak hours ({peakHours.join(", ")}) to reduce wait times by up to 25%.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-800 text-xs flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <strong>Lane Management</strong>
                      <p className="text-gray-600 mt-1">Add dedicated turning lanes at north and east approaches to separate turning traffic from through traffic.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-800 text-xs flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <strong>Traffic Warden Deployment</strong>
                      <p className="text-gray-600 mt-1">Station wardens during peak hours (8-10 AM, 5-7 PM) to manage flow and prevent violations.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  Medium Priority Actions (3-6 months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 text-xs flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <strong>Geometric Improvements</strong>
                      <p className="text-gray-600 mt-1">Widen critical lanes to minimum 3.5m width and improve intersection markings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 text-xs flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <strong>Pedestrian Infrastructure</strong>
                      <p className="text-gray-600 mt-1">Install signalized crosswalks and refuge islands to improve pedestrian safety.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 text-xs flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <strong>Technology Integration</strong>
                      <p className="text-gray-600 mt-1">Deploy smart sensors for real-time traffic monitoring and automated incident detection.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-500" />
                  Long-term Strategic Plans (6-12 months)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <strong>Grade Separation</strong>
                      <p className="text-gray-600 mt-1">Conduct feasibility study for flyover/underpass to separate conflicting traffic movements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <strong>Alternative Routes</strong>
                      <p className="text-gray-600 mt-1">Develop and improve parallel corridors to distribute traffic load during peak hours.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <strong>Smart Corridor Implementation</strong>
                      <p className="text-gray-600 mt-1">Integrate AI-powered traffic management system with predictive analytics capabilities.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-purple-500" />
                  Expected Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-1" />
                    <div>
                      <strong>Traffic Flow Improvement</strong>
                      <p className="text-gray-600 mt-1">25-30% reduction in peak hour travel times through the intersection.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-1" />
                    <div>
                      <strong>Safety Enhancement</strong>
                      <p className="text-gray-600 mt-1">40% reduction in traffic conflicts and potential accident scenarios.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mt-1" />
                    <div>
                      <strong>Capacity Increase</strong>
                      <p className="text-gray-600 mt-1">20% increase in intersection capacity during peak hours.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6 border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4 text-blue-500" />
                Implementation Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">Phase 1: Quick Wins</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Begin with signal optimization and traffic warden deployment to achieve immediate improvements in traffic flow.
                      Estimated completion: 1 month.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">Phase 2: Infrastructure Updates</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Implement geometric improvements and pedestrian infrastructure changes.
                      Estimated completion: 4 months.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">Phase 3: Technology Integration</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Deploy smart sensors and begin preliminary work on long-term solutions.
                      Estimated completion: 12 months.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataVisualization;
