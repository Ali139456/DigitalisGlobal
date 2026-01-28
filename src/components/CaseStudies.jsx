import { useState } from "react";
import Footer from "./Footer";

export default function Portfolio() {
  const services = [
    "Show All",
    "Web Development",
    "WordPress Development",
    "Shopify",
    "Graphic Designing",
    "E-Commerce Websites",
    "Digital Marketing",
  ];

  const projects = [
    {
      title: "Distant Weddings",
      slug: "distant-weddings",
      service: "Web Development",
      image: "../Images-1/wordpress-1.webp",
      tags: ["Web Development", "WordPress Development"],
      description:
        "At Distant Weddings, our focus is on creating stress-free and memorable wedding experiences.",
      details: {
        overview:
          "Distant Weddings is a complete wedding planning platform designed for destination weddings.",
        tech: ["React", "WordPress", "Custom APIs"],
        role: "UI/UX Design & Frontend Development",
        liveUrl: "#",
      },
    },
    {
      title: "Supacore",
      slug: "supacore-web",
      service: "Shopify",
      image: "../Images-1/wordpress-2.webp",
      tags: ["Shopify", "Web Development"],
      description:
        "Supacore’s innovative product line was built to help people recover from pain and injury.",
      details: {
        overview:
          "Supacore is a recovery-focused brand with a strong digital presence.",
        tech: ["React", "Shopify"],
        role: "Web Development",
        liveUrl: "#",
      },
    },
    {
      title: "Noodz Bootique",
      slug: "supacore-wp",
      service: "WordPress Development",
      image: "../Images-1/wordpress-3.webp",
      tags: ["WordPress", "Web Development"],
      description:
        "Supacore’s innovative product line was built to help people recover from pain and injury.",
      details: {
        overview: "WordPress-based marketing site for Supacore.",
        tech: ["WordPress", "ACF"],
        role: "WordPress Development",
        liveUrl: "#",
      },
    },
    {
      title: "That Little Shop in Jannali",
      slug: "supacore-shopify",
      service: "Shopify",
      image: "../Images-1/shopif-3.webp",
      tags: ["Shopify"],
      description:
        "Supacore’s innovative product line was built to help people recover from pain and injury.",
      details: {
        overview: "Shopify eCommerce store optimised for conversions.",
        tech: ["Shopify", "Liquid", "Klaviyo"],
        role: "Shopify Development",
        liveUrl: "#",
      },
    },
    {
      title: "Hint Recruitment",
      slug: "supacore-marketing",
      service: "Digital Marketing",
      image: "../Images-1/marketing-1.webp",
      tags: ["Digital Marketing"],
      description:
        "Supacore’s innovative product line was built to help people recover from pain and injury.",
      details: {
        overview: "Performance-driven digital marketing campaigns.",
        tech: ["Meta Ads", "Google Ads"],
        role: "Digital Marketing",
        liveUrl: "#",
      },
    },
    {
      title: "Creative Studio",
      slug: "creative-studio",
      service: "Graphic Designing",
      image: "../Images-1/marketing-3.webp",
      tags: ["Graphic Designing"],
      description:
        "A creative studio delivering impactful branding and visual experiences.",
      details: {
        overview: "Branding and visual identity projects for multiple clients.",
        tech: ["Illustrator", "Photoshop"],
        role: "Graphic Design",
        liveUrl: "#",
      },
    },
    {
      title: "Online Store",
      slug: "online-store",
      service: "E-Commerce Websites",
      image: "../Images-1/squarespace-2.webp",
      tags: ["E-Commerce Websites"],
      description:
        "A scalable e-commerce platform designed for high performance and conversions.",
      details: {
        overview: "High-performance eCommerce solution with scalable architecture.",
        tech: ["React", "Shopify"],
        role: "E-Commerce Development",
        liveUrl: "#",
      },
    },
  ];

  const [activeService, setActiveService] = useState("Show All");
  const [selectedProject, setSelectedProject] = useState(null);

  /* -------- FORM STATE -------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const isFormValid =
    formData.name && formData.email && formData.phone;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownload = () => {
    // 🔽 CHANGE FILE NAME IF NEEDED
    const filePath = "../Images-1/Text.txt";

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Text.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredProjects =
    activeService === "Show All"
      ? projects
      : projects.filter((p) => p.service === activeService);

  /* ---------------- PROJECT DETAIL VIEW ---------------- */
  if (selectedProject) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 px-4 pt-24 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="mb-6 text-sm text-blue-600 hover:underline"
              >
                ← Back to projects
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl mb-6"
              />

              <h1 className="text-3xl font-semibold mb-4">
                {selectedProject.title}
              </h1>

              <p className="text-gray-600 mb-6">
                {selectedProject.details.overview}
              </p>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.details.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">My Role</h3>
                <p className="text-gray-600">
                  {selectedProject.details.role}
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl shadow-md p-8 h-fit sticky top-28">
              <h3 className="text-2xl font-semibold mb-2">
                Download Project Details
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Fill the form to download this project overview.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-400"
                />

                <button
                  onClick={handleDownload}
                  disabled={!isFormValid}
                  className={`w-full py-3 rounded-lg font-semibold transition
                    ${
                      isFormValid
                        ? "bg-[#589CD5] text-black"
                        : "bg-[#52C4C9] text-black cursor-not-allowed"
                    }`}
                >
                  Download Project Details
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. We don't share your data.
              </p>
            </div>

          </div>
        </div>
        <Footer />
      </>
    );
  }

  /* ---------------- MAIN GRID VIEW ---------------- */
  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 mt-5 pt-24 pb-24">
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              className={`px-6 py-3 rounded-xl border text-sm font-medium transition
                ${
                  activeService === service
                    ? "bg-[#52C4C9] text-black"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Grid for 3 cards per row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <div className="bg-gray-100 p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-xl"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
