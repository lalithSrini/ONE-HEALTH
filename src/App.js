// A complete React Quiz App (mobile friendly) without TailwindCSS
// Uses basic CSS and React Hooks

import React, { useState, useEffect } from "react";
import "./App.css";

const rawQuestions = [
  
    {
      question: "The centre for One Health is located at ?",
      options: [
        "Odisha",
        "Nagpur",
        "Mumbai",
        "Chennai"
      ],
      answer: "Nagpur"
    },
    {
      question: "Name the German scholar from the mid 1800's, who was an early proponent of One Health?",
      options: [
        "Rudolf Virchow",
        "Calvin Schwabe",
        "Lonnie King",
        "Dr. Renu Swarup"
      ],
      answer: "Rudolf Virchow"
    },
    {
      question: "Which of these is a Fundamental Principle of Ethics?",
      options: [
        "Beneficence",
        "Non-maleficence",
        "Autonomy",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "In the Disciplinarity Jargon, which Disciplinary represents a Mixed Up Salad ?",
      options: [
        "Interdisciplinary",
        "Multidisciplinary",
        "Intradisciplinary",
        "Crossdisciplinary"
      ],
      answer: "Multidisciplinary"
    },
    {
      question: "What does WOHC stand for in the context of One Health?",
      options: [
        "World Organization for Health and Care",
        "Women's Occupational Health Center",
        "World Obesity and Heart Center",
        "World One Health Congress"
      ],
      answer: "World One Health Congress"
    },
    {
      question: "Which among the following agencies signed an agreement to strengthen Global One Health Governance as a part of the Quadripartite?",
      options: [
        "FAO, OIE, UNEP and CDC",
        "FAO, OIE, ICMR and WHO",
        "FAO, OIE, UNEP and WHO",
        "None of the above"
      ],
      answer: "FAO, OIE, UNEP and WHO"
    },
    {
      question: "In the ABC of applying the principle of ethics in One Health, 'B' stands for?",
      options: [
        "Base",
        "Bias",
        "Bulge",
        "Boon"
      ],
      answer: "Bias"
    },
    {
      question: "Which of these agencies works towards One Health initiatives?",
      options: [
        "World Health Organization (WHO)",
        "United Nations Children's Fund (UNICEF)",
        "Food and Agriculture Organization of the United Nations (FAO)",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "IEC and IRB stand for?",
      options: [
        "Indian Ethical Committee, Indian Research Board",
        "Institutional Ethical Committee, Institutional Review Board",
        "Institutional Ethical Committee, Indian Research Board",
        "Indian Ethical Committee, Institutional Review Board"
      ],
      answer: "Institutional Ethical Committee, Institutional Review Board"
    },
    {
      question: "It is a gateway of for the active exchange of One health related knowledge, sharing of resources and collaborative projects that reach beyond disciplinary boundaries. Name that agency.",
      options: [
        "One Health Congress",
        "World Health Organization",
        "One Health Commission",
        "World Bank"
      ],
      answer: "One Health Commission"
    },
    {
      question: "The number of human pathogens that have been detected in the past three decades are?",
      options: [
        "35",
        "30",
        "47",
        "12"
      ],
      answer: "30"
    },
    {
      question: "Virus that was first seen in 1947 and its first human case detected in Nigeria. It was declared as a national concern by WHO in 2016. Which virus are we talking about?",
      options: [
        "Anthrax",
        "Nipah",
        "Zika",
        "Ebola"
      ],
      answer: "Zika"
    },
    {
      question: "Which of the following statements is true for HINI virus?",
      options: [
        "There was a major outbreak of H1N1 in the year 2009",
        "The source of the outbreak could not be found",
        "The outbreak affected all parts of the world",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "The highest level of Biosafety Lab-4 is situated in which area?",
      options: [
        "Pune",
        "Nagpur",
        "Bhubaneswar",
        "Delhi"
      ],
      answer: "Pune"
    },
    {
      question: "What is the full form of ICMR-NIV, Pune?",
      options: [
        "Indian Council of Medical Research- National Institute of Veterinary, Pune",
        "Indian Council of Medical Research- National Institute of Virology, Pune",
        "Indian Council of Mass Research- National Institute of Velocity, Pune",
        "Indian Cancer Medical Research- National Institute of Virology, Pune"
      ],
      answer: "Indian Council of Medical Research- National Institute of Virology, Pune"
    },
    {
      question: "At the time when the pathogen is spilling over through vector, wildlife or domestic animals, which process will help prevent this?",
      options: [
        "Rapid response",
        "Early detection",
        "Forecasting Readiness",
        "Controlled operations"
      ],
      answer: "Early detection"
    },
    {
      question: "What is the impact of epidemics in the nation?",
      options: [
        "Loss of employment and livelihood",
        "Impact on GDP",
        "Decline in foreign investment",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "How many mobile BSL-3 labs do we have in India?",
      options: [
        "13",
        "16",
        "17",
        "19"
      ],
      answer: "16"
    },
    {
      question: "Which of the following is NOT an impact of Epidemics?",
      options: [
        "School dropouts",
        "Political instability",
        "Rise in employment",
        "Increase crime rates"
      ],
      answer: "Rise in employment"
    },
    {
      question: "Global One Health Joint Action Plan was published on?",
      options: [
        "17.10.2022",
        "18.10.2022",
        "19.10.2022",
        "20.10.2022"
      ],
      answer: "17.10.2022"
    },
    {
      question: "Which of these conditions does NOT qualify as emerging disease?",
      options: [
        "A disease appearing in a place for the first time",
        "A disease spreading to new areas",
        "A disease which is affecting uniform number of individuals for some years",
        "A disease which was not known earlier"
      ],
      answer: "A disease which is affecting uniform number of individuals for some years"
    },
    {
      question: "In the list of 21st century emerging disease outbreaks, 'H1N1 virus' came in which year?",
      options: [
        "2009",
        "2010",
        "2011",
        "2012"
      ],
      answer: "2009"
    },
    {
      question: "Which of the following are not major reservoirs of 21st century outbreaks?",
      options: [
        "Camels",
        "Bats",
        "Poultry",
        "Elephants"
      ],
      answer: "Elephants"
    },
    {
      question: "What is the full form of NIAID?",
      options: [
        "National Institute of Allergy and Infectious Diseases",
        "National Institute of Allergy and Informed Diseases",
        "National Institute of Energy and Infectious Diseases",
        "National Institute of Emerging and Infectious Diseases"
      ],
      answer: "National Institute of Allergy and Infectious Diseases"
    },
    {
      question: "Which among the following is not an immediate emerging threat of viral infection in India?",
      options: [
        "Rotavirus",
        "Avian Influenza H7N9",
        "Yellow fever virus",
        "Cyclo-virus"
      ],
      answer: "Rotavirus"
    },
    {
      question: "Human behaviour comes under which of the players in the disease emergence?",
      options: [
        "Host",
        "Agent",
        "Environment",
        "All of the above"
      ],
      answer: "Host"
    },
    {
      question: "Approximately what percentage of emerging infections originate from animals?",
      options: [
        "25%",
        "50%",
        "75%",
        "85%"
      ],
      answer: "75%"
    },
    {
      question: "Which method for risk assessment is used when there is a lack of necessary data?",
      options: [
        "Expert Consultation method",
        "Delphi method",
        "Analytic hierarchy process",
        "Risk matrix method"
      ],
      answer: "Analytic hierarchy process"
    },
    {
      question: "The method through which several rounds of enquiries for expert opinion is carried out mostly through anonymous forms/questionnaires is called?",
      options: [
        "Opinion poll",
        "Risk matrix",
        "Analytic hierarchy",
        "Delphi"
      ],
      answer: "Delphi"
    },
    {
      question: "Which among the following are factors contributing to disease emergence?",
      options: [
        "Climate change",
        "Urbanization",
        "Displacement",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Virus transmitted from a wild animal to mosquito which then transmits it to a human host. This is an example of which kind of zoonotic spillover?",
      options: [
        "Direct Spillover",
        "Intermediate by vertebrate",
        "Intermediate by invertebrate",
        "Environment Spillover"
      ],
      answer: "Intermediate by invertebrate"
    },
    {
      question: "Mechanism of pathogen crossover across the species depends on",
      options: [
        "A)Distribution and intensity of infection in reservoir hosts",
        "B) Pathogen release from reservoir hosts",
        "Only A",
        "Both A & B"
      ],
      answer: "Both A & B"
    },
    {
      question: "Which of the following are called the Barriers in the mechanism of Pathogen spillover?",
      options: [
        "Pathogen prevalence",
        "Human Exposure",
        "Reservoir Distribution",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "What is the full form of NVBDCP?",
      options: [
        "National Vector Borna Disease Control Program",
        "National Viral Borne Disease Control Program",
        "National Vector Borne Disease Control Program",
        "National Vector Borne Disease Cell Program"
      ],
      answer: "National Vector Borne Disease Control Program"
    },
    {
      question: "New era of Infectious diseases is aided by?",
      options: [
        "Globalisation",
        "Urbanization",
        "Climate change",
        "All the above"
      ],
      answer: "All the above"
    },
    {
      question: "Whole genome sequencing",
      options: [
        "Divides the organism into small genetic codes",
        "Lays out the entire nucleotide sequence and get a full genetic code of a particular organism",
        "Uses electron microscope for detailed visualization",
        "None of the above"
      ],
      answer: "Lays out the entire nucleotide sequence and get a full genetic code of a particular organism"
    },
    {
      question: "Most important use of Whole Genome Sequencing in Public Health Surveillance includes",
      options: [
        "Rapid detection of pathogen variants",
        "Tracking emerging variants",
        "Animal-human crossover of pathogen",
        "All the above"
      ],
      answer: "All the above"
    },
    {
      question: "Government of India constituted a National Apical Advisory Committee in the year?",
      options: [
        "1992",
        "1993",
        "1994",
        "1995"
      ],
      answer: "1995"
    },
    {
      question: "Which of the following statements is true for pathogen crossover?",
      options: [
        "Pathogen must overcome a series of barriers to transmit from one species to another",
        "Spillover of some pathogens requires that gaps (depicted as holes) in all of the barriers align within a narrow window in space and time",
        "If any of the barriers are impenetrable, spillover cannot occur",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Polio diease comes under which of the following time periods?",
      options: [
        "Pre-modern times",
        "New era times",
        "Past two or three decades",
        "None of the above"
      ],
      answer: "Pre-modern times"
    },
    {
      question: "What is the causative agent of Japanese encephalitis?",
      options: [
        "Influenza virus",
        "Japanese encephalitis virus (JEV)",
        "Dengue virus",
        "Herpes simplex virus"
      ],
      answer: "Japanese encephalitis virus (JEV)"
    },
    {
      question: "Air travel led to spread of the following infectious diseases except",
      options: [
        "2009 H1N1",
        "SARS",
        "COVID-19",
        "Rabies"
      ],
      answer: "Rabies"
    },
    {
      question: "What percentage of infectious diseases are estimated to be vector-borne?",
      options: [
        "Approximately 17%",
        "Around 25%",
        "Approximately 50%",
        "Around 75%"
      ],
      answer: "Approximately 17%"
    },
    {
      question: "Which of the following parasites causes zoonotic malaria infections in parts of south-east Asia?",
      options: [
        "Plasmodium berghei",
        "Plasmodium ovale",
        "Plasmodium malariae",
        "Plasmodium knowlesi"
      ],
      answer: "Plasmodium knowlesi"
    },
    {
      question: "What does MRSA stand for?",
      options: [
        "Multidrug-Resistant Streptococcus aureus",
        "Methicillin-Resistant Staphylococcus aureus",
        "Multidrug-Resistant Staphylococcus aureus",
        "Methicillin-Resistant Streptococcus aureus"
      ],
      answer: "Methicillin-Resistant Staphylococcus aureus"
    },
    {
      question: "Scrub typus is caused by which bacteria?",
      options: [
        "Rickettsia rickettsia",
        "Orientia tsutsugamushi",
        "Borrelia burgdorferi",
        "Anaplasma phagocytophilum"
      ],
      answer: "Orientia tsutsugamushi"
    },
    {
      question: "Which of the following infections are caused by pathogens associated with chronic diseases?",
      options: [
        "HBV",
        "EBV",
        "HPV",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "What is the vector for Crimean Congo Hemorrhagic Fever?",
      options: [
        "Aedes aegypti",
        "Aedes albopictus",
        "Argasid ticks",
        "Hyalomma ticks"
      ],
      answer: "Hyalomma ticks"
    },
    {
      question: "Which of the following factors is a biological driver of emerging infectious diseases?",
      options: [
        "Globalization",
        "Climate change",
        "Evolution of pathogens",
        "Urbanization"
      ],
      answer: "Evolution of pathogens"
    },
    {
      question: "Which of the following statements is false?",
      options: [
        "Vector-borne pathogens can spill over more readily within a disrupted ecosystem than within an intact, diverse ecosystem.",
        "Pigs act as amplifying hosts for Japanese Encephalitis Virus.",
        "The role of \"one-health\" approach and intersectoral cooperation for control of JE Virus is minimal since there is an effective human vaccine available.",
        "The most important vector for Japanese Encephalitis virus is Culex tritaeniorhynchus."
      ],
      answer: "The role of \"one-health\" approach and intersectoral cooperation for control of JE Virus is minimal since there is an effective human vaccine available."
    },
    {
      question: "Which of the following is true to Antimicrobial Stewardship Program?",
      options: [
        "There a set of Coordinated Interventions",
        "Ensure patient's optimal treatment",
        "Reduce inappropriate use of antibiotics",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "The Antimicrobial Resistance Surveillance and Research Network (AMRSN) initiative was launched in the year?",
      options: [
        "2013",
        "2018",
        "2020",
        "2021"
      ],
      answer: "2013"
    },
    {
      question: "What is Antibiotic Stewardship?",
      options: [
        "Promotion of antibiotic use in healthcare settings",
        "Restricting use of antibiotic in healthcare settings",
        "A coordinated effort to optimize the use of antibiotics to treat infections and reduce the development of antibiotic resistance.",
        "Encouraging over-the-counter sale of antibiotic"
      ],
      answer: "A coordinated effort to optimize the use of antibiotics to treat infections and reduce the development of antibiotic resistance."
    },
    {
      question: "Can self-medication of antibiotics be considered as a factor leading to Antimicrobial Resistance?",
      options: [
        "True",
        "False"
      ],
      answer: "True"
    },
    {
      question: "Antimicrobial Resistance affects the achievement of __ targets across 9 SDGs ?",
      options: [
        "15",
        "5",
        "18",
        "10"
      ],
      answer: "18"
    },
    {
      question: "The Food Safety and Standards Act, 2006 received the assent of the President on",
      options: [
        "1st May 2007",
        "23rd August, 2006",
        "15th April 2009",
        "11th June 2006"
      ],
      answer: "23rd August, 2006"
    },
    {
      question: "Which of these elements are included in Food Safety?",
      options: [
        "Preparation of food",
        "Storage of food",
        "Prevention of foodborne illness",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "In which year was the Food Safety and Standards Act enacted in India?",
      options: [
        "2009",
        "2006",
        "2010",
        "2005"
      ],
      answer: "2006"
    },
    {
      question: "Foodborne illnesses caused by bacteria, viruses, parasites, and fungi are examples of_____",
      options: [
        "Physical hazards",
        "Chemical hazards",
        "Biological hazards",
        "Radiological hazards"
      ],
      answer: "Biological hazards"
    },
    {
      question: "Which of these elements is NOT a food borne pathogen?",
      options: [
        "Virus",
        "Bacteria",
        "Fungi",
        "Parasite"
      ],
      answer: "Fungi"
    },
    {
      question: "Why is One Health important?",
      options: [
        "To tackle climate and environment changes.",
        "To tackle zoonotic diseases.",
        "To tackle rising antimicrobial resistance",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which of these is not a part of 'One Health'?",
      options: [
        "Animal Health",
        "Planetary Health",
        "Environment",
        "Human Health"
      ],
      answer: "Planetary Health"
    },
    {
      question: "OHHLEP stands for?",
      options: [
        "One Health Huge-Level Expert Panel",
        "One Health High-Level Expert Panel",
        "One Health Healthy-Level Expert Panel",
        "One Health Human-Level Expert Panel"
      ],
      answer: "One Health High-Level Expert Panel"
    },
    {
      question: "KFD is the tick-borne haemorrhagic fever of human, and was first reported in",
      options: [
        "Karnataka",
        "Andhra Pradesh",
        "Kerala",
        "Tamil Nadu"
      ],
      answer: "Karnataka"
    },
    {
      question: "Q fever is caused by",
      options: [
        "Plasmodium vivax",
        "Mycobacterium tuberculosis",
        "Yersinia pestis",
        "Coxiella burnetii"
      ],
      answer: "Coxiella burnetii"
    },
    {
      question: "WHO identifies five phases of infectious disease emergence. Which of the following are in the correct order?",
      options: [
        "Pre-emergence, Epidemic, Emergence, Localised Transmission, Pandemic",
        "Pre-emergence, Emergence, Localised Transmission, Pandemic, Epidemic",
        "Pre-emergence, Emergence, Localised Transmission, Epidemic, Pandemic",
        "Pre-emergence, Pandemic, Emergence, Localised Transmission, Epidemic"
      ],
      answer: "Pre-emergence, Emergence, Localised Transmission, Epidemic, Pandemic"
    },
    {
      question: "Which of the following are examples of zoonotic diseases?",
      options: [
        "Rabies",
        "Anthrax",
        "Ebola",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which of the following organization is not a part of the WHO -Quadripartite One Health Joint Plan of Action (OH-JPA) formed in 2021 to integrate work on human, animal and environmental health?",
      options: [
        "Food and Agriculture Organization (FAO)",
        "United Nations Development Programme (UNDP)",
        "World Organisation for Animal Health (WOAH)",
        "UN Environment Programme (UNEP)"
      ],
      answer: "United Nations Development Programme (UNDP)"
    },
    {
      question: "Which of the following strategies are needed for successful implementation of multi-sectoral One Health Initiatives?",
      options: [
        "Strong political will and commitment",
        "Inter-sectoral collaboration",
        "Adequate funding",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which is NOT a strategy to ensure multi-sectoral collaboration for One Health initiatives?",
      options: [
        "Policy Coordination",
        "Development of integrated indicators and safeguards",
        "Integrated surveillance and monitoring",
        "Vaccine nationalism"
      ],
      answer: "Vaccine nationalism"
    },
    {
      question: "NOHP-PCZ full form is?",
      options: [
        "National One Health Programme for Prevention and Control of Zoonoses",
        "National One Health Parameter for Prevention and Control of Zoonoses",
        "National One Health Programme for Precaution and Control of Zoonoses",
        "National One Health Programme for Prevention and Combat of Zoonoses"
      ],
      answer: "National One Health Programme for Prevention and Control of Zoonoses"
    },
    {
      question: "______ approach to health promotion aims to improve and promote health by addressing socioeconomic and environmental determinants of health within the community.",
      options: [
        "Behavior changes",
        "Community development",
        "Biomedical",
        "None of these"
      ],
      answer: "Community development"
    },
    {
      question: "First outbreak of Nipah virus was reported in which year?",
      options: [
        "2015",
        "2017",
        "2018",
        "2021"
      ],
      answer: "2018"
    },
    {
      question: "Which of the following is not a principle of community engagement process?",
      options: [
        "Equity",
        "Trust",
        "Direction",
        "Autonomy"
      ],
      answer: "Direction"
    },
    {
      question: "In the levels of community participation, 'Community-owned' is which level?",
      options: [
        "Level 1",
        "Level 2",
        "Level 3",
        "Level 4"
      ],
      answer: "Level 4"
    },
    {
      question: "Does community engagement strategy address concerns, issues, problems and challenges such as behavioral, cultural, determinants of health system etc.",
      options: [
        "True",
        "False"
      ],
      answer: "True"
    },
    {
      question: "What are the reasons for 'One Health' attention in India?",
      options: [
        "21.54% of area is forested of the country",
        "Increasing consumption of antibiotics",
        "Huge wet market sector and industrial animal trade",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "____________ refers to the process of developing relationships that enable stakeholders to work together to address health-related issues and promote well-being to achieve positive health impact and outcomes?",
      options: [
        "Social relationships",
        "Community engagement",
        "Community participation",
        "Socialization"
      ],
      answer: "Community engagement"
    },
    {
      question: "_______ is a single person, group, or organization involved in or affected by the development and completion of a program.",
      options: [
        "Shareholder",
        "Stakeholder",
        "Donor",
        "None of the above"
      ],
      answer: "Stakeholder"
    },
    {
      question: "What are the core domains of One health?",
      options: [
        "Emerging and re-emerging Zoonotic Diseases",
        "Anti-Microbial Resistance",
        "Biodiversity conservation",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "In which type of Epidemiological studies does the investigator assign the exposure?",
      options: [
        "Randomized controlled trials",
        "Cohort studies",
        "Descriptive studies",
        "Case-Control studies"
      ],
      answer: "Randomized controlled trials"
    },
    {
      question: "Choice of the appropriate study design depends on?",
      options: [
        "Research question",
        "Funds availability",
        "Characteristics of the exposure and disease",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "What is a disaster?",
      options: [
        "A joyful and unexpected event",
        "An unfortunate event that causes significant damage or loss",
        "A planned event for entertainment",
        "A minor inconvenience"
      ],
      answer: "An unfortunate event that causes significant damage or loss"
    },
    {
      question: "Which one of the following is NOT an observational study design?",
      options: [
        "Ecological study",
        "Cluster randomized trial",
        "Case-control study",
        "Cohort study"
      ],
      answer: "Cluster randomized trial"
    },
    {
      question: "What is a common immediate effect of a natural disaster on a community?",
      options: [
        "Economic growth",
        "Increased tourism",
        "Infrastructure damage",
        "Social harmony"
      ],
      answer: "Infrastructure damage"
    },
    {
      question: "Which type of study design is to be adopted for testing the hypothesis?",
      options: [
        "Case –Control study",
        "Case study",
        "Case Report",
        "Ecological study"
      ],
      answer: "Case –Control study"
    },
    {
      question: "What does RRS stand for in the context of emergency medical care?",
      options: [
        "Radiology Reporting System",
        "Rapid Recovery System",
        "Remote Resuscitation System",
        "Rapid Response System"
      ],
      answer: "Rapid Response System"
    },
    {
      question: "In which of the study designs, data is collected at a single point of time?",
      options: [
        "Cohort study",
        "Cross-sectional study",
        "Case-control study",
        "None of the above"
      ],
      answer: "Cross-sectional study"
    },
    {
      question: "Randomization is a key feature of?",
      options: [
        "Randomized Controlled Trial",
        "Cohort studies",
        "Case reports",
        "Case-Control studies"
      ],
      answer: "Randomized Controlled Trial"
    },
    {
      question: "Bhopal Gas Tragedy is a kind of",
      options: [
        "Natural disaster",
        "Man-made disaster",
        "Both natural & man-made disaster",
        "None of the above"
      ],
      answer: "Man-made disaster"
    },
    {
      question: "'Name of a city' will be which of the following variables?",
      options: [
        "Nominal",
        "Ordinal",
        "Discrete",
        "Continuous"
      ],
      answer: "Nominal"
    },
    {
      question: "Of the following sampling methods, which is based on equal probability?",
      options: [
        "Convenience sampling",
        "Quota sampling",
        "Simple random sampling",
        "Snowball sampling"
      ],
      answer: "Simple random sampling"
    },
    {
      question: "Which of the following is a drawback of field-based study?",
      options: [
        "Resource intensive",
        "Time taking",
        "Administration cost",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which of the following is a non-probability sampling method?",
      options: [
        "Simple random sampling",
        "Systematic sampling",
        "Cluster sampling",
        "Judgment sampling"
      ],
      answer: "Judgment sampling"
    },
    {
      question: "__________ has both quantitative and qualitative phases toanswera researchquestionwhere one type of data informs the other.",
      options: [
        "Mixed research",
        "Mixed method research",
        "Mixed model research",
        "Multimethod research"
      ],
      answer: "Mixed method research"
    },
    {
      question: "Which if the following parameter is a proportion?",
      options: [
        "Incidence",
        "Prevalence",
        "All of the above",
        "None of the above"
      ],
      answer: "Prevalence"
    },
    {
      question: "Qualitative data collected first in:",
      options: [
        "An explanatory design",
        "Triangulation",
        "An exploratory design",
        "Secondary data analysis"
      ],
      answer: "An exploratory design"
    },
    {
      question: "Probability of rejecting null hypothesis when it is false is known as_________.",
      options: [
        "Type I error",
        "Confidence Interval",
        "Power",
        "Power Type-II"
      ],
      answer: "Power"
    },
    {
      question: "If you have a target population of 24 individuals and you need 6 people, using the Systematic Sampling method, what will be the sampling interval?",
      options: [
        "3",
        "4",
        "6",
        "5"
      ],
      answer: "4"
    },
    {
      question: "In the 'Health Policy Triangle', which of the following statement is TRUE?",
      options: [
        "The Content interacts with the Process",
        "The Context interacts with the Process and Content",
        "All three interact with each other",
        "There is no interaction between the three actors"
      ],
      answer: "All three interact with each other"
    },
    {
      question: "Which of the following diseases / health conditions can One Health approach be applied to?",
      options: [
        "Dengue",
        "Snakebite",
        "Brucellosis",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Situational, cultural and structural factors comes under which of the following actors under the Health Policy Triangle?",
      options: [
        "Content",
        "Context",
        "Process",
        "None of the above"
      ],
      answer: "Context"
    },
    {
      question: "Agenda Setting is a part of Health Policy Triangle.",
      options: [
        "True",
        "False"
      ],
      answer: "True"
    },
    {
      question: "Policy is 'the sum total of government action from signals of intent to the final outcomes'. This definition is given by",
      options: [
        "John Mearsheimer",
        "Paul Cairney",
        "Robert Abelson",
        "Alan Abramowitz"
      ],
      answer: "Paul Cairney"
    },
    {
      question: "Policy adoption comes before policy implementation.",
      options: [
        "True",
        "False"
      ],
      answer: "True"
    },
    {
      question: "Which of the following statements is not True in case of multi-sectoral framings of One Health?",
      options: [
        "Eco health and one health are one and the same",
        "Eco health and one health are similar but not same",
        "Planetary health and eco health are related but not same",
        "Planetary health and one health are similar but not same"
      ],
      answer: "Eco health and one health are one and the same"
    },
    {
      question: "Which of the following approaches can enable one health initiatives?",
      options: [
        "offer training in interpersonal skills",
        "restructure how researchers are evaluated and rewarded",
        "decentralised and unified funding across government departments to improve the health of animals, humans, and the environment in local communities",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which of the following is part of the Health Policy Triangle?",
      options: [
        "Agenda Setting",
        "Policy Adoption",
        "Policy Evaluation",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "'Excessive focus on laboratory and surveillance aspects of One Health' is a challenge for implementing One Health approach.",
      options: [
        "True",
        "False"
      ],
      answer: "True"
    },
    {
      question: "_______'s ladder shows the Degree of Citizen Participation in the chapter for community engagement.",
      options: [
        "Albert's",
        "Pavlo's",
        "Arnstein's",
        "Arnstan's"
      ],
      answer: "Arnstein's"
    },
    {
      question: "Which of the following is NOT an example of 'New Media'?",
      options: [
        "Newspapers",
        "Youtube",
        "E-book",
        "Web-based Blogs"
      ],
      answer: "Newspapers"
    },
    {
      question: "Which of the following is NOT a principle of community engagement?",
      options: [
        "Trust",
        "Equity",
        "Leadership",
        "Autonomy"
      ],
      answer: "Leadership"
    },
    {
      question: "Which of these are the enablers of community engagement?",
      options: [
        "Governance",
        "Leadership",
        "Decision making",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Feedback loop is a two-way process of communication.",
      options: [
        "True",
        "False"
      ],
      answer: "True"
    },
    {
      question: "What does IEC stand for?",
      options: [
        "Information, education, and communications",
        "Information, education, and community",
        "Involve and engage the community",
        "Instruct, enlighten, and collaborate"
      ],
      answer: "Information, education, and communications"
    },
    {
      question: "What does the \"A\" in CUBE-A trick for an effective key message stand for?",
      options: [
        "Attractive",
        "Alarming",
        "Audience-focussed",
        "Aggressive"
      ],
      answer: "Audience-focussed"
    },
    {
      question: "How can you assess the impact of your social media efforts?",
      options: [
        "Asking all followers",
        "Counting the number of posts made",
        "Evaluate the outcome of your campaign against the intended outcome",
        "Comparing your posts with other accounts"
      ],
      answer: "Evaluate the outcome of your campaign against the intended outcome"
    },
    {
      question: "How can media help in promoting One Health?",
      options: [
        "Behavior Change",
        "Reinforcement",
        "Change in social norms",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "Which approach is the most desirable but most difficult community engagement approach among the following?",
      options: [
        "Community-oriented",
        "Community-based",
        "Community-managed",
        "Community-owned"
      ],
      answer: "Community-owned"
    },
    {
      question: "A sampling frame is?",
      options: [
        "The summary of various techniques of sampling",
        "An outline of all the clusters included in the survey",
        "List of all units in the population from which a sample will be selected",
        "The wooden frame to display tables of random numbers"
      ],
      "correctAnswer": "List of all units in the population from which a sample will be selected"
    }
   

  
];

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function App() {
  const [startTime, setStartTime] = useState(null);
  const [pastScores, setPastScores] = useState(() => JSON.parse(localStorage.getItem("quizScores")) || []);
  const [endTime, setEndTime] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizMode, setQuizMode] = useState("welcome"); // welcome, quiz, results
  const [questionsCount, setQuestionsCount] = useState(20);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Load past scores from localStorage
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      setPastScores(JSON.parse(savedScores));
    }
  }, []);

  const startQuiz = (count = 20) => {
    // Take random subset of questions based on count
    const shuffledQuestions = shuffle([...rawQuestions]);
    setQuestions(shuffledQuestions.slice(0, count));
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setStartTime(Date.now());
    setEndTime(null);
    setQuizMode("quiz");
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    const correctAnswer = questions[currentQuestion].answer;
    const isAnswerCorrect = selectedOption === correctAnswer;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      setUserAnswers([...userAnswers, selectedOption]);
      setSelectedOption(null);
      
      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
      } else {
        setShowResults(true);
        const end = Date.now();
        setEndTime(end);
        setQuizMode("results");
        
        const newEntry = {
          score: score + (isAnswerCorrect ? 1 : 0),
          total: questions.length,
          time: Math.round((end - startTime) / 1000),
          date: new Date().toLocaleString()
        };
        
        const updatedScores = [newEntry, ...pastScores];
        setPastScores(updatedScores);
        localStorage.setItem("quizScores", JSON.stringify(updatedScores));
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setQuizMode("welcome");
  };

  const score = userAnswers.reduce((acc, ans, index) => {
    return ans === questions[index].answer ? acc + 1 : acc;
  }, 0);

  const wrongAnswers = questions.filter((q, i) => userAnswers[i] !== q.answer);

  // Calculate progress percentage
  const progressPercentage = (currentQuestion / questions.length) * 100;
  
  const renderQuizSection = () => {
    if (quizMode === "welcome") {
      return (
        <div className="welcome-screen">
          <h2>Welcome to ONE HEALTH  Quiz</h2>
          <p>Test your knowledge with questions on ONE HEALTH</p>
          
          <div className="quiz-options">
            <div className="questioncount">
              <h3>How many questions?</h3>
              <br></br>
              <div className="count-buttons">
                <button 
                  className={questionsCount === 10 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(10)}
                >
                  10
                </button>
                <button 
                  className={questionsCount === 20 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(20)}
                >
                  20
                </button>
                <button 
                  className={questionsCount === 50 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(50)}
                >
                  50
                </button>
                <button 
                  className={questionsCount === rawQuestions.length ? "selected" : ""} 
                  onClick={() => setQuestionsCount(rawQuestions.length)}
                >
                  All ({rawQuestions.length})
                </button>
              </div>
            </div>
            <br></br>
            <button className="start-button" onClick={() => startQuiz(questionsCount)}>
              Start Quiz
            </button>
          </div>
          
          {pastScores.length > 0 && (
            <div className="past-scores-preview">
              <h3>Previous Best: {Math.max(...pastScores.map(score => (score.score/score.total) * 100)).toFixed(0)}%</h3>
              <p>You've taken this quiz {pastScores.length} times</p>
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "quiz") {
      return (
        <div className="quiz-box">
          <div className="quiz-header">
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          
          {questions[currentQuestion] && (
            <div className={`question-container ${showFeedback ? (isCorrect ? "correct-feedback" : "incorrect-feedback") : ""}`}>
              <h2 className="question-text">{questions[currentQuestion].question}</h2>
              
              <div className="options-container">
                {questions[currentQuestion].options.map((opt) => (
                  <button
                    key={opt}
                    className={`option-button ${selectedOption === opt ? "selected" : ""}`}
                    onClick={() => handleOptionSelect(opt)}
                    disabled={showFeedback}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              
              {showFeedback && (
                <div className="feedback">
                  {isCorrect ? (
                    <div className="correct">Correct!</div>
                  ) : (
                    <div className="incorrect">
                      
                      <h>{questions[currentQuestion].answer} </h>
                    </div>
                  )}
                </div>
              )}
              
              {!showFeedback && (
                <div className="control-buttons">
                  <button 
                    className="hint-button"
                    onClick={() => setShowHint(!showHint)}
                  >
                    {showHint ? "Hide Hint" : "Need a Hint?"}
                  </button>
                  
                  <button
                    className={`submit-button ${selectedOption ? "active" : ""}`}
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Submit Answer
                  </button>
                </div>
              )}
              
              {showHint && (
                <div className="hint-box">
                    <h>{questions[currentQuestion].answer} </h>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "results") {
      const percentage = (score / questions.length) * 100;
      let feedback;
      
      if (percentage >= 90) {
        feedback = "Outstanding! You're an expert in Conservation Economics!";
      } else if (percentage >= 70) {
        feedback = "Great job! You have a solid understanding of the subject.";
      } else if (percentage >= 50) {
        feedback = "Good effort! Keep learning to improve your knowledge.";
      } else {
        feedback = "You might want to review the material again.";
      }
      
      return (
        <div className="result-box">
          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <h2 className="score-percentage">{percentage.toFixed(1)}%</h2>
          </div>
          
          <p className="score-feedback">{feedback}</p>
          
          {startTime && endTime && (
            <p className="time-taken">
              Time Taken: {(() => {
                const totalSeconds = Math.round((endTime - startTime) / 1000); 
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
              })()}
            </p>
          )}
          
          {wrongAnswers.length > 0 && (
            <div className="wrong-answers">
              <h3>Questions to Review:</h3>
              <div className="wrong-answers-list">
                {wrongAnswers.map((q, i) => (
                  <div key={i} className="wrong-answer-item">
                    <div className="question">{q.question}</div>
                    <div className="answers">
                      <div className="user-answer">
                        Your Answer: <span className="incorrect">{userAnswers[questions.indexOf(q)]}</span>
                      </div>
                      <div className="correct-answer">
                        Correct Answer: <span className="correct">{q.answer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="result-buttons">
            <button className="restart-button" onClick={restartQuiz}>
              Back to Menu
            </button>
            <button className="retry-button" onClick={() => startQuiz(questions.length)}>
              Try Again
            </button>
          </div>
          
          <div className="past-scores">
            <h3>Your History:</h3>
            <div className="scores-table">
              <div className="table-header">
                <div className="date-cell">Date</div>
                <div className="score-cell">Score</div>
                <div className="time-cell">Time</div>
              </div>
              {pastScores.slice(0, 5).map((entry, idx) => (
                <div key={idx} className="table-row">
                  <div className="date-cell">{entry.date}</div>
                  <div className="score-cell">{entry.score}/{entry.total} ({((entry.score/entry.total)*100).toFixed(0)}%)</div>
                  <div className="time-cell">{entry.time}s</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="quiz-app-container">
      <header>
        <h1>ONE HEALTH Quizz</h1>
      </header>
      <main>
        {renderQuizSection()}
      </main>
      <footer>
        <p>ONE HEALTH </p>
        <div className="disclaimer">
        <p><em>Note: This quiz was generated using ChatGPT for educational and revision purposes. We are not responsible for any incorrect answers. Please verify with official sources when in doubt.</em></p>
      </div>
      </footer>
      
    </div>
    
  );
}

export default App;