const proposalsData = {
  en: [
    {
      icon: "fa-solid fa-users",
      title: "Family Entrepreneurship Support Council",
      text: "Establish a local council involving the family, an entrepreneurship consultant, a social worker, and potentially a market mentor.",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Train Parents in Entrepreneurial Mindsets",
      text: "Municipalities can offer seminars for parents on how to support without overprotecting, assisting with risk-taking, and basic business knowledge.",
    },
    {
      icon: "fa-solid fa-handshake-angle",
      title: "Encourage Family Micro-Ventures",
      text: "Provide municipal support for family-run social micro-businesses and small-scale cooperative models.",
    },
    {
      icon: "fa-solid fa-star",
      title: "Annual Disability Entrepreneurship Festival",
      text: "A regional exhibition to provide public recognition for products/services, foster networking, boost self-confidence, and challenge stereotypes.",
    },
    {
      icon: "fa-solid fa-building-user",
      title: "Municipal Business Spaces",
      text: "Allocate underutilized municipal properties to disability-owned enterprises to act as business incubators without the burden of rent or utility costs.",
    },
  ],

  ελ: [
    {
      icon: "fa-solid fa-users",
      title: "Συμβούλιο Υποστήριξης Οικογενειακής Επιχειρηματικότητας",
      text: "Δημιουργία τοπικού συμβουλίου με τη συμμετοχή της οικογένειας, συμβούλου επιχειρηματικότητας, κοινωνικού λειτουργού και ενδεχομένως μέντορα αγοράς.",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Εκπαίδευση Γονέων σε Επιχειρηματική Νοοτροπία",
      text: "Οι δήμοι μπορούν να προσφέρουν σεμινάρια για γονείς σχετικά με το πώς να υποστηρίζουν χωρίς υπερπροστασία, να ενθαρρύνουν την ανάληψη ρίσκου και να μεταδίδουν βασικές επιχειρηματικές γνώσεις.",
    },
    {
      icon: "fa-solid fa-handshake-angle",
      title: "Ενίσχυση Οικογενειακών Μικρο-Επιχειρήσεων",
      text: "Παροχή δημοτικής υποστήριξης σε οικογενειακές κοινωνικές μικροεπιχειρήσεις και μικρής κλίμακας συνεργατικά σχήματα.",
    },
    {
      icon: "fa-solid fa-star",
      title: "Ετήσιο Φεστιβάλ Επιχειρηματικότητας Αναπηρίας",
      text: "Περιφερειακή έκθεση για την αναγνώριση προϊόντων/υπηρεσιών, την ενίσχυση της δικτύωσης, της αυτοπεποίθησης και την καταπολέμηση στερεοτύπων.",
    },
    {
      icon: "fa-solid fa-building-user",
      title: "Δημοτικοί Επιχειρηματικοί Χώροι",
      text: "Διάθεση ανεκμετάλλευτων δημοτικών χώρων σε επιχειρήσεις ατόμων με αναπηρία, λειτουργώντας ως θερμοκοιτίδες χωρίς επιβάρυνση ενοικίου ή λειτουργικών εξόδων.",
    },
  ],

  pl: [
    {
      icon: "fa-solid fa-users",
      title: "Rada Wsparcia Przedsiębiorczości Rodzinnej",
      text: "Utworzenie lokalnej rady z udziałem rodziny, doradcy przedsiębiorczości, pracownika socjalnego oraz mentora biznesowego.",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Szkolenie rodziców w zakresie przedsiębiorczości",
      text: "Samorządy mogą organizować szkolenia dla rodziców, jak wspierać bez nadopiekuńczości, zachęcać do podejmowania ryzyka i przekazywać podstawową wiedzę biznesową.",
    },
    {
      icon: "fa-solid fa-handshake-angle",
      title: "Wsparcie rodzinnych mikroprzedsiębiorstw",
      text: "Zapewnienie wsparcia dla rodzinnych mikrofirm społecznych i małych modeli spółdzielczych.",
    },
    {
      icon: "fa-solid fa-star",
      title:
        "Coroczny festiwal przedsiębiorczości osób z niepełnosprawnościami",
      text: "Regionalne wydarzenie promujące produkty i usługi, rozwijające sieci kontaktów, pewność siebie oraz przełamujące stereotypy.",
    },
    {
      icon: "fa-solid fa-building-user",
      title: "Miejskie przestrzenie biznesowe",
      text: "Udostępnienie niewykorzystanych nieruchomości miejskich dla przedsiębiorstw prowadzonych przez osoby z niepełnosprawnościami jako inkubatorów biznesu bez kosztów czynszu i mediów.",
    },
  ],

  tr: [
    {
      icon: "fa-solid fa-users",
      title: "Aile Girişimciliği Destek Konseyi",
      text: "Aile, girişimcilik danışmanı, sosyal hizmet uzmanı ve gerekirse bir iş mentörünü içeren yerel bir konsey kurulması.",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Ebeveynlere Girişimcilik Eğitimi",
      text: "Belediyeler, ebeveynlere aşırı korumacı olmadan destek verme, risk alma ve temel iş bilgileri konularında eğitimler sunabilir.",
    },
    {
      icon: "fa-solid fa-handshake-angle",
      title: "Aile Mikro Girişimlerinin Teşviki",
      text: "Aile temelli sosyal mikro işletmelere ve küçük ölçekli kooperatif modellere belediye desteği sağlanması.",
    },
    {
      icon: "fa-solid fa-star",
      title: "Yıllık Engelli Girişimcilik Festivali",
      text: "Ürün ve hizmetlerin tanıtıldığı, ağ kurmanın desteklendiği, özgüvenin artırıldığı ve önyargıların kırıldığı bölgesel bir etkinlik.",
    },
    {
      icon: "fa-solid fa-building-user",
      title: "Belediye İş Alanları",
      text: "Kullanılmayan belediye alanlarının engelli bireylere ait işletmelere tahsis edilerek kira ve gider yükü olmadan iş geliştirme alanı sağlanması.",
    },
  ],
};

export default proposalsData;
