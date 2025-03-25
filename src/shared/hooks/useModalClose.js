import { useEffect } from 'react';

const useModalClose = ({ modal, handleCloseModal, modalRef }) => {
  useEffect(() => {
    if (!modal || !modalRef?.current) return;
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modal, handleCloseModal, modalRef]);

  useEffect(() => {
    if (!modal || !modalRef?.current) return;

    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modal, handleCloseModal, modalRef]);
};

export default useModalClose;
