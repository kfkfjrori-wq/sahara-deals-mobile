import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">متجر موريتانيا</h3>
          <p className="text-sm mb-6 opacity-90">
            أفضل الديكورات ومستلزمات البيت في موريتانيا
          </p>
          
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+222 49055137</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">sidiyacheikh2024@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">نواكشوط، موريتانيا</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-primary-foreground/20">
            <p className="text-xs opacity-75">
              © 2025 متجر موريتانيا. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;