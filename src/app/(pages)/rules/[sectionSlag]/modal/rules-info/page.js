'use client';

import { useEffect, useState } from 'react';

import { rulesApiClient } from '@/shared/services/rulesApiClient';
import { renderHTML } from '@/utils/renderHtml';

const RuleInfoModal = ({
  slag,
  number,
  coords,
  modalRef,
  handleCloseModal,
}) => {
  const [dataModal, setDataModal] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await rulesApiClient.getModalPointOfRules(
          slag,
          number,
        );
        setDataModal(response);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      }
    }
    fetchData();
  }, [slag, number]);

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
      {dataModal && (
        <div>
          <h2>{dataModal.title}</h2>
          <p>{renderHTML(dataModal.content)}</p>
        </div>
      )}
    </div>
  );
};

export default RuleInfoModal;
