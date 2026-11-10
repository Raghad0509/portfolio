// Edit these URLs to point each project card to its own repository.
const PROJECT_GITHUB_LINKS = [
  [
    { label: "ASP.NET Core MVC", url: "https://github.com/Raghad0509/KnowledgeLibrary-AspNetCore-MVC-" },
    { label: "ADO.NET", url: "https://github.com/Raghad0509/KnowledgeLibrary-ADONET" }
  ],
  [{ url: "https://github.com/Raghad0509/MathQuest" }],
  [{ url: "https://github.com/Raghad0509/SmartStudy" }]
];

history.scrollRestoration = "manual";
if (location.hash) history.replaceState(null, "", location.pathname + location.search);
window.scrollTo(0, 0);

const translations = {
  en: {
    documentTitle: "Raghad Alharbi | Software Engineer",
    skipLink: "Skip to content",
    navLabel: "Main navigation",
    brandLabel: "Raghad Alharbi, home",
    languageToggleLabel: "Switch language to Arabic",
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navEducation: "Education",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "Software Engineer",
    heroName: "Raghad Alharbi",
    heroTitle: "Building thoughtful, reliable software.",
    bio: "Software Engineering graduate from the University of Hafr Al-Batin with hands-on experience in web development and database design. I build web applications using C#, ASP.NET Core, SQL Server, and Django, and I’m always eager to learn and expand my technical expertise.",
    downloadCv: "Download CV",
    aboutEyebrow: "A little about me",
    aboutTitle: "About & Skills",
    skillGroups: [
      { title: "Backend & Databases", skills: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "ADO.NET", "Database Design", "SQL", "CRUD"] },
      { title: "Web", skills: ["HTML/CSS", "JavaScript", "Django"] },
      { title: "Tools", skills: ["Microsoft Office"] }
    ],
    softSkillsTitle: "Soft Skills",
    softSkills: ["Problem Solving", "Analytical Thinking", "Teamwork", "Communication", "Time Management", "Adaptability", "Attention to Detail"],
    experienceEyebrow: "Professional journey",
    experienceTitle: "Experience",
    experienceRole: "Web Development Trainee",
    experienceOrganization: "King Fahad Medical City (KFMC)",
    experienceDate: "06/2025 – 12/2025",
    experienceDetails: [
      "Developed and tested web application components using C#, ASP.NET Core, and MVC.",
      "Designed and managed relational databases in SQL Server using ADO.NET and Entity Framework."
    ],
    educationEyebrow: "Academic background",
    educationTitle: "Education",
    degree: "Bachelor of Software Engineering",
    university: "University of Hafr Al-Batin",
    educationDate: "2022 – 2026",
    gpaLabel: "GPA",
    projectsEyebrow: "Selected work",
    projectsTitle: "Projects",
    projects: [
      {
        title: "Library Management System",
        description: "A web-based system to manage library data with CRUD operations, comparing Entity Framework and ADO.NET approaches.",
        technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "ADO.NET"]
      },
      {
        title: "MathQuest, 2D Educational Game for Children",
        description: "A mobile game combining math learning with gameplay through levels, rewards, and progress tracking.",
        technologies: ["React Native", "Expo", "Django REST Framework", "SQLite"]
      },
      {
        title: "SmartStudy",
        description: "A local MCP server for organizing study tasks and notes, exposing Tools, Resources, and Prompts, built with FastMCP and SQLite for use with Claude Desktop.",
        technologies: ["Python", "FastMCP", "SQLite", "MCP"]
      }
    ],
    githubButton: "View on GitHub",
    githubButtonLabel: "View project on GitHub",
    contactEyebrow: "Let’s connect",
    contactTitle: "Contact",
    contactIntro: "I’d be glad to hear from you.",
    contactLabels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location"
    },
    location: "Saudi Arabia",
    footerName: "Raghad Alharbi",
    footerNote: "Software Engineer · Saudi Arabia"
  },
  ar: {
    documentTitle: "رغد الحربي | مهندسة برمجيات",
    skipLink: "انتقل إلى المحتوى",
    navLabel: "التنقل الرئيسي",
    brandLabel: "رغد الحربي، الصفحة الرئيسية",
    languageToggleLabel: "Switch language to English",
    navHome: "الرئيسية",
    navAbout: "نبذة عني",
    navExperience: "الخبرة",
    navEducation: "التعليم",
    navProjects: "المشاريع",
    navContact: "التواصل",
    heroEyebrow: "مهندسة برمجيات",
    heroName: "رغد الحربي",
    heroTitle: "أبني برمجيات موثوقة بعناية.",
    bio: "خريجة هندسة برمجيات من جامعة حفر الباطن، لديّ خبرة عملية في تطوير الويب وتصميم قواعد البيانات. أبني تطبيقات ويب باستخدام C# و ASP.NET Core و SQL Server و Django، وأسعى دائمًا لتطوير مهاراتي وتوسيع خبرتي التقنية.",
    downloadCv: "تحميل السيرة الذاتية",
    aboutEyebrow: "نبذة مختصرة",
    aboutTitle: "نبذة عني والمهارات",
    skillGroups: [
      { title: "تطوير الخلفية وقواعد البيانات", skills: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "ADO.NET", "تصميم قواعد البيانات", "SQL", "CRUD"] },
      { title: "تطوير الويب", skills: ["HTML/CSS", "JavaScript", "Django"] },
      { title: "الأدوات", skills: ["Microsoft Office"] }
    ],
    softSkillsTitle: "المهارات الشخصية",
    softSkills: ["حل المشكلات", "التفكير التحليلي", "العمل الجماعي", "التواصل", "إدارة الوقت", "القدرة على التكيف", "الاهتمام بالتفاصيل"],
    experienceEyebrow: "المسيرة المهنية",
    experienceTitle: "الخبرة",
    experienceRole: "متدربة في تطوير الويب",
    experienceOrganization: "مدينة الملك فهد الطبية (KFMC)",
    experienceDate: "06/2025 – 12/2025",
    experienceDetails: [
      "تطوير واختبار مكونات تطبيقات الويب باستخدام C# و ASP.NET Core و MVC.",
      "تصميم وإدارة قواعد البيانات العلائقية في SQL Server باستخدام ADO.NET و Entity Framework."
    ],
    educationEyebrow: "الخلفية الأكاديمية",
    educationTitle: "التعليم",
    degree: "بكالوريوس هندسة البرمجيات",
    university: "جامعة حفر الباطن",
    educationDate: "2022 – 2026",
    gpaLabel: "المعدل",
    projectsEyebrow: "أعمال مختارة",
    projectsTitle: "المشاريع",
    projects: [
      {
        title: "نظام إدارة المكتبة",
        description: "نظام ويب لإدارة بيانات المكتبة وتنفيذ عمليات CRUD، مع مقارنة أسلوبي Entity Framework و ADO.NET.",
        technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework", "ADO.NET"]
      },
      {
        title: "ماث كويست",
        description: "لعبة للهواتف تجمع بين تعلم الرياضيات واللعب من خلال المستويات والمكافآت وتتبع التقدم.",
        technologies: ["React Native", "Expo", "Django REST Framework", "SQLite"]
      },
      {
        title: "سمارت ستدي",
        description: "خادم MCP محلي لتنظيم مهام ومذكرات الدراسة، يوفر أدوات وموارد وقوالب أوامر، مبني باستخدام FastMCP و SQLite للعمل مع Claude Desktop.",
        technologies: ["Python", "FastMCP", "SQLite", "MCP"]
      }
    ],
    githubButton: "عرض على GitHub",
    githubButtonLabel: "عرض المشروع على GitHub",
    contactEyebrow: "لنتواصل",
    contactTitle: "التواصل",
    contactIntro: "يسعدني التواصل معكم.",
    contactLabels: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      linkedin: "لينكدإن",
      github: "GitHub",
      location: "الموقع"
    },
    location: "المملكة العربية السعودية",
    footerName: "رغد الحربي",
    footerNote: "مهندسة برمجيات · المملكة العربية السعودية"
  }
};

const contactItems = [
  { key: "email", value: "Raghad.Alharbii@outlook.com", href: "mailto:Raghad.Alharbii@outlook.com", icon: "mail" },
  { key: "phone", value: "+966 50 982 9400", href: "tel:+966509829400", icon: "phone", ltr: true },
  { key: "linkedin", value: "linkedin.com/in/raghad-al-harbi-27aa84348", href: "https://linkedin.com/in/raghad-al-harbi-27aa84348", icon: "linkedin" },
  { key: "github", value: "github.com/Raghad0509", href: "https://github.com/Raghad0509", icon: "github" },
  { key: "location", valueKey: "location", icon: "location" }
];

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeIcon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `#icon-${name}`);
  svg.append(use);
  return svg;
}

function renderSkills(language) {
  const content = translations[language];
  const technicalSkills = document.getElementById("technical-skills");
  technicalSkills.replaceChildren();

  content.skillGroups.forEach((group) => {
    const section = makeElement("section", "skill-group");
    section.append(makeElement("h3", "", group.title));
    const list = makeElement("ul", "skill-list");
    group.skills.forEach((skill) => list.append(makeElement("li", "", skill)));
    section.append(list);
    technicalSkills.append(section);
  });

  const softSkills = document.getElementById("soft-skills");
  softSkills.replaceChildren();
  content.softSkills.forEach((skill) => softSkills.append(makeElement("li", "", skill)));
}

function renderExperience(language) {
  const list = document.getElementById("experience-details");
  list.replaceChildren();
  translations[language].experienceDetails.forEach((detail) => {
    list.append(makeElement("li", "", detail));
  });
}

function renderProjects(language) {
  const content = translations[language];
  const grid = document.getElementById("project-grid");
  grid.replaceChildren();

  content.projects.forEach((project, index) => {
    const card = makeElement("article", "project-card");
    card.append(makeElement("h3", "", project.title));
    card.append(makeElement("p", "", project.description));

    const technologies = makeElement("ul", "project-tech");
    project.technologies.forEach((technology) => {
      technologies.append(makeElement("li", "", technology));
    });
    card.append(technologies);

    const projectLinks = PROJECT_GITHUB_LINKS[index] || [];
    projectLinks.forEach((projectLink) => {
      const link = makeElement("a", "button button-outline");
      link.href = projectLink.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `${content.githubButtonLabel}: ${project.title}${projectLink.label ? ` — ${projectLink.label}` : ""}`);
      link.append(makeIcon("github"), document.createTextNode(projectLink.label || content.githubButton));
      card.append(link);
    });
    grid.append(card);
  });
}

function renderContact(language) {
  const content = translations[language];
  const list = document.getElementById("contact-list");
  list.replaceChildren();

  contactItems.forEach((item) => {
    const entry = item.href ? makeElement("a", "contact-item") : makeElement("div", "contact-item");
    if (item.href) {
      entry.href = item.href;
      if (item.href.startsWith("https://")) {
        entry.target = "_blank";
        entry.rel = "noopener noreferrer";
      }
    }

    const icon = makeElement("span", "contact-icon");
    icon.append(makeIcon(item.icon));
    const text = makeElement("span", "contact-item-text");
    text.append(makeElement("span", "contact-label", content.contactLabels[item.key]));
    const value = makeElement("span", "contact-value", item.valueKey ? content[item.valueKey] : item.value);
    if (item.ltr) {
      value.dir = "ltr";
      value.lang = "en";
    }
    text.append(value);
    entry.append(icon, text);
    list.append(entry);
  });
}

function setLanguage(language) {
  const content = translations[language];
  if (!content) return;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.lang = language;
  document.body.dir = language === "ar" ? "rtl" : "ltr";
  document.title = content.documentTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (content[key] !== undefined && typeof content[key] === "string") {
      element.textContent = content[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (content[key]) element.setAttribute("aria-label", content[key]);
  });

  document.getElementById("language-toggle").textContent = language === "ar" ? "English" : "العربية";
  renderSkills(language);
  renderExperience(language);
  renderProjects(language);
  renderContact(language);

}

document.getElementById("language-toggle").addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "en" ? "ar" : "en";
  setLanguage(nextLanguage);
  try {
    localStorage.setItem("raghad-portfolio-language", nextLanguage);
  } catch (error) {
    console.warn("Could not save the selected language.", error);
  }
});

const sections = [...document.querySelectorAll("main section[id]")];
const navigationLinks = [...document.querySelectorAll(".nav-links a")];

function updateActiveNavigation() {
  const headerBottom = document.querySelector(".site-header").getBoundingClientRect().bottom;
  const activeSection = sections
    .filter((section) => section.getBoundingClientRect().top <= headerBottom + 1)
    .at(-1) || sections[0];

  navigationLinks.forEach((link) => {
    const isActive = link.hash === `#${activeSection.id}`;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("resize", updateActiveNavigation);
updateActiveNavigation();

let initialLanguage = "en";
try {
  const savedLanguage = localStorage.getItem("raghad-portfolio-language");
  if (savedLanguage === "ar" || savedLanguage === "en") initialLanguage = savedLanguage;
} catch (error) {
  console.warn("Could not read the saved language preference.", error);
}
setLanguage(initialLanguage);
