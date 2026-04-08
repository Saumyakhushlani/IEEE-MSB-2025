import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Terminal,
  User,
  Mail,
  Phone,
  Link,
  Info,
  ChevronRight,
  X,
  Camera,
  Video,
  Palette,
  Share2,
} from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "../lib/supabaseClient";

// --- CONSTANTS ---
const BRANCH_OPTIONS = [
  "Computer Science & Engineering",
  "Mathematics & Data Science",
  "Electronics & Communication Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Energy & Electric Vehicle Engineering",
  "Engineering & Computational Mechanics",
  "Chemical Engineering",
  "Civil Engineering",
  "Materials & Metallurgical Engineering",
  "B Architecture",
  "B Planning",
];

const SECTION_OPTIONS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "B Arch 1", "B Arch 2", "B Plan"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\d{10}$/;
const SCHOLAR_REGEX = /^\d{10,11}$/;

const RECRUITMENT_CLOSED = true;

const VERTICAL_OPTIONS = [
  {
    id: "Core Team Member",
    icon: User,
    description: "Work on planning and execution of events, coordination, and overall operations.",
  },
  {
    id: "Web Developer",
    icon: Terminal,
    description: "Develop and maintain websites, dashboards, and technical tools for IEEE MSB.",
  },
  {
    id: "Photographer",
    icon: Camera,
    description: "Capture events, sessions, and moments that represent IEEE MSB.",
  },
  {
    id: "Video Editor",
    icon: Video,
    description: "Create event aftermovies, promotional videos, and social media content.",
  },
  {
    id: "Graphic Designer",
    icon: Palette,
    description: "Design posters, social media creatives, and branding materials.",
  },
  {
    id: "Social Media Manager",
    icon: Share2,
    description: "Plan and manage content across IEEE MSB social platforms.",
  },
];

const CORE_ELIGIBLE_BRANCHES = new Set([
  "Computer Science & Engineering",
  "Mathematics & Data Science",
  "Electronics & Communication Engineering",
  "Electrical Engineering",
]);

/** Replace each URL with your real WhatsApp group invite link (keys must match vertical names exactly). */
const WHATSAPP_LINKS = {
  "Core Team Member": "https://chat.whatsapp.com/BhL4H2aegM7G6Sq912aJCe",
  "Web Developer": "https://chat.whatsapp.com/IrJ92n3BqFEAqmn0U6AzHH",
  "Photographer": "https://chat.whatsapp.com/H1C0HFGUKqn0ofNG239LZB",
  "Video Editor": "https://chat.whatsapp.com/JQWvllxXTxtC3jC6QvEjPe",
  "Graphic Designer": "https://chat.whatsapp.com/KLleov5EY3zInea9arpOKi",
  "Social Media Manager": "https://chat.whatsapp.com/EVePytlB1ESFKWUPiuZOL8",
};

const FAQ_ITEMS = [
  {
    question: "Who can apply for IEEE MSB recruitment?",
    answer:
      "First-year students from all branches at MANIT Bhopal are eligible to apply. We look for students who are curious, consistent, and interested in learning and teamwork.",
  },
  {
    question: "Is IEEE membership required before applying?",
    answer:
      "No, IEEE membership is not required at this stage. Details will be shared with shortlisted candidates.",
  },
  {
    question: "Can I apply for multiple verticals?",
    answer:
      "Yes, you can choose up to three verticals. Please select roles where you can actively contribute.",
  },
  {
    question: "Is a portfolio mandatory?",
    answer:
      "No, it is optional. However, for roles like Photographer, Video Editor, Graphic Designer, and Social Media Manager, sharing your work is recommended.",
  },
  {
    question: "How will I receive updates about the process?",
    answer:
      "Shortlisted candidates will be informed through email and WhatsApp. Please ensure your contact details are correct.",
  },
];

// --- MAIN COMPONENT ---
function Recruitment() {
  const [showLoader, setShowLoader] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    scholar: "",
    branch: "",
    section: "",
    email: "",
    contact: "",
    portfolio: "",
    why: "",
  });

  const [selectedVerticals, setSelectedVerticals] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVertical = (vertical) => {
    if (selectedVerticals.includes(vertical)) {
      setSelectedVerticals((prev) => prev.filter((v) => v !== vertical));
      return;
    }

    if (selectedVerticals.length >= 3) {
      toast.error("Maximum 3 verticals allowed");
      return;
    }

    if (vertical === "Core Team Member" && formData.branch && !CORE_ELIGIBLE_BRANCHES.has(formData.branch)) {
      toast.error("Core Team is only for CSE, MDS, ECE and EE branches.");
      return;
    }

    setSelectedVerticals((prev) => [...prev, vertical]);
  };

  const requiresPortfolioSelection = selectedVerticals.some((v) =>
    ["Photographer", "Video Editor", "Graphic Designer"].includes(v)
  );

  const validateStep1 = () => {
    const trimmedScholar = formData.scholar.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedContact = formData.contact.trim();

    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!trimmedScholar) {
      toast.error("Scholar number is required");
      return false;
    }
    if (!trimmedScholar.startsWith("25")) {
      toast.error("Scholar number must start with 25");
      return false;
    }
    if (!SCHOLAR_REGEX.test(trimmedScholar)) {
      toast.error("Scholar number must be 10 or 11 digits");
      return false;
    }
    if (!formData.branch) {
      toast.error("Select your branch");
      return false;
    }
    if (!formData.section) {
      toast.error("Select your section");
      return false;
    }
    if (!trimmedEmail) {
      toast.error("Email is required");
      return false;
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      toast.error("Enter a valid email address");
      return false;
    }
    if (!trimmedContact) {
      toast.error("Contact number is required");
      return false;
    }
    if (!PHONE_REGEX.test(trimmedContact)) {
      toast.error("Contact number must be exactly 10 digits");
      return false;
    }

    return true;
  };

  const validateStep2 = () => {
    if (selectedVerticals.length === 0) {
      toast.error("Select at least one vertical");
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!formData.why.trim()) {
      toast.error("Please explain why you wish to join");
      return false;
    }
    return true;
  };

  const validateForm = () => {
    return validateStep1() && validateStep2() && validateStep3();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (RECRUITMENT_CLOSED) {
      toast.error("Recruitment form has been closed.");
      return;
    }
    if (!validateForm()) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading("Syncing with Mainframe...");

    try {
      const { error } = await supabase.from("students").insert({
        Name: formData.name.trim(),
        Scholar: formData.scholar.trim(),
        Branch: formData.branch,
        Section: formData.section,
        Vertical1: selectedVerticals[0] || null,
        Vertical2: selectedVerticals[1] || null,
        Vertical3: selectedVerticals[2] || null,
        Email: formData.email.trim(),
        Contact: formData.contact.trim(),
        Portfolio: formData.portfolio.trim() || null,
        Why: formData.why.trim(),
      });

      if (error) throw error;

      toast.success("Data Transmitted Successfully", { id: loadingToast });
      setIsSubmitted(true);
    } catch (err) {
      toast.error("Transmission Failed. Try again.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen text-black font-mono selection:bg-yellow-300 overflow-x-hidden"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
        backgroundSize: "30px 30px"
      }}
    >
      <AnimatePresence mode="wait">
        {showLoader ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8fafc]"
            style={{
              backgroundImage:
                "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          >
            <div className="relative w-full max-w-xl px-4 sm:px-6">
              {/* Card-style loader */}
              <div className="relative border-[4px] sm:border-[5px] border-black bg-white px-4 py-5 sm:px-6 sm:py-6 shadow-[10px_10px_0px_0px_#00629B] overflow-hidden rounded-md">
                {/* Animated light grid overlay */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  animate={{ backgroundPositionX: ["0px", "20px"], backgroundPositionY: ["0px", "20px"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 flex flex-col gap-5 sm:gap-6">
                  {/* Icon + text row */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border-[3px] border-black bg-[#00629B] text-white shadow-[6px_6px_0px_0px_#00629B]"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Cpu className="w-7 h-7" />
                    </motion.div>
                    <div className="space-y-1">
                      <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.28em] text-slate-600">
                        IEEE MSB · Recruitment Portal
                      </p>
                      <p className="text-base sm:text-lg font-black uppercase tracking-[0.18em]">
                        Loading Application Console
                      </p>
                    </div>
                  </div>

                  {/* Single progress bar */}
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-slate-200 overflow-hidden border border-black rounded-full">
                      <motion.div
                        className="h-full bg-[#00629B]"
                        initial={{ width: "0%" }}
                        animate={{ width: ["0%", "65%", "100%"] }}
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                      />
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
                      Preparing IEEE MSB recruitment form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto px-6 py-12 md:py-24"
          >
            {RECRUITMENT_CLOSED ? (
              <div className="space-y-12 sm:space-y-16">
                <header className="relative max-w-5xl md:max-w-4xl mx-auto px-2 sm:px-0">
                  <div className="relative border-[3px] sm:border-[5px] border-black bg-white px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-12 lg:py-10 shadow-[8px_8px_0px_0px_#00629B] sm:shadow-[12px_12px_0px_0px_#00629B] rounded-md">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-5">
                      <div className="flex items-center gap-3">
                        <div className="bg-black text-white px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] rounded-sm">
                          Portal_Closed
                        </div>
                        <div className="h-2 w-2 rounded-full bg-red-600" />
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 flex items-center gap-2">
                        <CircuitBoard size={14} className="text-[#00629B]" />
                        MANIT Bhopal · IEEE MSB · 2026 Intake
                      </div>
                    </div>

                    <div className="grid gap-5 sm:gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
                      <div>
                        <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black uppercase leading-[1.1] tracking-[0.02em] md:tracking-[0.07em] space-y-1">
                          <span className="block">IEEE MSB</span>
                          <span className="block text-[#00629B]">Recruitment Portal</span>
                          <span className="mt-1 inline-block bg-yellow-300 px-3 rounded-sm italic">
                            First Year 2026
                          </span>
                        </h1>
                      </div>

                      <div className="mt-1 md:mt-0 border-l-4 border-black pl-3 sm:pl-4">
                        <p className="text-[11px] sm:text-sm md:text-[15px] font-medium text-slate-700 leading-relaxed">
                          The recruitment form has been closed. Applications are no longer being accepted.
                        </p>
                      </div>
                    </div>
                  </div>
                </header>

                <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
                  <section className="bg-white border-[4px] sm:border-[5px] border-black p-4 sm:p-6 md:p-8 lg:p-10 shadow-[10px_10px_0px_0px_#00629B] rounded-2xl">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border-[2px] sm:border-[3px] border-black bg-black text-white shadow-[4px_4px_0px_0px_#00629B] sm:shadow-[6px_6px_0px_0px_#00629B]">
                        <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm sm:text-base font-black uppercase tracking-[0.14em]">
                          Applications_Closed
                        </p>
                        <p className="text-[12px] sm:text-sm font-medium text-slate-700 leading-relaxed">
                          The recruitment form has been closed.
                        </p>
                        <p className="text-[11px] text-slate-500">
                          If you missed the deadline, keep an eye on IEEE MSB announcements for the next intake.
                        </p>
                      </div>
                    </div>
                  </section>

                  <KnowMoreIEEE />
                </div>
              </div>
            ) : !isSubmitted ? (
              <div className="space-y-12 sm:space-y-16">
                {/* --- HEADER SECTION --- */}
                <header className="relative max-w-5xl md:max-w-4xl mx-auto px-2 sm:px-0 group">
                  {/* <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4 rounded-md" /> */}
                  <div className="relative border-[3px] sm:border-[5px] border-black bg-white px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-12 lg:py-10 shadow-[8px_8px_0px_0px_#00629B] sm:shadow-[12px_12px_0px_0px_#00629B] rounded-md">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-5">
                      <div className="flex items-center gap-3">
                        <div className="bg-black text-white px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] rounded-sm">
                          Live_Portal
                        </div>
                        <div className="h-2 w-2 rounded-full bg-red-600 animate-ping" />
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 flex items-center gap-2">
                        <CircuitBoard size={14} className="text-[#00629B]" />
                        MANIT Bhopal · IEEE MSB · 2026 Intake
                      </div>
                    </div>

                    <div className="grid gap-5 sm:gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
                      <div>
                        <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black uppercase leading-[1.1] tracking-[0.02em] md:tracking-[0.07em] space-y-1">
                          <span className="block">IEEE MSB</span>
                          <span className="block text-[#00629B]">Recruitment Portal</span>
                          <span className="mt-1 inline-block bg-yellow-300 px-3 rounded-sm italic">
                            First Year 2026
                          </span>
                        </h1>
                      </div>

                      <div className="mt-1 md:mt-0 border-l-4 border-black pl-3 sm:pl-4">
                        <p className="text-[11px] sm:text-sm md:text-[15px] font-medium text-slate-700 leading-relaxed">
                          Fill in your details, select up to three verticals, and briefly explain why you want to join IEEE MSB.
                          This is your first step towards working on events, projects, and teams in one of MANIT’s most active technical societies.

                        </p>
                      </div>
                    </div>
                  </div>
                </header>

                <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
                  {/* --- MULTI-STEP FORM (full width) --- */}
                  <section className="bg-white border-[4px] sm:border-[5px] border-black p-4 sm:p-6 md:p-8 lg:p-10 shadow-[10px_10px_0px_0px_#00629B] rounded-2xl">
                    {/* Step indicator */}
                    <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 border border-black ${currentStep === 1 ? "bg-black text-white" : "bg-slate-100"}`}>
                          1
                        </span>
                        <span>Basic_Details</span>
                      </div>
                      <div className="hidden sm:block flex-1 h-px mx-3 bg-slate-300" />
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 border border-black ${currentStep === 2 ? "bg-black text-white" : "bg-slate-100"}`}>
                          2
                        </span>
                        <span>Verticals_&_Portfolio</span>
                      </div>
                      <div className="hidden sm:block flex-1 h-px mx-3 bg-slate-300" />
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 border border-black ${currentStep === 3 ? "bg-black text-white" : "bg-slate-100"}`}>
                          3
                        </span>
                        <span>Motivation</span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                      {/* STEP 1: BASIC DETAILS */}
                      {currentStep === 1 && (
                        <div className="space-y-6 sm:space-y-8">
                          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
                            <NeoInput label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="First Last" />
                            <NeoInput
                              label="Scholar ID"
                              name="scholar"
                              value={formData.scholar}
                              onChange={handleChange}
                              placeholder="25XXXXXXXX"
                              inputMode="numeric"
                              maxLength={11}
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
                            <NeoSelect label="Branch" name="branch" options={BRANCH_OPTIONS} value={formData.branch} onChange={handleChange} />
                            <NeoSelect label="Section" name="section" options={SECTION_OPTIONS} value={formData.section} onChange={handleChange} />
                          </div>

                          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
                            <NeoInput label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@gmail.com" />
                            <NeoInput
                              label="Contact Number"
                              type="tel"
                              name="contact"
                              value={formData.contact}
                              onChange={handleChange}
                              placeholder="10-digit mobile"
                              inputMode="numeric"
                              maxLength={10}
                            />
                          </div>

                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => {
                                const ok = validateStep1();
                                if (!ok) return;
                                setCurrentStep(2);
                              }}
                              className="bg-black text-white px-5 py-2 text-xs font-black uppercase tracking-[0.18em] border-[3px] border-black shadow-[8px_8px_0px_0px_#00629B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
                            >
                              Next: Verticals
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 2: VERTICALS + PORTFOLIO */}
                      {currentStep === 2 && (
                        <div className="space-y-6 sm:space-y-8">
                          <div className="space-y-4">
                            <label className="text-[11px] font-black uppercase flex items-center gap-2 text-[#00629B]">
                              <Sparkles size={16} /> Vertical_Selection (Max 3)
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {VERTICAL_OPTIONS.map(({ id, icon: Icon, description }) => {
                                const active = selectedVerticals.includes(id);
                                const coreDisabled =
                                  id === "Core Team Member" &&
                                  formData.branch &&
                                  !CORE_ELIGIBLE_BRANCHES.has(formData.branch);

                                return (
                                  <button
                                    key={id}
                                    type="button"
                                    onClick={() => {
                                      if (!coreDisabled) toggleVertical(id);
                                    }}
                                    className={`flex flex-col items-start gap-2 border-[3px] border-black p-4 text-left transition-all ${active
                                        ? "bg-[#00629B] text-white translate-x-1 translate-y-1 shadow-none"
                                        : "bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50"
                                      } ${coreDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                                  >
                                    <div className="flex w-full items-center justify-between gap-3">
                                      <div className="flex items-center gap-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white/90 text-[#00629B]">
                                          <Icon size={16} />
                                        </div>
                                        <span className="text-xs sm:text-sm font-black uppercase">
                                          {id}
                                        </span>
                                      </div>
                                      {active && <CheckCircle2 size={16} />}
                                    </div>
                                    <p
                                      className={`text-[12px] sm:text-[13px] leading-snug ${active ? "text-slate-100" : "text-slate-700"
                                        }`}
                                    >
                                      {description}
                                    </p>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {requiresPortfolioSelection && (
                            <NeoInput
                              label="Portfolio Link (Google Drive)"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleChange}
                              placeholder="Optional, but recommended for Photographer / Video / Design roles"
                            />
                          )}

                          {!requiresPortfolioSelection && (
                            <p className="text-[11px] text-slate-500">
                              Portfolio link is optional. Add it if you want to showcase your work.
                            </p>
                          )}

                          <div className="flex justify-between">
                            <button
                              type="button"
                              onClick={() => setCurrentStep(1)}
                              className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] border-[3px] border-black bg-white hover:bg-slate-50 transition-all"
                            >
                              Back
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const ok = validateStep2();
                                if (!ok) return;
                                setCurrentStep(3);
                              }}
                              className="bg-black text-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.18em] border-[3px] border-black shadow-[8px_8px_0px_0px_#00629B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
                            >
                              Next: Motivation
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: MOTIVATION + SUBMIT */}
                      {currentStep === 3 && (
                        <div className="space-y-6 sm:space-y-8">
                          <div className="space-y-2">
                            <label className="text-[11px] font-black uppercase text-[#00629B]">
                              Why Join IEEE MSB?
                            </label>
                            <textarea
                              name="why"
                              value={formData.why}
                              onChange={handleChange}
                              rows={5}
                              placeholder="Tell us about your interests and how you plan to contribute..."
                              className="w-full border-[3px] border-black px-4 py-3.5 font-semibold text-[15px] md:text-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-1 focus:translate-y-1 outline-none transition-all bg-white"
                            />
                          </div>

                          <div className="flex justify-between items-center">
                            <button
                              type="button"
                              onClick={() => setCurrentStep(2)}
                              className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] border-[3px] border-black bg-white hover:bg-slate-50 transition-all"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-black text-white px-6 py-3 font-black uppercase text-sm border-[3px] border-black shadow-[10px_10px_0px_0px_#00629B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                              {isSubmitting ? "Processing..." : "Transmit Application"}
                              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  </section>

                  {/* --- FAQ BELOW FORM --- */}
                  <section className="bg-white border-[4px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#00629B] rounded-2xl transition-transform duration-150 hover:-translate-y-1">
                    <h3 className="mb-4 text-base md:text-lg font-black uppercase tracking-[0.2em] text-[#00629B]">
                      FAQ · Before You Hit Submit
                    </h3>
                    <div className="space-y-4">
                      {FAQ_ITEMS.map((item) => (
                        <div
                          key={item.question}
                          className="border-[2px] border-black bg-slate-50 px-4 py-3 shadow-[8px_8px_0px_0px_#00629B] rounded-xl transition-transform duration-150 hover:-translate-y-1"
                        >
                          <p className="text-[12px] sm:text-sm font-black uppercase text-[#00629B] mb-1">
                            {item.question}
                          </p>
                          <p className="text-[12px] sm:text-sm font-medium text-slate-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* --- KNOW MORE ABOUT IEEE --- */}
                  <KnowMoreIEEE />
                </div>
              </div>
            ) : (
              /* --- SUCCESS SCREEN --- */
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-4xl mx-auto pt-6 pb-12 px-3 sm:px-4"
              >
                <div className="w-full bg-white border-[4px] sm:border-[5px] md:border-[8px] border-black p-4 sm:p-6 md:p-10 shadow-[10px_10px_0px_0px_#25D366] md:shadow-[20px_20px_0px_0px_#25D366] text-center relative overflow-hidden rounded-md">
                  {/* Success grid bg */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

                  <div className="relative z-10">
                    <div className="inline-block border-[3px] sm:border-[4px] md:border-[5px] border-black px-4 py-3 sm:p-4 md:p-6 bg-[#25D366] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4 sm:mb-6 md:mb-10 -rotate-2">
                      <CheckCircle2 className="text-white w-12 h-12 sm:w-16 sm:h-16" />
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tight mb-3 sm:mb-4 md:mb-6 leading-tight">
                      Application <br />
                      <span className="text-[#00629B]">Success</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600 mb-5 sm:mb-6 max-w-xl mx-auto leading-relaxed">
                      Your response has been logged in the IEEE MSB recruitment system. Join the WhatsApp groups below
                      so that the vertical-specific coordinators can share further rounds, timelines and resources with
                      you.
                    </p>

                    <div className="bg-slate-50 border-[3px] sm:border-[4px] border-black p-4 sm:p-5 md:p-7 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left">
                      <h4 className="font-black uppercase tracking-widest text-[11px] sm:text-sm mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                        <MessageCircle /> Join_Your_Vertical_Groups:
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-600 mb-3 sm:mb-4 md:mb-5">
                        Please join the WhatsApp group for each vertical you selected. If you chose multiple
                        verticals, join all of the corresponding groups so that every team can reach you.
                      </p>
                      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                        {selectedVerticals.map((v) => (
                          <a
                            key={v}
                            href={WHATSAPP_LINKS[v] ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-white border-[3px] border-black px-3 py-2.5 sm:px-4 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#25D366] text-white border border-black">
                                <MessageCircle size={16} />
                              </div>
                              <span className="font-black uppercase text-[10px] sm:text-xs">
                                {v} · WhatsApp Group
                              </span>
                            </div>
                            <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => window.location.reload()}
                      className="mt-6 md:mt-8 text-[11px] sm:text-xs font-black uppercase underline decoration-4 underline-offset-8 hover:text-[#00629B] transition-colors"
                    >
                      Return_to_Main_Frame
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- SUB-COMPONENTS ---

const KnowMoreIEEE = () => (
  <section className="bg-white border-[4px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#00629B] rounded-2xl transition-transform duration-150 hover:-translate-y-1">
    <h3 className="mb-4 text-lg md:text-xl font-black uppercase tracking-[0.18em] text-[#00629B] flex items-center gap-2">
      <Terminal size={18} /> Know_More_About_IEEE
    </h3>
    <div className="space-y-4">
      <div>
        <h4 className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#00629B]">About IEEE</h4>
        <p className="text-[13px] sm:text-sm md:text-base font-medium text-slate-700 leading-relaxed">
          IEEE (Institute of Electrical and Electronics Engineers) is the world&apos;s largest professional organization
          focused on advancing technology for the benefit of society. It provides a global platform for engineers,
          researchers, and students to collaborate, publish research, and work on innovations.
        </p>
      </div>
      <div>
        <h4 className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#00629B]">About IEEE MSB</h4>
        <p className="text-[13px] sm:text-sm md:text-base font-medium text-slate-700 leading-relaxed">
          IEEE MANIT Student Branch is the official IEEE body at MANIT Bhopal. We organize workshops, hackathons,
          coding contests, speaker sessions, and major conferences like SCEECS. Our aim is to help students move from
          learning technology to building it through practical exposure and teamwork.
        </p>
      </div>
      <div>
        <h4 className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-[#00629B]">Why Join IEEE?</h4>
        <ul className="list-disc pl-5 text-[13px] sm:text-sm md:text-base font-medium text-slate-700 leading-relaxed space-y-1">
          <li>Access global resources, research, and technical communities</li>
          <li>Learn from a worldwide network of engineers and innovators</li>
          <li>Work on real events and projects</li>
          <li>Develop leadership and teamwork skills</li>
          <li>Gain hands-on technical and practical experience</li>
        </ul>
      </div>
    </div>
  </section>
);

const NeoInput = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="block text-[12px] font-black uppercase text-[#00629B] tracking-[0.16em]">
      {label}
    </label>
    <input
      {...props}
      className="w-full border-[3px] border-black px-4 py-3.5 font-semibold text-[15px] md:text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-1 focus:translate-y-1 outline-none transition-all bg-white placeholder:text-slate-300"
    />
  </div>
);

const NeoSelect = ({ label, options, ...props }) => (
  <div className="space-y-2 relative">
    <label className="block text-[12px] font-black uppercase text-[#00629B] tracking-[0.16em]">
      {label}
    </label>
    <select
      {...props}
      className="w-full border-[3px] border-black p-4 font-semibold text-[15px] md:text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-none focus:translate-x-1 focus:translate-y-1 outline-none transition-all bg-white appearance-none cursor-pointer"
    >
      <option value="">-- UNKNOWN --</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
    <div className="absolute right-4 bottom-4 pointer-events-none">
      <ChevronRight size={18} className="rotate-90" />
    </div>
  </div>
);

export default Recruitment;