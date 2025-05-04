
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "@/services/authService";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock data - in a real app, this would come from your database
const mockEnquiries = [
  { 
    id: 1, 
    subject: "Product Information Request", 
    email: "customer@example.com", 
    details: "I'd like more information about your premium package.", 
    status: "New", 
    date: "2023-05-01" 
  },
  { 
    id: 2, 
    subject: "Support Request", 
    email: "user@example.com", 
    details: "I'm having trouble accessing my account. Can you help?", 
    status: "In Progress", 
    date: "2023-05-02" 
  },
  { 
    id: 3, 
    subject: "Pricing Question", 
    email: "prospect@example.com", 
    details: "What are your enterprise pricing options?", 
    status: "Resolved", 
    date: "2023-05-03" 
  },
];

// Helper function to get badge color based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case "New": return "bg-blue-500 hover:bg-blue-600";
    case "In Progress": return "bg-yellow-500 hover:bg-yellow-600";
    case "Resolved": return "bg-green-500 hover:bg-green-600";
    default: return "bg-gray-500 hover:bg-gray-600";
  }
};

const Enquiry = () => {
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
        <DashboardHeader title="Customer Enquiries" />
        
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Recent Enquiries</h2>
          <Link to="/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
        
        <div className="grid gap-6">
          {mockEnquiries.map((enquiry) => (
            <Card key={enquiry.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{enquiry.subject}</h3>
                      <Badge className={getStatusColor(enquiry.status)}>
                        {enquiry.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{enquiry.email}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {enquiry.date}
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{enquiry.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center text-muted-foreground">
          <p>Displaying {mockEnquiries.length} enquiries</p>
          <p className="text-sm mt-2">
            Connect to your database to display real enquiry data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
