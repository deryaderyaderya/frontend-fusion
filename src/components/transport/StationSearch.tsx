import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Clock, Navigation } from "lucide-react";

const StationSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockStations = [
    { 
      name: "Central Station", 
      lines: ["Line 1", "Line 2", "Line 5"], 
      connections: 12,
      coordinates: "52.3791, 4.9003"
    },
    { 
      name: "Airport Terminal", 
      lines: ["Line 3", "Line 4"], 
      connections: 8,
      coordinates: "52.3105, 4.7683"
    },
    { 
      name: "University Campus", 
      lines: ["Line 5", "Line 6"], 
      connections: 6,
      coordinates: "52.3547, 4.9555"
    },
    { 
      name: "Harbor District", 
      lines: ["Line 2", "Line 7"], 
      connections: 10,
      coordinates: "52.3798, 4.9196"
    },
    { 
      name: "North Terminal", 
      lines: ["Line 1", "Line 3"], 
      connections: 7,
      coordinates: "52.4038, 4.9415"
    },
  ];

  const filteredStations = mockStations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Station Search</CardTitle>
          <CardDescription>Find stations and view their connections in the transport graph</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for stations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background"
            />
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStations.map((station, idx) => (
          <Card 
            key={idx} 
            className="shadow-card hover:shadow-elevated transition-all cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{station.name}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Lines */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-medium">Lines</p>
                <div className="flex flex-wrap gap-1">
                  {station.lines.map((line, lineIdx) => (
                    <Badge key={lineIdx} className="bg-primary text-xs">
                      {line}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">Connections</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{station.connections}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Navigation className="h-3 w-3" />
                    <span className="text-xs">Routes</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{station.lines.length}</p>
                </div>
              </div>

              {/* Coordinates */}
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground font-mono">{station.coordinates}</p>
              </div>

              <Button 
                variant="secondary" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                size="sm"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStations.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="py-12 text-center">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-3 opacity-50" />
            <p className="text-muted-foreground">No stations found matching "{searchQuery}"</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StationSearch;
