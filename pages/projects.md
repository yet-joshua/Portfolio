---
title: Projects - Joshua Yet
display: Projects
description: Projects I built solo or shipped for clients
wrapperClass: 'text-center'
art: plum
projects:
  Solo:
    - name: 'Rhythm'
      link: 'https://github.com/yet-joshua/Rhythm'
      desc: 'Habit-building app for a daily Rule of Life — React Native + Expo'
      icon: 'i-ph-plant-duotone'

  Client:
    - name: 'Dance & Arts UK'
      link: 'https://github.com/yet-joshua/ClubConnectUK'
      desc: 'Club management & scheduling system for a UK dance & arts school'
      icon: 'i-ph-mask-happy-duotone'
      hero: '/images/projects/dance-and-arts-uk/hero.png'
      timeline: '2024'
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
      problem: 'A UK dance academy needed a unified platform to streamline timetable management, instructor scheduling, and student enrollments.'
      solution: 'Delivered a customized management portal featuring class booking workflows, attendance tracking, and administrative reports.'
      role: 'Full-Stack Developer — Database modeling, scheduling engine logic, and UI design.'
      screenshots:
        - '/images/projects/dance-and-arts-uk/screenshot-1.png'
        - '/images/projects/dance-and-arts-uk/screenshot-2.png'
        - '/images/projects/dance-and-arts-uk/screenshot-3.png'
      links:
        - label: 'GitHub'
          url: 'https://github.com/yet-joshua/ClubConnectUK'
          icon: 'i-ph-github-logo-duotone'

    - name: 'NFT Marketplace'
      desc: 'Frontend overhaul — Next.js, Ethers.js & Web3Modal, fully on-chain'
      icon: 'i-ph-currency-eth-duotone'
      hero: '/images/projects/nft-marketplace/hero.png'
      timeline: '2023 – 2024'
      techStack: ['Next.js', 'TypeScript', 'Ethers.js', 'Web3Modal', 'Solidity', 'Tailwind CSS']
      problem: 'Previous web3 frontend had slow wallet connection handshakes, failed transaction states, and poor mobile responsiveness.'
      solution: 'Refactored state management with wagmi / Web3Modal, integrated optimistic UI updates for minting, and streamlined smart contract interactions.'
      role: 'Frontend Web3 Engineer — Wallet integration, UI refactor, and smart contract event listeners.'
      screenshots:
        - '/images/projects/nft-marketplace/hero.png'

  Company:
    - name: 'RoadWatch'
      link: 'https://github.com/HeroAppsDev/roadwatchph-api'
      desc: 'AI-powered pothole detection & repair reporting platform'
      icon: 'i-ph-road-horizon-duotone'
      hero: '/images/projects/roadwatch/hero.png'
      timeline: '2025'
      techStack: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL', 'AWS']
      problem: 'Road maintenance teams lacked a real-time, automated way to identify, categorize, and prioritize pothole repairs across regional transit routes.'
      solution: 'Engineered an end-to-end mobile and API solution that captures geo-tagged road defect data with ML inference and auto-dispatches repair work orders.'
      role: 'Lead Full-Stack Developer — REST API architecture, cross-platform mobile app, and cloud infrastructure deployment.'
      screenshots:
        - '/images/projects/roadwatch/hero.png'
      links:
        - label: 'GitHub API'
          url: 'https://github.com/HeroAppsDev/roadwatchph-api'
          icon: 'i-ph-github-logo-duotone'

    - name: 'Legal Service App'
      desc: 'Legal service ecosystem — REST API + React admin dashboard on AWS'
      icon: 'i-ph-scales-duotone'
      hero: '/images/projects/legal-service-app/hero.png'
      timeline: '2025'
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS ECS', 'Docker']
      problem: 'Law practitioners and corporate clients required a secure, multi-tenant portal for matter tracking, document generation, and compliance auditing.'
      solution: 'Built a containerized REST API backend and responsive React administration panel deployed on AWS ECS with fine-grained RBAC.'
      role: 'Full-Stack Developer — Backend services, relational database schema design, and admin dashboard UI.'
      screenshots:
        - '/images/projects/legal-service-app/hero.png'

    - name: 'Laundry Management'
      desc: 'Containerized laundry ops system — Laravel 12, React & Inertia'
      icon: 'i-ph-washing-machine-duotone'
      hero: '/images/projects/laundry-management/hero.png'
      timeline: '2025'
      techStack: ['Laravel 12', 'React', 'Inertia.js', 'MySQL', 'Docker']
      problem: 'High-volume commercial laundry facilities struggled with manual tracking of wash cycles, equipment maintenance logs, and POS order fulfillment.'
      solution: 'Delivered an integrated ERP with real-time station workflows, receipt generation, customer SMS notifications, and containerized deployment.'
      role: 'Lead Developer — Architecture, Inertia.js frontend integration, database optimization, and Docker orchestration.'
      screenshots:
        - '/images/projects/laundry-management/hero.png'

    - name: 'Clinic Patient System'
      desc: 'Legacy PHP rebuild digitizing ~10,000 patient records'
      icon: 'i-ph-first-aid-kit-duotone'
      hero: '/images/projects/clinic-patient-system/hero.png'
      timeline: '2024 – 2025'
      techStack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS']
      problem: 'A medical clinic operated on fragmented legacy PHP code and paper charts, causing bottlenecks in patient intake and medical history retrieval.'
      solution: 'Rebuilt the system with modern architecture, migrated 10,000+ sensitive clinical records without downtime, and implemented HIPAA-compliant data auditing.'
      role: 'Full-Stack Developer — Data migration scripts, REST endpoints, and patient records UI.'
      screenshots:
        - '/images/projects/clinic-patient-system/hero.png'

    - name: 'inventrix'
      link: 'https://github.com/yet-joshua/inventrix-web'
      desc: 'Inventory management platform'
      icon: 'i-ph-package-duotone'
      hero: '/images/projects/inventrix/hero.png'
      timeline: '2024'
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL']
      problem: 'Small-to-medium retail vendors needed a lightweight barcode-ready stock tracking tool without complex enterprise bloat.'
      solution: 'Designed an agile inventory dashboard with real-time stock alert thresholds, barcode scanning support, and vendor purchase order workflows.'
      role: 'Solo Developer — UI/UX design, Next.js application, and database schema.'
      screenshots:
        - '/images/projects/inventrix/hero.png'
      links:
        - label: 'GitHub'
          url: 'https://github.com/yet-joshua/inventrix-web'
          icon: 'i-ph-github-logo-duotone'

    - name: 'webview-rn'
      link: 'https://github.com/HeroAppsDev/webview-rn'
      desc: 'Web-to-app native shells for Android & iOS — Expo Router, Compose & SwiftUI'
      icon: 'i-ph-device-mobile-duotone'
      hero: '/images/projects/webview-rn/hero.png'
      timeline: '2024'
      techStack: ['React Native', 'Expo Router', 'SwiftUI', 'Jetpack Compose']
      problem: 'Client web platforms needed high-performance native app store wrappers with native push notifications, biometric auth, and offline fallbacks.'
      solution: 'Developed modular hybrid container shells bridging native platform capabilities with responsive web viewports.'
      role: 'Mobile Developer — Native bridge integrations, Expo configuration, and build pipelines.'
      screenshots:
        - '/images/projects/webview-rn/screenshot-1.png'
        - '/images/projects/webview-rn/screenshot-2.png'
        - '/images/projects/webview-rn/screenshot-3.png'
      links:
        - label: 'GitHub'
          url: 'https://github.com/HeroAppsDev/webview-rn'
          icon: 'i-ph-github-logo-duotone'
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects" />
