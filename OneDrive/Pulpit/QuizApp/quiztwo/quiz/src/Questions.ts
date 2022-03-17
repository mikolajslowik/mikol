interface QuizDataSummary {
  id: number;
  question: String;
  a: String;
  b: String;
  c: String;
  d: String;
  answer: String;
}

export const questions: QuizDataSummary[] = [
  {
    id: 1,
    question: "Czy dzisiaj nam sie chce?",
    a: "nie",
    b: "nie",
    c: "nie",
    d: "nie",
    answer: "a",
  },
  {
    id: 2,
    question: "Ile elektowni atomowych było w Polsce w XIII wieku?",
    a: "0",
    b: "1",
    c: "12",
    d: "2",
    answer: "a",
  },
  {
    id: 3,
    question: "Na czym źle wyszedł przysłowiowy Zabłocki?",
    a: "Na schodach.",
    b: "Na bitcoinach.",
    c: "Na mydle.",
    d: "Na żelu do higieny intymnej.",
    answer: "c",
  },
  {
    id: 4,
    question: "Czy stópkarze kochają Wielką Stopę?",
    a: "tak",
    b: "nie",
    c: "nie wiem",
    d: "to zależy",
    answer: "c",
  },
  {
    id: 5,
    question: "Kiedy Agnieszka Chylińska powie sobie dość?",
    a: "W czwartek.",
    b: "O 17.",
    c: "Po nadgodzinach.",
    d: "To już niedługo.",
    answer: "d",
  },
  {
    id: 6,
    question: "Z jakiego miasta pochodził Mikołaj z Krakowa?",
    a: "Nie pochodził z miasta. Wychował się na wsi.",
    b: "Z Krakowa.",
    c: "Z Pasłęki.",
    d: "Z Kolbuszowej.",
    answer: "b",
  },
  {
    id: 7,
    question: "Ile czasu zajmuje ugotowanie dużego jajka na miękko?",
    a: "6 min.",
    b: "6,25 min.",
    c: "6,5 min.",
    d: "6,75 min.",
    answer: "c",
  },
  {
    id: 8,
    question: "Która z tych rzeczy warzy najwięcej?",
    a: "Kilo pierzu.",
    b: "Kilo stali.",
    c: "Słowa wielkiej wagi.",
    d: "Wielka waga.",
    answer: "d",
  },
  {
    id: 9,
    question: "Kiedy rozpoczęła sie rewolucja francuska?",
    a: "1789r.",
    b: "1792r.",
    c: "1747r.",
    d: "1773r.",
    answer: "a",
  },
  {
    id: 10,
    question: "Kim są smerfy?",
    a: "Policjantami",
    b: "Bajkowymi postaciami.",
    c: "Postaciami z filmu Avatar.",
    d: "Wielkimi kiełkami bambusa.",
    answer: "b",
  },
];
