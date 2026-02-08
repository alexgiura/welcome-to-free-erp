import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CustomDevelopment from "@/components/landing/CustomDevelopment";
import FreeBanner from "@/components/landing/FreeBanner";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <FreeBanner />
        <CustomDevelopment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
