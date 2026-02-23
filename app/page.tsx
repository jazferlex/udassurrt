import Navbar from "@/app/components/navbar/page";
import Catalog from "@/app/components/catalog/page";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-10">Welcome to U-dassurrt!</h1>
      <p className="text-center text-lg">
        Your one-stop shop for all things delicious.
      </p>
      <div className="w-full py-10 flex justify-center">
        <div className="w-max flex justify-center-safe">
          <Catalog />
        </div>
      </div>
    </div>
  );
}
