export default function Navbar() {
  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">U-dassurrt</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}