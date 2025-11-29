import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Code2, Database } from "lucide-react";
import { toast } from "sonner";

const QueryEditor = () => {
  const [sparqlQuery, setSparqlQuery] = useState(`PREFIX transit: <http://transit.example.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?station ?name ?lat ?lon
WHERE {
  ?station rdf:type transit:Station .
  ?station transit:hasName ?name .
  ?station transit:latitude ?lat .
  ?station transit:longitude ?lon .
}
LIMIT 10`);

  const [cypherQuery, setCypherQuery] = useState(`MATCH (s:Station)-[r:CONNECTS_TO]->(s2:Station)
WHERE r.line = 'Line 1'
RETURN s.name AS from, s2.name AS to, r.duration AS travel_time
ORDER BY travel_time
LIMIT 10`);

  const handleExecuteQuery = (queryType: string) => {
    toast.success(`${queryType} query executed`, {
      description: "Connect your backend to see real results"
    });
  };

  return (
    <div className="grid gap-6">
      <Card className="shadow-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            Graph Query Editor
          </CardTitle>
          <CardDescription>
            Execute SPARQL (RDF/Knowledge Graph) or Cypher (Property Graph) queries against your cached transport data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sparql" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-muted">
              <TabsTrigger value="sparql" className="gap-2">
                <Database className="h-4 w-4" />
                SPARQL
              </TabsTrigger>
              <TabsTrigger value="cypher" className="gap-2">
                <Database className="h-4 w-4" />
                Cypher
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sparql" className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  value={sparqlQuery}
                  onChange={(e) => setSparqlQuery(e.target.value)}
                  className="min-h-[300px] font-mono text-sm bg-card"
                  placeholder="Enter your SPARQL query..."
                />
                <Button 
                  onClick={() => handleExecuteQuery("SPARQL")}
                  className="w-full sm:w-auto gap-2 bg-gradient-primary hover:opacity-90"
                >
                  <Play className="h-4 w-4" />
                  Execute Query
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="cypher" className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  value={cypherQuery}
                  onChange={(e) => setCypherQuery(e.target.value)}
                  className="min-h-[300px] font-mono text-sm bg-card"
                  placeholder="Enter your Cypher query..."
                />
                <Button 
                  onClick={() => handleExecuteQuery("Cypher")}
                  className="w-full sm:w-auto gap-2 bg-gradient-primary hover:opacity-90"
                >
                  <Play className="h-4 w-4" />
                  Execute Query
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Query Results</CardTitle>
          <CardDescription>Results will appear here after execution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border border-border rounded-lg p-8 text-center bg-muted/30">
            <Database className="h-12 w-12 mx-auto text-muted-foreground mb-3 opacity-50" />
            <p className="text-sm text-muted-foreground">
              Execute a query to see results from your Knowledge Graph
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QueryEditor;
