/**
 * Returns the substring after the last slash '/'
 * @param {string} pathname 
 * @returns string | null
 */
export const getLastParam = pathname => {
  const match = pathname.match(/[^/]+$/);
  if (match) {
    return match[0];
  }
  return null;
};
