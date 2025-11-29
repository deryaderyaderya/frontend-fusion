import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertTriangle, TrendingUp, Train } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LiveData = () => {
  const mockDepartures = [
    { line: "Line 1", destination: "Central Station", time: "2 min", status: "On time", delay: 0 },
    { line: "Line 3", destination: "Airport", time: "5 min", status: "On time", delay: 0 },
    { line: "Line 2", destination: "Harbor", time: "8 min", status: "Delayed", delay: 3 },
    { line: "Line 5", destination: "University", time: "12 min", status: "On time", delay: 0 },
    { line: "Line 1", destination: "North Terminal", time: "15 min", status: "On time", delay: 0 },
  ];

  const mockDisruptions = [
    { line: "Line 2", severity: "moderate", message: "Reduced service due to maintenance work" },
    { line: "Line 7", severity: "low", message: "Minor delays expected during peak hours" },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Next Departures */}
      <Card className="shadow-elevated lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Next Departures
              </CardTitle>
              <CardDescription>Live departure times from selected station</CardDescription>
            </div>
            <Badge variant="secondary" className="animate-pulse-subtle">
              Live
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Line</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDepartures.map((departure, idx) => (
                <TableRow key={idx} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">
                    <Badge className="bg-primary">{departure.line}</Badge>
                  </TableCell>
                  <TableCell>{departure.destination}</TableCell>
                  <TableCell className="font-semibold">{departure.time}</TableCell>
                  <TableCell>
                    {departure.delay > 0 ? (
                      <Badge variant="destructive" className="gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        +{departure.delay} min
                      </Badge>
                    ) : (
                      <Badge variant="secondary">{departure.status}</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Service Disruptions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Service Disruptions
          </CardTitle>
          <CardDescription>Current issues affecting the network</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockDisruptions.map((disruption, idx) => (
            <div 
              key={idx}
              className="p-4 border border-border rounded-lg bg-card hover:shadow-card transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-primary">{disruption.line}</Badge>
                <Badge 
                  variant={disruption.severity === "moderate" ? "destructive" : "secondary"}
                >
                  {disruption.severity}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{disruption.message}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Network Statistics */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Network Statistics
          </CardTitle>
          <CardDescription>Real-time network performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Train className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Active Trains</span>
            </div>
            <span className="text-2xl font-bold text-foreground">187</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">On-Time Performance</span>
            </div>
            <span className="text-2xl font-bold text-accent">94%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium">Active Incidents</span>
            </div>
            <span className="text-2xl font-bold text-destructive">2</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveData;
