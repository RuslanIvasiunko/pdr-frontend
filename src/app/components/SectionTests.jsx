'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import QuestionsOfSection from './QuestionsOfSection.jsx';
import { clearSectionRandom } from '../redux/tests/slice.js';

const SectionTests = ({ sectionSlag, operation, selector, isRandom }) => {
  const dispatch = useDispatch();
  const sectionTests = useSelector(state => selector(state, sectionSlag));
  // const contentArr = sectionTests?.content.map(item => {
  //   return {...item, buttoncolor: '#F5F5F5', selectedAnswer: null}}) || [];

  useEffect(() => {
    if (!isRandom) {
      dispatch(clearSectionRandom());
    }
    dispatch(operation(sectionSlag));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sectionSlag, isRandom]);

  if (!sectionTests) {
    return <p>Loader...</p>;
  }

  if (!sectionTests.content || sectionTests.content.length === 0) {
    return <p>Питання на цю тему тимчасово не доступні.</p>;
  }

  return (
    <div>
      <QuestionsOfSection
        sectionTests={sectionTests}
        // contentArr={contentArr}
      />
    </div>
  );
};

export default SectionTests;
