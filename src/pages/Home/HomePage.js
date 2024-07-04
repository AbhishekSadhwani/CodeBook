import { useCustomTitle } from "../../hooks/useCustomTitle"
import { Hero, Faq, FeaturedProducts, Testimonial } from "./components"


export const HomePage = () => {

  useCustomTitle("Access Latest Computer Science eBooks");


  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonial />
      <Faq />
    </main>
  )
}
