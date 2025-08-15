import { Search, Plus, Upload, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PCPartsHeader = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-foreground">RCC MTS</h1>
        </div>
        <Button variant="outline" size="icon" className="rounded-full">
          <User className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Title */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">PC PARTS</h2>
        <h3 className="text-xl text-muted-foreground">MANAGEMENT</h3>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-card border-border"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="default" className="gap-2">
            <Plus className="h-4 w-4" />
            ADD
          </Button>
          <Button variant="default" className="gap-2">
            <Upload className="h-4 w-4" />
            BULK UPLOAD
          </Button>
          <Button variant="default" className="gap-2">
            <Download className="h-4 w-4" />
            EXPORT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PCPartsHeader;