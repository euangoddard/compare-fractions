export const getLowestCommonMultiple = (n1: number, n2: number): number => {
  const largest = Math.max(n1, n2);
  const smallest = Math.min(n1, n2);

  let i = largest;
  while (i % smallest !== 0) {
    i += largest;
  }

  return i;
};

export const getCommonMultiple = (n1: number, n2: number): number => {
  return n1 * n2;
};
