// 'use client';

// import { Modal } from '@/shared/components/Modal';
// import { useEffect, useState } from 'react';

// const ModalHandler = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [modalData, setModalData] = useState(null);

//   useEffect(() => {
//     const handleClick = event => {
//       const button = event.target.closest('.open-modal-btn');
//       if (button) {
//         const sectionSlag = button.getAttribute('data-slag');
//         const number = button.getAttribute('data-number');
//         setModalData({ sectionSlag, number });
//         setIsOpen(true);
//       }
//     };

//     document.addEventListener('click', handleClick);
//     return () => {
//       document.removeEventListener('click', handleClick);
//     };
//   }, []);

//   return (
//     <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} data={modalData} />
//   );
// };

// export default ModalHandler;
