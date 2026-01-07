"use client";

import React, { useState, useEffect } from "react";
import {
  FileText, Video, Music, Image as ImageIcon,
  Download, ExternalLink, BookOpen, FileCheck, Link as LinkIcon,
  Share2, Facebook, Twitter, Linkedin, MessageCircle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// --- COMPONENTS ---

// 1. HERO SECTION
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF8000]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF8000]/5 rounded-full blur-3xl" />

      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF8000]/20 via-[#FF8000]/10 to-[#FF8000]/20 border border-[#FF8000]/30 text-xs font-medium text-[#FF9933] mb-8 backdrop-blur-sm shadow-lg shadow-[#FF8000]/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8000]/20 to-transparent rounded-full blur-sm" />
        <BookOpen size={16} className="relative z-10" />
        <span className="relative z-10">Materiais do NotebookLM</span>
      </div>

      <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center mb-8 leading-tight">
        <span className="block bg-gradient-to-r from-white via-[#FF9933] to-white bg-clip-text text-transparent">
          ⚔️ Sun Tzu:
        </span>
        <span className="block mt-2 bg-gradient-to-r from-[#FF8000] via-[#FF9933] to-[#FF8000] bg-clip-text text-transparent">
          A Arte da Guerra
        </span>
        <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#FF9933] via-white/90 to-[#FF9933] bg-clip-text text-transparent">
          na Modernidade e Teoria
        </span>
      </h1>

      <div className="relative max-w-4xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8000]/20 via-[#FF8000]/10 to-[#FF8000]/20 rounded-2xl blur opacity-50" />
        <p className="relative mt-6 text-gray-300 text-base md:text-lg max-w-4xl text-center leading-relaxed px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          Essas fontes exploram o legado de <span className="text-[#FF9933] font-semibold">Sun Tzu</span> e sua obra <span className="text-[#FF8000] font-semibold">A Arte da Guerra</span>, analisando sua autoria histórica e a aplicação de suas táticas milenares em contextos contemporâneos. Os textos comparam a filosofia oriental de Sun Tzu com o pensamento ocidental de <span className="text-[#FF9933] font-semibold">Clausewitz</span>, destacando divergências sobre espionagem e a busca pela <span className="text-[#FF8000] font-semibold">vitória sem combate direto</span>. Além do campo militar, as publicações demonstram como esses princípios influenciam a <span className="text-[#FF9933] font-semibold">estratégia chinesa moderna</span>, a <span className="text-[#FF8000] font-semibold">segurança cibernética</span>, a <span className="text-[#FF9933] font-semibold">gestão de negócios</span> e a resolução de conflitos cotidianos. Há também uma discussão sobre a precisão das traduções e como a simplicidade dos treze capítulos permite que o livro permaneça relevante na <span className="text-[#FF8000] font-semibold">era da informação</span>.
        </p>
      </div>

      {/* Decorative line */}
      <div className="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-[#FF8000] to-transparent rounded-full" />
    </section>
  );
};

// 2. HIGHLIGHTS SECTION
const HighlightsSection = () => {
  const highlights = [
    {
      title: "Dois Mestres, Uma Moeda",
      description: "Sun Tzu e Clausewitz são complementares, não opostos. Sun Tzu opera na grande estratégia, enquanto Clausewitz foca no nível estratégico-operacional.",
      icon: "⚔️"
    },
    {
      title: "Vencer sem Lutar",
      description: "O ideal de Sun Tzu: quebrar a resistência do inimigo sem combate direto, usando inteligência, engano e posicionamento estratégico.",
      icon: "🎯"
    },
    {
      title: "A Quarta Dimensão",
      description: "A tecnologia moderna amplifica as forças clássicas, criando uma nova dimensão material que transforma a natureza do conflito contemporâneo.",
      icon: "🌐"
    },
    {
      title: "Inteligência e Engano",
      description: "Na era digital, a sobrevivência depende de evitar detecção. O engano ganha retorno exponencial com sensores onipresentes.",
      icon: "🕵️"
    },
    {
      title: "Cibersegurança",
      description: "A maior vitória é prevenir o ataque. Pensar como invasor e conhecer a si mesmo são princípios fundamentais da defesa digital.",
      icon: "🔒"
    },
    {
      title: "Negócios e Liderança",
      description: "Vencer sem guerras de preços, atacar fraquezas, usar inteligência de mercado e criar cultura de segurança psicológica.",
      icon: "💼"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF8000] to-cyan-400 bg-clip-text text-transparent">
          Principais Destaques e Reflexões
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Insights fundamentais extraídos da análise comparativa entre Sun Tzu e Clausewitz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="group relative rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:border-[#FF8000]/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8000]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Card de Conclusão */}
      <div className="rounded-3xl bg-gradient-to-br from-[#FF8000]/10 via-[#FF8000]/5 to-purple-500/10 border border-[#FF8000]/30 p-8 md:p-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="text-4xl">📜</div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF8000] to-cyan-400 bg-clip-text text-transparent">
            Conclusão
          </h3>
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
          <p>
            Este relatório reafirma a tese de que <strong className="text-white">Sun Tzu e Carl von Clausewitz não são pensadores mutuamente exclusivos, mas sim complementares</strong>. Suas filosofias, embora nascidas em épocas e contextos radicalmente diferentes, oferecem lentes distintas e necessárias para visualizar o espectro completo do conflito e da competição.
          </p>
          <p>
            Seus trabalhos devem ser vistos como um <strong className="text-white">contínuo estratégico</strong>. O estrategista começa com a visão ampla de Sun Tzu, operando no nível da grande estratégia, onde fatores diplomáticos, econômicos e informacionais são empregados para moldar o ambiente e, idealmente, &ldquo;vencer sem lutar&rdquo;. Quando esses meios falham e o conflito armado se torna iminente, o estrategista transita para o reino estratégico-operacional de Clausewitz.
          </p>
          <p>
            O líder moderno — seja um general no campo de batalha, um CEO no mercado global ou um diretor de cibersegurança — deve, portanto, <strong className="text-white">dominar ambas as perspectivas</strong>. O sucesso sustentável no século XXI exige a sabedoria de Sun Tzu para evitar conflitos desnecessários e criar vantagens assimétricas, combinada com a clareza de Clausewitz para navegar a natureza brutal do confronto quando a batalha não pode mais ser evitada.
          </p>
        </div>
      </div>
    </section>
  );
};

// 3. MATERIALS SECTION
const MaterialCard = ({
  title,
  description,
  type,
  file,
  icon,
  delay,
  notebookUrl,
  tags
}: {
  title: string;
  description: string;
  type: "document" | "video" | "audio" | "image";
  file: string;
  icon: React.ReactNode;
  delay: number;
  notebookUrl?: string;
  tags?: string[];
}) => {
  const getTypeColor = () => {
    switch (type) {
      case "document": return "from-[#FF8000]/20 to-purple-500/20";
      case "video": return "from-red-500/20 to-pink-500/20";
      case "audio": return "from-green-500/20 to-emerald-500/20";
      case "image": return "from-blue-500/20 to-cyan-500/20";
      default: return "from-gray-500/20 to-gray-600/20";
    }
  };

  // Verificar se é um arquivo markdown
  const isMarkdown = file.endsWith('.md');
  const fileSlug = isMarkdown ? file.replace('.md', '') : null;
  const viewUrl = isMarkdown ? `/markdown/${fileSlug}` : `/${file}`;

  return (
    <div
      className="group relative rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:border-[#FF8000]/50 transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor()} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-[#FF8000]/10 text-[#FF8000]">
            {icon}
          </div>
          {isMarkdown ? (
            <Link
              href={viewUrl}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ExternalLink size={18} className="text-gray-400" />
            </Link>
          ) : (
            <a
              href={`/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={(e) => {
                if (type === "image" && typeof window !== "undefined") {
                  e.preventDefault();
                  window.open(`/${file}`, "_blank");
                }
              }}
            >
              <ExternalLink size={18} className="text-gray-400" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-[#FF8000]/10 text-[#FF9933] text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <a
            href={`/${file}`}
            download
            className="flex items-center gap-2 px-4 py-2 bg-[#FF8000]/10 hover:bg-[#FF8000]/20 text-[#FF8000] rounded-lg text-sm font-medium transition-colors"
          >
            <Download size={16} />
            Baixar
          </a>
          {isMarkdown ? (
            <Link
              href={viewUrl}
              className="flex items-center gap-2 px-4 py-2 bg-[#FF8000]/20 hover:bg-[#FF8000]/30 text-[#FF9933] rounded-lg text-sm font-medium transition-colors"
            >
              <FileText size={16} />
              Ver Formatado
            </Link>
          ) : (
            <a
              href={`/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              Abrir
            </a>
          )}
          {notebookUrl && (
            <a
              href={notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors"
              title="Abrir no NotebookLM"
            >
              <LinkIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

interface Material {
  id: string;
  title: string;
  description: string;
  type: "document" | "video" | "audio" | "image";
  file: string;
  category: string;
  notebookUrl?: string;
  tags?: string[];
}

const MaterialsSection = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/materials.json")
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar materiais:", err);
        setLoading(false);
      });
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText size={24} />;
      case "video":
        return <Video size={24} />;
      case "audio":
        return <Music size={24} />;
      case "image":
        return <ImageIcon size={24} />;
      default:
        return <FileCheck size={24} />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF8000] to-cyan-400 bg-clip-text text-transparent">
          Materiais Disponíveis
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Todos os artefatos gerados pelo NotebookLM organizados por categoria
        </p>
      </div>

      <div suppressHydrationWarning>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF8000]"></div>
            <p className="mt-4 text-gray-400">Carregando materiais...</p>
          </div>
        ) : materials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Nenhum material encontrado.</p>
            <p className="text-gray-500 text-sm mt-2">
              Adicione materiais editando o arquivo <code className="bg-white/5 px-2 py-1 rounded">public/materials.json</code>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Ou use o comando: <code className="bg-white/5 px-2 py-1 rounded">npm run add-material</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <MaterialCard
                key={material.id}
                title={material.title}
                description={material.description}
                type={material.type}
                file={material.file}
                icon={getIcon(material.type)}
                delay={index * 0.1}
                notebookUrl={material.notebookUrl}
                tags={material.tags}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// 4. MEDIA PREVIEW SECTION
const MediaPreview = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/materials.json")
      .then((res) => res.json())
      .then((data) => {
        setMaterials(data.materials || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar materiais:", err);
        setLoading(false);
      });
  }, []);

  const videos = materials.filter((m) => m.type === "video");
  const audios = materials.filter((m) => m.type === "audio");
  const images = materials.filter((m) => m.type === "image");

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF8000] to-cyan-400 bg-clip-text text-transparent">
          Visualizações
        </h2>
      </div>

      <div suppressHydrationWarning>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF8000]"></div>
            <p className="mt-4 text-gray-400">Carregando visualizações...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Players */}
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-6 overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Video size={24} className="text-red-400" />
              {video.title}
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
              <video
                controls
                className="w-full h-full"
                src={`/${video.file}`}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        ))}

        {/* Audio Players */}
        {audios.map((audio, index) => (
          <div
            key={audio.id}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Music size={24} className="text-green-400" />
              {audio.title}
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-black/20 p-4">
              <audio
                controls
                className="w-full"
                src={`/${audio.file}`}
              >
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>
          </div>
        ))}

        {/* Image Previews */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className="lg:col-span-2 rounded-3xl bg-white/[0.02] border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ImageIcon size={24} className="text-blue-400" />
              {image.title}
            </h3>
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden bg-black/20">
              <Image
                src={`/${image.file}`}
                alt={image.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        ))}
          </div>
        )}
      </div>
    </section>
  );
};

// 5. SHARE SECTION
const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://suntzu-chi.vercel.app/";
  const shareTitle = "⚔️ Sun Tzu: A Arte da Guerra na Modernidade e Teoria";
  const shareText = "Explore o legado de Sun Tzu e sua obra A Arte da Guerra, analisando sua aplicação em contextos contemporâneos.";

  const handleShare = async (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedText = encodeURIComponent(shareText);

    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
      default:
        return;
    }

    window.open(shareLink, "_blank", "width=600,height=400");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // Usuário cancelou ou erro
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-[#FF8000]/10 via-[#FF8000]/5 to-purple-500/10 border border-[#FF8000]/30 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF8000]/20 mb-4">
            <Share2 size={32} className="text-[#FF8000]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF8000] to-cyan-400 bg-clip-text text-transparent mb-2">
            Compartilhe este Conteúdo
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Ajude a espalhar o conhecimento sobre Sun Tzu e A Arte da Guerra
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => handleShare("facebook")}
            className="flex items-center gap-2 px-6 py-3 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-white rounded-lg transition-colors border border-[#1877F2]/30"
          >
            <Facebook size={20} />
            <span>Facebook</span>
          </button>

          <button
            onClick={() => handleShare("twitter")}
            className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-white rounded-lg transition-colors border border-[#1DA1F2]/30"
          >
            <Twitter size={20} />
            <span>Twitter</span>
          </button>

          <button
            onClick={() => handleShare("linkedin")}
            className="flex items-center gap-2 px-6 py-3 bg-[#0077B5]/20 hover:bg-[#0077B5]/30 text-white rounded-lg transition-colors border border-[#0077B5]/30"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </button>

          <button
            onClick={() => handleShare("whatsapp")}
            className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white rounded-lg transition-colors border border-[#25D366]/30"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </button>

          {typeof navigator !== "undefined" && navigator.share && (
            <button
              onClick={handleNativeShare}
              className="flex items-center gap-2 px-6 py-3 bg-[#FF8000]/20 hover:bg-[#FF8000]/30 text-[#FF8000] rounded-lg transition-colors border border-[#FF8000]/30"
            >
              <Share2 size={20} />
              <span>Compartilhar</span>
            </button>
          )}

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-colors border border-white/10"
          >
            <LinkIcon size={20} />
            <span>{copied ? "Copiado!" : "Copiar Link"}</span>
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-xs">
            URL: <span className="text-gray-400 font-mono">{shareUrl}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

// 6. FOOTER
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF8000] to-cyan-400 bg-clip-text text-transparent mb-4">
          Artefatos do NotebookLM
        </h3>
        <p className="text-gray-400 mb-6 text-sm">
          Organize e compartilhe seus estudos do NotebookLM
        </p>

        <div className="space-y-3 mb-6">
          <p className="text-gray-500 text-xs">
            Template baseado em{" "}
            <a
              href="https://github.com/araguaci/notebooklm-showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8000] hover:text-[#FF9933] underline transition-colors"
            >
              notebooklm-showcase
            </a>
          </p>
          <p className="text-gray-500 text-xs">
            Desenvolvido por{" "}
            <a
              href="https://github.com/araguaci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8000] hover:text-[#FF9933] underline transition-colors"
            >
              @araguaci
            </a>
            {" "}by{" "}
            <a
              href="https://artesdosul.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8000] hover:text-[#FF9933] underline transition-colors"
            >
              @artesdosul
            </a>
          </p>
        </div>

        <p className="text-gray-500 text-xs">
          © {currentYear} - Template open source para a comunidade
        </p>
      </div>
    </footer>
  );
};

// --- MAIN PAGE ---
export default function Page() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-[#FF8000]/30" suppressHydrationWarning>
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-[#FF8000]/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10" suppressHydrationWarning>
        <Hero />
        <HighlightsSection />
        <MaterialsSection />
        <MediaPreview />
        <ShareSection />
        <Footer />
      </div>
    </div>
  );
}

