{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const smallLetterSentence = sentence.toLowerCase();
        const smallLetterWord = word.toLowerCase();

        const wordsArray = smallLetterSentence.split(' ');
        const matchedCount = wordsArray.filter(item => item === smallLetterWord).length;

        return matchedCount;
    }

    const result = countWordOccurrences('I love typescript', 'typescript');
    console.log(result);
}