import React, { useState } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import KnowledgeBaseCard from '../components/KnowledgeBaseCard';
import CreateKBModal from '../components/CreateKBModal';

const KnowledgeBasePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry\'s standard dummy', date: '14/07/2025' },
    { id: 2, title: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry\'s standard dummy', date: '14/07/2025' },
    { id: 3, title: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry\'s standard dummy', date: '14/07/2025' },
    { id: 4, title: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry\'s standard dummy', date: '14/07/2025' },
    { id: 5, title: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry\'s standard dummy', date: '14/07/2025' },
    { id: 6, title: 'Test', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry\'s standard dummy', date: '14/07/2025' },
  ]);

  const handleCreateKB = (data) => {
    const newCard = {
      id: cards.length + 1,
      title: data.name || 'Untitled',
      description: data.description || 'No description provided.',
      date: new Date().toLocaleDateString('en-GB')
    };
    setCards([newCard, ...cards]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 border-l-4 border-primary pl-4">Knowledge Base</h1>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-64 shadow-sm"
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 transition-all active:scale-95 group"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            Create New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map(card => (
          <KnowledgeBaseCard 
            key={card.id} 
            title={card.title} 
            description={card.description} 
            date={card.date} 
          />
        ))}
      </div>

      {cards.length === 0 && (
         <div className="flex flex-col items-center justify-center py-20 text-gray-400 opacity-60">
            <div className="w-24 h-24 mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
               <Plus size={48} />
            </div>
            <p className="text-lg font-medium">No Knowledge Bases Found</p>
            <p className="text-sm">Click 'Create New' to get started</p>
         </div>
      )}

      {/* Pagination Footer */}
      <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500 font-medium border-t border-gray-100 pt-8">
        <div>
          <span>{cards.length} rows</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span>Rows per page</span>
            <select className="bg-white border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4">
            <span>page 1 of 1</span>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg border border-gray-200 text-gray-300 hover:bg-gray-50 cursor-not-allowed">
                <ChevronsLeft size={16} />
              </button>
              <button className="p-1.5 rounded-lg border border-gray-200 text-gray-300 hover:bg-gray-50 cursor-not-allowed">
                <ChevronLeft size={16} />
              </button>
              <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-primary transition-colors">
                <ChevronRight size={16} />
              </button>
              <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-primary transition-colors">
                <ChevronsRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <CreateKBModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreate={handleCreateKB}
      />
    </div>
  );
};

export default KnowledgeBasePage;
