import Feedback from "@/sections/feedback";
import Hero from "@/sections/Hero";

export default function Home() {
  return(
    <>
    <div className="flex flex-col h-screen col-span-2">
      <Hero />
    </div>
    <div className="flex flex-col h-screen col-span-2">
      <Feedback />
    </div>
    <div className="flex flex-col h-screen col-span-2">
      Contact
    </div>
    </>
  )
}