export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type InfrastructureStep = {
  id: string;
  title: string;
  description: string;
  shortLabel: string;
};

export type Sector = {
  title: string;
  description: string;
};

export type ContactInfo = {
  company: string;
  street: string;
  city: string;
  email: string;
  phone: string;
  ctaLabel: string;
};

export const homepageMeta = {
  title: "TTC MARCONI | Komunikační infrastruktura nové generace",
  description:
    "Systémová integrace a dodávky komunikačních sítí pro energetiku, telekomunikace, dopravu, veřejnou správu, obranu a bezpečnost.",
};

export const heroContent = {
  eyebrow: "TTC MARCONI s.r.o. | Na trhu od roku 1993",
  title: "Budujeme komunikační infrastrukturu nové generace.",
  subtitle:
    "Systémová integrace a dodávky komunikačních sítí pro energetiku, telekomunikace, dopravu, veřejnou správu, obranu a bezpečnost.",
  quickPoints: [
    "Návrh architektury sítí",
    "Implementace a integrace systémů",
    "Provozní dohled, monitoring a zabezpečení",
  ],
  ctas: [
    { label: "Naše řešení", href: "#co-delame", variant: "primary" },
    { label: "Kontaktujte nás", href: "#kontakt", variant: "secondary" },
  ] satisfies CTA[],
};

export const whatWeDoContent = {
  heading: "Komunikační technologie navrhujeme, implementujeme i provozujeme.",
  paragraphs: [
    "Navrhujeme architekturu sítí, zajišťujeme jejich implementaci a dlouhodobý provoz.",
    "Integrujeme technologie různých výrobců do jednoho funkčního celku. Od návrhu až po monitoring a zabezpečení.",
  ],
  capabilityLabels: [
    "Síťová architektura",
    "Systémová integrace",
    "Monitoring",
    "Kybernetická bezpečnost",
  ],
};

export const infrastructureContent = {
  heading: "Infrastruktura, která drží systémy v provozu.",
  intro:
    "Navrhujeme řešení s důrazem na spolehlivost, bezpečnost a dlouhodobou udržitelnost. Klíčové vrstvy řešení pokrývají návrh, provoz i dohled.",
  closing:
    "Každá vrstva je navržena tak, aby podporovala stabilní provoz kritických systémů a umožnila dlouhodobý rozvoj infrastruktury.",
  steps: [
    {
      id: "ip",
      shortLabel: "01",
      title: "IP komunikační řešení",
      description: "Návrh a integrace IP infrastruktury pro přenos provozních a řídicích komunikací.",
    },
    {
      id: "radio",
      shortLabel: "02",
      title: "Rádiové sítě",
      description: "Spolehlivé komunikační vrstvy pro pokrytí provozu, řídicích systémů a bezpečnostních scénářů.",
    },
    {
      id: "monitoring",
      shortLabel: "03",
      title: "Síťový monitoring",
      description: "Průběžné sledování dostupnosti, výkonu a stavu klíčových prvků infrastruktury.",
    },
    {
      id: "security",
      shortLabel: "04",
      title: "Bezpečnost a ochrana dat",
      description: "Bezpečnostní opatření a architektura s důrazem na ochranu informací a provozní kontinuitu.",
    },
    {
      id: "ops",
      shortLabel: "05",
      title: "Provozní dohled 24/7",
      description: "Dlouhodobý provozní servis a dohled nad systémy v režimu odpovídajícím kritické infrastruktuře.",
    },
  ] satisfies InfrastructureStep[],
};

export const sectorsContent = {
  heading: "Řešení pro kritickou infrastrukturu.",
  intro:
    "Každý sektor má odlišné provozní nároky. Návrh řešení přizpůsobujeme bezpečnosti, dostupnosti a specifikům prostředí.",
  items: [
    {
      title: "Energetika",
      description: "Komunikační infrastruktura pro přenosové a distribuční soustavy.",
    },
    {
      title: "Telekomunikace",
      description: "Integrace sítí nové generace v IP prostředí.",
    },
    {
      title: "Doprava",
      description: "Spolehlivá komunikace pro řízení a bezpečnost provozu.",
    },
    {
      title: "Veřejná správa",
      description: "Bezpečná síťová řešení pro státní instituce.",
    },
    {
      title: "Obrana a bezpečnost",
      description: "Technologie splňující vysoké nároky na ochranu informací.",
    },
  ] satisfies Sector[],
};

export const experienceContent = {
  heading: "Stabilní partner více než 30 let.",
  body:
    "Od roku 1993 realizujeme projekty pro klíčové organizace v České republice i zahraničí. Dlouhodobé vztahy stavíme na odbornosti, odpovědnosti a důvěře.",
  facts: ["30+ let na trhu", "Projekty v ČR, SR a na Ukrajině", "Součást holdingu TTC"],
};

export const certificationsContent = {
  heading: "Kvalita a bezpečnost jsou základ.",
  body:
    "Procesy společnosti odpovídají mezinárodním standardům kvality a bezpečnosti.",
  items: ["ISO 9001", "ISO 14001", "ISO/IEC 27001", "ISO/IEC 20000-1"],
};

export const synergyContent = {
  heading: "Součást technologického holdingu TTC.",
  paragraphs: [
    "Úzce spolupracujeme se společností TTC TELEKOMUNIKACE a dalšími firmami skupiny TTC. Sdílíme know-how, kapacity i technologické zázemí.",
    "To nám umožňuje realizovat rozsáhlé a komplexní projekty s kontinuitou dodávky a provozní podpory.",
  ],
};

export const futureContent = {
  heading: "Infrastruktura připravená na budoucnost.",
  paragraphs: [
    "Rozvoj komunikačních sítí je kontinuální proces. Navrhujeme řešení s ohledem na škálovatelnost, kybernetickou bezpečnost a dlouhodobý provoz.",
    "Technologie se mění. Principy spolehlivosti zůstávají.",
  ],
};

export const contactContent: ContactInfo = {
  company: "TTC MARCONI s.r.o.",
  street: "Třebohostická 987/5",
  city: "100 00 Praha 10",
  email: "ttcm@ttc.cz",
  phone: "+420 234 051 001",
  ctaLabel: "Domluvit konzultaci",
};
