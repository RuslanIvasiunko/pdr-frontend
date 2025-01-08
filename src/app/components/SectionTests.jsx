'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import QuestionsOfSection from './QuestionsOfSection.jsx';
import { clearSectionRandom } from '../redux/tests/slice.js';

const SectionTests = ({sectionSlag, operation, selector, isRandom}) => {
  const dispatch = useDispatch();
  const sectionTests = useSelector((state) => selector(state, sectionSlag));
  // const contentArr = sectionTests?.content.map(item => {
  //   return {...item, buttoncolor: '#F5F5F5', selectedAnswer: null}}) || [];

  useEffect(() => {
    if (!isRandom) {
      dispatch(clearSectionRandom())
    }
    dispatch(operation(sectionSlag));
  }, [dispatch, sectionSlag, isRandom]);

  return (
    <div>
      <QuestionsOfSection
        sectionTests={sectionTests}
        // contentArr={contentArr}
      />
    </div>
  )
}

export default SectionTests