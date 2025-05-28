"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react';
import { Menu, ChevronRight, Check, ArrowRight, MessageCircle, ChevronLeft, Play, Pause} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const whatsapp = '584122532702'; // Aquí coloca el número de WhatsApp con el código de país

    let textMessage = "¡Hola! Estoy interesado en saber más\n";

    textMessage += `\nNombre: ${nombre}`;
    textMessage += `\nEmpresa: ${empresa}`;
    textMessage += `\nEmail: ${email}`;
    textMessage += `\nTeléfono: ${telefono}`;
    textMessage += `\nMensaje: ${mensaje}`;

    const message = encodeURIComponent(textMessage);

    const url = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${message}`;

    window.open(url, '_blank');
  };

  const sendWhatsapp = () => {

    const whatsapp = '584122532702'; 
    const message = '¡Hola! Quiero más información sobre Visualisto y sus catálogos.'; 

    const url = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${message}`;

    window.open(url, '_blank');
  }

  const [showCard1, setShowCard1] = useState(false)
  const [showCard2, setShowCard2] = useState(false)
  const [showCard3, setShowCard3] = useState(false)

  // Efecto para animar las tarjetas secuencialmente al cargar la página
  useEffect(() => {
    // Primera tarjeta
    const timer1 = setTimeout(() => {
      setShowCard1(true)
    }, 300) // 0.3s después de cargar

    // Segunda tarjeta
    const timer2 = setTimeout(() => {
      setShowCard2(true)
    }, 600) // 0.6s después de cargar (0.3s después de la primera)

    // Tercera tarjeta
    const timer3 = setTimeout(() => {
      setShowCard3(true)
    }, 900) // 0.9s después de cargar (0.3s después de la segunda)

    // Limpieza de los timers al desmontar el componente
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, []) // Se ejecuta solo al montar el componente

  const [activeIndex, setActiveIndex] = useState(0)

  // Estados para el slider de la aplicación
  const [activeAppIndex, setActiveAppIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const appScreenshots = [
    {
      id: 1,
      title: "Dashboard intuitivo",
      description:
        "Crea y edita los productos de tu catálogo, agrega imagenes, establece precios, asigna categorías y gestiona el inventario.",
      image: "/dashboard_img/Products.png?height=600&width=800",
      features: ["Creador de productos", "Edita productos", "Asignación de categorías"],
    },
    {
      id: 2,
      title: "Agrega y edita tus categorías",
      description:
        "Crea y edita categorías para organizar tus productos. Asigna categorías a tus productos para una mejor navegación.",
      image: "/dashboard_img/Category.png?height=600&width=800",
      features: ["Crea y edita categorías"],
    },
    {
      id: 3,
      title: "Configura la información de tu empresa",
      description:
        "Añade los datos de tu empresa, como nombre, logo y contacto. Personaliza la apariencia de tu catálogo.",
      image: "/dashboard_img/Company.png?height=600&width=800",
      features: ["Edita la información de tu empresa", "Agrega tus redes sociales", "Personaliza el logo"],
    },
  ]

  // Efecto para el autoplay del slider de la aplicación
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveAppIndex((prevIndex) => (prevIndex === appScreenshots.length - 1 ? 0 : prevIndex + 1))
    }, 6000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying])


  // Funciones para el slider de la aplicación
  const nextAppSlide = () => {
    setActiveAppIndex((prevIndex) => (prevIndex === appScreenshots.length - 1 ? 0 : prevIndex + 1))
  }

  const prevAppSlide = () => {
    setActiveAppIndex((prevIndex) => (prevIndex === 0 ? appScreenshots.length - 1 : prevIndex - 1))
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <header className="sticky flex items-center flex-col top-0 z-40 w-full pr-5 pl-5 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-visualisto.png" alt="Logo" width={40} height={40} className="rounded-md" />
            <span className="text-xl font-bold">Visualisto</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Image src="/burger.svg" alt="burger" width={30} height={30} className="rounded-md" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-5 sm:w-[350px]">
                <div className="flex items-center gap-2 mb-6">
                  <Image src="/logo-visualisto.png" alt="Logo" width={40} height={40} className="rounded-md" />
                  <span className="text-xl font-bold">Visualisto</span>
                </div>
                <SheetTitle>Menú</SheetTitle>
                <nav className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link href="#servicio" className="flex items-center py-2 text-base font-medium hover:text-primary">
                      Servicio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#dashboard" className="flex items-center py-2 text-base font-medium hover:text-primary">
                      ¿Cómo funciona?
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#precios" className="flex items-center py-2 text-base font-medium hover:text-primary">
                      Precios
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#demos" className="flex items-center py-2 text-base font-medium hover:text-primary">
                      Demos
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#contacto" className="flex items-center py-2 text-base font-medium hover:text-primary">
                      Contacto
                    </Link>
                  </SheetClose>
                  <div className="mt-4">
                    <SheetClose asChild>
                      <Button className="w-full">
                        <Link href="#contacto">
                          Solicitar Demo
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#servicio" className="text-sm font-medium hover:text-primary">
              Servicio
            </Link>
            <Link href="#dashboard" className="text-sm font-medium hover:text-primary">
              ¿Cómo	funciona?
            </Link>
            <Link href="#precios" className="text-sm font-medium hover:text-primary">
              Precios
            </Link>
            <Link href="#demos" className="text-sm font-medium hover:text-primary">
              Demos
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
            <Button>
              <Link href="#contacto">
                Solicitar Demo
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <section className="w-full pr-5 pl-5 py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Revoluciona tu negocio con nuestras soluciones creativas
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Diseña catálogos impactantes y multiplica tus clientes
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    <Link href="#contacto" className="flex items-center gap-1">
                      Comenzar ahora <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Link href="#demos">
                      Ver Demos
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px] md:h-[550px] mt-10 lg:mt-0">
                {/* Primera tarjeta - Izquierda */}
                <div
                  className={`absolute z-10 w-[280px] md:w-[300px] transform -rotate-6 left-0 top-10 md:left-0 md:top-20 hover:-translate-y-3 transition-all duration-1000 shadow-md hover:shadow-xl rounded-lg overflow-hidden bg-white opacity-0 ${
                    showCard1 ? "opacity-100" : ""
                  }`}
                >
                  <div className="relative h-[200px]">
                    <Image
                      src="/franela-azul.jpg?height=200&width=300"
                      alt="Franela Azul"
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                    <Badge className="absolute right-2 top-2">Ropa</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Franela Sencilla Azul</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      Sumérgete en la serenidad del azul con esta franela esencial para tu día a día.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="font-semibold">$15.00</span>
                        <span className="font-semibold text-sm line-through text-red-600 ml-1">$20.00</span>
                      </div>
                      <Button
                        className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800"
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Segunda tarjeta - Centro */}
                <div
                  className={`absolute z-20 w-[280px] md:w-[300px] left-1/2 -translate-x-1/2 top-8 hover:-translate-y-3 transition-all duration-1000 shadow-md hover:shadow-xl rounded-lg overflow-hidden bg-white opacity-0 ${
                    showCard2 ? "opacity-100" : ""
                  }`}
                >
                  <div className="relative h-[200px]">
                    <Image
                      src="/zapatos-blancos.jpg?height=200&width=300"
                      alt="Zapatos Blancos"
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                    <Badge className="absolute right-2 top-2">Calzado</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Zapatos Blancos</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      Camina con elegancia y versatilidad con estos impecables zapatos blancos.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="font-semibold">$40.00</span>
                        <span className="font-semibold text-sm line-through text-red-600 ml-1">$45.00</span>
                      </div>
                      <Button
                        className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800"
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Tercera tarjeta - Derecha */}
                <div
                  className={`absolute z-10 w-[280px] md:w-[300px] transform rotate-6 right-0 top-10 md:right-0 md:top-20 hover:-translate-y-3 transition-all duration-1000 shadow-md hover:shadow-xl rounded-lg overflow-hidden bg-white opacity-0 ${
                    showCard3 ? "opacity-100" : ""
                  }`}
                >
                  <div className="relative h-[200px]">
                    <Image
                      src="/reloj-moderno.webp?height=200&width=300"
                      alt="Reloj Moderno"
                      fill
                      className="object-cover transition-all hover:scale-105"
                    />
                    <Badge className="absolute right-2 top-2">Accesorios</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Reloj Moderno</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      Este reloj moderno fusiona un diseño elegante y minimalista con una funcionalidad precisa.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="font-semibold">$65.00</span>
                        <span className="font-semibold text-sm line-through text-red-600 ml-1">$70.00</span>
                      </div>
                      <Button
                        className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800"
                      >
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="servicio" className="w-full pr-5 pl-5 py-12 md:py-24 lg:py-32 bg-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Nuestro Servicio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Catálogos digitales a tu medida
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Ofrecemos una plataforma intuitiva para que puedas crear y gestionar tus propios catálogos digitales sin depender de nadie.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Fácil de usar",
                  description:
                    "Interfaz intuitiva que no requiere conocimientos técnicos. Actualiza tu catálogo en minutos.",
                },
                {
                  title: "Personalizable",
                  description:
                    "Adapta el diseño a tu marca con opciones de personalización de colores, fuentes y estilos.",
                },
                {
                  title: "Multiplataforma",
                  description:
                    "Tus catálogos se verán perfectos en cualquier dispositivo: ordenadores, tablets y móviles.",
                },
                {
                  title: "Diseño UX/UI",
                  description:
                    "Creamos interfaces intuitivas y atractivas que enriquecen la experiencia de usuario.",
                },
                {
                  title: "Inmediato",
                  description: "Modifica precios, productos o descripciones y los cambios se aplican al instante.",
                },
                {
                  title: "Soporte continuo",
                  description: "Asistencia técnica disponible para resolver cualquier duda sobre la plataforma.",
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

        {/* Creator Section */}
        <section id="dashboard" className="w-full pr-5 pl-5 py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Cómo Funciona
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Descubre la potencia de nuestra plataforma
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explora cada funcionalidad de nuestra aplicación y ve cómo puede transformar tu negocio.
                </p>
              </div>
            </div>

            {/* Slider de la aplicación */}
            <div className="relative max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Contenido de texto */}
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{appScreenshots[activeAppIndex].title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {appScreenshots[activeAppIndex].description}
                    </p>
                  </div>

                  {/* Lista de características */}
                  <ul className="space-y-3">
                    {appScreenshots[activeAppIndex].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Controles del slider */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={prevAppSlide}
                        aria-label="Pantalla anterior"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={nextAppSlide}
                        aria-label="Siguiente pantalla"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        onClick={toggleAutoPlay}
                        aria-label={isAutoPlaying ? "Pausar autoplay" : "Iniciar autoplay"}
                      >
                        {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                    </div>

                    {/* Indicadores */}
                    <div className="flex gap-2">
                      {appScreenshots.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === activeAppIndex ? "bg-primary w-6" : "bg-gray-300"
                          }`}
                          onClick={() => setActiveAppIndex(index)}
                          aria-label={`Ir a la pantalla ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Imagen de la aplicación */}
                <div className="relative order-1 lg:order-2 hover:scale-[1.02] transition-transform duration-500">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-700 p-4">
                    {/* Barra superior del navegador/app */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-gray-600 rounded-md h-6 flex items-center px-3">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                        <div className="text-xs text-gray-300">tuapp.visualisto.com</div>
                      </div>
                    </div>

                    {/* Imagen de la aplicación con transición */}
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={appScreenshots[activeAppIndex].image || "/placeholder.svg"}
                        alt={appScreenshots[activeAppIndex].title}
                        fill
                        className="object-cover transition-all duration-500"
                      />

                      {/* Overlay con efecto de carga */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precios Section */}
        <section id="precios" className="w-full pr-5 pl-5 py-12 md:py-24 lg:py-32 bg-background flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Planes y Precios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Elige el plan que mejor se adapte a tus necesidades
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Ofrecemos diferentes opciones para empresas de todos los tamaños.
                </p>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center sm:items-stretch flex-col sm:flex-row max-w-5xl gap-6 py-12 md:grid-cols-3">
              {[
                {
                  name: "Básico",
                  price: "25$",
                  period: "/mes",
                  description: "Perfecto para pequeñas empresas que están comenzando",
                  features: [
                    "1 catálogo digital",
                    "Hasta 100 productos",
                    "Personalización básica",
                  ],
                  cta: "Comenzar ahora",
                  popular: false,
                },
                {
                  name: "Profesional",
                  price: "70$",
                  period: "/mes",
                  description: "Ideal para empresas en crecimiento con múltiples líneas de productos",
                  features: [
                    "3 catálogos digitales",
                    "Hasta 300 productos por catálogo",
                    "Personalización avanzada",
                    "Soporte prioritario",
                  ],
                  cta: "Comenzar ahora",
                  popular: false,
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col w-90/100 lg:w-50/100 rounded-lg border ${plan.popular ? "border-primary shadow-lg scale-105" : ""} bg-background p-6`}
                >
                  {plan.popular && (
                    <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground mb-4 w-fit">
                      Más popular
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="my-6 space-y-2 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? "bg-primary" : ""}`}>
                    <Link href="#contacto">
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demos Section */}
        <section id="demos" className="w-full pr-5 pl-5 py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Demos</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Explora nuestros catálogos de ejemplo
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Descubre el potencial de nuestros catálogos digitales con estos ejemplos interactivos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Catálogo de Moda",
                  description: "Ejemplo de catálogo para tiendas de ropa y accesorios.",
                  image: "/demo11.png?height=300&width=400",
                  url: "https://demo.visualisto.com/",
                },
                {
                  title: "Catálogo de Decoración",
                  description: "Muestra de catálogo para tiendas de decoración y mobiliario.",
                  image: "/demo22.png?height=300&width=400",
                  url: "https://demo2.visualisto.com/",
                }
              ].map((demo, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
                >
                  <Link href={demo.url} target="_blank">
                    <div className="relative overflow-hidden">
                      <Image
                        src={demo.image || "/placeholder.svg"}
                        width={400}
                        height={300}
                        alt={demo.title}
                        className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{demo.title}</h3>
                      <p className="text-sm text-muted-foreground">{demo.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="w-full pr-5 pl-5 py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    ¿Listo para digitalizar tu catálogo?
                  </h2>
                  <p className="max-w-[600px] md:text-xl">
                    Contáctanos hoy mismo y te ayudaremos a crear el catálogo digital perfecto para tu negocio.
                  </p>
                </div>
                <ul className="grid gap-2">
                  {[
                    "Respuesta en menos de 24 horas",
                    "Asesoramiento personalizado",
                    "Prueba gratuita de 14 días",
                    "Sin compromiso de permanencia",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Solicita información</h3>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-slate-800"
                        placeholder="Tu nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="empresa" className="text-sm font-medium text-foreground">
                        Empresa
                      </label>
                      <input
                        id="empresa"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-slate-800"
                        placeholder="Nombre de tu empresa"
                        type="text"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-slate-800"
                      placeholder="tu@email.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-slate-800"
                      placeholder="Tu teléfono"
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-slate-800"
                      placeholder="¿En qué podemos ayudarte?"
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Enviar Mensaje <MessageCircle />
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
            <Image src="/logo-visualisto.png" alt="Logo" width={32} height={32} className="rounded-md" />
            <span className="text-lg font-bold">Visualisto</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Visualisto. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Whatsapp button */}

      <Button onClick={sendWhatsapp} className="btn-whatsapp-pulse btn-whatsapp-pulse-border cursor-pointer">
        <i className="fab fa-whatsapp" suppressHydrationWarning></i>
      </Button>
    </div>
  )
}

