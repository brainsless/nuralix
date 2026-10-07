// Text of the legal pages, carried over word for word from nuralix.ai. A paragraph is a list of
// plain strings and { href, label } links.

export const privacy = {
  title: "Privacy Policy",
  description: "How Nuralix collects, uses, and protects your health and personal data.",
  updated: "Last updated: September 13, 2026",
  sections: [
    {
      title: "1. Introduction",
      paragraphs: [
        [
          "Nuralix (\"we,\" \"our,\" or \"us\") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform."
        ]
      ]
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        [
          "We may collect personal information you provide directly, such as your name, email address, and health-related data you choose to share. We also collect device and usage data automatically through wearables, connected devices, and platform interactions."
        ]
      ]
    },
    {
      title: "3. Marketing-site analytics",
      paragraphs: [
        [
          "On nuralix.ai, we use PostHog to count visits to page paths and use of site calls to action. This aggregate measurement does not use cookies, browser storage, campaign attribution, autocapture, or session replay."
        ],
        [
          "The analytics event payload includes only the page path, the selected call-to-action details, and a random identifier held only in memory for the current page load. It cannot recognise a visitor across visits. We do not send health information, account credentials, messages, contact details, query-string values, or full referrer URLs. Analytics collection respects a browser's Do Not Track setting."
        ]
      ]
    },
    {
      title: "4. How We Use Your Information",
      paragraphs: [
        [
          "We use Meta Pixel on public pages of nuralix.ai and app.nuralix.ai for advertising measurement. It records PageView events and browser information and may use Meta cookies. Automatic event configuration is disabled. Private health screens and pages with query strings use domain-only image beacons instead of Meta's JavaScript SDK; these beacons do not include page paths, query strings, referrer URLs, form contents, or account details. Requests also include standard network information such as IP address."
        ],
        [
          "We use information only for the separate purposes you choose, such as Nora personalization, document processing, family sharing, or model improvement. Each purpose has its own controls and revocation effect. We do not sell your health data."
        ]
      ]
    },
    {
      title: "5. Data Security",
      paragraphs: [
        [
          "We implement industry-standard encryption and security measures to protect your data. Access to personal health information is restricted to authorized individuals you designate within your family circle."
        ]
      ]
    },
    {
      title: "6. Data Sharing",
      paragraphs: [
        [
          "We do not share your personal health data with third parties for marketing purposes. Data may be shared with healthcare providers only at your explicit request and with your consent."
        ]
      ]
    },
    {
      title: "7. Your Rights",
      paragraphs: [
        [
          "You have the right to access, correct, or delete your personal data at any time. You may also request a copy of your data or withdraw consent for data processing by contacting us."
        ]
      ]
    },
    {
      title: "8. Data Retention and Account Deletion",
      paragraphs: [
        [
          "We store and retain personal information, including account details, health and wellness records, uploaded content, and information from connected services, while your account is active and as needed to provide the features you request. Retention depends on the type of information, the purpose for which it was collected, whether you request deletion, and applicable legal obligations. We do not retain every category of data for the same period."
        ],
        [
          "You can request account deletion in the app under Profile > Privacy > Delete Account, or contact ",
          {
            href: "mailto:hello@nuralix.ai",
            label: "hello@nuralix.ai"
          },
          " for help with a deletion request. Account deletion removes your account and associated operational health data from active application tables. Uninstalling the app alone does not delete information stored by Nuralix."
        ],
        [
          "Limited records may remain after account deletion when needed to comply with legal or regulatory obligations, maintain security and audit records, prevent fraud, or resolve disputes. We retain these records for the period needed for that purpose or required by applicable law, restrict access to them, and do not use them to continue personalized app features. Residual encrypted backup copies may remain until the applicable backup-retention cycle completes; deletion from active systems does not mean every backup copy is erased immediately."
        ],
        [
          "Support communications, transaction records, diagnostics, and analytics are retained only as long as reasonably necessary for their stated purpose, dispute resolution, security, or applicable legal requirements. Service-provider retention also depends on the relevant service configuration and provider obligations. Deleting your Nuralix account does not automatically cancel an Apple App Store or Google Play subscription; manage those subscriptions through the store where you purchased them."
        ]
      ]
    },
    {
      title: "9. Contact Us",
      paragraphs: [
        [
          "If you have questions about this Privacy Policy, please contact us at ",
          {
            href: "mailto:hello@nuralix.ai",
            label: "hello@nuralix.ai"
          },
          "."
        ]
      ]
    }
  ]
};

export const terms = {
  title: "Terms of Service",
  description: "The terms that govern your use of Nuralix, including eligibility, acceptable use, and disclaimers.",
  updated: "Last updated: March 17, 2026",
  sections: [
    {
      title: "1. Acceptance of Terms",
      paragraphs: [
        [
          "By accessing or using Nuralix, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform."
        ]
      ]
    },
    {
      title: "2. Description of Service",
      paragraphs: [
        [
          "Nuralix is a health intelligence platform that builds digital health twins using DNA data, wearable signals, and health inputs. Our AI agent, Nora, provides health state explanations, suggestions, and automated task management. Nuralix is a support tool and does not provide medical diagnosis, treatment, or emergency services."
        ]
      ]
    },
    {
      title: "3. User Accounts",
      paragraphs: [
        [
          "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to update it as needed. You must be at least 18 years old to create an account."
        ]
      ]
    },
    {
      title: "4. Acceptable Use",
      paragraphs: [
        [
          "You agree not to misuse the platform, attempt to access other users' data without authorization, or use Nuralix for any unlawful purpose. You may not reverse-engineer, decompile, or attempt to extract the source code of our software."
        ]
      ]
    },
    {
      title: "5. Health Disclaimer",
      paragraphs: [
        [
          "Nuralix is designed to support awareness, coordination, and proactive monitoring. It does not replace licensed medical care, diagnosis, or emergency services. Always consult a qualified healthcare professional for medical decisions."
        ]
      ]
    },
    {
      title: "6. Intellectual Property",
      paragraphs: [
        [
          "All content, features, and functionality of Nuralix are owned by Nuralix and are protected by copyright, trademark, and other intellectual property laws."
        ]
      ]
    },
    {
      title: "7. Limitation of Liability",
      paragraphs: [
        [
          "Nuralix shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount you paid for the service in the twelve months preceding the claim."
        ]
      ]
    },
    {
      title: "8. Contact",
      paragraphs: [
        [
          "For questions regarding these Terms, contact us at ",
          {
            href: "mailto:nour@nuralix.ai",
            label: "nour@nuralix.ai"
          },
          "."
        ]
      ]
    }
  ]
};
