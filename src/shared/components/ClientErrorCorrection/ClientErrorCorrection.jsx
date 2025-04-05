'use client';

import { useEffect, useState } from 'react';

import s from './styles.module.scss';
import { QuestionsOfSection } from '@/features/questionsOfSection';
import { getErrors } from '@/utils/errors';

const ClientErrorCorrection = () => {
  const [sectionTests, setSectionTests] = useState({});

  useEffect(() => {
    const errors = getErrors();
    setSectionTests({
      slag: 'section0',
      title: 'Робота над помилками',
      content: errors.length ? errors : [],
    });
  }, []);
  return (
    <div>
      <QuestionsOfSection sectionTests={sectionTests} />
    </div>
  );
};

export default ClientErrorCorrection;
