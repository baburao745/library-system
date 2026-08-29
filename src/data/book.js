const books = [
  // Kannada Books
  {
    id: 1,
    title: "Mookajjiya Kanasugalu",
    author: "K. Shivaram Karanth",
    category: "Kannada",
    description:
      "A famous Kannada novel exploring life, society, beliefs, and human nature.",
    rating: 4.8,
    popular: true,
  },
  {
    id: 2,
    title: "Parva",
    author: "S. L. Bhyrappa",
    category: "Kannada",
    description:
      "A celebrated Kannada novel presenting the Mahabharata from different perspectives.",
    rating: 4.9,
    popular: true,
  },
  {
    id: 3,
    title: "Samskara",
    author: "U. R. Ananthamurthy",
    category: "Kannada",
    description:
      "A renowned Kannada novel dealing with tradition, society, and personal values.",
    rating: 4.7,
    popular: true,
  },
  {
    id: 4,
    title: "Malegalalli Madumagalu",
    author: "Kuvempu",
    category: "Kannada",
    description:
      "A classic novel depicting life, nature, relationships, and society in Malnad.",
    rating: 4.8,
    popular: true,
  },
  {
    id: 5,
    title: "Chidambara Rahasya",
    author: "K. Shivaram Karanth",
    category: "Kannada",
    description:
      "A popular Kannada mystery novel involving investigation and suspense.",
    rating: 4.6,
    popular: false,
  },

  // English Books
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "English",
    description:
      "A young shepherd follows his dreams and discovers the meaning of life and destiny.",
    rating: 4.7,
    popular: true,
  },
  {
    id: 7,
    title: "Atomic Habits",
    author: "James Clear",
    category: "English",
    description:
      "A practical guide to building good habits and making small improvements.",
    rating: 4.8,
    popular: true,
  },
  {
    id: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "English",
    description:
      "A classic story about wealth, love, dreams, and society.",
    rating: 4.4,
    popular: false,
  },
  {
    id: 9,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    category: "English",
    description:
      "A young boy discovers that he is a wizard and begins his magical journey.",
    rating: 4.9,
    popular: true,
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    category: "English",
    description:
      "Bilbo Baggins leaves his peaceful home and begins an unexpected adventure.",
    rating: 4.8,
    popular: true,
  },

  // Hindi Books
  {
    id: 11,
    title: "Godaan",
    author: "Munshi Premchand",
    category: "Hindi",
    description:
      "A classic Hindi novel portraying rural life, poverty, and social struggles.",
    rating: 4.8,
    popular: true,
  },
  {
    id: 12,
    title: "Gaban",
    author: "Munshi Premchand",
    category: "Hindi",
    description:
      "A Hindi novel exploring human desires, social pressure, and moral choices.",
    rating: 4.5,
    popular: false,
  },
  {
    id: 13,
    title: "Nirmala",
    author: "Munshi Premchand",
    category: "Hindi",
    description:
      "A social novel dealing with marriage, family relationships, and society.",
    rating: 4.6,
    popular: true,
  },
  {
    id: 14,
    title: "Gunahon Ka Devta",
    author: "Dharamvir Bharati",
    category: "Hindi",
    description:
      "A popular Hindi novel about love, relationships, and emotional conflict.",
    rating: 4.7,
    popular: true,
  },
  {
    id: 15,
    title: "Raag Darbari",
    author: "Shrilal Shukla",
    category: "Hindi",
    description:
      "A satirical Hindi novel depicting politics and social life in rural India.",
    rating: 4.6,
    popular: false,
  },

  // Telugu Books
  {
    id: 16,
    title: "Maidanam",
    author: "Chalam",
    category: "Telugu",
    description:
      "A well-known Telugu novel exploring relationships, society, and individual freedom.",
    rating: 4.5,
    popular: true,
  },
  {
    id: 17,
    title: "Veyi Padagalu",
    author: "Viswanatha Satyanarayana",
    category: "Telugu",
    description:
      "A celebrated Telugu novel portraying changing traditions and society.",
    rating: 4.8,
    popular: true,
  },
  {
    id: 18,
    title: "Amaravati Kathalu",
    author: "Satyam Sankaramanchi",
    category: "Telugu",
    description:
      "A collection of memorable Telugu stories connected with everyday life.",
    rating: 4.6,
    popular: false,
  },
  {
    id: 19,
    title: "Barrister Parvateesam",
    author: "Mokkapati Narasimha Sastry",
    category: "Telugu",
    description:
      "A humorous Telugu novel following the adventures of a young man.",
    rating: 4.7,
    popular: true,
  },
  {
    id: 20,
    title: "Kanyasulkam",
    author: "Gurajada Apparao",
    category: "Telugu",
    description:
      "A famous Telugu play addressing social customs and problems.",
    rating: 4.8,
    popular: true,
  },

  // Tamil Books
  {
    id: 21,
    title: "Ponniyin Selvan",
    author: "Kalki Krishnamurthy",
    category: "Tamil",
    description:
      "A historical Tamil epic filled with adventure, politics, and royal intrigue.",
    rating: 4.9,
    popular: true,
  },
  {
    id: 22,
    title: "Sivagamiyin Sabatham",
    author: "Kalki Krishnamurthy",
    category: "Tamil",
    description:
      "A historical Tamil novel set around the Pallava period.",
    rating: 4.8,
    popular: true,
  },
  {
    id: 23,
    title: "Silappathikaram",
    author: "Ilango Adigal",
    category: "Tamil",
    description:
      "An ancient Tamil epic centered on love, justice, and fate.",
    rating: 4.7,
    popular: true,
  },
  {
    id: 24,
    title: "Parthiban Kanavu",
    author: "Kalki Krishnamurthy",
    category: "Tamil",
    description:
      "A historical Tamil novel involving dreams, courage, and royal ambitions.",
    rating: 4.6,
    popular: false,
  },
  {
    id: 25,
    title: "Kadal Pura",
    author: "Sandilyan",
    category: "Tamil",
    description:
      "A popular historical adventure novel featuring sea voyages and royal conflicts.",
    rating: 4.7,
    popular: true,
  },
];

export default books;