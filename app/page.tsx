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
        <div className="py-2">
          Some developers thought they would strike gold trying to remove DHH
          from Rails. It backfired. So I made a list from their own repo, read{" "}
          <a
            className="text-blue-600 cursor-pointer"
            href="https://github.com/Plan-Vert/open-letter"
          >
            here
          </a>
        </div>
        <div className="text-left self-start w-full py-4">
          Someone is not on the list? Add them!{" "}
          <a
            className="text-blue-600 cursor-pointer"
            href="https://github.com/jucasoliveira/techwokes/blob/main/tech-professionals.md"
          >
            Here
          </a>
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
                  {person.contact.startsWith("http") ? (
                    <a
                      href={person.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {person.contact}
                    </a>
                  ) : (
                    person.contact
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
