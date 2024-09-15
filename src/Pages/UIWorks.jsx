import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactIcon from '../Components/Icon';
import UIModal from "../Components/UIModal"


const uiWorks = [
  {
    id: 1,
    title: 'UI Design 1',
    images: [
      '/uiworks/uiwork1-1.png',
      '/uiworks/uiwork1-2.png',
    ],
  },

];


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 100 }
  }
};

function UIWorks() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 px-8 md:px-0'>
      {uiWorks.map((work) => (
        <motion.div
          key={work.id}
          className='relative p-4 border border-neutral-800 rounded-lg shadow-lg bg-neutral-900'
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <img src={process.env.PUBLIC_URL + work.images[0]} alt={work.title} className='w-full h-40 object-cover rounded-md' />
          <h3 className='mt-4 text-lg font-semibold text-neutral-100'>{work.title}</h3>
          <button
            onClick={() => openModal(work)}
            className='absolute top-4 right-4 bg-black p-2 rounded-full text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all'
          >
            <ReactIcon iconName="AiOutlineInfoCircle" iconType="ai" classname='text-xl text-neutral-400' />
          </button>
        </motion.div>
      ))}
      
      {/* Modal, eğer modal açık ise gösterilecek */}
      {isModalOpen && (
        <UIModal 
          work={selectedWork} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
}

export default UIWorks;
