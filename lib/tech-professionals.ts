import fs from "fs";
import path from "path";

export interface TechProfessional {
  name: string;
  project: string;
  contact: string;
}

export function loadTechProfessionalsFromMarkdown(): TechProfessional[] {
  try {
    const filePath = path.join(process.cwd(), "tech-professionals.md");
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Parse the markdown table
    const lines = fileContent.split("\n");
    const dataLines = lines.filter(
      (line) =>
        line.trim() &&
        line.startsWith("|") &&
        !line.includes("---") &&
        !line.includes("Name") &&
        !line.includes("Project") &&
        !line.includes("Contact")
    );

    return dataLines.map((line) => {
      const columns = line
        .split("|")
        .map((col) => col.trim())
        .filter((col) => col);
      return {
        name: columns[0] || "",
        project: columns[1] || "",
        contact: columns[2] || "",
      };
    });
  } catch (error) {
    console.error("Error loading tech professionals from markdown:", error);
    return [];
  }
}
