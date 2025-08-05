import Header from "@/components/Header";
import ProductCategories from "@/components/ProductCategories";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* القسم الرئيسي */}
      <main>
        <ProductCategories />
        <VideoSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
