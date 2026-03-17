import Navbar from "@/components/Navbar";
import HeroScene from "@/components/HeroScene";
import TeaPourScroll from "@/components/TeaPourScroll";
import BrandReveal from "@/components/BrandReveal";
import StorySections from "@/components/StorySections";
import Footer from "@/components/Footer";
import FranchiseCTA from "@/components/FranchiseCTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroScene />
      <TeaPourScroll />
      <BrandReveal />
      <StorySections />
      <FranchiseCTA />
      <Footer />
    </main>
  );
}
