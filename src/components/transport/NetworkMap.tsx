import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Network, Info } from "lucide-react";

const NetworkMap = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* Stats Cards */}
      <Card className="shadow-card hover:shadow-elevated transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">Stations</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground">1,247</div>
          <p className="text-sm text-muted-foreground mt-1">Cached in graph</p>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-elevated transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Network className="h-5 w-5 text-accent" />
            </div>
            <CardTitle className="text-lg">Lines</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground">42</div>
          <p className="text-sm text-muted-foreground mt-1">Active routes</p>
        </CardContent>
      </Card>

      <Card className="shadow-card hover:shadow-elevated transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-secondary/50 rounded-lg">
              <Info className="h-5 w-5 text-secondary-foreground" />
            </div>
            <CardTitle className="text-lg">Connections</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground">3,891</div>
          <p className="text-sm text-muted-foreground mt-1">Graph relationships</p>
        </CardContent>
      </Card>

      {/* Map Visualization */}
      <Card className="md:col-span-3 shadow-elevated">
        <CardHeader>
          <CardTitle>Network Visualization</CardTitle>
          <CardDescription>Interactive map of the public transport network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-[500px] bg-muted rounded-lg border border-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="p-4 bg-card rounded-full inline-block shadow-card">
                  <MapPin className="h-12 w-12 text-primary animate-pulse-subtle" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">Interactive Map View</p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Connect your backend API endpoint to display the complete transport network with stations, 
                    lines, and real-time data visualization
                  </p>
                  <div className="flex gap-2 justify-center pt-2">
                    <Badge variant="secondary">API Integration Ready</Badge>
                    <Badge variant="outline">Graph Visualization</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkMap;
