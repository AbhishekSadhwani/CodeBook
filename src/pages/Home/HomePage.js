import { useCustomTitle } from "../../hooks/useCustomTitle"
import { Hero, Faq, FeaturedProducts, Testimonial } from "./components"


export const HomePage = () => {

  // setting custom title using the hook
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
