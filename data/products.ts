export type Language = 'si' | 'en';
export type Bilingual = { si: string; en: string };
export type Product = {
  slug: 'grain-drink' | 'kollu-kenda' | 'grain-aggala';
  number: string;
  name: Bilingual;
  category: Bilingual;
  subtitle: Bilingual;
  description: Bilingual;
  note: Bilingual;
  badge: Bilingual;
  color: string;
  colorSoft: string;
  colorText: string;
  picture: string;
  originalPhoto: string;
  backPhoto: string;
  illustration: string;
  grams: number;
  priceLkr: number | null;
  ingredients: Bilingual[];
  preparation: { title: Bilingual; description: Bilingual }[];
  serving: Bilingual;
  faq: { question: Bilingual; answer: Bilingual }[];
};

// Information is transcribed conservatively from the supplied packaging photos.
// Cooking steps are illustrative guidance only where exact pack instructions aren't clearly readable.
// Owner must verify text, ingredients, preparation details, allergen statements and prices pre-launch.
export const products: Product[] = [
  {
    slug: 'grain-drink', number: '01',
    name: { si: 'ධාන්‍යමය පෝෂදායී පානය', en: 'Wholesome Grain Drink' },
    category: { si: 'අපේ ධාන්‍ය රසය', en: 'Everyday nourishment' },
    subtitle: { si: 'උණුසුම් කෝප්පයක අපේකම', en: 'A comforting cup of tradition' },
    description: { si: 'හුරුපුරුදු දේශීය ධාන්‍යවල රසය උණුසුම් පානයක් විදිහට. ගෙදර දවසක් ලස්සන කරන සරල පුරුද්දක්.', en: 'A cozy blend inspired by local grains, made for those slower, more meaningful everyday moments.' },
    note: { si: 'මිශ්‍රණය සකස් කරගන්නා විට පැකට්ටුවේ මුද්‍රිත උපදෙස් අනිවාර්යයෙන් අනුගමනය කරන්න.', en: 'Always follow the preparation and food-safety directions printed on the pack.' },
    badge: { si: 'උණුසුම් පානය', en: 'Warm & comforting' },
    color: '#805034', colorSoft: '#f1e6d9', colorText: '#5f351e',
    picture: '/images/products/grain-drink.webp', originalPhoto: '/images/products/grain-drink-original.webp', backPhoto: '/images/products/grain-drink-back.webp',
    illustration: '/illustrations/cup.svg', grams: 200, priceLkr: 330,
    ingredients: [
      { si: 'මුං ඇට', en: 'Mung beans' },
      { si: 'කඩල', en: 'Chickpeas' },
      { si: 'හාල / සහල්', en: 'Rice' },
      { si: 'තල', en: 'Sesame' },
      { si: 'හාල් පෙති', en: 'Rice flakes' }
    ],
    preparation: [
      { title: { si: 'අවශ්‍ය ප්‍රමාණය ගන්න', en: 'Measure your mix' }, description: { si: 'පැකට්ටුවේ සඳහන් ප්‍රමාණයට අනුව ධාන්‍ය මිශ්‍රණය ගන්න.', en: 'Measure the grain blend according to the instructions on your pack.' } },
      { title: { si: 'දියර සමඟ සකස් කරන්න', en: 'Combine and cook' }, description: { si: 'පැකට්ටුවේ සඳහන් ජල ප්‍රමාණය හා ක්‍රමය අනුගමනය කරමින් හොඳින් පිසගන්න.', en: 'Cook with the indicated amount of liquid, following the pack directions.' } },
      { title: { si: 'රස අනුව අවසන් කරන්න', en: 'Finish to your taste' }, description: { si: 'පැකට්ටුවේ උපදෙස් අනුව අවශ්‍ය රස එකතු කර උණුසුමින් පිළිගන්වන්න.', en: 'Finish as directed, then serve warm and enjoy.' } },
    ],
    serving: { si: 'උදෑසනට හෝ සවසට උණුසුම්ව පිළිගන්වන්න.', en: 'Best enjoyed warm on a gentle morning or evening.' },
    faq: [
      { question: { si: 'මේක පානයක්ද?', en: 'Is this a drink?' }, answer: { si: 'ඔව්. පැකට්ටුවේ උපදෙස් අනුව සකස් කළ හැකි ධාන්‍ය පානයක්.', en: 'Yes, a grain-based drink mix to prepare following pack directions.' } },
      { question: { si: 'බර කීයද?', en: 'What is the net weight?' }, answer: { si: 'පැකට්ටුවේ සඳහන් ශුද්ධ බර 200g.', en: 'The pack is labeled 200g net weight.' } },
    ]
  },
  {
    slug: 'kollu-kenda', number: '02',
    name: { si: 'කොල්ලු කැඳ', en: 'Kollu Kenda' },
    category: { si: 'දේශීය කැඳ රසය', en: 'Heritage porridge' },
    subtitle: { si: 'අපේ ගෙදර හුරුපුරුදු රසය', en: 'An old favorite, beautifully simple' },
    description: { si: 'කොල්ලු ඇට සහ රතු හාල් යොදා සකස් කළ, අපේ ගෙවල්වලට හුරුපුරුදු උණුසුම් කැඳ රසයක්.', en: 'A warming traditional porridge blend with horse gram and red rice, inspired by Sri Lankan home kitchens.' },
    note: { si: 'පැකට්ටුවේ සඳහන් සැකසීමේ උපදෙස් අනුගමනය කරන්න. ව්‍යාපාරය විසින් නිශ්චිත ක්‍රමය තහවුරු කළ පසු මෙය යාවත්කාලීන කරන්න.', en: 'Follow the pack directions. Update this guide after the owner verifies the exact method.' },
    badge: { si: 'සම්ප්‍රදායික කැඳ', en: 'Traditional favorite' },
    color: '#396a4c', colorSoft: '#e5eee2', colorText: '#194c31',
    picture: '/images/products/kollu-kenda.webp', originalPhoto: '/images/products/kollu-kenda-original.webp', backPhoto: '/images/products/kollu-kenda-back.webp',
    illustration: '/illustrations/bowl.svg', grams: 150, priceLkr: 240,
    ingredients: [
      { si: 'කොල්ලු ඇට', en: 'Horse gram' },
      { si: 'රතු හාල්', en: 'Red rice' }
    ],
    preparation: [
      { title: { si: 'මිශ්‍රණය මැනගන්න', en: 'Measure the mix' }, description: { si: 'එක් අයෙකුට මේස හැඳි 1ක් ලෙස ඇසුරුමේ දැක්වෙන ප්‍රමාණයට මිශ්‍රණය මැනගන්න.', en: 'Measure approximately one tablespoon per person, as indicated on the photographed packet.' } },
      { title: { si: 'දියර එකතු කර පිසගන්න', en: 'Add liquid and cook' }, description: { si: 'ඉඟුරු පෙත්තක් සහ සුදුලූනු බික් 1ක් සිහින්ව කපා එකතු කර, ඇසුරුමේ උපදෙස් අනුව වතුර සමඟ හොඳින් පිසගන්න.', en: 'Add sliced ginger and a garlic clove, then cook thoroughly with water following the package directions.' } },
      { title: { si: 'උණුසුමින් පිළිගන්වන්න', en: 'Serve warm' }, description: { si: 'ඇසුරුමේ සඳහන් පරිදි පොල් කිරි හා රස අනුව ලුණු එකතු කර උණුසුමින් පිළිගන්වන්න.', en: 'Finish with coconut milk as shown on the packet, season to taste and serve warm.' } },
    ],
    serving: { si: 'කොල්ලු කැඳ උණුසුමින් පිළිගන්වන්න.', en: 'Enjoy as a warming bowl of kenda.' },
    faq: [
      { question: { si: 'මෙහි ප්‍රධාන අමුද්‍රව්‍ය මොනවද?', en: 'What are the key ingredients?' }, answer: { si: 'ඡායාරූපයේ ලේබලයට අනුව කොල්ලු ඇට සහ රතු හාල්.', en: 'The photographed label lists horse gram and red rice.' } },
      { question: { si: 'බර කීයද?', en: 'What is the net weight?' }, answer: { si: '150g.', en: '150g.' } },
    ]
  },
  {
    slug: 'grain-aggala', number: '03',
    name: { si: 'පෝෂණීය ධාන්‍යමය අග්ගලා', en: 'Grain Aggala Mix' },
    category: { si: 'සාම්ප්‍රදායික රසකැවිල්ල', en: 'Traditional sweet treat' },
    subtitle: { si: 'පරණ රසයට අලුත් ආදරයක්', en: 'A familiar treat, reimagined' },
    description: { si: 'සමපෝෂ වගේ ලා දුඹුරු පැහැති ධාන්‍ය කුඩු මිශ්‍රණයක්. ඔබ කැමති අයුරින් අග්ගලා සකස් කරගැනීමට.', en: 'A light tan, fine grain-based powder mix, ready to be turned into delicious traditional aggala bites.' },
    note: { si: 'මෙය සූදානම් අග්ගලා බෝල නොව ධාන්‍ය කුඩු මිශ්‍රණයකි. සැකසීමේදී ඇසුරුමේ මුද්‍රිත උපදෙස් අනුගමනය කරන්න.', en: 'This pouch contains the powder mix, not ready-made balls. Follow the preparation printed on the packaging.' },
    badge: { si: 'ලා දුඹුරු කුඩු මිශ්‍රණය', en: 'Fine grain powder mix' },
    color: '#bc6e45', colorSoft: '#f9eadd', colorText: '#8e452c',
    picture: '/images/products/grain-aggala.webp', originalPhoto: '/images/products/grain-aggala-original.webp', backPhoto: '/images/products/grain-aggala-back.webp',
    illustration: '/illustrations/aggala.svg', grams: 200, priceLkr: null,
    ingredients: [
      { si: 'මුං ඇට', en: 'Mung beans' },
      { si: 'බඩ ඉරිඟු', en: 'Maize' },
      { si: 'කඩල', en: 'Chickpeas' },
      { si: 'කව්පි', en: 'Cowpeas' },
      { si: 'තල', en: 'Sesame' },
      { si: 'රටකජු', en: 'Peanuts' }
    ],
    preparation: [
      { title: { si: 'කුඩු මිශ්‍රණය බඳුනකට ගන්න', en: 'Spoon into a bowl' }, description: { si: 'පැකට්ටුවෙන් ඔබට අවශ්‍ය ධාන්‍ය කුඩු ප්‍රමාණය වෙනම බඳුනකට ගන්න.', en: 'Add your desired amount of the fine grain powder to a mixing bowl.' } },
      { title: { si: 'පැකට් උපදෙස් අනුව මිශ්‍ර කරන්න', en: 'Mix as directed' }, description: { si: 'අග්ගලා සකස් කිරීමට පැකට්ටුවේ සඳහන් අමුද්‍රව්‍ය සහ ප්‍රමාණ යොදා හොඳින් මිශ්‍ර කරන්න.', en: 'Combine with the ingredients and measurements recommended on the packet.' } },
      { title: { si: 'අග්ගලා හැඩයට සකස් කරන්න', en: 'Shape and enjoy' }, description: { si: 'මිශ්‍රණය අග්ගලා බෝල ලෙස සකස් කර රසවිඳින්න.', en: 'Form into traditional aggala balls and enjoy.' } },
    ],
    serving: { si: 'තේ වෙලාවට සකස් කරගත් අග්ගලා රසවිඳින්න.', en: 'Make fresh aggala bites for tea time.' },
    faq: [
      { question: { si: 'පැකට්ටුවේ බෝලද තියෙන්නේ?', en: 'Are these ready-made balls?' }, answer: { si: 'නැහැ. පැකට්ටුවේ ඇත්තේ සමපෝෂ වගේ ලා දුඹුරු පැහැති ධාන්‍ය කුඩු මිශ්‍රණයක්.', en: 'No. The packet contains a light-brown grain powder mix.' } },
      { question: { si: 'මිල කීයද?', en: 'What is the price?' }, answer: { si: 'මිල තහවුරු කර නොමැති නිසා WhatsApp හරහා විමසන්න.', en: 'The price has not yet been confirmed. Please ask via WhatsApp.' } },
    ]
  }
];

export function getProduct(slug: string) { return products.find(p => p.slug === slug); }
export function t(x: Bilingual, lang: Language) { return x[lang]; }
