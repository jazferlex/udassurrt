import Navbar from "@/app/components/navbar/page";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <h1 className="text-3xl font-bold text-center py-10">Welcome to U-dassurrt!</h1>
      <p className="text-center text-lg">
        Your one-stop shop for all things delicious.
      </p>
    </div>
  );
}
