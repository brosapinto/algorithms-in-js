const recurringChar = list => {
  const ocorr = new Set();

  for (let val of list) {
    if (ocorr.has(val)) {
      return val;
    }

    ocorr.add(val);
  }

  return null;
};

export default recurringChar;
