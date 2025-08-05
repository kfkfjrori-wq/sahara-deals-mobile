import { Search, User, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* الأيقونات - يسار (في التخطيط العربي) */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <MoreVertical className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* اسم الشركة - وسط */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl font-bold text-primary">
              متجر موريتانيا
            </h1>
            <p className="text-xs text-muted-foreground text-center">
              للأثاث والإلكترونيات
            </p>
          </div>

          {/* مساحة الشعار - يمين (في التخطيط العربي) */}
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
              <span className="text-primary font-bold text-sm">م</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;