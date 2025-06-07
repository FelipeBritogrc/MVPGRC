
import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSignupProps {
  variant?: "default" | "compact";
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  variant = "default", 
  className = "" 
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simular envio para newsletter (em produção, integrar com serviço real)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubscribed(true);
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades em breve.",
        variant: "default"
      });
      
      // Reset form after success
      setTimeout(() => {
        setEmail("");
        setName("");
        setIsSubscribed(false);
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Erro na inscrição",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-2xl p-6 text-center ${className}`}>
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Inscrição realizada com sucesso!
        </h3>
        <p className="text-green-600">
          Obrigado por se inscrever em nossa newsletter. Você receberá as últimas novidades do Grupo RedeCompras.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7c3d] focus:ring-2 focus:ring-[#0d7c3d]/20 outline-none transition-all"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none flex items-center gap-2"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </form>
    );
  }

  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 shadow-lg ${className}`}>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-[#282e76] to-[#0d7c3d] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#282e76] mb-2">
          Newsletter do Grupo RedeCompras
        </h3>
        <p className="text-gray-600">
          Receba em primeira mão nossas novidades, promoções exclusivas e eventos especiais.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7c3d] focus:ring-2 focus:ring-[#0d7c3d]/20 outline-none transition-all"
            disabled={isLoading}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu melhor email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0d7c3d] focus:ring-2 focus:ring-[#0d7c3d]/20 outline-none transition-all"
            disabled={isLoading}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] hover:from-[#0d7c3d] hover:to-[#282e76] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Inscrevendo...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Inscrever-se na Newsletter
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-start gap-3 text-sm text-gray-600">
          <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            Ao se inscrever, você concorda em receber emails promocionais do Grupo RedeCompras. 
            Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
