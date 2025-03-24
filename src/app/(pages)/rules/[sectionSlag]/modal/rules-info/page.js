'use client';

const RuleInfoModal = ({ slag, number, coords, modalRef, onClose }) => {
  return (
    <div
      ref={modalRef} // Добавляем ref для получения размеров модалки
      style={{
        position: 'absolute',
        top: coords.y,
        left: coords.x,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        minWidth: '150px', // Минимальная ширина
        maxWidth: '600px', // Максимальная ширина
        maxHeight: '350px', // Ограничиваем высоту
        overflowY: 'auto', // Если контент слишком длинный — скролл
        wordWrap: 'break-word', // Перенос длинных слов
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
        onClick={onClose} // Закрытие по клику на крестик
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
