
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } from "recharts";

interface TrafficHeatmapProps {
  data: {
    hour: number;
    day: string;
    intensity: number;
  }[];
}

const TrafficHeatmap = ({ data }: TrafficHeatmapProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Traffic Intensity Heatmap</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 60,
              }}
            >
              <XAxis 
                dataKey="hour" 
                name="Hour" 
                type="number" 
                domain={[0, 23]}
                tickFormatter={(hour) => `${hour}:00`}
              />
              <YAxis 
                dataKey="day" 
                name="Day" 
                type="category"
                width={80}
              />
              <ZAxis
                dataKey="intensity"
                range={[50, 400]}
                name="Traffic Volume"
              />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm">
                        <p className="font-medium">{data.day}</p>
                        <p>{`${data.hour}:00 - Traffic: ${data.intensity}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter
                data={data}
                fill="#8884d8"
                shape="circle"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficHeatmap;
