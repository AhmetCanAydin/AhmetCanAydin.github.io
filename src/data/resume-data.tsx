import {
  ClevertechLogo,
  ParabolLogo,
} from "@/images/logos";
import { LinkedInIcon, } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ahmet Can Aydın",
  initials: "ACA",
  location: "İstanbul, Türkiye",
  locationLink: "https://www.google.com/maps/place/istanbul",
  about:
    "Trademark Assistant",
  summary:
    "As a Trademark Assistant, I have successfully Kept track of YILDIZ HOLDING’s global trademark portfolio and handled proceedings for applications and renewals before the Turkish Patent and Trademark Office.",
    
  avatarUrl: "https://i.hizliresim.com/34lqs0a.png",
  personalWebsiteUrl: "",
  contact: {
    email: "ahmetcanyos@gmail.com",
    tel: "+905399165661",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmetcanaydin/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Yıldız Technical University",
      degree: "Bachelor's Degree in Political Science and International Relations",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Yıldız Holding",
      link: "https://www.yildizholding.com.tr/tr",
      badges: [],
      title: "Trademark Assistant",
      logo: ParabolLogo,
      start: "July 2023",
      end: "December 2023",
      description:
        "Kept track of YILDIZ HOLDING’s global trademark portfolio and handled proceedings for applications and renewals before the Turkish Patent and Trademark Office. Prepared trademark & industrial design application, opposition, appeal and response petitions. Conducted to examine the official trademark bulletin, detected the third parties’ similar trademark applications, and have informed YILDIZ HOLDING’s subsidiaries together with legal advice. Provided comprehensive legal advice for possible actions of companies’ internal departments and handled proceedings for renewals, assignments, recordal of merger or any other change at the side of applicant/registrant. Focused on prosecution matters including management of portfolios and administrative proceedings before the Turkish Patent and Trademark Office and WIPO",
    },
    {
      company: "Asya Yazılım",
      link: "https://www.asyalogic.com/",
      badges: [""],
      title: "Sports Data Journalist",
      logo: ClevertechLogo,
      start: "April 2021",
      end: "October 2021",
      description:
        "Collected and applied data which are gathered by tracking simultaneous live sporting events. Worked as also a quality controller for the events mentioned above.",
    }
  ],
  skills: [
    "Microsoft Office (Excel, Powerpoint, Word",
    "VEBİZ",
    "Thomson IP Manager (MDC - Clarivate)",
    "B Level Driver’s License",
  ],
  projects:[] 
} as const;
