"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialTechProfessionals = [
  { name: "0x1eef", project: "llm.rb", contact: "0x1eef@proton.me" },
  { name: "Aaron Allen", project: "-", contact: "https://aaronmallen.me" },
  {
    name: "Adrian McEwen",
    project: "MCQN Ltd",
    contact: "@amcewen@mastodon.me.uk",
  },
  {
    name: "Alexander Gräfe",
    project: "-",
    contact: "@rickrickenharp.bsky.social",
  },
  {
    name: "Andrew France",
    project: "-",
    contact: "@odaeus@social.vivaldi.net",
  },
  {
    name: "Andrew Nesbitt",
    project: "Ecosyste.ms",
    contact: "andrew@ecosyste.ms",
  },
  {
    name: "Andy Callaghan",
    project: "-",
    contact: "https://andycallaghan.com",
  },
  { name: "Ariane R.", project: "-", contact: "@ariaru" },
  { name: "Astrid Gealer", project: "-", contact: "@astrid.place" },
  {
    name: "Cédric Delalande",
    project: "Barley Serializer",
    contact: "@MoskitoHero@ruby.social",
  },
  { name: "Corey Farwell", project: "-", contact: "rwell.org" },
  { name: "Danielle Smith", project: "mittsu, kdl", contact: "@danini.dev" },
  { name: "David Celis", project: "-", contact: "davidcel.is" },
  { name: "Derek Houck", project: "-", contact: "derekhouck.com" },
  {
    name: "Dmitry L Rocha",
    project: "-",
    contact: "@yetanother.place/@dmitry",
  },
  { name: "Eric Schultz", project: "-", contact: "@wwahammy.com" },
  { name: "Eugen Rochko", project: "-", contact: "@Gargron@mastodon.social" },
  { name: "F", project: "-", contact: "@erbridge@sunspot.garden" },
  { name: "Giles Bowkett", project: "-", contact: "@gilesb@gmail.com" },
  { name: "fell sunderland", project: "-", contact: "hello@fellsunder.land" },
  { name: "Harry Wood", project: "-", contact: "@en.osm.town/@harry_wood" },
  {
    name: "James Jefferies",
    project: "-",
    contact: "@jamesjefferies@mastodon.me.uk",
  },
  {
    name: "James Smith",
    project: "Manyfold",
    contact: "@floppy@mastodon.me.uk",
  },
  { name: "Jamie Schembri", project: "-", contact: "@jamie.schembri.me" },
  {
    name: "Jared White",
    project: "Fullstack Ruby",
    contact: "@jaredwhite@indieweb.social",
  },
  { name: "Jason Garber", project: "", contact: "sixtwothree.org" },
  { name: "Jay Caines-Gooby", project: "-", contact: "jay.gooby.org" },
  { name: "Jesse Brooklyn Hannah", project: "-", contact: "jbhannah.net" },
  { name: "Joe Sak", project: "-", contact: "@joesak.com" },
  { name: "Jochen Lillich", project: "-", contact: "@monospace@floss.social" },
  { name: "John-Paul Teti", project: "-", contact: "@jpteti@mastodon.social" },
  { name: "John Small", project: "-", contact: "@jds340@gmail.com" },
  { name: "Jon Wood", project: "-", contact: "@jon@blankpad.net" },
  {
    name: "Jonathon Anderson",
    project: "-",
    contact: "@anderson_jon@hachyderm.io",
  },
  {
    name: "Dr Kim Foale",
    project: "Geeks for Social Change",
    contact: "kim@social.gfsc.studio",
  },
  { name: "Liam Arbuckle", project: "-", contact: "TheMrScrooby" },
  {
    name: "Lloyd Watkin",
    project: "-",
    contact: "https://www.evilprofessor.co.uk",
  },
  {
    name: "Maarten Brouwers",
    project: "-",
    contact: "https://murb.nl/contact/",
  },
  {
    name: "Manuel Bustillo",
    project: "-",
    contact: "https://blog.bustikiller.com/about/",
  },
  { name: "Matthew B", project: "-", contact: "https://famichiki.jp/@matthew" },
  { name: "Nic Lake", project: "-", contact: "https://niclake.me" },
  { name: "Pat Allan", project: "-", contact: "freelancing-gods.com" },
  {
    name: "Peter Boling",
    project:
      "ruby-oauth, ruby-openid, appraisal-rb, kettle-rb, galtzo-floss, RuboCop-LTS, floss-funding",
    contact: "@galtzo@ruby.social",
  },
  { name: "Rasmus Grouleff", project: "-", contact: "@nerdd@mstdn.social" },
  {
    name: "Richard Degenne",
    project: "-",
    contact: "https://richarddegenne.fr",
  },
  {
    name: "Rob Yurkowski",
    project: "-",
    contact: "@robyurkowski@oceanplayground.social",
  },
  { name: "Ryan Bigg", project: "-", contact: "https://ruby.social/@ryanbigg" },
  { name: "Sam Pikesley", project: "-", contact: "sam.pikesley.org" },
  {
    name: "Shannon Skipper",
    project: "-",
    contact: "https://ruby.social/@havenwood",
  },
  {
    name: "Thomas Fuchs",
    project: "former Rails Core",
    contact: "@thomasfuchs.at",
  },
  { name: "Tim Cowlishaw", project: "-", contact: "timcowlishaw.co.uk" },
  { name: "Tom Marvolo Riddle", project: "-", contact: "@tom@cybre.space" },
  { name: "Weldys Santos", project: "WS Tech", contact: "@weldyss@bolha.us" },
  { name: "Wout Fierens", project: "-", contact: "@wout.codes" },
  { name: "Vito Sartori", project: "-", contact: "vito.io" },
];

export default function Home() {
  const [techProfessionals, setTechProfessionals] = useState(
    initialTechProfessionals
  );
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    contact: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddEngineer = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.contact.trim()) {
      const newEngineer = {
        name: formData.name.trim(),
        project: formData.project.trim() || "-",
        contact: formData.contact.trim(),
      };

      setTechProfessionals((prev) => [...prev, newEngineer]);
      setFormData({ name: "", project: "", contact: "" });
      setShowForm(false);
    }
  };

  const handleCancelForm = () => {
    setFormData({ name: "", project: "", contact: "" });
    setShowForm(false);
  };

  const goToExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

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
        <div>
          Some developers thought they would strike gold trying to remove DHH
          from Rails. It backfired. So I made a list from their own repo
        </div>
        <div>
          <Button
            onClick={() =>
              goToExternalLink("https://github.com/Plan-Vert/open-letter")
            }
          >
            Open Letter
          </Button>
        </div>

        <div className="w-full">
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
