
import { Button } from "@/components/ui/button";
import { logoutAdmin } from "@/services/authService";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader = ({ title }: DashboardHeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    logoutAdmin();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/");
  };
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pb-6 border-b mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-1">
          Manage your application data and settings
        </p>
      </div>
      <Button
        variant="outline"
        onClick={handleLogout}
        className="mt-4 md:mt-0"
      >
        Logout
      </Button>
    </div>
  );
};

export default DashboardHeader;
