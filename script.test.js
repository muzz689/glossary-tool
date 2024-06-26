const { requestSynonym, requestTranslation, requestAntonym, requestDefinition, requestExampleSentence, requestHomonym, createImage, GetWikiLink, requestPhrase,requestAbbreviation } = require("./src/script");


describe("requestSynonym function", () => {
  test("should return a synonym for the provided word", async () => {
    const word = "happy";
    const context = "I'm glad to see you looking so happy today.";
    const synonyms = ["joyful", "delighted", "pleased", "content"];

    // Normalize the synonyms to lowercase without punctuation
    const normalizedSynonyms = synonyms.map(synonym => synonym.toLowerCase().replace(/[.,]/g, ''));

    const synonym = await requestSynonym(word, context);
    const normalizedSynonym = synonym.toLowerCase().replace(/[.,]/g, '');

    console.log('synonym Response:', synonym);

    // Check if at least one relevant word is present in the answer
    const hasRelevantWord = normalizedSynonyms.some(syn => normalizedSynonym.includes(syn));

    expect(hasRelevantWord).toBe(true);
  }, 50000); // set the timeout to 50000
});


describe('requestTranslation', () => {
  test('should return a translation for the word passed in', async () => {
    const word = 'it';
    const language = 'Afrikaans';
    const translation = await requestTranslation(word,language);


    const normalizedTranslation = translation.toLowerCase().replace(/[.,]/g, '');

    console.log('Translation Response:', normalizedTranslation);

    expect(typeof normalizedTranslation).toBe('string'); // check that the translation is a string
    expect(normalizedTranslation).not.toBe('it'); // check that the translation is not the same as the original word
    expect(normalizedTranslation.length).toBeGreaterThan(0); // check that the translation is not an empty string
    expect(normalizedTranslation).toBe('dit')
  }, 50000); // set the timeout to 50000

});

describe('requestAntonym', () => {
  test('should return a antonym for the word passed in', async () => {
    const word = 'happy';
    const context = "I'm glad to see you looking so happy today."
    const antonyms = ["sad", "angry", "unhappy", "miserable"];
    
    // Normalize the synonyms to lowercase without punctuation
    const normalizedAntonyms = antonyms.map(antonym => antonym.toLowerCase().replace(/[.,]/g, ''));

    const antonym = await requestAntonym(word, context);
    const normalizedAntonym = antonym.toLowerCase().replace(/[.,]/g, '');

    console.log('antonym Response:', antonym);
    // Check if at least one relevant word is present in the answer
    const hasRelevantWord = normalizedAntonyms.some(ayn => normalizedAntonym.includes(ayn));
    expect(hasRelevantWord).toBe(true);
  }, 50000); // set the timeout to 50000 
});

describe('requestHomonym', () => {
  test('should return a homonym for the word passed in', async () => {
    const word = "happy";
    const context = "I'm glad to see you looking so happy today.";
    const homonyms = ["haply", "happi", "hapi", "hap","hippie","hippy","Chappy","appy"];

    // Normalize the synonyms to lowercase without punctuation
    const normalizedHomonyms = homonyms.map(homonym => homonym.toLowerCase().replace(/[.,]/g, ''));

    const homonym = await requestHomonym(word, context);
    const normalizedHomonym = homonym.toLowerCase().replace(/[.,]/g, '');

    console.log('Homonym Response:', homonym);

    // Check if at least one relevant word is present in the answer
    const hasRelevantWord = normalizedHomonyms.some(homo => normalizedHomonym.includes(homo));

    expect(hasRelevantWord).toBe(true);
  }, 50000); // set the timeout to 50000
});

describe('requestDefinition', () => {
  test('should return a definiton for the word passed in', async () => {
    const word = 'happy';
    const definiton = await requestDefinition(word);

    expect(typeof definiton).toBe('string'); // check that the definiton is a string
    expect(definiton).not.toBe('happy'); // check that the definiton is not the same as the original word
    expect(definiton.length).toBeGreaterThan(0); // check that the definiton is not an empty string
  }, 50000); // set the timeout to 50000
});

describe('requestExampleSentence', () => {
  test('should return an example sentence for the word passed in', async () => {
    const word = 'happy';
    const examplesentence = await requestExampleSentence(word);

    expect(typeof examplesentence).toBe('string'); // check that the example sentence is a string
    expect(examplesentence).not.toBe('happy'); // check that the example sentence is not the same as the original word
    expect(examplesentence.length).toBeGreaterThan(0); // check that the example sentence is not an empty string
  }, 50000); // set the timeout to 50000
});

describe('requestPhrase', () => {
  test('should return a video url for the word passed in', async () => {
    const word = 'Donkey';
    const context = 'Donkey is an animal'
    const videoUrl = await requestPhrase(word,context);
    
    expect(typeof videoUrl).toBe('string'); // check that the image URL is a string
    expect(videoUrl.length).toBeGreaterThan(0); // check that the image URL is not an empty string
  }, 50000); // set the timeout to 50000
});

describe('createImage', () => {
  test('should return a URL for an image generated based on the word passed in', async () => {
    const word = 'cat';
    const imageUrl = await createImage(word);
    
    expect(typeof imageUrl).toBe('string'); // check that the image URL is a string
    expect(imageUrl.length).toBeGreaterThan(0); // check that the image URL is not an empty string
  }, 100000); // set the timeout to 50000
});

describe('GetWikiLink', () => {
  test('should return a URL for the Wikipedia page of the word passed in', () => {
    const word = 'dog';
    const wikiLink = GetWikiLink(word);

    expect(typeof wikiLink).toBe('string'); // check that the wikiLink is a string
    expect(wikiLink.length).toBeGreaterThan(0); // check that the wikiLink is not an empty string
    expect(wikiLink).toContain('https://en.wikipedia.org/wiki/'); // check that the wikiLink starts with 'https://en.wikipedia.org/wiki/'
    expect(wikiLink).toContain('dog'); // check that the wikiLink contains the word 'dog'
  });
});

describe('requestAbbreviation', () => {
  test('should return an abbreviation for the word passed in', async () => {
    const word = "Volkswagen";
    const abbreviations = ["vw","VeeDub"];

    // Normalize the synonyms to lowercase without punctuation
    const normalizedAbbreviations = abbreviations.map(abbreviation => abbreviation.toLowerCase().replace(/[.,]/g, ''));

    const abbreviation = await requestAbbreviation(word);
    const normalizedAbbreviation = abbreviation.toLowerCase().replace(/[.,]/g, '');

    console.log('Abbreviation Response:', abbreviation);

    // Check if at least one relevant word is present in the answer
    const hasRelevantWord = normalizedAbbreviations.some(abbe => normalizedAbbreviation.includes(abbe));

    expect(hasRelevantWord).toBe(true);
  }, 50000); // set the timeout to 50000
});