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
    tags: ["React", "TypeScript", "Spring Boot", "Java"],
    githubUrl: "https://github.com/cantalusto/uStore-Residencia" 
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
    title: "W.I.P",
    description: "Automação, Testes de carga.",
    tags: ["JMeter", "Cypresss", "Postman"],
    githubUrl: "" // 
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