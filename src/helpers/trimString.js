export const trimString = inputString => {
  const indexOfSlash = inputString.indexOf('/');
  return inputString.slice(indexOfSlash + 1);
};
