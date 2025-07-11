"use client"

import { useState, useEffect } from "react"

export default function ChecksumLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "RESULTADOS EN",
      subtitle: "TIEMPO RÉCORD",
      description:
        "La velocidad es clave. Nuestro enfoque ágil y especializado garantiza software funcional y de calidad en menos de 30 días. Convertimos tus desafíos en soluciones rápidas, sin comprometer la excelencia.",
      image: "https://www.checksum.com.uy/images/dev1.png",
    },
    {
      id: 2,
      title: "SOLUCIONES A TU",
      subtitle: "MEDIDA",
      description:
        "Cada empresa es única, y tus necesidades también lo son. Diseñamos software personalizado que optimiza tus operaciones y se adapta perfectamente a tu presupuesto. Innovamos contigo para que cada idea se convierta en una solución práctica y eficiente.",
      image: "https://www.checksum.com.uy/images/dev2.png",
    },
    {
      id: 3,
      title: "IMPULSAMOS",
      subtitle: "TU PRODUCTIVIDAD",
      description:
        "¿Buscás soluciones rápidas y eficientes? En Checksum, creamos software a medida que simplifica procesos, ahorra tiempo y potencia los resultados. Descubrí cómo transformamos tus ideas en herramientas digitales diseñadas para llevar tu negocio al siguiente nivel.",
      image: "https://www.checksum.com.uy/images/dev3.png",
    },
  ]

  const clients = [
    { name: "AQVA", logo: "https://www.checksum.com.uy/images/AquaWM.png" },
    { name: "Farmashop", logo: "https://www.checksum.com.uy/images/Farmashop.png" },
    { name: "Grenles", logo: "https://www.checksum.com.uy/images/Grenles.png" },
    { name: "Pigalle", logo: "https://www.checksum.com.uy/images/Pigalle.png" },
    { name: "Natal", logo: "https://www.checksum.com.uy/images/Natal.png" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500/95 via-blue-600/90 to-blue-700/85 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12 bg-blue-900/30 backdrop-blur-sm">
          <div className="flex items-center">
            <img src="https://www.checksum.com.uy/images/logoChecksum.png" alt="Checksum" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-white hover:text-blue-100 transition-colors font-medium px-4 py-2 bg-blue-500/30 backdrop-blur-sm border border-blue-300/50 rounded-lg hover:border-blue-200 hover:bg-blue-500/40"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/20"
            >
              CHECKPOINT
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition-colors px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/20"
            >
              IT
            </a>
          </div>
        </nav>

        {/* Hero Slider Section */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className="container mx-auto px-6 py-12 lg:py-20">
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                      <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        {slide.title}
                        <br />
                        {slide.subtitle}
                      </h1>
                      <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-lg">{slide.description}</p>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative flex justify-center items-center">
                      <div className="relative">
                        {/* Main Illustration */}
                        <div className="relative z-10">
                          <img
                            src={slide.image || "/placeholder.svg"}
                            alt="Development Illustration"
                            className="w-full max-w-lg h-auto drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Why Choose Custom Software Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 lg:py-32 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
                ¿Por qué elegir software a medida para tu negocio?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                En un entorno donde cada ventaja cuenta, el software personalizado es la clave para destacarte. Desde
                soluciones adaptadas a tus necesidades específicas hasta herramientas que crecen contigo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    ADAPTACIÓN PERFECTA A TU NEGOCIO
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Olvídate de las limitaciones. El software a medida se diseña pensando exclusivamente en tu
                    operación, integrando funciones y características que encajan como un guante en tus procesos únicos.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    CRECIMIENTO Y ESCALABILIDAD SIN LÍMITES
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Un sistema que evoluciona con vos. Con el software a medida, tu empresa tiene la flexibilidad para
                    adaptarse a nuevos retos y crecer sin restricciones tecnológicas.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    ESCALABILIDAD Y FUTURA ADAPTABILIDAD
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    El software personalizado crece contigo. A medida que tu empresa evoluciona, la solución puede
                    escalarse y adaptarse fácilmente a nuevos requerimientos.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/25 hover:-translate-y-1">
                <span className="relative z-10">Solicita una demo</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Algunos de nuestros proyectos personalizados
              </h2>
              <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
                En Checksum hemos creado soluciones que responden a desafíos únicos en sectores como retail y finanzas.
                Nuestro enfoque personalizado nos permite convertir necesidades específicas en herramientas que
                optimizan procesos y superan expectativas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sistema de Gestión</h3>
                <p className="text-gray-600 text-sm">Solución integral para optimizar procesos empresariales</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-gray-600 text-sm">Plataforma de ventas online personalizada</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">CRM Personalizado</h3>
                <p className="text-gray-600 text-sm">Gestión de clientes adaptada a tu negocio</p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 text-sm">Visualización de datos en tiempo real</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Confianza que nos respalda</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                En Checksum, trabajamos con empresas líderes que eligieron nuestras soluciones personalizadas para
                transformar sus operaciones. Sus logotipos representan no solo clientes, sino aliados estratégicos que
                comparten nuestra visión de innovación y eficiencia.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-12">Ellos ya confiaron en nosotros</h3>
            </div>

            {/* Continuous Slider */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                {clients.map((client, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 mx-8 lg:mx-12">
                    <div className="w-32 h-20 lg:w-40 lg:h-24 flex items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 mx-8 lg:mx-12">
                    <div className="w-32 h-20 lg:w-40 lg:h-24 flex items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                Sumate a nuestra lista de clientes
              </button>
            </div>
          </div>
        </section>

        {/* About Checksum Section */}
        <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 py-16 lg:py-24">
          <div className="container mx-auto px-6">
            {/* Main Content */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Sobre Checksum: Transformamos productividad en resultados
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-12">
                En Checksum desarrollamos soluciones de software que simplifican procesos y potencian resultados. Con
                experiencia en retail y finanzas, creamos herramientas personalizadas que transforman la productividad
                de nuestros clientes.
              </p>

              {/* Central Illustration */}
              <div className="flex justify-center mb-16">
                <img
                  src="https://www.checksum.com.uy/images/dev4.png"
                  alt="Checksum Team Illustration"
                  className="w-full max-w-2xl h-auto"
                />
              </div>
            </div>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Mission */}
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Misión</h3>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Convertimos tus ideas en herramientas digitales que impulsan tu crecimiento. Nuestro compromiso es
                    brindar desarrollos personalizados, ágiles y accesibles que transformen la manera en que operás.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Visión</h3>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Ser el aliado estratégico preferido por las empresas que buscan innovar y crecer. Nos enfocamos en
                    soluciones diseñadas para responder a los desafíos únicos de cada cliente, siempre mirando hacia el
                    futuro.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-lg lg:text-xl text-white leading-relaxed max-w-5xl mx-auto font-medium">
                Entendemos que el tiempo es un recurso invaluable. Por eso, en Checksum nos convertimos en tu socio
                confiable, entregando resultados rápidos sin comprometer la calidad. Innovamos contigo para llevar tu
                empresa al siguiente nivel.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-8">Dirección</h4>
                <div className="space-y-4">
                  <div className="flex items-center text-blue-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-lg">091 625 000</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-lg">it@checksum.com.uy</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-lg">Montevideo, Uruguay</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-8">Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-lg text-blue-100 hover:text-white transition-colors">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg text-blue-100 hover:text-white transition-colors">
                      CheckPoint
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
