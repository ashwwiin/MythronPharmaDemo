export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Metabolic Health" | "Cellular Energy" | "Antioxidant Support" | "Reproductive Health";
  use: string;
  composition: string[];
  benefits: string[];
  description: string;
  indications: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "mythron-ova-m",
    name: "MYTHRON OVA-M",
    category: "Metabolic Health",
    use: "PCOS Management",
    composition: [
      "Myo-Inositol",
      "D-Chiro-Inositol",
      "L-Methylfolate",
      "Chromium Picolinate",
      "Melatonin",
      "Vitamin D3"
    ],
    benefits: [
      "Regulates menstrual cycle",
      "Improves insulin sensitivity",
      "Supports egg quality",
      "Reduces oxidative stress"
    ],
    description: "MYTHRON OVA-M is a comprehensive formulation specifically designed to address the complex metabolic and hormonal imbalances associated with Polycystic Ovary Syndrome (PCOS). It combines insulin-sensitizing agents with key nutrients to support reproductive health and metabolic wellness.",
    indications: [
      "PCOS symptoms",
      "Insulin resistance",
      "Irregular menstrual cycles",
      "Ovarian dysfunction"
    ],
    image: "/products/mythron-ova-m.webp"
  },
  {
    id: "2",
    slug: "cellular-boost",
    name: "Cellular Boost",
    category: "Cellular Energy",
    use: "Mitochondrial Support",
    composition: [
      "Coenzyme Q10",
      "Alpha Lipoic Acid",
      "Resveratrol",
      "Acetyl-L-Carnitine"
    ],
    benefits: [
      "Enhances ATP production",
      "Protects against mitochondrial damage",
      "Improves physical performance",
      "Supports cognitive function"
    ],
    description: "A premium blend of antioxidants and mitochondrial cofactors designed to optimize cellular energy production and protect cells from age-related decline.",
    indications: [
      "Fatigue",
      "Muscle weakness",
      "Age-related cognitive decline",
      "General vitality"
    ],
    image: "/products/cellular-boost.webp"
  },
  {
    id: "3",
    slug: "antiox-plus",
    name: "AntiOx Plus",
    category: "Antioxidant Support",
    use: "Systemic Antioxidant",
    composition: [
      "Glutathione",
      "Vitamin C",
      "Vitamin E",
      "Selenium",
      "Zinc"
    ],
    benefits: [
      "Neutralizes free radicals",
      "Boosts immune system",
      "Promotes skin health",
      "Detoxification support"
    ],
    description: "AntiOx Plus provides a synergistic combination of the body's most powerful antioxidants to maintain redox balance and protect tissues from systemic oxidative stress.",
    indications: [
      "Oxidative stress markers",
      "Weak immune response",
      "Environmental toxin exposure",
      "Skin aging"
    ],
    image: "/products/antiox-plus.webp"
  },
  {
    id: "4",
    slug: "repro-vital",
    name: "Repro Vital",
    category: "Reproductive Health",
    use: "Fertility Support",
    composition: [
      "L-Arginine",
      "Zinc",
      "Folic Acid",
      "Vitamin B12",
      "L-Carnitine"
    ],
    benefits: [
      "Supports hormonal balance",
      "Improves reproductive organ blood flow",
      "Enhances gamete quality",
      "Optimizes nutritional status for conception"
    ],
    description: "Formulated with evidence-based nutrients to support both male and female reproductive systems, ensuring optimal conditions for conception and healthy pregnancy.",
    indications: [
      "Pre-conception preparation",
      "Nutritional deficiencies impacting fertility",
      "Low sperm/egg quality",
      "Hormonal irregularities"
    ],
    image: "/products/repro-vital.webp"
  }
];
