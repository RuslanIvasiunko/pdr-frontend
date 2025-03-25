'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';

import useModalClose from '@/shared/hooks/useModalClose';
import RuleInfoModal from './modal/rules-info/page';

export default function RulesLayout({ children }) {
  const [modal, setModal] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();
  const slag = searchParams.get('slag');
  const number = searchParams.get('number');

  useEffect(() => {
    const modalParam = searchParams.get('modal');
    setModal(modalParam);
  }, [searchParams]);

  const handleClick = e => {
    const padding = 10;
    let x = e.pageX + padding;
    let y = e.pageY + padding + 3;

    setCoords({ x, y });
  };

  useLayoutEffect(() => {
    if (modal && modalRef.current) {
      const modalElement = modalRef.current;
      const modalWidth = modalElement.offsetWidth;
      const modalHeight = modalElement.offsetHeight;
      let { x, y } = coords;

      x -= modalWidth / 2;

      if (x + modalWidth > window.innerWidth) {
        x = window.innerWidth - modalWidth - 10;
      }
      if (x < 0) {
        x = 5;
      }

      y += 5;

      if (y + modalHeight > window.innerHeight) {
        y = window.innerHeight - modalHeight - 10;
      }
      if (y < 0) {
        y = 10;
      }

      setCoords({ x, y });
    }
  }, [modal]);

  const handleCloseModal = () => {
    setModal(null);

    router.push(pathname, { scroll: false });
  };

  useModalClose({ modal, handleCloseModal, modalRef });

  return (
    <div onClick={handleClick}>
      {children}
      {modal === 'rules-info' && (
        <RuleInfoModal
          slag={slag}
          number={number}
          coords={coords}
          modalRef={modalRef}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
