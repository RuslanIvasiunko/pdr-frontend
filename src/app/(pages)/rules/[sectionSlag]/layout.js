'use client';

import { useSearchParams } from 'next/navigation';
import RuleInfoModal from './modal/rules-info/page';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';

export default function RulesLayout({ children }) {
  const [modal, setModal] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null); // Для доступа к модалке

  const searchParams = useSearchParams();
  const slag = searchParams.get('slag');
  const number = searchParams.get('number');

  useEffect(() => {
    const modalParam = searchParams.get('modal');
    setModal(modalParam);
  }, [searchParams]);

  // Обработчик клика
  const handleClick = e => {
    const padding = 10;
    let x = e.pageX + padding;
    let y = e.pageY + padding + 3; // Смещаем вниз для клика

    // Сохраняем начальные координаты
    setCoords({ x, y });
  };

  // useLayoutEffect для вычисления размеров модалки после рендера
  useLayoutEffect(() => {
    if (modal && modalRef.current) {
      const modalElement = modalRef.current;
      const modalWidth = modalElement.offsetWidth;
      const modalHeight = modalElement.offsetHeight;
      let { x, y } = coords;

      // Сдвигаем модалку так, чтобы её центр был на месте клика
      x -= modalWidth / 2; // Смещаем по X, чтобы центр модалки был в точке клика

      // Проверяем границы окна по X
      if (x + modalWidth > window.innerWidth) {
        x = window.innerWidth - modalWidth - 10;
      }
      if (x < 0) {
        x = 5; // Обеспечиваем, чтобы модалка не выходила за левую границу
      }

      // Смещаем модалку чуть ниже точки клика, не слишком сильно
      y += 5; // Отступ от клика для вертикального смещения

      // Проверяем границы окна по Y
      if (y + modalHeight > window.innerHeight) {
        y = window.innerHeight - modalHeight - 10;
      }
      if (y < 0) {
        y = 10; // Обеспечиваем, чтобы модалка не выходила за верхнюю границу
      }

      setCoords({ x, y });
    }
  }, [modal]); // Теперь зависимость от coords (для корректного смещения модалки)

  return (
    <div onClick={handleClick}>
      {children}
      {modal === 'rules-info' && (
        <RuleInfoModal
          slag={slag}
          number={number}
          coords={coords}
          modalRef={modalRef} // Передаем ref в модалку
        />
      )}
    </div>
  );
}
