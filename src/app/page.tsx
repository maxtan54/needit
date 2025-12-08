import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Gallery from "@/components/sections/Gallery"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
