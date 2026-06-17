export const experiences = [
    {
        id: "1",
        title: "Frontend Engineer & AI Automation Specialist",
        summary: "WemeetMobility",
        date: "Oct 2024 – Present"
    },
    {
        id: "2",
        title: "Software Engineer",
        summary: "NSKorea",
        date: "Apr 2022 – Jul 2022"
    },
    {
        id: "3",
        title: "Server Administrator",
        summary: "Republic of Korea Army",
        date: "Aug 2020 – Feb 2022"
    },
]

export const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: [
            "TypeScript", "JavaScript", "React 19", "Next.js",
            "Kotlin", "Spring Boot", "PostgreSQL",
            "Vanilla Extract", "Tailwind CSS", "Zustand", "TanStack Query",
            "Claude Code", "MCP / AI Agents", "Python", "Docker",
            "AWS IoT Core", "Git", "REST APIs", "react-hook-form"
        ]
    },
    {
        title: "Education",
        id: "education",
        content: [
            "University College London — BSc Computer Science (2:1)",
            "2018–2023 · London, UK · GPA 3.6 / 4.0",
            "IELTS Academic 8.0 / 9.0"
        ]
    },
]

export const projects = [
    {
        id: "1",
        title: "WebPortfolio",
        start_date: "March 2024",
        brief: "Mobile-responsive personal portfolio built with Next.js 14 and Tailwind CSS",
        skill: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        id: "2",
        title: "DreamCanvas",
        start_date: "March 2024",
        brief: "Instagram-inspired social platform built with Next.js, Prisma & MongoDB",
        skill: ["Next.js", "MongoDB", "Prisma"]
    },
    {
        id: "3",
        title: "UCL Library Mapper",
        start_date: "2023",
        brief: "Hackathon app mapping real-time library seat vacancies via UCL API",
        skill: ["React", "Node.js", "UCL API"]
    },
    {
        id: "4",
        title: "AWS IoT Smart Layout",
        start_date: "2022",
        brief: "IoT retail foot-traffic analysis system using AWS IoT Core for dynamic layout optimisation",
        skill: ["AWS IoT Core", "Python", "IoT"]
    },
    {
        id: "5",
        title: "RoutR",
        start_date: "June 2025",
        brief: "Full-stack route planning and trip tracking app with real-time SSE updates, drag-and-drop waypoints, and interactive map",
        skill: ["Kotlin", "Spring Boot", "Next.js 15", "PostgreSQL"]
    },
]

export const experienceDetails = [
    {
        id: "1",
        title: "Frontend Engineer & AI Automation Specialist",
        description: [
            "Designed and shipped a 5-stage autonomous coding pipeline — Jira ingestion, Figma-to-spec conversion, TDD code generation, automated PR creation, and AI-powered code review.",
            "Drove 78.1% of all AI automation commits across 8 complete iteration cycles; matured a custom TDD engine through 149 prompt iterations to production-ready stability.",
            "Served as primary frontend architect delivering 63.6% of all repository commits (3,322 of ~5,225 total) with 10,500+ file touches across TMS routing, dispatch, and order management modules.",
            "Built type-safe API communication layers, custom React hooks, validation schemas, and state management utilities powering the core TMS data flow.",
            "Led 4 dedicated refactoring sprints reducing cross-cutting duplication by an estimated 30–40%.",
        ],
        Date: "October 2024 to Present",
        Hire: "WemeetMobility",
    },
    {
        id: "2",
        title: "Software Engineer",
        description: [
            "Architected an internal data access management system in Python to control and audit employee access to company data stores.",
            "Collaborated directly with non-technical stakeholders to iteratively refine software requirements.",
            "Authored comprehensive user manuals and delivered hands-on training sessions.",
        ],
        Date: "April 2022 to July 2022",
        Hire: "NSKorea",
    },
    {
        id: "3",
        title: "Server Administrator",
        description: [
            "Monitored and maintained network server infrastructure on a daily basis.",
            "Executed scheduled data backups and enforced user access control policies.",
            "Preserved system integrity and prevented data loss across military server infrastructure.",
        ],
        Date: "August 2020 to February 2022",
        Hire: "Republic of Korea Army (Mandatory Service)",
    },
]

export const projectDetails = [
    {
        id: "1",
        title: "WebPortfolio",
        description: `A mobile-responsive personal portfolio built with Next.js 14 and Tailwind CSS.
                      Leverages responsive utilities to provide a seamless experience across smartphones, tablets, and desktops,
                      with smooth animations powered by Framer Motion.`,
        FI: `Future improvements include integrating a CMS for dynamic content management,
             adding a dark/light theme toggle, and implementing more granular breakpoints for
             edge-case device sizes.`,
        slides: [
            { src: "/Port1.png", width: 3556, height: 2022 },
            { src: "/Port2.png", width: 3590, height: 1716 },
            { src: "/Port3.png", width: 942, height: 1594 },
            { src: "/Port4.png", width: 926, height: 2000 },
        ],
        link: ""
    },
    {
        id: "2",
        title: "DreamCanvas",
        description: `DreamCanvas is a social media platform inspired by Instagram, built with Next.js, Prisma, and MongoDB.
                      Users can upload and share creative works, follow other users, and interact through likes and comments —
                      all within a clean, user-friendly interface.`,
        FI: `Future improvements include JWT-based authentication, encrypted user data storage for privacy compliance,
             and a real-time notification system for likes, comments, and new followers.`,
        slides: [
            { src: "/Project2_Image1.png", width: 1920, height: 1020 },
            { src: "/Project2_Image2.png", width: 1920, height: 1020 },
            { src: "/Project2_Image3.png", width: 1920, height: 1020 },
            { src: "/Project2_Image4.png", width: 1920, height: 1020 },
            { src: "/Project2_Image5.png", width: 1920, height: 1020 },
            { src: "/Project2_Image6.png", width: 1920, height: 1020 },
            { src: "/Project2_Image7.png", width: 1920, height: 1020 },
        ],
        link: "https://dream-canvas-two.vercel.app"
    },
    {
        id: "3",
        title: "UCL Library Mapper",
        description: `Built during a UCL API Hackathon — a full-stack student application that maps
                      real-time library seat vacancies and processes workspace bookings via the UCL API.
                      Designed to help students find available study spaces quickly across campus.`,
        FI: `Future improvements include persistent booking history, push notifications for seat
             availability, and integration with the UCL academic calendar for smart scheduling.`,
        slides: [],
        link: ""
    },
    {
        id: "4",
        title: "AWS IoT Smart Layout",
        description: `Designed and deployed an IoT tracking network using AWS IoT Core to analyse retail
                      foot traffic density in real time. The system generates dynamic layout recommendations
                      to minimise customer wait times and optimise store flow.`,
        FI: `Future improvements include a real-time management dashboard, ML-based predictive layout
             modelling, and integration with inventory management systems.`,
        slides: [],
        link: ""
    },
    {
        id: "5",
        title: "RoutR",
        description: `RoutR is a full-stack route planning and trip tracking application built with a Kotlin Spring Boot 3.5 backend and Next.js 15 frontend.
                      Users can create trips, add and reorder waypoints via drag-and-drop, and track progress in real time through Server-Sent Events (SSE).
                      The backend follows a layered Controller → Facade → Service → Repository architecture with Clerk JWT authentication on every endpoint.
                      An interactive map powered by DeckGL and MapLibre visualises waypoints and routes, with status-colour-coded markers for pending, arrived, and skipped stops.
                      Built with TDD throughout — every layer has test coverage before implementation. Deployed on Railway (backend + PostgreSQL) and Vercel (frontend).`,
        FI: `Future improvements include Mapbox road-following routes (currently straight-line fallback), push notifications for waypoint status changes, and team/multi-driver support for shared trip management.`,
        slides: [],
        link: "https://rout-r.vercel.app"
    },
]
