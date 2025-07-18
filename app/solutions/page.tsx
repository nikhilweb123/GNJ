import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Our Solutions - GnJ Worldwide",
  description: "Empowering Innovation Together",
}

const solutions = [
  {
    name: "Operations Management",
    description: "Streamline and optimize your business operations with real-time monitoring, automation, and analytics for improved efficiency and productivity.",
    image: "https://cdn-icons-png.flaticon.com/512/8047/8047485.png" // white
  },
  {
    name: "ERP (Enterprise Resource Planning)",
    description: "Integrate core business processes with a unified ERP system, enabling data-driven decision-making and seamless workflow across departments.",
    image: "https://cdn-icons-png.flaticon.com/512/10614/10614668.png" // white
  },
  {
    name: "Supply Chain Management",
    description: "Enhance visibility, coordination, and control across your supply chain to reduce costs, improve delivery, and boost customer satisfaction.",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png" // white icon
  },
  {
    name: "Asset Management",
    description: "Maximize asset utilization and lifecycle value with advanced tracking, maintenance scheduling, and performance analytics.",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920061.png" // white icon
  },
  {
    name: "Vendor Management",
    description: "Build strong supplier relationships, ensure compliance, and optimize procurement with centralized vendor management solutions.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" // white icon
  },
  {
    name: "Project Management",
    description: "Deliver projects on time and within budget with collaborative planning, resource allocation, and real-time progress tracking tools.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" // white
  }
];

export default function SolutionsPage() {
  return (
    <div className="pt-28 min-h-screen w-full bg-black py-24 px-2 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className=" mt-5 text-5xl font-extrabold mb-6 text-center text-white drop-shadow-lg tracking-tight">Our Solutions</h1>
        <p className="text-lg text-gray-300 mb-16 text-center max-w-2xl mx-auto">
          Empower your business with our comprehensive suite of solutions designed to drive growth, efficiency, and innovation across all operations.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card
              key={solution.name}
              className="bg-zinc-900 border-zinc-800 text-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 h-full flex flex-col cursor-pointer"
            >
              <CardHeader>
                {solution.image && (
                  <img
                    src={solution.image}
                    alt={solution.name + " icon"}
                    className="h-24 w-24 object-contain mb-4 mx-auto"
                    loading="lazy"
                  />
                )}
                <CardTitle className="text-2xl font-extrabold mb-2 text-white">{solution.name}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">{solution.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 