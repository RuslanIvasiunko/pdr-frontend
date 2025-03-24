// src/utils/errors.js

const ERROR_KEY = 'errorTests';

export const getErrors = () => {
  try {
    if (typeof window !== 'undefined') {
      const errors = localStorage.getItem(ERROR_KEY);
      return errors ? JSON.parse(errors) : [];
    }
  } catch (e) {
    console.error('Error accessing localStorage:', e);
    return [];
  }
};

export const saveErrors = errorsList => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ERROR_KEY, JSON.stringify(errorsList));
    }
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
};

export const addError = errorItem => {
  const currentErrors = getErrors();

  // const isAlreadyAdded = currentErrors.some(
  //   err => err.content.number === errorItem.content.number,
  // );
  const isAlreadyAdded = currentErrors.some(err => err.id === errorItem.id);

  if (!isAlreadyAdded) {
    const updatedErrors = [...currentErrors, errorItem];
    saveErrors(updatedErrors);
  }
};
