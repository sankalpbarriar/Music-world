import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChoseUs from "@/components/WhyChoseUs";
import HeroSection from "@/components/ui/HeroSection";
import MusicSchoolTestinomials from "@/components/TestinomialCards"


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <MusicSchoolTestinomials/>
    </main>
  );
}
