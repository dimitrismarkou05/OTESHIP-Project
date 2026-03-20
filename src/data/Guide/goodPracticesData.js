const goodPracticesData = {
  en: {
    poland: [
      {
        title: "Occupational Activity Workshops (ZAZ)",
        desc: "Provides sheltered employment, preparing employees for independent living and professional activity. Run by local governments or NGOs, conducting real service/production activities like catering, tailoring, and assembly.",
      },
      {
        title: "Carrefour Poland",
        desc: "Implements workplace adjustments, flexible working hours, and mentoring for new employees with disabilities under their 'Disability' mission.",
      },
      {
        title: "Sodexo Poland",
        desc: "Runs educational and training programs to build awareness within teams about disabilities, recognized by the 'Disability Matters Europe' award.",
      },
      {
        title: "Altix",
        desc: "Operates in accessibility tech. Employs blind individuals in real professional roles and trains other employers to create accessible work environments.",
      },
      {
        title: "LOTTE Wedel",
        desc: "Runs the 'CzekoSprawni' program. Created a dedicated Specialist for Supporting Persons with Disabilities and periodically reports on employment rate increases.",
      },
    ],
    turkey: [
      {
        title: "Manisa Özel Eğitim Uygulama Okulu III. Kademe",
        desc: "Operates a revolving fund system (döner sermaye) allowing the school to produce and sell student-made products, giving students real production and income experience.",
      },
      {
        title: "ZEKİ Yaşam Merkezi",
        desc: "Turkey’s first sheltered workplace model within an organized industrial zone in Manisa. Employees participate in real production processes connected to local factories.",
      },
      {
        title: "ZEKA Sheltered Workplace",
        desc: "A collaborative project in Çerkezköy Industrial Zone featuring accessible facilities and employment criteria for individuals with intellectual disabilities.",
      },
      {
        title: "Gökkuşağı Kafe (Eskişehir)",
        desc: "A municipal initiative providing structured work opportunities in food service, helping disabled individuals gain confidence and financial independence.",
      },
      {
        title: "Gülümseyen Kafe (Erzurum)",
        desc: "Supported by municipalities and İŞKUR, this café employs individuals with Down syndrome and autism as service staff, acting as a model for public social facilities.",
      },
    ],
    greece: [
      {
        title: "Special Schools in Erasmus+ Projects",
        desc: "Projects like 'Our Tradition… Our Entrepreneurship!' expose students to new cultures, approaches to work, and international collaboration, building adaptability and confidence.",
      },
      {
        title: "Showcasing Vocational Skills",
        desc: "Continuous efforts through school contests, exhibitions, and bazaars. Students create products, interact with the public, and simulate real market elements, challenging community stereotypes.",
      },
    ],
  },

  ελ: {
    poland: [
      {
        title: "Εργαστήρια Επαγγελματικής Δραστηριότητας (ZAZ)",
        desc: "Παρέχουν προστατευόμενη εργασία, προετοιμάζοντας τους εργαζόμενους για ανεξάρτητη διαβίωση και επαγγελματική δραστηριότητα. Λειτουργούν από τοπικές αρχές ή ΜΚΟ και υλοποιούν πραγματικές δραστηριότητες υπηρεσιών/παραγωγής όπως εστίαση, ραπτική και συναρμολόγηση.",
      },
      {
        title: "Carrefour Πολωνίας",
        desc: "Εφαρμόζει προσαρμογές στον χώρο εργασίας, ευέλικτο ωράριο και καθοδήγηση για νέους εργαζόμενους με αναπηρία στο πλαίσιο της αποστολής «Disability».",
      },
      {
        title: "Sodexo Πολωνίας",
        desc: "Υλοποιεί εκπαιδευτικά προγράμματα για την ευαισθητοποίηση των ομάδων σχετικά με την αναπηρία, έχοντας λάβει το βραβείο «Disability Matters Europe».",
      },
      {
        title: "Altix",
        desc: "Δραστηριοποιείται στην τεχνολογία προσβασιμότητας. Απασχολεί άτομα με προβλήματα όρασης σε πραγματικούς επαγγελματικούς ρόλους και εκπαιδεύει εργοδότες για τη δημιουργία προσβάσιμων εργασιακών περιβαλλόντων.",
      },
      {
        title: "LOTTE Wedel",
        desc: "Υλοποιεί το πρόγραμμα «CzekoSprawni». Δημιούργησε ειδική θέση υποστήριξης ατόμων με αναπηρία και δημοσιεύει περιοδικά δεδομένα για την αύξηση της απασχόλησης.",
      },
    ],
    turkey: [
      {
        title: "Manisa Özel Eğitim Uygulama Okulu III. Kademe",
        desc: "Λειτουργεί σύστημα «döner sermaye» που επιτρέπει στο σχολείο να παράγει και να πωλεί προϊόντα των μαθητών, προσφέροντας πραγματική εμπειρία παραγωγής και εισοδήματος.",
      },
      {
        title: "ZEKİ Yaşam Merkezi",
        desc: "Το πρώτο μοντέλο προστατευόμενης εργασίας στην Τουρκία εντός οργανωμένης βιομηχανικής ζώνης στη Μανίσα. Οι εργαζόμενοι συμμετέχουν σε πραγματικές παραγωγικές διαδικασίες συνδεδεμένες με τοπικά εργοστάσια.",
      },
      {
        title: "ZEKA Sheltered Workplace",
        desc: "Συνεργατικό έργο στη βιομηχανική ζώνη Çerkezköy με προσβάσιμες εγκαταστάσεις και κριτήρια απασχόλησης για άτομα με νοητική αναπηρία.",
      },
      {
        title: "Gökkuşağı Kafe (Eskişehir)",
        desc: "Δημοτική πρωτοβουλία που παρέχει οργανωμένες ευκαιρίες εργασίας στον τομέα της εστίασης, βοηθώντας άτομα με αναπηρία να αποκτήσουν αυτοπεποίθηση και οικονομική ανεξαρτησία.",
      },
      {
        title: "Gülümseyen Kafe (Erzurum)",
        desc: "Με υποστήριξη δήμων και İŞKUR, το καφέ απασχολεί άτομα με σύνδρομο Down και αυτισμό ως προσωπικό εξυπηρέτησης, αποτελώντας πρότυπο κοινωνικής δομής.",
      },
    ],
    greece: [
      {
        title: "Ειδικά Σχολεία σε Έργα Erasmus+",
        desc: "Έργα όπως το «Our Tradition… Our Entrepreneurship!» φέρνουν τους μαθητές σε επαφή με νέες κουλτούρες, προσεγγίσεις εργασίας και διεθνή συνεργασία, ενισχύοντας την προσαρμοστικότητα και την αυτοπεποίθηση.",
      },
      {
        title: "Ανάδειξη Επαγγελματικών Δεξιοτήτων",
        desc: "Συνεχείς δράσεις μέσω σχολικών διαγωνισμών, εκθέσεων και παζαριών. Οι μαθητές δημιουργούν προϊόντα, αλληλεπιδρούν με το κοινό και προσομοιώνουν στοιχεία της αγοράς, καταρρίπτοντας στερεότυπα.",
      },
    ],
  },

  pl: {
    poland: [
      {
        title: "Warsztaty Aktywności Zawodowej (ZAZ)",
        desc: "Zapewniają zatrudnienie chronione, przygotowując pracowników do samodzielnego życia i aktywności zawodowej. Prowadzone przez samorządy lub NGO, realizują rzeczywiste działania usługowe i produkcyjne.",
      },
      {
        title: "Carrefour Polska",
        desc: "Wdraża dostosowania miejsca pracy, elastyczne godziny pracy i mentoring dla nowych pracowników z niepełnosprawnościami.",
      },
      {
        title: "Sodexo Polska",
        desc: "Realizuje programy edukacyjne zwiększające świadomość na temat niepełnosprawności w zespołach, nagrodzone „Disability Matters Europe”.",
      },
      {
        title: "Altix",
        desc: "Działa w obszarze technologii dostępności. Zatrudnia osoby niewidome i szkoli pracodawców w tworzeniu dostępnych środowisk pracy.",
      },
      {
        title: "LOTTE Wedel",
        desc: "Realizuje program „CzekoSprawni” oraz wspiera zatrudnienie osób z niepełnosprawnościami.",
      },
    ],
    turkey: [
      {
        title: "Manisa Özel Eğitim Uygulama Okulu III. Kademe",
        desc: "Prowadzi system funduszu obrotowego, umożliwiający produkcję i sprzedaż wyrobów uczniów.",
      },
      {
        title: "ZEKİ Yaşam Merkezi",
        desc: "Pierwszy model zatrudnienia chronionego w Turcji w strefie przemysłowej.",
      },
      {
        title: "ZEKA Sheltered Workplace",
        desc: "Projekt współpracy w strefie przemysłowej Çerkezköy dla osób z niepełnosprawnością intelektualną.",
      },
      {
        title: "Gökkuşağı Kafe (Eskişehir)",
        desc: "Inicjatywa miejska zapewniająca możliwości pracy w gastronomii.",
      },
      {
        title: "Gülümseyen Kafe (Erzurum)",
        desc: "Kawiarnia zatrudniająca osoby z zespołem Downa i autyzmem.",
      },
    ],
    greece: [
      {
        title: "Szkoły specjalne w projektach Erasmus+",
        desc: "Projekty międzynarodowe rozwijające kompetencje i pewność siebie uczniów.",
      },
      {
        title: "Prezentacja umiejętności zawodowych",
        desc: "Działania poprzez wystawy, konkursy i kiermasze szkolne.",
      },
    ],
  },

  tr: {
    poland: [
      {
        title: "Mesleki Aktivite Atölyeleri (ZAZ)",
        desc: "Korunaklı istihdam sağlar ve çalışanları bağımsız yaşama hazırlar.",
      },
      {
        title: "Carrefour Polonya",
        desc: "Engelli çalışanlar için iş yeri düzenlemeleri ve mentorluk sağlar.",
      },
      {
        title: "Sodexo Polonya",
        desc: "Engellilik farkındalığı için eğitim programları yürütür.",
      },
      {
        title: "Altix",
        desc: "Erişilebilirlik teknolojileri alanında faaliyet gösterir.",
      },
      {
        title: "LOTTE Wedel",
        desc: "Engelli bireylerin istihdamını destekleyen programlar yürütür.",
      },
    ],
    turkey: [
      {
        title: "Manisa Özel Eğitim Uygulama Okulu III. Kademe",
        desc: "Öğrenci ürünlerinin üretimi ve satışını sağlayan döner sermaye sistemi uygular.",
      },
      {
        title: "ZEKİ Yaşam Merkezi",
        desc: "Organize sanayi bölgesinde korunaklı iş modeli sunar.",
      },
      {
        title: "ZEKA Sheltered Workplace",
        desc: "Erişilebilir istihdam sağlayan ortak bir projedir.",
      },
      {
        title: "Gökkuşağı Kafe (Eskişehir)",
        desc: "Yiyecek hizmetlerinde çalışma fırsatı sunar.",
      },
      {
        title: "Gülümseyen Kafe (Erzurum)",
        desc: "Down sendromlu ve otizmli bireyleri istihdam eder.",
      },
    ],
    greece: [
      {
        title: "Erasmus+ Özel Okulları",
        desc: "Uluslararası projelerle öğrencilerin gelişimini destekler.",
      },
      {
        title: "Mesleki becerilerin tanıtımı",
        desc: "Sergiler ve etkinliklerle öğrencilerin çalışmalarını gösterir.",
      },
    ],
  },
};

export default goodPracticesData;
