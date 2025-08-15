import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FilterSidebar = () => {
  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3">FILTER BY DEPARTMENT</h3>
        <Select>
          <SelectTrigger className="bg-card border-border">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="cashier">Cashier</SelectItem>
            <SelectItem value="it">IT Department</SelectItem>
            <SelectItem value="admin">Administration</SelectItem>
            <SelectItem value="hr">Human Resources</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3">FILTER BY CATEGORY</h3>
        <Select>
          <SelectTrigger className="bg-card border-border">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="hardware-pc">Hardware- PC Unit</SelectItem>
            <SelectItem value="hardware-laptop">Hardware- Laptop</SelectItem>
            <SelectItem value="peripherals">Peripherals</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
            <SelectItem value="software">Software</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSidebar;