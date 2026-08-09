const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, LevelFormat, convertInchesToTwip,
  Table, TableRow, TableCell, WidthType, TableLayoutType
} = require("docx");

const NO_BORDER = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: NO_BORDER, bottom: NO_BORDER, left: NO_BORDER, right: NO_BORDER };

// Usable page width in twips: 12240 (page) - 900 (left margin) - 900 (right margin) = 10440
const ROLE_COL_LEFT = 7300;
const ROLE_COL_RIGHT = 3140;

const NAME_SIZE = 32;
const H1_SIZE = 22;
const BODY_SIZE = 21;
const SMALL_SIZE = 19;

const contactLine = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 200 },
  children: [
    new TextRun({ text: "London, UK  ·  aayushahuja@gmail.com  ·  +44-7917091253  ·  linkedin.com/in/aayushahuja", size: SMALL_SIZE, color: "444441" }),
  ],
});

const nameLine = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 60 },
  children: [ new TextRun({ text: "Aayush Ahuja", bold: true, size: NAME_SIZE }) ],
});

function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 260, after: 120 },
    border: { bottom: { color: "888780", space: 2, style: BorderStyle.SINGLE, size: 6 } },
    children: [ new TextRun({ text, bold: true, size: H1_SIZE, color: "26215C" }) ],
  });
}

function roleHeading(title, org, location, dates) {
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

function subLine(text) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [ new TextRun({ text, italics: true, size: SMALL_SIZE, color: "5F5E5A" }) ],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullet-list", level: 0 },
    spacing: { after: 80 },
    children: [ new TextRun({ text, size: BODY_SIZE }) ],
  });
}

function summary(text) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [ new TextRun({ text, size: BODY_SIZE }) ],
  });
}

const doc = new Document({
  numbering: {
    config: [{
      reference: "bullet-list",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
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

      sectionHeading("Summary"),
      summary("Staff software engineer (IC6) specializing in integrity and adversarial systems — 10+ years studying how adversaries operate and building the detection and enforcement systems to stop them at scale. Currently transforming integrity systems using autonomous agent systems for abuse discovery, investigation, and mitigation (scams, fraud, child safety, gambling, drugs, adult content etc) spanning multiple teams at Meta."),

      sectionHeading("Experience"),

      roleHeading("Software Engineer, IC6 — Integrity", "Meta", "London, UK", "Feb 2019 – Present"),
      subLine("Specialization in adversarial analysis and integrity systems design; technical scope spans 30+ engineers"),
      bullet("Leading design and delivery of cross-integrity autonomous multi-agent self-learning system for content red-teaming, adopted across 13+ teams: agents search and discover integrity violations on FB/IG/Ads, fan out across the adversarial network, perform root-cause analysis, and propose long-term fixes — used across a wide range of problems like scams, adult content, child safety, gambling, drugs, and other abuse domains; also used to respond to the majority of high-profile escalations from governments and press. Implemented multiple novel recursive self-improvement techniques and memory to make the agent more effective."),
      bullet("One of the first engineers on Meta's personalized-agent safety initiative (Project Hatch, MSL); designed and shipped the initial safety/detection layer — prompt-injection defense, high-risk-harm checks, LLM-based review, human-in-the-loop escalation — during the project's ~1.5-month bootstrap phase, before returning to core integrity work"),
      bullet("Built and led multiple LLM-based scam-ad detection launches, including the inference infrastructure powering them"),
      bullet("TL of Ads Integrity domain — led cross-org collaborations on shared detection systems and signal-sharing across the payment fraud domain, driving a >$200M/year reduction in payment fraud and a cumulative ~15-20% reduction in scam reports across initiatives"),
      bullet("Redesigned ML infrastructure (async processing and feature availability): cut error rates from 3-4% to 0.01% and increased enforcement recall by 1000%"),
      bullet("Expanded integrity engineering frameworks and skills — adopted by 1,000+ engineers; led cross-org sessions on AI-assisted engineering productivity for 200+ engineers, and trained 150+ engineers to be AI-native as part of an org-wide AI4Productivity initiative"),
      bullet("Recipient, Meta AI Award (Integrity) and Integrity Builder Award; top-rated performer for three consecutive annual review cycles (2024\u20132026)"),

      roleHeading("Software Engineer II, Data Platform & Infrastructure", "Uber", "Bangalore, India", "Jun 2018 – Jan 2019"),
      bullet("Scaled a Presto/Hive query gateway to 5,000+ weekly active users and 100k+ daily queries; built rate limiting, load balancing, and phased-rollout tooling for Hive deployments"),

      roleHeading("Software Engineer, Spam Detection", "Media.net (Directi)", "Bangalore, India", "Aug 2015 – Jun 2018"),
      bullet("Designed and built data pipelines and statistical/ML models (high-frequency, affiliation, co-visitation, crowd-sourcing, clustering) to detect spam and fraud across a large ad network processing 50M+ data points daily; led and mentored a team of 3 engineers"),

      roleHeading("Member of Technical Staff, EDW", "Groupon", "Chennai, India", "Jul 2014 – Aug 2015"),
      bullet("Built ETL pipeline tooling for a Teradata/HDFS enterprise data warehouse"),

      sectionHeading("Education"),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "B.E. (Hons), Computer Science — BITS-Pilani, Pilani Campus", bold: true, size: BODY_SIZE }),
          new TextRun({ text: "  |  2010 – 2014", size: BODY_SIZE, color: "444441" }),
        ],
      }),

      sectionHeading("Skills"),
      summary("Python  ·  LLM / agentic system design  ·  Trust & safety and anti-fraud / anti-abuse detection  ·  Adversarial red-teaming  ·  ML infrastructure & evaluation  ·  Prompt-injection & AI safety defenses  ·  Cross-org technical leadership"),
    ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  require("fs").writeFileSync("Aayush_Ahuja_Resume.docx", buf);
  console.log("done");
});