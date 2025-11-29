import { useState } from "react";
import { Train, Search, Code, Activity, Map as MapIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NetworkMap from "@/components/transport/NetworkMap";
import QueryEditor from "@/components/transport/QueryEditor";
import LiveData from "@/components/transport/LiveData";
import StationSearch from "@/components/transport/StationSearch";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Train className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">TransitGraph</h1>
                <p className="text-sm text-muted-foreground">Public Transport Knowledge Graph</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-secondary rounded-full">
                <span className="text-xs font-medium text-secondary-foreground">API Status: Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card shadow-card">
            <TabsTrigger value="overview" className="gap-2">
              <MapIcon className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="search" className="gap-2">
              <Search className="h-4 w-4" />
              Search
            </TabsTrigger>
            <TabsTrigger value="query" className="gap-2">
              <Code className="h-4 w-4" />
              Query
            </TabsTrigger>
            <TabsTrigger value="live" className="gap-2">
              <Activity className="h-4 w-4" />
              Live Data
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <NetworkMap />
          </TabsContent>

          <TabsContent value="search" className="space-y-6 animate-fade-in">
            <StationSearch />
          </TabsContent>

          <TabsContent value="query" className="space-y-6 animate-fade-in">
            <QueryEditor />
          </TabsContent>

          <TabsContent value="live" className="space-y-6 animate-fade-in">
            <LiveData />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
