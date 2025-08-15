import { Edit, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PCPart {
  itemCode: string;
  department: string;
  category: string;
  description: string;
  unitPrice: number;
  ticketCount: number;
}

const pcPartsData: PCPart[] = [
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

const PCPartsTable = () => {
  return (
    <div className="flex-1">
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-foreground">ITEM CODE</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">DEPARTMENT</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">CATEGORY</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">DESCRIPTION</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">UNIT PRICE</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">TICKET COUNT</th>
                <th className="text-left py-4 px-6 font-semibold text-foreground">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {pcPartsData.map((part, index) => (
                <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-6 text-foreground font-medium">{part.itemCode}</td>
                  <td className="py-4 px-6 text-muted-foreground">{part.department}</td>
                  <td className="py-4 px-6 text-muted-foreground">{part.category}</td>
                  <td className="py-4 px-6 text-muted-foreground">{part.description}</td>
                  <td className="py-4 px-6 text-muted-foreground">₱{part.unitPrice.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    {part.ticketCount > 0 ? (
                      <Badge variant="destructive" className="rounded-full">
                        {part.ticketCount}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">{part.ticketCount}</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:bg-primary/10">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
          <Button variant="default" className="gap-2">
            <Download className="h-4 w-4" />
            DOWNLOAD TEMPLATE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PCPartsTable;