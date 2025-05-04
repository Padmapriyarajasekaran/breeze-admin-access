
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "@/services/authService";
import DashboardHeader from "@/components/DashboardHeader";
import NavigationCard from "@/components/NavigationCard";
import { Contact, MessageSquare } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background admin-container">
      <div className="py-8">
        <DashboardHeader title="Admin Dashboard" />
        
        <div className="grid gap-8 mt-8">
          <h2 className="text-2xl font-semibold">Welcome, Admin</h2>
          <p className="text-muted-foreground">
            Select an option below to manage your application data.
          </p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <NavigationCard
              title="Contacts"
              description="View and manage contact form submissions"
              icon={Contact}
              href="/contacts"
            />
            <NavigationCard
              title="Enquiries"
              description="Review and respond to customer enquiries"
              icon={MessageSquare}
              href="/enquiries"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
