import { Search, User, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-primary/5 to-background border-b border-primary/20 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {/* الأيقونات - يسار (في التخطيط العربي) */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Button variant="ghost" size="icon" className="hover:bg-accent h-8 w-8 sm:h-10 sm:w-10">
              <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent h-8 w-8 sm:h-10 sm:w-10">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent h-8 w-8 sm:h-10 sm:w-10">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* اسم الشركة - وسط */}
          <div className="flex-1 text-center px-1 sm:px-2 min-w-0">
            <h1 className="text-sm sm:text-lg md:text-xl font-bold text-primary whitespace-nowrap overflow-hidden text-ellipsis">
              متجر موريتانيا
            </h1>
            <p className="text-xs text-muted-foreground hidden xs:block sm:text-xs">
              للأثاث والإلكترونيات
            </p>
          </div>

          {/* مساحة الشعار - يمين (في التخطيط العربي) */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-foreground rounded-md flex items-center justify-center">
              <span className="text-primary font-bold text-xs sm:text-sm">م</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;