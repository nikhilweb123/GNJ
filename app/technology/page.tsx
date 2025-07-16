import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const technologies = [
  {
    name: "Azure",
    description: "Microsoft's cloud platform for building, deploying, and managing applications and services through a global network of data centers."
  },
  {
    name: "AWS",
    description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services and infrastructure."
  },
  {
    name: "Office 365",
    description: "A suite of productivity tools by Microsoft, including Word, Excel, PowerPoint, Outlook, and cloud services."
  },
  {
    name: "Dynamic 365",
    description: "Microsoft's suite of intelligent business applications for CRM and ERP, enabling organizations to grow and evolve."
  },
  {
    name: "Sales Force",
    description: "A leading cloud-based CRM platform that helps businesses manage customer relationships and sales."
  },
  {
    name: "Artificial Intelligence",
    description: "The simulation of human intelligence in machines to perform tasks such as learning, reasoning, and problem-solving."
  },
  {
    name: "Machine Learning",
    description: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed."
  },
  {
    name: "Data Science",
    description: "The field of study that combines domain expertise, programming, and statistics to extract insights from data."
  },
  {
    name: "IoT",
    description: "The Internet of Things connects physical devices to the internet, enabling data collection and smart automation."
  },
  {
    name: "Mongo DB",
    description: "A document-oriented NoSQL database used for high volume data storage and rapid development."
  }
];

const languages = [
  {
    name: ".NET",
    description: "A free, cross-platform, open-source developer platform for building many different types of applications."
  },
  {
    name: "Python",
    description: "A versatile, high-level programming language known for its readability and broad applicability."
  },
  {
    name: "PHP",
    description: "A popular general-purpose scripting language especially suited to web development."
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 engine, enabling scalable server-side and networking applications."
  },
  {
    name: "React native",
    description: "A framework for building native mobile apps using React and JavaScript."
  },
  {
    name: "C, C++",
    description: "Powerful, high-performance programming languages widely used for system/software development and game programming."
  },
  {
    name: "Golang",
    description: "An open-source programming language designed for simplicity, reliability, and high performance."
  },
  {
    name: "Java",
    description: "A robust, object-oriented programming language used for building platform-independent applications."
  },
  {
    name: "React",
    description: "A popular JavaScript library for building user interfaces, especially single-page applications."
  },
  {
    name: "Next.js",
    description: "A React framework for building fast, scalable, and SEO-friendly web applications with server-side rendering."
  }
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen w-full bg-black py-24 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-white drop-shadow-lg tracking-tight">Our Technology Expertise</h1>
        <p className="text-lg text-gray-300 mb-16 text-center max-w-2xl mx-auto">
          We leverage a wide range of modern technologies to deliver innovative, scalable, and secure solutions tailored to your business needs.
        </p>

        {/* Technologies Section */}
        <h2 className="text-3xl font-bold mb-6 text-white mt-12 text-center">Technologies</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="bg-zinc-900 border-zinc-800 text-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 h-full flex flex-col cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold mb-2 text-white">{tech.name}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">{tech.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Languages & Frameworks Section */}
        <h2 className="text-3xl font-bold mb-6 text-white mt-12 text-center">Languages & Frameworks</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {languages.map((lang) => (
            <Card
              key={lang.name}
              className="bg-zinc-900 border-zinc-800 text-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 h-full flex flex-col cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold mb-2 text-white">{lang.name}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">{lang.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
