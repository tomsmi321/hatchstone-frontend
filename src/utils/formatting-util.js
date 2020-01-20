export const capitaliseString = str => {
    return `${str[0].toUpperCase() + str.slice(1, str.length)}`;
  };

export const capitaliseAddress = strOfWords => {
const arrOfWords = strOfWords.split(" ");
const arrOfWordsCapitalised = arrOfWords.map(word => {
    return word[0].toUpperCase() + word.substr(1);
});
return arrOfWordsCapitalised.join(" ");
};