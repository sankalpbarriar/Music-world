import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChoseUs from "@/components/WhyChoseUs";
import HeroSection from "@/components/ui/HeroSection";
import MusicSchoolTestinomials from "@/components/TestinomialCards"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <MusicSchoolTestinomials/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
}
