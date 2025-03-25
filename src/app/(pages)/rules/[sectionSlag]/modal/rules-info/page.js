'use client';

const RuleInfoModal = ({
  slag,
  number,
  coords,
  modalRef,
  handleCloseModal,
}) => {
  return (
    <div
      ref={modalRef}
      style={{
        position: 'absolute',
        top: coords.y,
        left: coords.x,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        minWidth: '150px',
        maxWidth: '600px',
        overflowY: 'auto',
        wordWrap: 'break-word',
      }}
    >
      <button
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          fontSize: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleCloseModal}
      >
        ❌
      </button>
      <h2>Модалка</h2>
      <p>Слаг: {slag}</p>
      <p>Номер: {number}</p>
      <p>
        Дії або бездіяльність учасників дорожнього руху та інших осіб не повинні
        створювати небезпеку чи перешкоду для руху, загрожувати життю або
        здоров’ю громадян, завдавати матеріальних збитків.
      </p>
    </div>
  );
};

export default RuleInfoModal;
