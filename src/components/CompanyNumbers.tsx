
import React from "react";
import { Building2, Users, Store, Award } from "lucide-react";
import { motion } from "framer-motion";

const NUMBERS = [
  {
    number: "4ª",
    label: "Maior empresa de varejo da Paraíba",
    icon: Award,
    color: "from-[#282e76] to-[#0d7c3d]"
  },
  {
    number: "+1200",
    label: "Funcionários",
    icon: Users,
    color: "from-[#0d7c3d] to-[#282e76]"
  },
  {
    number: "10+",
    label: "Marcas",
    icon: Building2,
    color: "from-[#282e76] to-[#0d7c3d]"
  },
  {
    number: "9",
    label: "Lojas",
    icon: Store,
    color: "from-[#0d7c3d] to-[#282e76]"
  }
];

const CompanyNumbers: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#282e76]/20 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-[#0d7c3d]/20 to-transparent rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Nossos</span>
            <span className="block bg-gradient-to-r from-[#282e76] to-[#0d7c3d] bg-clip-text text-transparent">
              Números
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Décadas de crescimento sólido e conquistas que nos posicionam como referência no varejo paraibano.
          </p>
        </motion.div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NUMBERS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:-translate-y-2 transform-gpu">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className={`text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.number}
                </div>

                {/* Label */}
                <p className="text-gray-700 font-medium text-lg leading-tight">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#282e76]/5 via-white/50 to-[#0d7c3d]/5 rounded-3xl border border-[#0d7c3d]/20 p-8 lg:p-12 backdrop-blur-sm">
            <h4 className="text-2xl lg:text-3xl font-bold text-[#282e76] mb-4">
              Crescimento com Responsabilidade
            </h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada número representa nosso compromisso com a excelência, 
              inovação e o desenvolvimento sustentável da região.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyNumbers;
