
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users, CheckCircle } from "lucide-react";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
    title: string;
    location: string;
    type: string;
    salary?: string;
    department: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
  };
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, job }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto !bg-white">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-bold text-[#2545B8]">
            {job.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-gray-800">
              <MapPin className="w-4 h-4 text-[#2545B8]" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full text-gray-800">
              <Clock className="w-4 h-4 text-[#2545B8]" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full text-gray-800">
              <Users className="w-4 h-4 text-[#0d7c3d]" />
              <span>{job.department}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full text-gray-800">
                <DollarSign className="w-4 h-4 text-yellow-600" />
                <span>{job.salary}</span>
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6 text-gray-800">
          {/* Descrição */}
          <div>
            <h3 className="text-lg font-semibold text-[#2545B8] mb-3">Descrição da Vaga</h3>
            <p className="leading-relaxed">{job.description}</p>
          </div>

          {/* Responsabilidades */}
          <div>
            <h3 className="text-lg font-semibold text-[#2545B8] mb-3">Responsabilidades</h3>
            <ul className="space-y-2">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0d7c3d] mt-0.5 flex-shrink-0" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requisitos */}
          <div>
            <h3 className="text-lg font-semibold text-[#2545B8] mb-3">Requisitos</h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2545B8] mt-0.5 flex-shrink-0" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefícios */}
          <div>
            <h3 className="text-lg font-semibold text-[#2545B8] mb-3">Benefícios</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#0d7c3d] mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button 
              className="flex-1 bg-[#2545B8] hover:bg-[#19317C] text-white"
              onClick={() => {
                const form = document.getElementById('curriculo-form');
                if (form) {
                  onClose();
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Candidatar-se para esta vaga
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-[#2545B8] text-[#2545B8] hover:bg-[#2545B8] hover:text-white"
              onClick={onClose}
            >
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;

