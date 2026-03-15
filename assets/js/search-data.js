// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-case-studies",
          title: "case studies",
          description: "Real-world impact through technical innovation and strategic thinking",
          section: "Navigation",
          handler: () => {
            window.location.href = "/case-studies/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open source projects and demonstrations showcasing AI/ML implementations, cloud architectures, and data science applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Engineering leader, strategic finance practitioner, and data science innovator with expertise spanning silicon to P&amp;L.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-consulting",
          title: "consulting",
          description: "Strategic consulting and advisory services in data science and technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/consulting/";
          },
        },{id: "nav-bio",
          title: "bio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bio/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-i-built-1-1m-lines-of-fully-documented-and-tested-code-in-25-days-and-so-can-you",
        
          title: "I Built 1.1M Lines of Fully Documented and Tested Code in 25 Days...",
        
        description: "Learn how AI-powered development can help you build production-quality software at unprecedented speed. The story of Crucible—where multi-agent systems meet real-world software engineering.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/built-1-1m-lines-ai-code-25-days/";
          
        },
      },{id: "post-creating-pull-vs-pushing-harder-a-leadership-philosophy",
        
          title: "Creating Pull vs. Pushing Harder: A Leadership Philosophy",
        
        description: "You can&#39;t push a rope up a hill. The best systems create pull through excellence, making adoption organic rather than forced. This principle has driven every successful platform I&#39;ve built.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/creating-pull-not-push/";
          
        },
      },{id: "post-the-ai-driven-finance-revolution-from-reactive-reporting-to-proactive-strategic-partner",
        
          title: "The AI-Driven Finance Revolution: From Reactive Reporting to Proactive Strategic Partner",
        
        description: "The finance function is at an inflection point. Organizations that embrace AI will transform finance from a backward-looking cost center into a forward-looking strategic partner that drives business growth.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ai-driven-finance-revolution/";
          
        },
      },{id: "post-the-cross-disciplinary-advantage-why-engineers-should-study-finance-and-vice-versa",
        
          title: "The Cross-Disciplinary Advantage: Why Engineers Should Study Finance (And Vice Versa)",
        
        description: "My journey from silicon design to strategic finance to AI taught me that the biggest breakthroughs happen at the intersection of disciplines. Here&#39;s why bridging worlds creates exponential value.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cross-disciplinary-advantage/";
          
        },
      },{id: "books-the-alloy-of-law",
          title: 'The Alloy of Law',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/alloy-of-law/";
            },},{id: "books-american-gods",
          title: 'American Gods',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/american-gods/";
            },},{id: "books-between-two-fires",
          title: 'Between Two Fires',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/between-two-fires/";
            },},{id: "books-building-the-internet-of-things",
          title: 'Building the Internet of Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/building_iot/";
            },},{id: "books-the-blacktongue-thief",
          title: 'The Blacktongue Thief',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/blacktongue_thief/";
            },},{id: "books-campbell-biology",
          title: 'Campbell Biology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/campbell-biology/";
            },},{id: "books-chemistry-the-central-science",
          title: 'Chemistry: The Central Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/chemistry-central-science/";
            },},{id: "books-the-data-detective-ten-easy-rules-to-make-sense-of-statistics",
          title: 'The Data Detective: Ten Easy Rules to Make Sense of Statistics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/data-detective/";
            },},{id: "books-essentials-of-investments",
          title: 'Essentials of Investments',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/essentials-of-investments/";
            },},{id: "books-field-experiments-design-analysis-and-interpretation",
          title: 'Field Experiments: Design, Analysis, and Interpretation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/field-experiments/";
            },},{id: "books-mastering-39-metrics-the-path-from-cause-to-effect",
          title: 'Mastering &amp;#39;Metrics: The Path from Cause to Effect',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mastering_metrics/";
            },},{id: "books-foundations-of-agnostic-statistics",
          title: 'Foundations of Agnostic Statistics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/foundations_agnostic_statistics/";
            },},{id: "books-fundamentals-of-corporate-finance",
          title: 'Fundamentals of Corporate Finance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fundamentals-corporate-finance/";
            },},{id: "books-mathematical-statistics-and-data-analysis",
          title: 'Mathematical Statistics and Data Analysis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mathematical-statistics/";
            },},{id: "books-microscale-operational-organic-chemistry",
          title: 'Microscale Operational Organic Chemistry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/microscale-organic-chemistry/";
            },},{id: "books-money-banking-and-financial-markets",
          title: 'Money, Banking, and Financial Markets',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/money-banking-financial-markets/";
            },},{id: "books-oathbringer",
          title: 'Oathbringer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/oathbringer/";
            },},{id: "books-operations-management",
          title: 'Operations Management',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/operations-management/";
            },},{id: "books-options-futures-and-other-derivatives",
          title: 'Options, Futures, and Other Derivatives',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/options-futures-derivatives/";
            },},{id: "books-organic-chemistry",
          title: 'Organic Chemistry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/organic-chemistry/";
            },},{id: "books-a-photographic-atlas-for-the-biology-laboratory",
          title: 'A Photographic Atlas for the Biology Laboratory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/photographic-atlas-biology/";
            },},{id: "books-principles-of-neural-science",
          title: 'Principles of Neural Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/principles-neural-science/";
            },},{id: "books-the-pyramid-principle-logic-in-writing-and-thinking",
          title: 'The Pyramid Principle: Logic in Writing and Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/pyramid-principle/";
            },},{id: "books-research-design-qualitative-quantitative-and-mixed-methods-approaches",
          title: 'Research Design: Qualitative, Quantitative, and Mixed Methods Approaches',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/research_design/";
            },},{id: "books-rhythm-of-war",
          title: 'Rhythm of War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/rhythm-of-war/";
            },},{id: "books-robot-builder-39-s-bonanza",
          title: 'Robot Builder&amp;#39;s Bonanza',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/robot-builders-bonanza/";
            },},{id: "books-building-the-internet-of-things",
          title: 'Building the Internet of Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/software-hardware-collide/";
            },},{id: "books-stranger-in-a-strange-land",
          title: 'Stranger in a Strange Land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/stranger-in-strange-land/";
            },},{id: "books-the-magicians",
          title: 'The Magicians',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-magicians/";
            },},{id: "books-the-venture-mindset",
          title: 'The Venture Mindset',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/venture_mindset/";
            },},{id: "books-wind-and-truth",
          title: 'Wind and Truth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/wind-and-truth/";
            },},{id: "books-wireless-sensor-networks",
          title: 'Wireless Sensor Networks',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/wireless-sensor-networks/";
            },},{id: "casestudies-full-stack-cloud-application-company-wide-work-allocation-platform",
          title: 'Full-Stack Cloud Application: Company-Wide Work Allocation Platform',
          description: "Infrastructure to collect business information for understanding and aligning effort to outcomes—started in Data Center R&amp;D, scaled company-wide, became foundation for billion-dollar P&amp;L allocation",
          section: "Casestudies",handler: () => {
              window.location.href = "/casestudies/00_time_tracking_app_enhanced/";
            },},{id: "casestudies-building-google-cloud-technology-partnership-org-50-to-225-growth",
          title: 'Building Google Cloud Technology Partnership Org: 50 to 225+ Growth',
          description: "Driving strategic operations and building real-time intelligence systems to scale Cloud Technology Partnerships from 50 to 225+ employees",
          section: "Casestudies",handler: () => {
              window.location.href = "/casestudies/01_connective_tissue_enhanced/";
            },},{id: "casestudies-ai-driven-inventory-optimization-100m-immediate-savings",
          title: 'AI-Driven Inventory Optimization: $100M+ Immediate Savings',
          description: "Leveraging AI and cross-functional leadership to save $100M+ in a single quarter through memory re-qualification",
          section: "Casestudies",handler: () => {
              window.location.href = "/casestudies/02_inventory_project_enhanced/";
            },},{id: "casestudies-google-cloud-xxb-revenue-platform-zero-to-8-000-users",
          title: 'Google Cloud $XXB Revenue Platform: Zero to 8,000 Users',
          description: "Creating unified revenue truth after year-long engineering failure, scaling to 8,000+ daily users",
          section: "Casestudies",handler: () => {
              window.location.href = "/casestudies/03_revenue_platform_enhanced/";
            },},{id: "casestudies-oracle-to-sap-transition-rescue-rebuilding-supply-chain-finance",
          title: 'Oracle-to-SAP Transition Rescue: Rebuilding Supply Chain Finance',
          description: "Intercepting a critical blindspot in an enterprise Oracle-to-SAP migration by rapidly rebuilding &gt;1,000 reporting assets and engineering custom data pipelines to ensure business continuity.",
          section: "Casestudies",handler: () => {
              window.location.href = "/casestudies/04_sap_transition_enhanced/";
            },},{id: "casestudies-google-cloud-xxb-p-amp-l-product-amp-customer-profitability-at-scale",
          title: 'Google Cloud $XXB P&amp;amp;L: Product &amp;amp; Customer Profitability at Scale',
          description: "Building comprehensive P&amp;L profitability solution leveraging my Data Center R&amp;D visibility system for activity-based payroll allocation",
          section: "Casestudies",handler: () => {
              window.location.href = "/casestudies/05_profitability_framework_enhanced/";
            },},{id: "casestudies-ai-powered-financial-intelligence-platform",
          title: 'AI-Powered Financial Intelligence Platform',
          description: "Building comprehensive AI/ML platform that documented the entire chain from business requirements to code, enabling natural language access to both analytics and deep system understanding",
          section: "Casestudies",handler: () => {
              window.location.href = "/casestudies/06_ai_analytics_assistant_enhanced/";
            },},{id: "projects-geographic-analysis-of-u-s-homelessness-patterns-2007-2022",
          title: 'Geographic Analysis of U.S. Homelessness Patterns (2007-2022)',
          description: "Data-driven insights into homelessness trends, natural disaster impacts, and policy recommendations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_homelessness_analysis/";
            },},{id: "projects-medical-ai-with-deep-learning",
          title: 'Medical AI with Deep Learning',
          description: "Hybrid CNN achieving 91.2% accuracy on chest X-ray classification with interpretability",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_computer_vision_medical/";
            },},{id: "projects-financial-sentiment-analysis-with-self-training",
          title: 'Financial Sentiment Analysis with Self-Training',
          description: "Achieved 88.1% accuracy using only 60% labeled data through intelligent debiasing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_nlp_financial_sentiment/";
            },},{id: "projects-rag-system-for-enterprise-knowledge-management",
          title: 'RAG System for Enterprise Knowledge Management',
          description: "Production RAG with 73% hallucination reduction and sub-second response times",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_rag_enterprise_systems/";
            },},{id: "projects-cloud-native-ml-platform-at-scale",
          title: 'Cloud-Native ML Platform at Scale',
          description: "Kubernetes deployment handling 8,400+ req/sec with 99.95% uptime",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_cloud_ml_platform/";
            },},{id: "projects-ai-powered-commodity-trading-platform",
          title: 'AI-Powered Commodity Trading Platform',
          description: "Algorithmic trading system achieving 23.7% returns with 1.19 Sharpe ratio",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_algorithmic_trading/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/9_project/";
            },},{id: "projects-cloud-native-application-platform",
          title: 'Cloud-Native Application Platform',
          description: "Full-stack cloud application with microservices architecture, containerization, and CI/CD automation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/cloud_app_demo/";
            },},{id: "projects-cloud-native-application-platform",
          title: 'Cloud-Native Application Platform',
          description: "Full-stack cloud application with microservices architecture, containerization, and CI/CD automation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/cloud_app_enhanced/";
            },},{id: "projects-computer-vision-pipeline",
          title: 'Computer Vision Pipeline',
          description: "End-to-end computer vision system with object detection, image classification, and real-time processing capabilities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/computer_vision_demo/";
            },},{id: "projects-medical-image-analysis-for-chest-disease-detection",
          title: 'Medical Image Analysis for Chest Disease Detection',
          description: "AI-powered chest X-ray analysis system for detecting 14 pulmonary conditions using hybrid traditional CV and deep learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/computer_vision_enhanced/";
            },},{id: "projects-geographic-analysis-of-u-s-homelessness-patterns-2007-2022",
          title: 'Geographic Analysis of U.S. Homelessness Patterns (2007-2022)',
          description: "Data-driven insights into homelessness trends, natural disaster impacts, and policy recommendations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/homelessness_analysis/";
            },},{id: "projects-nlp-text-analysis-system",
          title: 'NLP Text Analysis System',
          description: "Advanced natural language processing system for sentiment analysis, entity recognition, and text classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/nlp_demo/";
            },},{id: "projects-financial-sentiment-analysis-with-self-training-and-debiasing",
          title: 'Financial Sentiment Analysis with Self-Training and Debiasing',
          description: "Advanced NLP system using self-training and debiasing techniques to achieve 81.4% accuracy on financial text sentiment analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/nlp_enhanced/";
            },},{id: "projects-rag-system-for-enterprise-knowledge",
          title: 'RAG System for Enterprise Knowledge',
          description: "Production-ready Retrieval-Augmented Generation system with vector embeddings, semantic search, and LLM integration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/rag_demo/";
            },},{id: "projects-enterprise-genai-knowledge-platform-300-users",
          title: 'Enterprise GenAI Knowledge Platform (300+ Users)',
          description: "Production RAG system serving 300 engineers and 40 marketers with 89% retrieval accuracy using hyperparameter-optimized LangChain architecture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template_archive/wip_versions/rag_demo_enhanced/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%6F%6E%79@%65%6D%62%65%72%61%67%65%6E%74%69%63%6C%61%62%73.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/markagibbons", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
