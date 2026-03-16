export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "assessments" | "therapy" | "guidance" | "programs";
  image: string;
  content: {
    overview: string;
    benefits: string[];
    whatToExpect: string[];
    whoIsItFor: string[];
    duration?: string;
    format?: string;
  };
}

export const services: ServiceData[] = [
  // ============================================================================
  // ASSESSMENTS
  // ============================================================================
  {
    id: "1",
    title: "Psychometric Assessments",
    slug: "psychometric-assessments",
    description: "Our psychometric assessments are designed to gently and accurately understand your child's learning style, strengths, and areas where they may need additional support.",
    category: "assessments",
    image: "/features-service-card/child-autism-assessment.png",
    content: {
      overview: "Our psychometric assessments are designed to gently and accurately understand your child's learning style, strengths, and areas where they may need additional support. These assessments help identify cognitive abilities, emotional patterns, and developmental needs to create a clear roadmap for your child's growth.",
      benefits: [
        "Clear understanding of your child's cognitive strengths and challenges",
        "Detailed written report with actionable recommendations",
        "Personalized strategies for home and school",
        "Identification of learning style preferences",
        "Foundation for educational planning and interventions",
      ],
      whatToExpect: [
        "Initial parent consultation to understand concerns and history",
        "2-3 assessment sessions with your child in a child-friendly environment",
        "Standardized testing using age-appropriate tools",
        "Comprehensive written report within 7-10 days",
        "Feedback session to discuss findings and recommendations",
      ],
      whoIsItFor: [
        "Children showing learning difficulties at school",
        "Parents seeking clarity about their child's abilities",
        "Schools requiring formal assessment for support planning",
        "Children being considered for gifted programs",
        "Families wanting to understand developmental delays",
      ],
      duration: "2-3 sessions (60-90 minutes each)",
      format: "In-person at our center",
    },
  },
  {
    id: "2",
    title: "Psychoeducational Assessments",
    slug: "psychoeducational-assessments",
    description: "Psychoeducational assessments play a pivotal role in supporting neurodivergent children — those with learning differences such as ADHD, dyslexia, or autism spectrum disorders.",
    category: "assessments",
    image: "/features-service-card/child-autism-assessment.png",
    content: {
      overview: "Psychoeducational assessments play a pivotal role in supporting neurodivergent children — those with learning differences such as ADHD, dyslexia, or autism spectrum disorders. These comprehensive evaluations examine both cognitive abilities and academic achievement to identify specific learning disabilities and create targeted intervention plans.",
      benefits: [
        "Identification of specific learning disabilities (dyslexia, dyscalculia, dysgraphia)",
        "Detailed academic skill profile across subjects",
        "Customized learning strategies and accommodations",
        "Recommendations for school support and IEP planning",
        "Clear roadmap for academic improvement",
      ],
      whatToExpect: [
        "Review of school records and previous assessments",
        "Parent and teacher questionnaires",
        "Direct assessment of reading, writing, and math skills",
        "Cognitive and achievement testing",
        "Comprehensive report with grade-level comparisons",
      ],
      whoIsItFor: [
        "Children struggling with reading or writing",
        "Students with persistent math difficulties",
        "Children whose grades don't reflect their effort",
        "Students needing school accommodations documentation",
        "Children with suspected ADHD, dyslexia, or autism",
      ],
      duration: "3-4 sessions (60-90 minutes each)",
      format: "In-person at our center",
    },
  },

  // ============================================================================
  // THERAPY
  // ============================================================================
  {
    id: "3",
    title: "Speech Therapy",
    slug: "speech-therapy",
    description: "Communication is one of the most important skills a child develops. When a child struggles to speak clearly, express thoughts, or understand language, it can affect their confidence, learning, and social interactions.",
    category: "therapy",
    image: "/features-service-card/therapy-services.png",
    content: {
      overview: "Communication is one of the most important skills a child develops. When a child struggles to speak clearly, express thoughts, or understand language, it can affect their confidence, learning, and social interactions. Our Speech Therapy services are designed to support children in developing clear communication skills in a structured, engaging, and child-friendly environment. At Divit MindSpace, we help children not just speak — but communicate with confidence.",
      benefits: [
        "Improved speech clarity and articulation",
        "Enhanced vocabulary and language expression",
        "Better social communication skills",
        "Increased confidence in speaking",
        "Parent training for home practice",
      ],
      whatToExpect: [
        "Initial assessment of speech and language skills",
        "Individualized therapy goals and plan",
        "Weekly therapy sessions (play-based for young children)",
        "Regular progress updates and home practice activities",
        "Collaboration with schools when needed",
      ],
      whoIsItFor: [
        "Children with speech delays or unclear speech",
        "Children with language delays or disorders",
        "Children who stutter or have fluency issues",
        "Children with autism needing communication support",
        "Children with hearing impairment affecting speech",
      ],
      duration: "45-minute sessions, typically weekly",
      format: "In-person or online options available",
    },
  },
  {
    id: "4",
    title: "Occupational Therapy",
    slug: "occupational-therapy",
    description: "Every child needs essential daily life skills to grow with confidence and independence. When a child struggles with motor skills, coordination, sensory processing, or routine activities, occupational therapy can help.",
    category: "therapy",
    image: "/features-service-card/therapy-services.png",
    content: {
      overview: "Every child needs essential daily life skills to grow with confidence and independence. When a child struggles with motor skills, coordination, sensory processing, or routine activities, it can impact their ability to participate fully in school and daily life. Our Occupational Therapy services help children develop the skills they need for everyday success through engaging, play-based activities.",
      benefits: [
        "Improved fine motor skills and hand strength",
        "Better sensory regulation and processing",
        "Enhanced handwriting and school readiness",
        "Greater independence in self-care tasks",
        "Improved attention and focus for learning",
      ],
      whatToExpect: [
        "Comprehensive OT evaluation",
        "Sensory profile assessment if needed",
        "Individualized therapy plan with specific goals",
        "Fun, engaging therapy sessions",
        "Home program with activities to practice",
      ],
      whoIsItFor: [
        "Children with sensory processing difficulties",
        "Children struggling with handwriting",
        "Children with fine motor delays",
        "Children needing help with self-care skills",
        "Children with coordination difficulties",
      ],
      duration: "45-minute sessions, typically weekly",
      format: "In-person at our sensory-equipped center",
    },
  },
  {
    id: "5",
    title: "Behavioral Therapy",
    slug: "behavioral-therapy",
    description: "Every child expresses emotions differently. Sometimes, challenging behaviors are not defiance — but a way of communicating unmet needs, frustration, or difficulty coping.",
    category: "therapy",
    image: "/features-service-card/therapy-services.png",
    content: {
      overview: "Every child expresses emotions differently. Sometimes, challenging behaviors are not defiance — but a way of communicating unmet needs, frustration, or difficulty coping. Our Behavioral Therapy program is designed to help children develop positive behaviors, emotional regulation skills, and healthier responses to everyday situations. At Divit MindSpace, we focus on understanding the reason behind the behavior — not just correcting it.",
      benefits: [
        "Reduction in challenging behaviors",
        "Development of emotional regulation skills",
        "Improved impulse control",
        "Better social behaviors and interactions",
        "Parent guidance and training for consistency",
      ],
      whatToExpect: [
        "Identifying triggers and behavioral patterns",
        "Teaching emotional awareness",
        "Building coping mechanisms",
        "Positive reinforcement strategies",
        "Consistent progress monitoring",
      ],
      whoIsItFor: [
        "Children with frequent tantrums or meltdowns",
        "Children struggling with anger management",
        "Children displaying aggressive behavior",
        "Children finding it hard to follow rules",
        "Children diagnosed with ADHD, Autism, or developmental conditions",
      ],
      duration: "45-60 minute sessions",
      format: "In-person, home-based, or center-based",
    },
  },
  {
    id: "6",
    title: "Group Therapy Sessions",
    slug: "group-therapy-sessions",
    description: "Our Group Therapy Sessions are designed to help children develop essential social, emotional, and communication skills in a structured and supportive group setting.",
    category: "therapy",
    image: "/features-service-card/therapy-services.png",
    content: {
      overview: "Our Group Therapy Sessions are designed to help children develop essential social, emotional, and communication skills in a structured and supportive group setting. Children learn best when they interact with peers, and group therapy provides the perfect environment for practicing real-world social skills with guidance from trained therapists.",
      benefits: [
        "Practice social skills with same-age peers",
        "Learn friendship and conversation skills",
        "Build confidence in social situations",
        "Develop perspective-taking abilities",
        "Make genuine peer connections",
      ],
      whatToExpect: [
        "Small groups of 4-6 children",
        "Structured curriculum targeting specific skills",
        "Fun, engaging activities and games",
        "Practice opportunities with peer feedback",
        "Parent updates on skills being learned",
      ],
      whoIsItFor: [
        "Children with autism spectrum disorder",
        "Children struggling to make friends",
        "Children with social anxiety",
        "Children who misread social cues",
        "Children needing peer interaction practice",
      ],
      duration: "60-minute weekly sessions (8-12 week programs)",
      format: "In-person small group at our center",
    },
  },

  // ============================================================================
  // GUIDANCE
  // ============================================================================
  {
    id: "7",
    title: "Counselling (Teenagers & Adults)",
    slug: "counselling-teenagers--adults",
    description: "Adolescence is a critical stage of emotional and psychological development. Teenagers today face increasing pressure from academics, social expectations, peer influence, and digital exposure.",
    category: "guidance",
    image: "/features-service-card/adult-counseling.png",
    content: {
      overview: "Adolescence is a critical stage of emotional and psychological development. Teenagers today face increasing pressure from academics, social expectations, peer influence, and digital exposure. Our counselling services provide a safe, confidential space for teenagers and adults to explore their feelings, develop coping strategies, and build emotional resilience.",
      benefits: [
        "Safe space to express difficult emotions",
        "Develop healthy coping mechanisms",
        "Improved emotional regulation",
        "Better stress and anxiety management",
        "Enhanced self-awareness and confidence",
      ],
      whatToExpect: [
        "Confidential one-on-one sessions",
        "Non-judgmental, supportive environment",
        "Evidence-based therapeutic approaches",
        "Goal-setting and progress tracking",
        "Parent involvement when appropriate",
      ],
      whoIsItFor: [
        "Teenagers struggling with academic pressure",
        "Young adults facing anxiety or depression",
        "Individuals dealing with relationship issues",
        "Those experiencing life transitions",
        "Anyone seeking emotional support and guidance",
      ],
      duration: "50-60 minute sessions",
      format: "In-person or online",
    },
  },
  {
    id: "8",
    title: "Training Program (Shadow Teacher Training)",
    slug: "training-program-shadow-teacher-training-program",
    description: "We believe every child deserves the right support in mainstream classrooms. Our Shadow Teacher Training Program is a comprehensive certification course designed for educators and caregivers.",
    category: "guidance",
    image: "/features-service-card/parent-education.png",
    content: {
      overview: "We believe every child deserves the right support in mainstream classrooms. Our Shadow Teacher Training Program is a comprehensive certification course designed for educators, special educators, and caregivers who want to effectively support neurodivergent children in school settings. This program equips participants with practical skills and strategies for inclusive education.",
      benefits: [
        "Comprehensive understanding of neurodevelopmental conditions",
        "Practical classroom support strategies",
        "Behavior management techniques",
        "Communication and collaboration skills",
        "Certification upon completion",
      ],
      whatToExpect: [
        "Theory sessions on child development and learning differences",
        "Practical workshops with role-play scenarios",
        "Case study discussions",
        "Hands-on training with real-world applications",
        "Assessment and certification",
      ],
      whoIsItFor: [
        "Aspiring shadow teachers",
        "Special educators seeking additional training",
        "Parents wanting to support their child better",
        "School staff working with diverse learners",
        "Caregivers of neurodivergent children",
      ],
      duration: "Multi-day intensive program",
      format: "In-person workshop at our center",
    },
  },

  // ============================================================================
  // PROGRAMS
  // ============================================================================
  {
    id: "9",
    title: "Early Intervention Program",
    slug: "early-intervention-program",
    description: "The early years of a child's life are critical for brain development. When developmental delays or early signs of learning differences are identified and addressed promptly, outcomes improve significantly.",
    category: "programs",
    image: "/about_pic1.png",
    content: {
      overview: "The early years of a child's life are critical for brain development. When developmental delays or early signs of learning differences are identified and addressed promptly, outcomes improve significantly. Our Early Intervention Program provides comprehensive support for young children (0-6 years) showing developmental concerns, helping them build a strong foundation for future learning.",
      benefits: [
        "Early identification of developmental concerns",
        "Improved developmental outcomes",
        "Stronger foundation for future learning",
        "Parent empowerment and training",
        "Coordinated multi-disciplinary support",
      ],
      whatToExpect: [
        "Developmental screening and assessment",
        "Individualized intervention plan",
        "Regular therapy sessions across needed areas",
        "Parent coaching and home strategies",
        "Progress monitoring and plan adjustments",
      ],
      whoIsItFor: [
        "Children aged 0-6 years with developmental delays",
        "Children not meeting age-appropriate milestones",
        "Children showing early signs of autism or ADHD",
        "Premature babies or high-risk infants",
        "Parents concerned about their child's development",
      ],
      duration: "Ongoing program with weekly sessions",
      format: "In-person at our center",
    },
  },
  {
    id: "10",
    title: "Special Education & Remedial Sessions",
    slug: "special-education--remedial-sessions",
    description: "Our Special Education and Remedial Sessions are designed to support children who experience learning difficulties, developmental delays, or academic challenges.",
    category: "programs",
    image: "/about_pic2.png",
    content: {
      overview: "Our Special Education and Remedial Sessions are designed to support children who experience learning difficulties, developmental delays, or academic challenges. Using specialized teaching methods and individualized attention, we help children build academic skills at their own pace while addressing underlying learning differences.",
      benefits: [
        "Individualized education plan (IEP) for each child",
        "Specialized teaching methods and materials",
        "Targeted remediation of academic gaps",
        "Building foundational literacy and numeracy skills",
        "Improved confidence and motivation to learn",
      ],
      whatToExpect: [
        "Initial assessment of learning needs",
        "Development of individualized goals",
        "Regular one-on-one or small group sessions",
        "Use of multi-sensory teaching approaches",
        "Regular progress reports for parents",
      ],
      whoIsItFor: [
        "Children with learning disabilities",
        "Children falling behind in academics",
        "Children with dyslexia, dyscalculia, or dysgraphia",
        "Children needing individualized instruction",
        "Students struggling in mainstream classrooms",
      ],
      duration: "45-60 minute sessions, 2-3 times weekly",
      format: "In-person at our center",
    },
  },
  {
    id: "11",
    title: "School Readiness Program",
    slug: "school-readiness-program",
    description: "Starting school is a major milestone in a child's life. For many children, especially those with developmental or learning challenges, the transition can feel overwhelming.",
    category: "programs",
    image: "/about_pic3.png",
    content: {
      overview: "Starting school is a major milestone in a child's life. For many children, especially those with developmental or learning challenges, the transition can feel overwhelming. Our School Readiness Program prepares children for this important step by building the foundational skills they need to thrive in a classroom environment.",
      benefits: [
        "Smooth transition to formal schooling",
        "Development of pre-academic skills",
        "Improved attention and focus",
        "Better social skills for classroom settings",
        "Increased confidence and independence",
      ],
      whatToExpect: [
        "Assessment of school readiness skills",
        "Structured group sessions simulating classroom environment",
        "Focus on pre-literacy and pre-numeracy skills",
        "Social skills training for peer interactions",
        "Parent guidance for supporting transition at home",
      ],
      whoIsItFor: [
        "Children preparing to start formal school",
        "Children with developmental delays entering school",
        "Children who missed preschool experiences",
        "Children anxious about starting school",
        "Children aged 4-6 years",
      ],
      duration: "6-8 week program with regular sessions",
      format: "In-person small group at our center",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: string): ServiceData[] {
  if (category === "all") return services;
  return services.filter((service) => service.category === category);
}
