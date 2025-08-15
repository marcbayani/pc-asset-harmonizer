import PCPartsHeader from "@/components/PCPartsHeader";
import FilterSidebar from "@/components/FilterSidebar";
import PCPartsTable from "@/components/PCPartsTable";

const PCPartsManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <PCPartsHeader />
        
        <div className="flex gap-8">
          <FilterSidebar />
          <PCPartsTable />
        </div>
      </div>
    </div>
  );
};

export default PCPartsManagement;