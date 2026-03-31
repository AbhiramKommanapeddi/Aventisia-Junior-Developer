import React from 'react';
import { MoreVertical } from 'lucide-react';

const KnowledgeBaseCard = ({ title, description, date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full ring-2 ring-primary/0 hover:ring-primary/10">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-lg hover:bg-gray-100">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-tight">
          Created On: {date}
        </span>
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;
