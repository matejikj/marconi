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
  title: "TTC MARCONI | Komunikacni infrastruktura nove generace",
  description:
    "Systemova integrace a dodavky komunikacnich siti pro energetiku, telekomunikace, dopravu, verejnou spravu, obranu a bezpecnost.",
};

export const heroContent = {
  eyebrow: "TTC MARCONI s.r.o. | Na trhu od roku 1993",
  title: "Budujeme komunikacni infrastrukturu nove generace.",
  subtitle:
    "Systemova integrace a dodavky komunikacnich siti pro energetiku, telekomunikace, dopravu, verejnou spravu, obranu a bezpecnost.",
  quickPoints: [
    "Navrh architektury siti",
    "Implementace a integrace systemu",
    "Provozni dohled, monitoring a zabezpeceni",
  ],
  ctas: [
    { label: "Nase reseni", href: "#co-delame", variant: "primary" },
    { label: "Kontaktujte nas", href: "#kontakt", variant: "secondary" },
  ] satisfies CTA[],
};

export const whatWeDoContent = {
  heading: "Komunikacni technologie navrhujeme, implementujeme i provozujeme.",
  paragraphs: [
    "Navrhujeme architekturu siti, zajistujeme jejich implementaci a dlouhodoby provoz.",
    "Integrujeme technologie ruznych vyrobcu do jednoho funkcniho celku. Od navrhu az po monitoring a zabezpeceni.",
  ],
  capabilityLabels: [
    "Sitova architektura",
    "Systemova integrace",
    "Monitoring",
    "Kyberneticka bezpecnost",
  ],
};

export const infrastructureContent = {
  heading: "Infrastruktura, ktera drzi systemy v provozu.",
  intro:
    "Navrhujeme reseni s durazem na spolehlivost, bezpecnost a dlouhodobou udrzitelnost. Klicove vrstvy reseni pokryvaji navrh, provoz i dohled.",
  closing:
    "Kazda vrstva je navrzena tak, aby podporovala stabilni provoz kritickych systemu a umoznila dlouhodoby rozvoj infrastruktury.",
  steps: [
    {
      id: "ip",
      shortLabel: "01",
      title: "IP komunikacni reseni",
      description: "Navrh a integrace IP infrastruktury pro prenos provoznich a ridicich komunikaci.",
    },
    {
      id: "radio",
      shortLabel: "02",
      title: "Radiove site",
      description: "Spolehlive komunikacni vrstvy pro pokryti provozu, ridicich systemu a bezpecnostnich scenaru.",
    },
    {
      id: "monitoring",
      shortLabel: "03",
      title: "Sitovy monitoring",
      description: "Prubezne sledovani dostupnosti, vykonu a stavu klicovych prvku infrastruktury.",
    },
    {
      id: "security",
      shortLabel: "04",
      title: "Bezpecnost a ochrana dat",
      description: "Bezpecnostni opatreni a architektura s durazem na ochranu informaci a provozni kontinuitu.",
    },
    {
      id: "ops",
      shortLabel: "05",
      title: "Provozni dohled 24/7",
      description: "Dlouhodoby provozni servis a dohled nad systemy v rezimu odpovidajicim kriticke infrastrukture.",
    },
  ] satisfies InfrastructureStep[],
};

export const sectorsContent = {
  heading: "Reseni pro kritickou infrastrukturu.",
  intro:
    "Kazdy sektor ma odlisne provozni naroky. Navrh reseni prizpusobujeme bezpecnosti, dostupnosti a specifikum prostredi.",
  items: [
    {
      title: "Energetika",
      description: "Komunikacni infrastruktura pro prenosove a distribucni soustavy.",
    },
    {
      title: "Telekomunikace",
      description: "Integrace siti nove generace v IP prostredi.",
    },
    {
      title: "Doprava",
      description: "Spolehliva komunikace pro rizeni a bezpecnost provozu.",
    },
    {
      title: "Verejna sprava",
      description: "Bezpecna sitova reseni pro statni instituce.",
    },
    {
      title: "Obrana a bezpecnost",
      description: "Technologie splnujici vysoke naroky na ochranu informaci.",
    },
  ] satisfies Sector[],
};

export const experienceContent = {
  heading: "Stabilni partner vice nez 30 let.",
  body:
    "Od roku 1993 realizujeme projekty pro klicove organizace v Ceske republice i zahranici. Dlouhodobe vztahy stavime na odbornosti, odpovednosti a duvere.",
  facts: ["30+ let na trhu", "Projekty v CR, SR a na Ukrajine", "Soucast holdingu TTC"],
};

export const certificationsContent = {
  heading: "Kvalita a bezpecnost jsou zaklad.",
  body:
    "Procesy spolecnosti odpovidaji mezinarodnim standardum kvality a bezpecnosti.",
  items: ["ISO 9001", "ISO 14001", "ISO/IEC 27001", "ISO/IEC 20000-1"],
};

export const synergyContent = {
  heading: "Soucast technologickeho holdingu TTC.",
  paragraphs: [
    "Uzce spolupracujeme se spolecnosti TTC TELEKOMUNIKACE a dalsimi firmami skupiny TTC. Sdilime know-how, kapacity i technologicke zazemi.",
    "To nam umoznuje realizovat rozsahle a komplexni projekty s kontinuitou dodavky a provozni podpory.",
  ],
};

export const futureContent = {
  heading: "Infrastruktura pripravena na budoucnost.",
  paragraphs: [
    "Rozvoj komunikacnich siti je kontinualni proces. Navrhujeme reseni s ohledem na skalovatelnost, kybernetickou bezpecnost a dlouhodoby provoz.",
    "Technologie se meni. Principy spolehlivosti zustavaji.",
  ],
};

export const contactContent: ContactInfo = {
  company: "TTC MARCONI s.r.o.",
  street: "Trebohosticka 987/5",
  city: "100 00 Praha 10",
  email: "ttcm@ttc.cz",
  phone: "+420 234 051 001",
  ctaLabel: "Domluvit konzultaci",
};

