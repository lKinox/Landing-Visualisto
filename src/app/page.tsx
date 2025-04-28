import Image from "next/image"
import Link from "next/link"
import { Menu, ChevronRight, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky flex items-center flex-col top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-md" />
            <span className="text-xl font-bold">Visualisto</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#servicios" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:text-primary">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
            <Button>Solicitar Demo</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Soluciones innovadoras para tu negocio
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transformamos ideas en resultados. Nuestro equipo de expertos está listo para llevar tu empresa al
                    siguiente nivel.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Comenzar ahora <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Conocer más
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Nuestros Servicios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Soluciones a medida para cada necesidad
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Ofrecemos servicios especializados que impulsan el crecimiento y la eficiencia de tu empresa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Desarrollo Web",
                  description:
                    "Creamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
                },
                {
                  title: "Marketing Digital",
                  description:
                    "Estrategias personalizadas para aumentar tu visibilidad online y generar leads cualificados.",
                },
                {
                  title: "Consultoría",
                  description:
                    "Asesoramiento experto para optimizar procesos y maximizar el rendimiento de tu negocio.",
                },
                {
                  title: "Diseño UX/UI",
                  description:
                    "Interfaces intuitivas y atractivas que mejoran la experiencia de usuario y aumentan la conversión.",
                },
                {
                  title: "Analítica de Datos",
                  description: "Transformamos datos en insights accionables para tomar decisiones informadas.",
                },
                {
                  title: "Soporte Técnico",
                  description: "Asistencia continua para garantizar el funcionamiento óptimo de tus sistemas.",
                },
              ].map((feature, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Nuestro equipo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Sobre Nosotros
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Expertos comprometidos con tu éxito</h2>
                <p className="text-muted-foreground md:text-lg">
                  Con más de 10 años de experiencia en el sector, nuestro equipo multidisciplinar trabaja
                  incansablemente para ofrecer soluciones que marcan la diferencia. Nos apasiona lo que hacemos y nos
                  comprometemos con cada proyecto como si fuera nuestro propio negocio.
                </p>
                <ul className="grid gap-2">
                  {[
                    "Equipo de profesionales certificados",
                    "Metodologías ágiles y eficientes",
                    "Compromiso con la excelencia",
                    "Enfoque personalizado para cada cliente",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-fit">Conoce al equipo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Lo que dicen nuestros clientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Descubre por qué nuestros clientes confían en nosotros para impulsar sus negocios.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "María González",
                  company: "Innovatech",
                  testimonial:
                    "Trabajar con este equipo ha sido una experiencia excepcional. Entendieron perfectamente nuestras necesidades y entregaron resultados que superaron nuestras expectativas.",
                },
                {
                  name: "Carlos Rodríguez",
                  company: "Grupo Impulsa",
                  testimonial:
                    "Gracias a su estrategia de marketing digital, hemos aumentado nuestras ventas en un 40% en solo tres meses. Su profesionalidad y dedicación son admirables.",
                },
                {
                  name: "Laura Martínez",
                  company: "Soluciones Globales",
                  testimonial:
                    "La consultoría que nos proporcionaron transformó completamente nuestros procesos internos. Ahora somos mucho más eficientes y nuestros clientes están más satisfechos.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-muted h-10 w-10"></div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Listo para impulsar tu negocio?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu nombre"
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu email"
                    type="email"
                  />
                  <Button type="submit" variant="secondary">
                    Solicitar información
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-center flex-col border-t bg-background py-6 flex justify-center items-center">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-md" />
            <span className="text-lg font-bold">TuEmpresa</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} TuEmpresa. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Términos de servicio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

