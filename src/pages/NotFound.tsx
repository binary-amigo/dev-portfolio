
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
