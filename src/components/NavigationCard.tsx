
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const NavigationCard = ({ title, description, icon: Icon, href }: NavigationCardProps) => {
  return (
    <Link to={href} className="block">
      <Card className="card-gradient h-full transition-all hover:translate-y-[-5px]">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="rounded-full bg-admin/10 p-4 mb-4">
            <Icon className="h-8 w-8 text-admin" />
          </div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NavigationCard;
