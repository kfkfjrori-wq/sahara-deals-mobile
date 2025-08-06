import { DoorOpen, Palette, Refrigerator, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "الأبواب والنوافذ",
    icon: DoorOpen,
    bgColor: "bg-gradient-to-br from-primary/10 to-primary/5",
    iconColor: "text-primary"
  },
  {
    id: 2,
    name: "الديكورات",
    icon: Palette,
    bgColor: "bg-gradient-to-br from-secondary/20 to-secondary/10",
    iconColor: "text-secondary-foreground"
  },
  {
    id: 3,
    name: "الثلاجات", 
    icon: Refrigerator,
    bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-600"
  },
  {
    id: 4,
    name: "المكيفات",
    icon: Wind,
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-cyan-500/5",
    iconColor: "text-cyan-600"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          أقسام المنتجات
        </h2>
        
        {/* تخطيط الشبكة 2x2 للهواتف */}
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="category-card hover-scale cursor-pointer h-32"
              >
                <CardContent className={`${category.bgColor} h-full p-4 flex flex-col items-center justify-center`}>
                  <IconComponent 
                    className={`h-12 w-12 mb-3 ${category.iconColor}`}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm font-semibold text-center text-foreground">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;