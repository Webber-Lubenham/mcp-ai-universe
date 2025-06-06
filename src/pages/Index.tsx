
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageCircle, Github, Video, BookOpen, Code, Zap, Users, Database, Bot } from "lucide-react";

const Index = () => {
  const linkCategories = [
    {
      title: "Comunidade & WhatsApp",
      icon: <Users className="h-5 w-5" />,
      color: "bg-green-500",
      links: [
        {
          title: "WhatsApp Group - Community",
          description: "Grupo de WhatsApp para participantes da comunidade com informações sobre o lançamento do curso e atualizações.",
          url: "https://chat.whatsapp.com/HLealkqJ3ap4uv5NpLnHwR",
          badge: "WhatsApp"
        },
        {
          title: "AI Easy Chat Community",
          description: "Plataforma para explorar todos os recursos da comunidade AI Easy Chat, com cursos e desafios mensais.",
          url: "https://aieasy.chat/community",
          badge: "Comunidade"
        }
      ]
    },
    {
      title: "Plataformas de IA",
      icon: <Bot className="h-5 w-5" />,
      color: "bg-purple-500",
      links: [
        {
          title: "AIeasy Chat",
          description: "Plataforma centralizada para interagir com diversas IAs em um único lugar.",
          url: "https://aieasy.chat/",
          badge: "IA"
        },
        {
          title: "Claraverse",
          description: "Plataforma de IA focada em inteligência de conversação.",
          url: "https://claraverse.netlify.app/",
          badge: "IA"
        },
        {
          title: "Skywork AI",
          description: "Ferramenta de IA para automação e otimização de processos.",
          url: "https://skywork.ai/",
          badge: "IA"
        },
        {
          title: "Mem0 AI",
          description: "Plataforma para criar memórias persistentes e controláveis para aplicações.",
          url: "https://mem0.ai/openmemory-mcp",
          badge: "IA"
        },
        {
          title: "Windsurf",
          description: "Plataforma para aprimorar a experiência de desenvolvimento com IA e ferramentas personalizadas.",
          url: "https://windsurf.com/refer?referral_code=hjo7zbiecw057nd3",
          badge: "IA"
        }
      ]
    },
    {
      title: "Ferramentas de Desenvolvimento",
      icon: <Code className="h-5 w-5" />,
      color: "bg-blue-500",
      links: [
        {
          title: "Warp.dev",
          description: "Ferramenta de desenvolvimento com foco em performance e produtividade.",
          url: "https://www.warp.dev/",
          badge: "Dev Tools"
        },
        {
          title: "Coderabbit AI",
          description: "Plataforma que ajuda a revisar e melhorar o código de desenvolvedores com inteligência artificial.",
          url: "https://www.coderabbit.ai/?grsf=lucaseatp-e4yox3",
          badge: "Code Review"
        },
        {
          title: "Augment Code",
          description: "Plataforma que aprimora o desenvolvimento de código com sugestões automáticas.",
          url: "https://www.augmentcode.com/",
          badge: "Code AI"
        },
        {
          title: "Firebase Studio",
          description: "Ferramenta de integração e gerenciamento de dados com Firebase.",
          url: "https://firebase.studio/",
          badge: "Database"
        }
      ]
    },
    {
      title: "Repositórios GitHub",
      icon: <Github className="h-5 w-5" />,
      color: "bg-gray-700",
      links: [
        {
          title: "AG-UI Protocol GitHub",
          description: "Repositório GitHub do AG-UI Protocol, para desenvolvedores que buscam integrar novos recursos em suas aplicações.",
          url: "https://github.com/ag-ui-protocol/ag-ui",
          badge: "GitHub"
        },
        {
          title: "Stagewise GitHub",
          description: "Repositório GitHub do Stagewise, uma ferramenta para facilitar o fluxo de trabalho de IA.",
          url: "https://github.com/stagewise-io/stagewise",
          badge: "GitHub"
        },
        {
          title: "CopilotKit GitHub",
          description: "Repositório GitHub do CopilotKit, uma biblioteca para integração de IA em aplicativos.",
          url: "https://github.com/CopilotKit/CopilotKit",
          badge: "GitHub"
        },
        {
          title: "MCP Server Rag Groq GitHub",
          description: "Repositório GitHub do MCP Server Rag Groq, utilizado para integração com servidores de dados.",
          url: "https://github.com/automacoescomerciaisintegradas/mcp-server-rag-groq",
          badge: "MCP"
        },
        {
          title: "Claude Task Master GitHub",
          description: "Repositório GitHub do Claude Task Master, ferramenta para gerenciamento de tarefas em projetos de IA.",
          url: "https://github.com/eyaltoledano/claude-task-master",
          badge: "Task Management"
        },
        {
          title: "MCP Router GitHub",
          description: "Repositório GitHub do MCP Router, utilizado para roteamento de protocolos MCP.",
          url: "https://github.com/mcp-router/mcp-router",
          badge: "MCP"
        },
        {
          title: "Aimemory GitHub",
          description: "Repositório GitHub para usar IA com memórias persistentes e personalizadas.",
          url: "https://github.com/ipenywis/aimemory",
          badge: "Memory"
        },
        {
          title: "Roo Code Memory Bank MCP GitHub",
          description: "Repositório GitHub para a criação de bancos de memória de código.",
          url: "https://github.com/incomestreamsurfer/roo-code-memory-bank-mcp-server",
          badge: "MCP"
        },
        {
          title: "GitHub Archon",
          description: "Repositório GitHub do Archon, uma ferramenta para criar agentes de IA em projetos.",
          url: "https://github.com/coleam00/Archon",
          badge: "AI Agents"
        }
      ]
    },
    {
      title: "Vídeos e Tutoriais",
      icon: <Video className="h-5 w-5" />,
      color: "bg-red-500",
      links: [
        {
          title: "YouTube - Lucas Teles",
          description: "Vídeo de Lucas Teles explicando sobre tecnologia e desenvolvimento de aplicativos.",
          url: "https://www.youtube.com/watch?v=wbAU0qI-_tY&t=5s&ab_channel=LucasTeles",
          badge: "YouTube"
        },
        {
          title: "Cursor Changelog Video",
          description: "Vídeo explicativo sobre as últimas mudanças e melhorias no Cursor.",
          url: "https://www.cursor.com/changelog/050/export-chat.mp4",
          badge: "Tutorial"
        },
        {
          title: "Task Master YouTube",
          description: "Vídeo explicativo sobre como usar o Task Master com o Cursor.",
          url: "https://www.youtube.com/watch?v=s9VM7-lgZ5g&ab_channel=LucasTeles",
          badge: "Tutorial"
        }
      ]
    },
    {
      title: "Documentação e Recursos",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-orange-500",
      links: [
        {
          title: "Switch Dimension Notes",
          description: "Plataforma para anotações e compartilhamento de conhecimento técnico.",
          url: "https://notes.switchdimension.com/",
          badge: "Docs"
        },
        {
          title: "DataButton MCP Guide",
          description: "Guia para configurar o DataButton MCP com o Claude App no Windows, permitindo interação com ferramentas personalizadas.",
          url: "https://databutton.com/mcp",
          badge: "Guide"
        },
        {
          title: "Bit2Me Academy - Árvore de Merkle",
          description: "Artigo educativo sobre a Árvore de Merkle, importante conceito de criptografia.",
          url: "https://academy.bit2me.com/pt/o-que-%C3%A9-uma-%C3%A1rvore-de-merkle/",
          badge: "Education"
        },
        {
          title: "Roadmap AI Agents",
          description: "Roadmap completo para desenvolver agentes de IA.",
          url: "https://roadmap.sh/ai-agents",
          badge: "Roadmap"
        },
        {
          title: "Axios HTTP",
          description: "Biblioteca para realizar requisições HTTP de forma eficiente e simples com JavaScript.",
          url: "https://axios-http.com/ptbr/docs/intro",
          badge: "Docs"
        },
        {
          title: "Google Docs - Devin AI",
          description: "Documentação sobre como trabalhar com o Devin AI e configurar o Deepwiki MCP.",
          url: "https://docs.devin.ai/work-with-devin/deepwiki-mcp",
          badge: "Docs"
        }
      ]
    },
    {
      title: "Networking e Infraestrutura",
      icon: <Database className="h-5 w-5" />,
      color: "bg-indigo-500",
      links: [
        {
          title: "Higress",
          description: "Solução de proxy reverso para otimizar aplicações baseadas em microserviços.",
          url: "https://higress.cn/en/",
          badge: "Infrastructure"
        },
        {
          title: "Git MCP",
          description: "Plataforma que facilita a integração de servidores e modelos no protocolo MCP.",
          url: "https://gitmcp.io/",
          badge: "MCP"
        },
        {
          title: "OpenRouter",
          description: "Solução para roteamento de tráfego em redes de IA e servidores.",
          url: "http://openrouter.ai/",
          badge: "Router"
        }
      ]
    },
    {
      title: "Ferramentas e Prompts",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-yellow-500",
      links: [
        {
          title: "Shumer Prompt",
          description: "Plataforma com prompts úteis para acelerar o crescimento de startups usando IA.",
          url: "https://shumerprompt.com/prompts/startup-growth-consultant-claude-4-prompt-prompt-0cee13e1-2893-4620-8dcd-ba9068d0e5ed",
          badge: "Prompts"
        },
        {
          title: "Eleven Labs AI Creator Pack",
          description: "Pacote de ferramentas da Eleven Labs para criação e customização de agentes de IA.",
          url: "https://www.aicreatorpack.com/",
          badge: "Tools"
        },
        {
          title: "FeatureBase",
          description: "Plataforma para integrar IAs com aplicativos e otimizar processos.",
          url: "https://www.featurebase.app/",
          badge: "Platform"
        },
        {
          title: "AIeasy Chat Version Updates",
          description: "Changelog completo das últimas atualizações e recursos no AIeasy Chat.",
          url: "https://aieasychat.featurebase.app/en/changelog",
          badge: "Updates"
        }
      ]
    },
    {
      title: "Outros Recursos",
      icon: <ExternalLink className="h-5 w-5" />,
      color: "bg-teal-500",
      links: [
        {
          title: "Google Meet Link",
          description: "Link para acessar uma reunião online via Google Meet.",
          url: "https://meet.google.com/gxq-gkdq-xdu",
          badge: "Meeting"
        }
      ]
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Recursos da Comunidade AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos os links essenciais para desenvolvedores, estudantes e entusiastas de IA reunidos em um só lugar.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {linkCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  {category.title}
                  <Badge variant="secondary" className="ml-auto">
                    {category.links.length} {category.links.length === 1 ? 'item' : 'itens'}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.links.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      className="group p-4 border rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 bg-white"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {link.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {link.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {link.description}
                      </p>
                      <Button
                        onClick={() => handleLinkClick(link.url)}
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Acessar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 border-t">
          <div className="space-y-4">
            <p className="text-gray-600">
              Esta página contém todos os recursos essenciais compartilhados pela comunidade.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => handleLinkClick("https://aieasy.chat/community")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Users className="h-4 w-4 mr-2" />
                Participar da Comunidade
              </Button>
              <Button
                onClick={() => handleLinkClick("https://chat.whatsapp.com/HLealkqJ3ap4uv5NpLnHwR")}
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Group
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
