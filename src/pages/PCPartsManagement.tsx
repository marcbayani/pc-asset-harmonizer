import { useState } from "react";
import PCPartsHeader from "@/components/PCPartsHeader";
import FilterSidebar from "@/components/FilterSidebar";
import PCPartsTable, { PCPart } from "@/components/PCPartsTable";
import { downloadCSV } from "@/utils/csvUtils";
import { useToast } from "@/hooks/use-toast";

const initialData: PCPart[] = [
  {
    itemCode: "ConnecticutF",
    department: "Cashier",
    category: "Hardware- PC Unit",
    description: "Desktop Processor",
    unitPrice: 6500,
    ticketCount: 1,
  },
  {
    itemCode: "ConnecticutF",
    department: "Cashier",
    category: "Hardware- PC Unit",
    description: "Desktop Processor",
    unitPrice: 6500,
    ticketCount: 0,
  },
  {
    itemCode: "MotherboardPro",
    department: "IT Department",
    category: "Hardware- PC Unit",
    description: "ATX Motherboard",
    unitPrice: 8500,
    ticketCount: 3,
  },
  {
    itemCode: "RAM16GB",
    department: "Administration",
    category: "Hardware- PC Unit",
    description: "16GB DDR4 Memory",
    unitPrice: 4200,
    ticketCount: 2,
  },
];

const PCPartsManagement = () => {
  const [pcPartsData, setPcPartsData] = useState<PCPart[]>(initialData);
  const { toast } = useToast();

  const handleDataImport = (newData: any[]) => {
    const formattedData: PCPart[] = newData.map(item => ({
      itemCode: item.itemCode || '',
      department: item.department || '',
      category: item.category || '',
      description: item.description || '',
      unitPrice: Number(item.unitPrice) || 0,
      ticketCount: Number(item.ticketCount) || 0,
    }));
    setPcPartsData([...pcPartsData, ...formattedData]);
  };

  const handleExportData = () => {
    downloadCSV(pcPartsData, 'pc_parts_export.csv');
    toast({
      title: "Data Exported",
      description: "PC parts data has been exported successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <PCPartsHeader 
          onDataImport={handleDataImport}
          onExportData={handleExportData}
        />
        
        <div className="flex gap-8">
          <FilterSidebar />
          <PCPartsTable data={pcPartsData} />
        </div>
      </div>
    </div>
  );
};

export default PCPartsManagement;