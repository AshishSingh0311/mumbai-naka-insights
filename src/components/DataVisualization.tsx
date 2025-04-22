
import { TrendingUp, AlertTriangle, ThumbsUp, TrendingDown, ChartBar, ChartPie } from "lucide-react";
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
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

interface DataVisualizationProps {
  data: {
    trafficTrends: { month: string; value: number }[];
    peakHourData: { hour: string; value: number }[];
    roadSafetyMetrics: { metric: string; value: number }[];
    congestionFactors: { factor: string; percentage: number }[];
  };
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const DataVisualization = ({ data }: DataVisualizationProps) => {
  // Find peak traffic hours (hours with value > 800)
  const peakHours = data.peakHourData.filter(item => item.value > 800).map(item => item.hour);
  
  // Determine congestion trend (increasing or decreasing)
  const trafficValues = data.trafficTrends.map(item => item.value);
  const firstHalf = trafficValues.slice(0, Math.floor(trafficValues.length / 2));
  const secondHalf = trafficValues.slice(Math.floor(trafficValues.length / 2));
  const firstHalfAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
  const secondHalfAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
  const trendIncreasing = secondHalfAvg > firstHalfAvg;
  
  // Determine primary safety concern
  const primarySafetyConcern = [...data.roadSafetyMetrics].sort((a, b) => b.value - a.value)[0];
  
  // Determine main congestion factor
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
                    <LineChart data={data.trafficTrends}>
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
                    </LineChart>
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
        
        <TabsContent value="recommendations" className="space-y-4">
          <Alert className="bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800 font-bold flex items-center gap-2">
              <ThumbsUp className="h-4 w-4" /> Immediate Recommendations
            </AlertTitle>
            <AlertDescription className="text-blue-700">
              Based on the analysis of Mumbai Naka traffic data, the following immediate actions are recommended:
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Road Geometry Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs flex-shrink-0 mt-0.5">1</div>
                    <span><strong>Widen critical lanes</strong> at {mainCongestionFactor.factor === "Inadequate Lane Width" ? "all approaches" : "north and east approaches"} to minimum 3.5m width.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs flex-shrink-0 mt-0.5">2</div>
                    <span><strong>Improve intersection markings</strong> to clearly define vehicle paths and reduce conflicts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs flex-shrink-0 mt-0.5">3</div>
                    <span><strong>Add dedicated turning lanes</strong> to separate turning traffic from through traffic.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Traffic Management Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs flex-shrink-0 mt-0.5">1</div>
                    <span><strong>Optimize signal timing</strong> during peak hours ({peakHours.join(", ")}) to improve traffic flow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs flex-shrink-0 mt-0.5">2</div>
                    <span><strong>Implement strict no-parking zones</strong> within 100m of the intersection to reduce bottlenecks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs flex-shrink-0 mt-0.5">3</div>
                    <span><strong>Deploy traffic wardens</strong> during peak hours to manage traffic flow and prevent violations.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Safety Enhancements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-800 text-xs flex-shrink-0 mt-0.5">1</div>
                    <span><strong>Install pedestrian signals</strong> at all crosswalks to reduce pedestrian-vehicle conflicts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-800 text-xs flex-shrink-0 mt-0.5">2</div>
                    <span><strong>Improve street lighting</strong> to enhance visibility during evening peak hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-800 text-xs flex-shrink-0 mt-0.5">3</div>
                    <span><strong>Install speed calming measures</strong> on approach roads to reduce vehicle speeds.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Long-term Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-xs flex-shrink-0 mt-0.5">1</div>
                    <span><strong>Develop alternative routes</strong> to divert some traffic away from Mumbai Naka.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-xs flex-shrink-0 mt-0.5">2</div>
                    <span><strong>Consider grade separation</strong> (flyover/underpass) to separate conflicting traffic movements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-xs flex-shrink-0 mt-0.5">3</div>
                    <span><strong>Implement intelligent transportation systems</strong> for real-time traffic management.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <h3 className="font-semibold text-amber-800 mb-2">Implementation Priority</h3>
            <p className="text-amber-700 text-sm">
              Based on the analysis, the most critical issue to address is <strong>{mainCongestionFactor.factor}</strong>, 
              which should be prioritized for immediate intervention. The recommended approach is a phased implementation
              starting with low-cost traffic management strategies, followed by geometric improvements,
              and finally long-term infrastructure development.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataVisualization;
