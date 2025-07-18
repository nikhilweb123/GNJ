import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const technologies = [
  {
    name: "Azure",
    description: "Microsoft's cloud platform for building, deploying, and managing applications and services through a global network of data centers.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  },
  {
    name: "AWS",
    description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services and infrastructure.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    name: "Office 365",
    description: "A suite of productivity tools by Microsoft, including Word, Excel, PowerPoint, Outlook, and cloud services.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg"
  },
  {
    name: "Dynamic 365",
    description: "Microsoft's suite of intelligent business applications for CRM and ERP, enabling organizations to grow and evolve.",
    image: "https://img.icons8.com/?size=256&id=c70ES3kZFhLz&format=png"
  },
  {
    name: "Sales Force",
    description: "A leading cloud-based CRM platform that helps businesses manage customer relationships and sales.",
    image: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"
  },
  {
    name: "Artificial Intelligence",
    description: "The simulation of human intelligence in machines to perform tasks such as learning, reasoning, and problem-solving.",
    image: "https://www.stockvault.net/data/2016/05/18/198520/preview16.jpg"
  },
  {
    name: "Machine Learning",
    description: "A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
    image: "https://i0.wp.com/www.wi6labs.com/wp-content/uploads/2019/12/Machine-learning-logo-1.png?ssl=1"
  },
  {
    name: "Data Science",
    description: "The field of study that combines domain expertise, programming, and statistics to extract insights from data.",
    image: "https://tecnico.ulisboa.pt/files/2022/01/seminario-quanthep-saverio-pascazio-1140x641.jpg"
  },
  {
    name: "IoT",
    description: "The Internet of Things connects physical devices to the internet, enabling data collection and smart automation.",
    image: "https://kinsta.com/wp-content/uploads/2022/10/what-is-iot-1024x512.jpg"
  },
  {
    name: "Mongo DB",
    description: "A document-oriented NoSQL database used for high volume data storage and rapid development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  }
];

const languages = [
  {
    name: ".NET",
    description: "A free, cross-platform, open-source developer platform for building many different types of applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
  },
  {
    name: "Python",
    description: "A versatile, high-level programming language known for its readability and broad applicability.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "PHP",
    description: "A popular general-purpose scripting language especially suited to web development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 engine, enabling scalable server-side and networking applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "React native",
    description: "A framework for building native mobile apps using React and JavaScript.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "C, C++",
    description: "Powerful, high-performance programming languages widely used for system/software development and game programming.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  },
  {
    name: "Golang",
    description: "An open-source programming language designed for simplicity, reliability, and high performance.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
  },
  {
    name: "Java",
    description: "A robust, object-oriented programming language used for building platform-independent applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "React",
    description: "A popular JavaScript library for building user interfaces, especially single-page applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    description: "A React framework for building fast, scalable, and SEO-friendly web applications with server-side rendering.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  // Added languages
  {
    name: "Flutter",
    description: "An open-source UI software development toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  },
  {
    name: "Dart",
    description: "A client-optimized language for fast apps on any platform, developed by Google and used to build mobile, desktop, server, and web applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
  },
  {
    name: "Kotlin",
    description: "A modern programming language that makes developers happier. Used for Android, web, server, and multiplatform development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
  },
  {
    name: "Django",
    description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
];

// Add databases array
const databases = [
  {
    name: "MySQL",
    description: "An open-source relational database management system based on SQL.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    name: "Firebase",
    description: "A platform developed by Google for creating mobile and web applications, offering real-time database and backend as a service.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  {
    name: "PostgreSQL",
    description: "A powerful, open source object-relational database system with over 30 years of active development.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen w-full bg-black py-24 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="mt-5 text-5xl font-extrabold mb-6 text-center text-white drop-shadow-lg tracking-tight">Our Technology Expertise</h1>
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
                {tech.image && (
                  <img
                    src={tech.image}
                    alt={tech.name + " logo"}
                    className="h-20 w-20 object-contain mb-4 mx-auto"
                    loading="lazy"
                  />
                )}
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
                {lang.image && (
                  <img
                    src={lang.image}
                    alt={lang.name + " logo"}
                    className="h-24 w-24 object-contain mb-4 mx-auto"
                    loading="lazy"
                  />
                )}
                <CardTitle className="text-2xl font-extrabold mb-2 text-white">{lang.name}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">{lang.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Databases Section */}
        <h2 className="text-3xl font-bold mb-6 text-white mt-12 text-center">Databases</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {databases.map((db) => (
            <Card
              key={db.name}
              className="bg-zinc-900 border-zinc-800 text-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 h-full flex flex-col cursor-pointer"
            >
              <CardHeader>
                {db.image && (
                  <img
                    src={db.image}
                    alt={db.name + " logo"}
                    className="h-20 w-20 object-contain mb-4 mx-auto"
                    loading="lazy"
                  />
                )}
                <CardTitle className="text-2xl font-extrabold mb-2 text-white">{db.name}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">{db.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
