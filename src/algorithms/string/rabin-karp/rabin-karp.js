// The bigger the PRIME number, the bigger the hash
const PRIME = 97;

export const hashWord = word => {
  let hash = 0;

  for (let i = 0, len = word.length; i < len; i++) {
    hash += word[i].charCodeAt(0) * PRIME ** i;
  }

  return hash;
};

export const reHashWord = (prevHash, prevWord, newWord) => {
  const lastIndex = newWord.length - 1;
  let newHash = prevHash - prevWord[0].charCodeAt(0);

  newHash /= PRIME;
  newHash += newWord[lastIndex].charCodeAt(0) * PRIME ** lastIndex;

  return newHash;
};

export default function rabinKarp(text, word) {
  // calculate word hash to be used for comparison with other substring hashes
  const wordHash = hashWord(word);

  let prevSegm = null;
  let currentSegmHash = null;

  // go through all substring of the text that may match
  for (let i = 0; i <= text.length - word.length; i++) {
    const currentSegm = text.substring(i, i + word.length);

    // calculate the hash of the current substring
    if (currentSegmHash === null) {
      currentSegmHash = hashWord(currentSegm);
    } else {
      currentSegmHash = reHashWord(currentSegmHash, prevSegm, currentSegm);
    }

    prevSegm = currentSegm;

    // compare the hash of the current substring and seeking string
    if (wordHash === currentSegmHash) {
      // if hashes match, let's check substring char by char
      let numberOfMatches = 0;

      for (let j = 0; j < word.length; j++) {
        if (word[j] === text[i + j]) {
          numberOfMatches += 1;
        }
      }

      if (numberOfMatches === word.length) {
        return i;
      }
    }
  }

  return -1;
}
