import { Search, Plus, Upload, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { downloadCSV, getEmptyTemplate, parseCSV } from "@/utils/csvUtils";
import { useToast } from "@/hooks/use-toast";

interface PCPartsHeaderProps {
  onDataImport: (data: any[]) => void;
  onExportData: () => void;
}

const PCPartsHeader = ({ onDataImport, onExportData }: PCPartsHeaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleBulkUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const csvText = e.target?.result as string;
          const parsedData = parseCSV(csvText);
          onDataImport(parsedData);
          toast({
            title: "Success",
            description: `Imported ${parsedData.length} items successfully`,
          });
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to parse CSV file",
            variant: "destructive",
          });
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDownloadTemplate = () => {
    const template = getEmptyTemplate();
    downloadCSV(template, 'pc_parts_template.csv');
    toast({
      title: "Template Downloaded",
      description: "CSV template has been downloaded",
    });
  };

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
          <Button variant="default" className="gap-2" onClick={handleBulkUpload}>
            <Upload className="h-4 w-4" />
            BULK UPLOAD
          </Button>
          <Button variant="default" className="gap-2" onClick={onExportData}>
            <Download className="h-4 w-4" />
            EXPORT
          </Button>
        </div>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".csv"
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default PCPartsHeader;