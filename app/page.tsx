// app/page.tsx
'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

// Estrutura de dados para os projetos
const projects = [
  {
    title: "Gerenciamento de Equipes (uStore)",
    description: "Aplicação web estilo Trello, utilizando React, TypeScript, TailwindCSS, Spring Boot e Java.",
    tags: ["PostgreSQL", "TypeScript", "Next.js", "GeminiAPI"],
    githubUrl: "https://github.com/cantalusto/Ustore-Management-App" 
  },
  {
    title: "IA para Identificação de Xingamentos (Jornal do Commercio)",
    description: "IA em Spring Boot, Java e API Gemini para filtrar comentários ofensivos. Incluiu testes de carga e automação.",
    tags: ["Spring Boot", "Java", "Gemini API", "QA"],
    githubUrl: "https://github.com/Gusta-0/Validacao-comentarios" 
  },
  {
    title: "Feras (Pitang)",
    description: "Plataforma estilo Google Meet, desenvolvida em React, integração via Swagger API e banco de dados próprio.",
    tags: ["React", "Swagger", "API", "PostgreSQL"],
    githubUrl: "https://github.com/cantalusto/RESIDENCIA-PITANG" 
  },
  {
    title: "Recicla Recife",
    description: "Aplicativo mobile contra desperdício alimentar, prototipado no Figma e apresentado em pitch.",
    tags: ["Figma", "UX/UI", "Mobile"],
    githubUrl: "https://www.canva.com/design/DAGGED7Tvjg/pDwYXWsO8uJKieX9zAzkBQ/edit" 
  },
  {
    title: "FARMÁCIA ONLINE",
    description: "Aplicação web usando para uma farmacia com crud completo.",
    tags: ["PhP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/cantalusto/FARMACIA_PHP" // 
  },
  {
    title: "Sistema de Gerenciamento - Escola de Música da Igreja",
    description: "Sistema completo e moderno para gerenciar alunos, instrumentos, presenças e pagamentos de escolas de música.",
    tags: ["Next.js", "React 19", "TypeScript", "TailwindCSS", "Prisma ORM", "PostgreSQL"],
    githubUrl: "https://github.com/cantalusto/EscolaIgrejaMusica" // 

  },
  {
    title: "Testes Automatizados de UI e API com Cypress",
    description: "Este projeto é uma demonstração de como configurar e executar testes automatizados de ponta a ponta (E2E) e de API.",
    tags: ["Vite", "React", "Cypress", "Mochawesome", "NPM", "Node.js", "QA"],
    githubUrl: "https://github.com/cantalusto/cypress-react-login-tests" // 
 
  },
    {
    title: "Teste de Performance - API de E-commerce com Locust",
    description: "Este projeto contém scripts e resultados completos de testes de performance realizados com Locust, simulando diferentes cenários de carga em uma API de e-commerce. Os testes avaliam a capacidade de resposta e estabilidade sob condições de estresse.",
    tags: ["Locust", "Python", "Testing", "Performance", "API", "QA"],
    githubUrl: "https://github.com/cantalusto/api-performance-testing-locust" // 
 
  },
    {
    title: "Dashboard de Métricas de QA com Grafana e InfluxDB",
    description: "Este projeto demonstra um pipeline completo e profissional para visualização de métricas de testes automatizados. Os resultados dos testes (em formato JUnit XML) são processados por um script Python e enviados para um banco de dados de séries temporais (InfluxDB), sendo finalmente visualizados em um dashboard dinâmico e interativo no Grafana.",
    tags: ["Grafana", "InfluxDB", "Docker", "Python", "CI/CD", "QA"],
    githubUrl: "https://github.com/cantalusto/qa-metrics-dashboard" // 
 
  },
    {
    title: "Demonstração de Testes Automatizados de Acessibilidade",
    description: "Este projeto demonstra a implementação profissional de testes automatizados de acessibilidade em aplicações web utilizando Cypress integrado com a biblioteca axe-core. O objetivo é apresentar um cenário prático de 'antes e depois', mostrando como a automação pode garantir a inclusão digital através da identificação e correção de barreiras de acesso.",
    tags: ["Cypress", "axe-core", "WCAG", "Acessibilidade", "QA", "Node.js"],
    githubUrl: "https://github.com/cantalusto/cypress-axe-accessibility-demo" // 
 
  },
    {
    title: "QA Buddy - Gerador de Testes Inteligente com IA",
    description: "Uma aplicação web full-stack inovadora que utiliza a API do Google Gemini para gerar automaticamente casos de teste (Unitários, Integração e End-to-End) a partir de descrições de funcionalidades em linguagem natural. Desenvolvida para demonstrar a integração de modelos de linguagem avançados em arquiteturas modernas.",
    tags: ["React", "Node.js", "GoogleGemini", "TailWindCSS", "QA", "Vite"],
    githubUrl: "https://github.com/cantalusto/QA-Buddy" // 
 
  },
    {
    title: "RUBY-Calculadora de Imposto de Renda (IRPF) - Brasil",
    description: "Uma aplicação moderna desenvolvida em Ruby on Rails 7 com interface elegante em TailwindCSS que calcula o Imposto de Renda Pessoa Física (IRPF) conforme as regras vigentes no Brasil. A ferramenta simplifica o cálculo tributário para pessoas físicas, proporcionando simulações precisas de impostos a pagar ou valores a restituir.",
    tags: ["Ruby-on-Rails", "Ruby", "PostgreSQL", "TailWindCSS"],
    githubUrl: "https://github.com/cantalusto/ruby-study" // 
 
  },
    {
    title: "Escape do Vício",
    description: "Uma aplicação web interativa e educacional desenvolvida para conscientizar jovens sobre os perigos dos cigarros eletrônicos (vapes) e fornecer estratégias práticas para escapar do vício. Combina gamificação, educação científica e suporte psicológico em uma experiência envolvente.",
    tags: ["Next.js", "React", "TypeScript", "TailWindCSS", "Study", "Community"],
    githubUrl: "https://github.com/cantalusto/escape-do-vicio" // 
 
  },
    {
    title: "POKE-CODE-Pokémon Team Builder",
    description: "Uma aplicação web moderna e interativa para construir, analisar e batalhar com times Pokémon, desenvolvida com Next.js 15 e integração com IA Gemini. A plataforma oferece uma experiência completa para treinadores Pokémon criarem estratégias vencedoras.",
    tags: ["Next.js", "React", "TypeScript", "GoogleGemini", "TailWindCSS", "PokeApi"],
    githubUrl: "https://github.com/cantalusto/poke-code" // 
 
  },
    {
    title: "💪 GymCraft — App de Treinos Moderno, Simples e Inteligente",
    description: "Um aplicativo moderno de treinos desenvolvido com Expo/React Native com suporte completo para Web, iOS e Android. Focado em oferecer uma experiência de usuário fluida com animações sutis, interface intuitiva e planejamento inteligente de treinos.",
    tags: ["React-Native", "Expo", "TypeScript", "CrossPlatform", "WEB/IOS/ANDROID", "IA"],
    githubUrl: "https://github.com/cantalusto/gym-craft-app" // 
 
  },
    {
    title: "🎬 CantaWatch - Catálogo Inteligente de Filmes, Séries e Animes",
    description: "Uma aplicação moderna desenvolvida em Next.js que oferece um catálogo completo de filmes, séries e animes com recomendações inteligentes via IA e suporte completo a internacionalização.",
    tags: ["Next.js", "TypeScript", "TMDB", "GoogleGemini"],
    githubUrl: "https://github.com/cantalusto/canta_watch" // 
 
  },
    {
    title: "🎮 Escape do Vício — Jogo Educativo em Pixel Art",
    description: "Um jogo web educativo desenvolvido com HTML, CSS e JavaScript que combina arte pixelada, gamificação e conscientização sobre vícios. O jogador embarca em uma jornada simbólica de libertação através de desafios educativos.",
    tags: ["HTML5", "CSS3", "JavaScript", "PixelArt", "Game", "Education"],
    githubUrl: "https://github.com/cantalusto/escape_do_vicio" // 
 
  },
    {
    title: "Automação de Testes de API com Postman e CI/CD",
    description: "Este projeto demonstra habilidades avançadas na criação e automação de testes de API em um pipeline profissional de CI/CD. O objetivo é validar integralmente o funcionamento de endpoints de APIs públicas, garantindo a qualidade através de validações de status codes, performance e estrutura de dados.",
    tags: ["GitHub Actions", "PostMan", "NewMan", "Node.js", "Rest API", "QA"],
    githubUrl: "https://github.com/cantalusto/api-testing-portfolio" // 
 
  }
];


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 h-auto md:h-auto">
          {/* About Me Card */}
          <Card
            id="about"
            className="md:col-span-2 lg:col-span-2 md:row-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/foto-perfil.jpg"
                    alt="Lucas Cantarelli Lustosa"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-card-foreground font-sans">Lucas Cantarelli Lustosa</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans">Recife – PE</span>
                  </div>
                </div>
              </div>
              <p className="text-card-foreground leading-relaxed font-sans flex-1 text-sm">
                Estudante de Análise e Desenvolvimento de Sistemas com foco em QA e desenvolvimento web, experiência em projetos reais junto ao Porto Digital e empresas parceiras. Domínio em testes automatizados, APIs, banco de dados e metodologias ágeis. Inglês avançado.
                Tenho como sonho trabalhar na area de analise e qualidade de software, buscando sempre aprender e crescer profissionalmente.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Java</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Python</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">TypeScript</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">React</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Spring Boot</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Cypress</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">JMeter</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Postman</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Mongo</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Git</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">MySQL</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Selenium</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Figma</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">PyautoGUI</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">SpringBoot</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">TypeScript</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">HTML</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">CSS</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">Bootstrap</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">PhP</Badge>
                <Badge variant="secondary" className="font-sans text-xs rounded-full">JavaScript</Badge>


                
              </div>
            </div>
          </Card>

          {/* Experience Card */}
          <Card
            id="experience"
            className="md:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">Formação Acadêmica</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground font-sans text-sm">
                      Tecnólogo em Análise e Desenvolvimento de Sistemas
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans">Em andamento</p>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-card-foreground my-4 font-sans">Cursos Complementares</h3>
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground font-sans">Alura – Desenvolvimento e QA</p>
                <p className="text-xs text-muted-foreground font-sans">Rocketseat – Desenvolvimento web e mobile</p>
                <p className="text-xs text-muted-foreground font-sans">DIO – Formações em tecnologia e programação</p>
              </div>
            </div>
          </Card>

          {/* Status Card */}
          <Card className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <h3 className="font-semibold text-card-foreground font-sans">Disponível</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-sans">Aberto a novas oportunidades</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground font-sans">Projetos</span>
                  <span className="font-semibold text-card-foreground font-sans">{projects.length}+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground font-sans">Inglês</span>
                  <span className="font-semibold text-card-foreground font-sans">Avançado</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links Card */}
          <Card
            id="contact"
            className="md:col-span-1 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none"
          >
            <div className="relative z-10">
              <h3 className="font-semibold text-card-foreground mb-4 font-sans">Contato</h3>
              <div className="space-y-3">
                <a href="https://github.com/cantalusto" target="_blank" className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-sans">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/lucas-cantarelli-lustosa-aab5492ba/" target="_blank" className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-sans">LinkedIn</span>
                </a>
                <a href="mailto:cantalusto@gmail.com" className="flex items-center gap-3 text-card-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-sans">Email</span>
                </a>
              </div>
            </div>
          </Card>

          {/* Selected Projects Card */}
          <Card
            id="projects"
            className="md:col-span-2 lg:col-span-2 p-6 bg-card border border-border relative overflow-hidden rounded-2xl shadow-none flex flex-col"
          >
            <div className="relative z-10 flex-grow">
              <h3 className="font-bold text-card-foreground mb-4 font-sans">Projetos em Destaque</h3>
              <div className="space-y-4">
                {projects.slice(0, 2).map((project) => (
                  <a 
                    href={project.githubUrl} 
                    key={project.title} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block p-3 -m-3 rounded-lg hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                           <h4 className="font-semibold text-card-foreground font-sans">{project.title}</h4>
                           <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 font-sans">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs font-sans rounded-full">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Dialog>
                <DialogTrigger asChild>
                  {/* BOTÃO COM ANIMAÇÃO ADICIONADA */}
                  <Button 
                    variant="outline" 
                    className="w-full font-sans bg-transparent hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 ease-in-out group"
                  >
                    Ver todos os projetos
                    <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </DialogTrigger>
                {/* MODAL COM SCROLL GARANTIDO */}
                <DialogContent className="sm:max-w-[625px] h-[70vh] flex flex-col">
                  <DialogHeader>
                    <DialogTitle>Todos os Projetos</DialogTitle>
                    <DialogDescription>
                      Aqui está uma lista completa dos meus projetos. Clique em qualquer um para ver no GitHub.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex-1 overflow-hidden">
                    <ScrollArea className="h-full pr-4">
                      <div className="space-y-4">
                        {projects.map((project) => (
                           <a 
                            href={project.githubUrl} 
                            key={project.title} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block p-4 rounded-lg border hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 group"
                          >
                            <div className="flex items-center justify-between mb-1">
                               <h4 className="font-semibold text-card-foreground font-sans">{project.title}</h4>
                               <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 font-sans">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs font-sans rounded-full">{tag}</Badge>
                              ))}
                            </div>
                          </a>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-muted-foreground text-sm font-sans">
            Lucas Cantarelli Lustosa
          </p>
        </footer>
      </div>
    </div>
  )
}
