import Image from "next/image";
import { loadTechProfessionalsFromMarkdown } from "@/lib/tech-professionals";

export default function Home() {
  const techProfessionals = loadTechProfessionalsFromMarkdown();

  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center max-w-3xl mx-auto px-6 py-8">
        <div>Go woke, no work</div>
        <div>
          Made by{" "}
          <a
            href="https://twitter.com/lgrodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 cursor-pointer"
          >
            @lgrodev
          </a>
        </div>
        <div className="mb-8">
          <Image
            src="/woke.png"
            alt="Woke"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="py-2 text-center">
          Some developers thought they would strike gold trying to remove DHH
          from Rails. This list republishes publicly available names from the
          open letter{" "}
          <a
            className="text-blue-600 cursor-pointer"
            href="https://github.com/Plan-Vert/open-letter"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </div>

        <div className="w-full py-4">
          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b-2 border-gray-300 font-bold text-lg">
            <div>Name</div>
            <div>Project/Affiliation</div>
            <div>Contact</div>
          </div>

          <div className="space-y-2">
            {techProfessionals.map((person, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-3 border-b border-gray-200 hover:bg-gray-50"
              >
                <div className="font-medium">{person.name}</div>
                <div className="text-gray-700">{person.project}</div>
                <div className="text-blue-600 break-all">
                  {person.contact && person.contact.startsWith("http") ? (
                    <a
                      href={person.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {person.contact}
                    </a>
                  ) : (
                    person.contact || "-"
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR Disclaimer */}
        <div className="mt-8 text-sm text-gray-500 text-center">
          ⚠️ This repository republishes publicly available names from the open
          letter for informational purposes only. No private contact information
          is included. If you would like your name removed, please open an issue
          in this repository. Requests will be honored promptly under GDPR
          Article 17.
          <a
            href="https://github.com/jucasoliveira/techwokes/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            open an issue
          </a>{" "}
          in this repository. Requests will be honored promptly under GDPR
          Article 17.
        </div>
      </main>
    </div>
  );
}
