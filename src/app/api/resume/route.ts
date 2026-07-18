const resumeLines = [
  { text: "ANUJ KUMAR", size: 22, y: 790 },
  { text: "Full Stack Developer | MERN | Java | Python | C++ | AI & ML", size: 11, y: 768 },
  { text: "Bhopal, Madhya Pradesh, India | anujkumar812032@gmail.com", size: 10, y: 750 },
  { text: "github.com/anujkr09 | https://www.linkedin.com/in/anuj-kumar-7415102a6/", size: 10, y: 735 },
  { text: "PROFILE", size: 13, y: 705 },
  { text: "Computer Science Engineering student building scalable apps across MERN, Java,", size: 10, y: 687 },
  { text: "Python, SQL, AI/ML, desktop software, and DSA-focused problem solving.", size: 10, y: 673 },
  { text: "SKILLS", size: 13, y: 645 },
  { text: "Java, Python, C, C++, JavaScript, TypeScript, SQL, DSA, OOP, MERN Stack,", size: 10, y: 627 },
  { text: "HTML, CSS, Bootstrap, React, Tailwind, Node, Express, MySQL, MongoDB, ML", size: 10, y: 613 },
  { text: "PROJECTS", size: 13, y: 585 },
  { text: "ZYR AVIQ AI Logistics - Route optimization, fleet management, tracking, analytics.", size: 10, y: 567 },
  { text: "Cinema Booking System - Java Swing, MySQL, live seats, payment workflow.", size: 10, y: 551 },
  { text: "Multi-Agent LLM - Python agents for autonomous software engineering workflows.", size: 10, y: 535 },
  { text: "DSA/C++/C Labs, PG Management, Spotify Clone, ML notebooks, GitHub Backup Tool.", size: 10, y: 519 },
  { text: "EDUCATION", size: 13, y: 491 },
  { text: "B.Tech Computer Science Engineering | SISTec Gandhinagar | 2023-2027", size: 10, y: 473 },
  { text: "CGPA: 7.0", size: 10, y: 457 },
  { text: "ACHIEVEMENTS", size: 13, y: 429 },
  { text: "Winner - Java Premier League (JPL), cash prize INR 4,000", size: 10, y: 411 },
  { text: "Smart India Hackathon Participant | Samadhan 2.0 Hackathon Participant", size: 10, y: 395 },
  { text: "CERTIFICATIONS", size: 13, y: 367 },
  { text: "Oracle Generative AI Professional | AWS Machine Learning Foundations", size: 10, y: 349 },
  { text: "Python Essentials 1 & 2 | CCNA | CDAC Quantum Computing", size: 10, y: 333 },
  { text: "Deloitte Data Analytics Job Simulation", size: 10, y: 317 },
];

function escapePdfText(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function createPdf() {
  const content = resumeLines
    .map(
      ({ text, size, y }) =>
        `BT /F1 ${size} Tf 54 ${y} Td (${escapePdfText(text)}) Tj ET`,
    )
    .join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Buffer.from(pdf);
}

export async function GET() {
  return new Response(createPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Anuj-Kumar-Resume.pdf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
