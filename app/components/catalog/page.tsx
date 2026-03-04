import Categories from "./categories/page";
import Products from "./products/page";

export default function Catalog() {
  
  return (
    <div className="min-h-screen bg-background flex flex-row gap-4">
      <Categories />
      <Products />
    </div>
  );
}
