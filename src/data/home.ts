export const socialIcon = {
    fb: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    ig: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    tg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4L3 11l4 2 2 7 4-5 4 3 4-14z"/></svg>`,
    yt: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.86 4 12 4 12 4s-6.86 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29.4 29.4 0 0 0 1 12a29.4 29.4 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.14 20 12 20 12 20s6.86 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29.4 29.4 0 0 0 23 12a29.4 29.4 0 0 0-.46-5.58z"/><path d="M9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>`,
    ln: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V8h4v2a4.2 4.2 0 0 1 2-2z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    discord: `<svg width="18" height="18" viewBox="0 0 640 512" fill="none" aria-hidden="true"><path fill="currentColor" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485 485 0 0 0 404.081 32.03a1.82 1.82 0 0 0-1.923.91a338 338 0 0 0-14.9 30.6a447.9 447.9 0 0 0-134.426 0a310 310 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.7 483.7 0 0 0-119.688 37.107a1.7 1.7 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.02 2.02 0 0 0 .765 1.375a487.7 487.7 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348 348 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321 321 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251 251 0 0 0 9.109-7.137a1.82 1.82 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.81 1.81 0 0 1 1.924.233a235 235 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.4 301.4 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391 391 0 0 0 30.014 48.815a1.86 1.86 0 0 0 2.063.7A486 486 0 0 0 610.7 405.729a1.88 1.88 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541M222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241m195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241"/></svg>`,
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
} as const;

export type SocialIconKey = keyof typeof socialIcon;

export type BranchLink = {
    name: string;
    icon: SocialIconKey;
    url: string;
    color: string;
};

export type Branch = {
    name: string;
    isAtm?: boolean;
    title: string;
    slogan: string;
    description: string;
    links: BranchLink[];
    accent: string;
    accentClass: string;
    imageSrc: string;
    imageAlt: string;
};

export const branches: Branch[] = [
    {
        name: "Algerian Tech Makers",
        isAtm: true,
        title: "الصفحة التقنية",
        slogan: "شباب واعد يصنع أثرًا تقنيًا",
        description: "صفحة تقنية تضُم شباب واعد، يريد الإسهام في بناء مجتمع تعلّمي يواكب التغيرات في المجال التّقني والتكنولوجي.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/Algeriantechmakersdz2021",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://t.me/algeriantechmakers",
                color: "hover:bg-green-400/10",
            },
            {
                name: "يوتيوب",
                icon: "yt",
                url: "https://www.youtube.com/@algeriantechmakers",
                color: "hover:bg-red-500/10",
            },
            {
                name: "لينكد إن",
                icon: "ln",
                url: "https://www.linkedin.com/posts/algerian-tech-makers_atmabrteam-activity-7293728696434122752-gDrm?utm_source=share&utm_medium=member_android&rcm=ACoAACzRbTsB5vBhYwHis8azgdlYWrYcl9pPKys",
                color: "hover:bg-blue-600/10",
            },
            {
                name: "ديسكورد",
                icon: "discord",
                url: "https://discord.com/invite/WF3832TDzA",
                color: "hover:bg-purple-500/10",
            },
        ],
        accent: "#F25C25",
        accentClass: "accent-cyan",
        imageSrc: "/assets/atm.webp",
        imageAlt: "Algerian Tech Makers",
    },
    {
        name: "نفَس طبّي",
        title: "Medical Breath",
        slogan: "صفحة طبية صاعدة",
        description: "نهتم بالتوعية الصحية الجسدية والنفسية، بأسلوب مبسط وموثوق. كما نعمل على تصحيح مفاهيم طبية شائعة.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/medicalbreath",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://www.instagram.com/medical.breath?igsh=aTB0N2Zna2ppMHRr",
                color: "hover:bg-pink-500/10",
            },
        ],
        accent: "#273F69",
        accentClass: "accent-cyan",
        imageSrc: "/assets/medical_breath.webp",
        imageAlt: "نفَس طبّي",
    },
    {
        name: "بعبق القرآن نحيا",
        title: "المبادرة القرآنية",
        slogan: "نور القرآن في تفاصيل حياتنا",
        description: "توعية شباب الأمّة الإسلاميّة بمسؤولياتهم الدّينيّة والأخلاقيّة، وتقوية صلتهم بدينهم، لنكون بذلك بديلا هادفا ونافعا على منصات التّواصل الاجتماعي.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/bi3abaqalquran",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "إنستغرام",
                icon: "ig",
                url: "https://www.instagram.com/biaabaqalquran?igsh=MWliZzlwajc2Nm45aQ==",
                color: "hover:bg-pink-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://t.me/biabaqelquran",
                color: "hover:bg-green-400/10",
            },
        ],
        accent: "#12416B",
        accentClass: "accent-amber",
        imageSrc: "/assets/bi_ibk_quran.webp",
        imageAlt: "بعبق القرآن نحيا",
    },
    {
        name: "مغلوبة فانتصر",
        title: "العطاء المجتمعي",
        slogan: "قضيتنا قضيةُ كل المسلمين",
        description: "صفحة تهتم بنصرة القضية الشريفة وجميع القضايا العادلة في العالم ومساندتها.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/maghlubah",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "إنستغرام",
                icon: "ig",
                url: "https://www.instagram.com/maghlubah?igsh=ejA4bjZ0aXAzNzMx",
                color: "hover:bg-pink-500/10",
            },
            {
                name: "تليجرام",
                icon: "tg",
                url: "https://t.me/maghlubahApv",
                color: "hover:bg-green-400/10",
            },
        ],
        accent: "#EBBA39",
        accentClass: "accent-rose",
        imageSrc: "/assets/maghlouba.webp",
        imageAlt: "مغلوبة فانتصر",
    },
    {
        name: "تذوق كتابا",
        title: "نادي القراءة",
        slogan: "لأن القراءة تصنع وعياً",
        description: "لمحبي الكتب والمطالعة نقدم لكم صفحة تحوي مراجعات واقتباسات وتحديات ومسابقات من أجل تنمية عادة المطالعة في مجتمعنا.",
        links: [
            {
                name: "فيسبوك",
                icon: "fb",
                url: "https://www.facebook.com/tadaweqkitab",
                color: "hover:bg-blue-500/10",
            },
            {
                name: "إنستغرام",
                icon: "ig",
                url: "https://www.instagram.com/tadaweqkitab?igsh=N21qMm8xZ2NlZHc2",
                color: "hover:bg-pink-500/10",
            },
        ],
        accent: "#4D438D",
        accentClass: "accent-emerald",
        imageSrc: "/assets/tadawk_kitab.webp",
        imageAlt: "تذوق كتابا",
    },
] as const;
