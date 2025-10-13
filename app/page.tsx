import Cta from "@/sections/cta";
import Feedback from "@/sections/feedback";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Teams from "@/sections/teams";
import TechStack from "@/sections/techstack";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return(
    <>
    <div className="flex flex-col">
      <Hero />
    </div>
    <RevealOnScroll>
      <div className="flex flex-col">
        <Portfolio />
      </div>
    </RevealOnScroll>
    <RevealOnScroll delayMs={100}>
      <div className="flex flex-col">
        <TechStack />
      </div>
    </RevealOnScroll>
    <RevealOnScroll delayMs={150}>
      <div className="flex flex-col">
        <Feedback />
      </div>
    </RevealOnScroll>
    <RevealOnScroll delayMs={200}>
      <div className="flex flex-col">
        <Teams />
      </div>
    </RevealOnScroll>
    <RevealOnScroll delayMs={250}>
      <div className="flex flex-col">
        <Cta />
      </div>
    </RevealOnScroll>
    <RevealOnScroll delayMs={300}>
      <div className="flex flex-col">
        <Footer />
      </div>
    </RevealOnScroll>
    </>
  )
}