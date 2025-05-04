
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "@/services/authService";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Mock data - in a real app, this would come from your database
const mockContacts = [
  { id: 1, name: "John Doe", email: "john@example.com", message: "I'm interested in your services", date: "2023-05-01" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", message: "Please contact me about pricing", date: "2023-05-02" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "I have a question about your product", date: "2023-05-03" },
];

const Contact = () => {
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
        <DashboardHeader title="Contact Submissions" />
        
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Recent Contacts</h2>
          <Link to="/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        </div>
        
        <div className="grid gap-6">
          {mockContacts.map((contact) => (
            <Card key={contact.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{contact.name}</h3>
                    <p className="text-sm text-muted-foreground">{contact.email}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {contact.date}
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{contact.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center text-muted-foreground">
          <p>Displaying {mockContacts.length} contacts</p>
          <p className="text-sm mt-2">
            Connect to your database to display real contact data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
