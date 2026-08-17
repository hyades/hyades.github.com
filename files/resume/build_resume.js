const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, LevelFormat, convertInchesToTwip,
  Table, TableRow, TableCell, WidthType, TableLayoutType
} = require("docx");
const fs = require("fs");

const DATA = {
  name: "Aayush Ahuja",
  contact: "London, UK  ·  aayushahuja@gmail.com  ·  +44-7917091253  ·  linkedin.com/in/aayushahuja",
  summary: "Staff software engineer (IC6) with 10+ years building large-scale detection, ML, and agentic systems. Deep experience across distributed data infrastructure, ML/LLM infrastructure, and safety-critical systems, with a strong track record of technical leadership across large, cross-functional orgs. Currently leading the adoption of autonomous multi-agent systems for large-scale system monitoring, investigation, and remediation across multiple teams at Meta.",
  experience: [
    {
      title: "Software Engineer, IC6 — Integrity",
      org: "Meta",
      location: "London, UK",
      dates: "Feb 2019 – Present",
      subLine: "Technical direction across large-scale systems, ML infrastructure, and autonomous agent platforms; technical scope spans 30+ engineers",
      bullets: [
        "Leading design and delivery of a cross-org autonomous multi-agent self-learning system for large-scale issue discovery, adopted across 13+ teams: agents search and discover problems in production systems, fan out across related surfaces, perform root-cause analysis, and propose long-term fixes; also used to respond to the majority of high-profile escalations from governments and press. Implemented multiple novel recursive self-improvement techniques and memory to make the agent more effective.",
        "One of the first engineers on Meta's personalized-agent safety initiative (Project Hatch, MSL); designed and shipped the initial safety/detection layer — prompt-injection defense, high-risk-harm checks, LLM-based review, human-in-the-loop escalation — during the project's ~1.5-month bootstrap phase, before returning to core integrity work",
        "Built and led multiple LLM-based scam-ad detection launches, including the inference infrastructure powering them",
        "TL of Ads Integrity domain — led cross-org collaborations on shared detection systems and signal-sharing across the payment fraud domain, driving a >$200M/year reduction in payment fraud and a cumulative ~15-20% reduction in scam reports across initiatives",
        "Redesigned ML infrastructure (async processing and feature availability): cut error rates from 3-4% to 0.01% and increased enforcement recall by 1000%",
        "Expanded integrity engineering frameworks and skills — adopted by 1,000+ engineers; led cross-org sessions on AI-assisted engineering productivity for 200+ engineers, and trained 150+ engineers to be AI-native as part of an org-wide AI4Productivity initiative",
      ],
    },
    {
      title: "Software Engineer II, Data Platform & Infrastructure",
      org: "Uber",
      location: "Bangalore, India",
      dates: "Jun 2018 – Jan 2019",
      bullets: [
        "Scaled a Presto/Hive query gateway to 5,000+ weekly active users and 100k+ daily queries; built rate limiting, load balancing, and phased-rollout tooling for Hive deployments",
      ],
    },
    {
      title: "Software Engineer, Spam Detection",
      org: "Media.net (Directi)",
      location: "Bangalore, India",
      dates: "Aug 2015 – Jun 2018",
      bullets: [
        "Designed and built data pipelines and statistical/ML models (high-frequency, affiliation, co-visitation, crowd-sourcing, clustering) to detect spam and fraud across a large ad network processing 50M+ data points daily; led and mentored a team of 3 engineers",
      ],
    },
    {
      title: "Member of Technical Staff, EDW",
      org: "Groupon",
      location: "Chennai, India",
      dates: "Jul 2014 – Aug 2015",
      bullets: [
        "Built ETL pipeline tooling for a Teradata/HDFS enterprise data warehouse",
      ],
    },
  ],
  education: {
    text: "B.E. (Hons), Computer Science — BITS-Pilani, Pilani Campus",
    dates: "2010 – 2014",
  },
  skills: "Python  ·  LLM / agentic system design  ·  Distributed systems & data infrastructure  ·  ML infrastructure & evaluation  ·  Large-scale detection systems  ·  Cross-org technical leadership  ·  AI safety & red-teaming",
};

// ---------------------------------------------------------------------------
// DOCX
// ---------------------------------------------------------------------------

const NO_BORDER = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: NO_BORDER, bottom: NO_BORDER, left: NO_BORDER, right: NO_BORDER };

// Usable page width in twips: 12240 (page) - 900 (left margin) - 900 (right margin) = 10440
const ROLE_COL_LEFT = 7300;
const ROLE_COL_RIGHT = 3140;

const NAME_SIZE = 32;
const H1_SIZE = 22;
const BODY_SIZE = 21;
const SMALL_SIZE = 19;

function sectionHeadingDocx(text) {
  return new Paragraph({
    spacing: { before: 260, after: 120 },
    border: { bottom: { color: "888780", space: 2, style: BorderStyle.SINGLE, size: 6 } },
    children: [ new TextRun({ text, bold: true, size: H1_SIZE, color: "26215C" }) ],
  });
}

function roleHeadingDocx(title, org, dates) {
  return new Table({
    width: { size: ROLE_COL_LEFT + ROLE_COL_RIGHT, type: WidthType.DXA },
    columnWidths: [ROLE_COL_LEFT, ROLE_COL_RIGHT],
    layout: TableLayoutType.FIXED,
    borders: { ...NO_BORDERS, insideHorizontal: NO_BORDER, insideVertical: NO_BORDER },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: ROLE_COL_LEFT, type: WidthType.DXA },
            borders: NO_BORDERS,
            margins: { top: 0, bottom: 0, left: 0, right: 0 },
            children: [
              new Paragraph({
                spacing: { before: 160, after: 20 },
                children: [ new TextRun({ text: `${title} — ${org}`, bold: true, size: BODY_SIZE }) ],
              }),
            ],
          }),
          new TableCell({
            width: { size: ROLE_COL_RIGHT, type: WidthType.DXA },
            borders: NO_BORDERS,
            margins: { top: 0, bottom: 0, left: 0, right: 0 },
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { before: 160, after: 20 },
                children: [ new TextRun({ text: dates, size: BODY_SIZE, color: "444441" }) ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function subLineDocx(text) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [ new TextRun({ text, italics: true, size: SMALL_SIZE, color: "5F5E5A" }) ],
  });
}

function bulletDocx(text) {
  return new Paragraph({
    numbering: { reference: "bullet-list", level: 0 },
    spacing: { after: 80 },
    children: [ new TextRun({ text, size: BODY_SIZE }) ],
  });
}

function summaryDocx(text) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [ new TextRun({ text, size: BODY_SIZE }) ],
  });
}

function buildDocx(data) {
  const nameLine = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60 },
    children: [ new TextRun({ text: data.name, bold: true, size: NAME_SIZE }) ],
  });

  const contactLine = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [
      new TextRun({ text: data.contact, size: SMALL_SIZE, color: "444441" }),
    ],
  });

  const experienceChildren = data.experience.flatMap((role) => [
    roleHeadingDocx(role.title, role.org, role.dates),
    ...(role.subLine ? [subLineDocx(role.subLine)] : []),
    ...role.bullets.map(bulletDocx),
  ]);

  const doc = new Document({
    numbering: {
      config: [{
        reference: "bullet-list",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.28), hanging: convertInchesToTwip(0.18) } } },
        }],
      }],
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 720, bottom: 720, left: 900, right: 900 },
        },
      },
      children: [
        nameLine,
        contactLine,

        sectionHeadingDocx("Summary"),
        summaryDocx(data.summary),

        sectionHeadingDocx("Experience"),
        ...experienceChildren,

        sectionHeadingDocx("Education"),
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: data.education.text, bold: true, size: BODY_SIZE }),
            new TextRun({ text: `  |  ${data.education.dates}`, size: BODY_SIZE, color: "444441" }),
          ],
        }),

        sectionHeadingDocx("Skills"),
        summaryDocx(data.skills),
      ],
    }],
  });

  return Packer.toBuffer(doc).then((buf) => {
    fs.writeFileSync("Aayush_Ahuja_Resume.docx", buf);
  });
}

buildDocx(DATA).then(() => {
  console.log("done");
});
