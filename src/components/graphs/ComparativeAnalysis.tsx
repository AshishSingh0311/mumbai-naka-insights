
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface ComparativeAnalysisProps {
  data: {
    month: string;
    currentYear: number;
    previousYear: number;
    incidents: number;
  }[];
}

const ComparativeAnalysis = ({ data }: ComparativeAnalysisProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Year-over-Year Traffic Comparison</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="currentYear"
                name="Current Year Traffic"
                fill="#8884d8"
                barSize={20}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="previousYear"
                name="Previous Year Traffic"
                stroke="#82ca9d"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="incidents"
                name="Safety Incidents"
                stroke="#ff7300"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparativeAnalysis;
