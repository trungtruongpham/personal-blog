import { Card, CardContent } from "@/components/ui/card";
import {
  Box,
  Code,
  Coffee,
  Database,
  FileJson,
  GitGraph,
  Globe,
  Layout,
  Server,
  Waves,
} from "lucide-react";

export default function SkillSections() {
  const skills = [
    { name: "React", icon: <Layout className="h-6 w-6" /> },
    { name: "Angular", icon: <Box className="h-6 w-6" /> },
    { name: ".NET", icon: <Code className="h-6 w-6" /> },
    { name: "Node.js", icon: <Server className="h-6 w-6" /> },
    { name: "JavaScript", icon: <FileJson className="h-6 w-6" /> },
    { name: "TypeScript", icon: <Coffee className="h-6 w-6" /> },
    { name: "HTML/CSS", icon: <Globe className="h-6 w-6" /> },
    { name: "SQL Server", icon: <Database className="h-6 w-6" /> },
    { name: "Redis", icon: <Database className="h-6 w-6" /> },
    { name: "Git", icon: <GitGraph className="h-6 w-6" /> },
    { name: "Tailwindcss", icon: <Waves className="h-6 w-6" /> },
  ];

  return (
    <section className="py-12 w-full">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="bg-white transform transition-all duration-300 ease-in-out hover:scale-105 dark:hover:bg-slate-700 hover:shadow-xl dark:hover:shadow-slate-700/30 dark:border-slate-700"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 group">
                <div className="text-primary dark:text-gray-400 transition-colors duration-300 group-hover:text-primary dark:group-hover:text-gray-100">
                  {skill.icon}
                </div>
                <h3 className="mt-4 font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white">
                  {skill.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
