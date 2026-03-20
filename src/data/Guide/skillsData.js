const skillsData = {
  en: {
    greece: [
      {
        order: "A",
        title: "Special Schools of Vocational Education (E.E.E.EK)",
        description:
          "For students aged 13-22. Focuses on functional, social, and vocational skills through practical workshops like Gardening, Cooking, and Visual Arts. Includes interdisciplinary collaboration with therapists.",
      },
      {
        order: "B",
        title: "Unified Special Vocational Gymnasiums-Lyceums (ENEEGYL)",
        description:
          "For students aged 12-19. Combines general education with vocational training. Graduates receive a formal qualification certificate and can pursue higher education or Post-Secondary Apprenticeships.",
      },
      {
        order: "C",
        title: "Vocational Training Schools (DYPA)",
        description:
          "For adults (18-58) with 50%+ disability. Provides practical and theoretical training, skills certification, and psychosocial support for employment or self-employment.",
      },
      {
        order: "D",
        title: "Educational Centre for Vocational Training (EKEK)",
        description:
          "Subsidized 4 to 5-year programs in Thessaloniki for adolescents and young adults. Graduates can join Sheltered Employment Centers for up to four years.",
      },
    ],
    poland: [
      {
        order: "A",
        title: "Vocational School Level I",
        description:
          "Lasts 3 years within Special Educational and Care Centers (SOSW). Combines general education with practical training (e.g., cook, tailor, mechanic). Ends with an exam confirming professional qualifications.",
      },
      {
        order: "B",
        title: "General Secondary School",
        description:
          "Training lasts 4 years and ends with a matriculation exam, enabling further education in higher education.",
      },
      {
        order: "C",
        title: "Technical School",
        description:
          "Training lasts 5 years, ending with both a matriculation exam (for higher education) and an exam confirming vocational qualifications.",
      },
      {
        order: "D",
        title: "Special Educational and Upbringing Centers (SOSW)",
        description:
          "Provides holistic psychological, pedagogical, and career counseling. Prepares students for independent social life, offering individualized programs and rehabilitation.",
      },
    ],
    turkey: [
      {
        order: "A",
        title: "III. Kademe (Special Education Schools)",
        description:
          "Provides a 30-hour weekly timetable for grades 9-12. Includes independent living skills, social skills, and 8 hours/week of 'Work and Skills Practices'.",
      },
      {
        order: "B",
        title: "Individualized Education Programs (BEP)",
        description:
          "Prepared and implemented according to students' specific needs and performance. Focuses on practical application areas like decorative handicrafts and agriculture.",
      },
      {
        order: "C",
        title: "Inclusion Framework (Kaynaştırma/Bütünleştirme)",
        description:
          "Enables students with special education needs to interact with peers and achieve educational goals at the highest level, with support services when needed.",
      },
    ],
  },

  ελ: {
    greece: [
      {
        order: "A",
        title: "Ειδικά Επαγγελματικά Εκπαιδευτήρια (Ε.Ε.Ε.ΕΚ)",
        description:
          "Απευθύνονται σε μαθητές ηλικίας 13-22 ετών. Εστιάζουν σε λειτουργικές, κοινωνικές και επαγγελματικές δεξιότητες μέσω πρακτικών εργαστηρίων όπως Κηπουρική, Μαγειρική και Εικαστικά. Περιλαμβάνουν διεπιστημονική συνεργασία με θεραπευτές.",
      },
      {
        order: "B",
        title: "Ενιαία Ειδικά Επαγγελματικά Γυμνάσια-Λύκεια (ΕΝΕΕΓΥΛ)",
        description:
          "Για μαθητές 12-19 ετών. Συνδυάζουν γενική εκπαίδευση με επαγγελματική κατάρτιση. Οι απόφοιτοι λαμβάνουν επίσημο πιστοποιητικό και μπορούν να συνεχίσουν σε ανώτερη εκπαίδευση ή μεταλυκειακή μαθητεία.",
      },
      {
        order: "C",
        title: "Σχολές Επαγγελματικής Κατάρτισης (ΔΥΠΑ)",
        description:
          "Για ενήλικες (18-58) με αναπηρία άνω του 50%. Παρέχουν πρακτική και θεωρητική κατάρτιση, πιστοποίηση δεξιοτήτων και ψυχοκοινωνική υποστήριξη για εργασία ή αυτοαπασχόληση.",
      },
      {
        order: "D",
        title: "Εκπαιδευτικό Κέντρο Επαγγελματικής Κατάρτισης (ΕΚΕΚ)",
        description:
          "Επιδοτούμενα προγράμματα διάρκειας 4-5 ετών στη Θεσσαλονίκη για εφήβους και νέους ενήλικες. Οι απόφοιτοι μπορούν να ενταχθούν σε Κέντρα Προστατευόμενης Εργασίας για έως τέσσερα έτη.",
      },
    ],
    poland: [
      {
        order: "A",
        title: "Επαγγελματική Σχολή Επιπέδου I",
        description:
          "Διαρκεί 3 έτη σε Ειδικά Εκπαιδευτικά και Φροντιστηριακά Κέντρα (SOSW). Συνδυάζει γενική εκπαίδευση με πρακτική κατάρτιση (π.χ. μάγειρας, ράφτης, μηχανικός). Ολοκληρώνεται με εξετάσεις πιστοποίησης.",
      },
      {
        order: "B",
        title: "Γενικό Λύκειο",
        description:
          "Η εκπαίδευση διαρκεί 4 έτη και ολοκληρώνεται με απολυτήριο που επιτρέπει τη συνέχιση σπουδών.",
      },
      {
        order: "C",
        title: "Τεχνικό Λύκειο",
        description:
          "Διαρκεί 5 έτη και ολοκληρώνεται με απολυτήριο και πιστοποίηση επαγγελματικών προσόντων.",
      },
      {
        order: "D",
        title: "Ειδικά Εκπαιδευτικά και Ανατροφικά Κέντρα (SOSW)",
        description:
          "Παρέχουν ολιστική ψυχολογική, παιδαγωγική και επαγγελματική υποστήριξη, προετοιμάζοντας τους μαθητές για ανεξάρτητη ζωή.",
      },
    ],
    turkey: [
      {
        order: "A",
        title: "III. Kademe (Ειδικά Σχολεία)",
        description:
          "Παρέχει εβδομαδιαίο πρόγραμμα 30 ωρών για τάξεις 9-12. Περιλαμβάνει δεξιότητες ανεξάρτητης διαβίωσης, κοινωνικές δεξιότητες και 8 ώρες πρακτικής.",
      },
      {
        order: "B",
        title: "Εξατομικευμένα Εκπαιδευτικά Προγράμματα (BEP)",
        description:
          "Σχεδιάζονται με βάση τις ανάγκες των μαθητών και επικεντρώνονται σε πρακτικές εφαρμογές όπως χειροτεχνίες και γεωργία.",
      },
      {
        order: "C",
        title: "Πλαίσιο Ένταξης",
        description:
          "Επιτρέπει σε μαθητές με ειδικές ανάγκες να συμμετέχουν στην εκπαίδευση με υποστήριξη όπου απαιτείται.",
      },
    ],
  },

  pl: {
    greece: [
      {
        order: "A",
        title: "Specjalne szkoły zawodowe (E.E.E.EK)",
        description:
          "Dla uczniów w wieku 13–22 lat. Koncentrują się na umiejętnościach praktycznych i społecznych.",
      },
      {
        order: "B",
        title: "Zintegrowane szkoły zawodowe (ENEEGYL)",
        description:
          "Łączą edukację ogólną z zawodową i umożliwiają dalszą naukę.",
      },
      {
        order: "C",
        title: "Szkoły kształcenia zawodowego (DYPA)",
        description:
          "Dla dorosłych z niepełnosprawnościami, oferują szkolenia i wsparcie.",
      },
      {
        order: "D",
        title: "Centrum szkolenia zawodowego (EKEK)",
        description: "Programy szkoleniowe dla młodzieży i młodych dorosłych.",
      },
    ],
    poland: [
      {
        order: "A",
        title: "Szkoła branżowa I stopnia",
        description: "Trwa 3 lata i kończy się egzaminem zawodowym.",
      },
      {
        order: "B",
        title: "Liceum ogólnokształcące",
        description: "Trwa 4 lata i kończy się maturą.",
      },
      {
        order: "C",
        title: "Technikum",
        description: "Trwa 5 lat i kończy się maturą oraz egzaminem zawodowym.",
      },
      {
        order: "D",
        title: "Specjalne ośrodki szkolno-wychowawcze (SOSW)",
        description: "Zapewniają wsparcie edukacyjne i przygotowanie do życia.",
      },
    ],
    turkey: [
      {
        order: "A",
        title: "III. Kademe",
        description:
          "Program dla uczniów szkół specjalnych z naciskiem na umiejętności życiowe.",
      },
      {
        order: "B",
        title: "Indywidualne programy edukacyjne (BEP)",
        description: "Dostosowane do potrzeb uczniów.",
      },
      {
        order: "C",
        title: "Edukacja włączająca",
        description: "Integracja uczniów ze specjalnymi potrzebami.",
      },
    ],
  },

  tr: {
    greece: [
      {
        order: "A",
        title: "Özel Mesleki Eğitim Okulları (E.E.E.EK)",
        description:
          "13-22 yaş arası öğrenciler için pratik becerilere odaklanır.",
      },
      {
        order: "B",
        title: "Birleşik Özel Mesleki Okullar (ENEEGYL)",
        description: "Genel eğitim ile mesleki eğitimi birleştirir.",
      },
      {
        order: "C",
        title: "Mesleki Eğitim Okulları (DYPA)",
        description: "Yetişkinler için eğitim ve destek sağlar.",
      },
      {
        order: "D",
        title: "Mesleki Eğitim Merkezi (EKEK)",
        description: "Gençler için eğitim programları sunar.",
      },
    ],
    poland: [
      {
        order: "A",
        title: "Meslek Okulu",
        description: "3 yıl sürer ve mesleki yeterlilik kazandırır.",
      },
      {
        order: "B",
        title: "Genel Lise",
        description: "4 yıl sürer ve üniversiteye geçiş sağlar.",
      },
      {
        order: "C",
        title: "Teknik Lise",
        description: "5 yıl sürer ve mesleki eğitim sunar.",
      },
      {
        order: "D",
        title: "Özel Eğitim Merkezleri (SOSW)",
        description: "Öğrencilere destek ve eğitim sağlar.",
      },
    ],
    turkey: [
      {
        order: "A",
        title: "III. Kademe",
        description: "9-12. sınıflar için özel eğitim programı.",
      },
      {
        order: "B",
        title: "Bireyselleştirilmiş Eğitim Programları (BEP)",
        description: "Öğrenci ihtiyaçlarına göre hazırlanır.",
      },
      {
        order: "C",
        title: "Kaynaştırma Eğitimi",
        description: "Özel gereksinimli öğrencilerin entegrasyonu.",
      },
    ],
  },
};

export default skillsData;
