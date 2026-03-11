import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AlertTriangle, Loader2, SlidersHorizontal } from "lucide-react";

const verticalLabel = (row) =>
  [row.Vertical1, row.Vertical2, row.Vertical3].filter(Boolean).join(", ") || "—";

function buildSectionData(rows) {
  const counts = {};
  rows.forEach((r) => {
    const section = r.Section || "Unknown";
    counts[section] = (counts[section] || 0) + 1;
  });
  return Object.entries(counts).map(([section, count]) => ({ section, count }));
}

function buildVerticalData(rows) {
  const counts = {};
  rows.forEach((r) => {
    ["Vertical1", "Vertical2", "Vertical3"].forEach((key) => {
      const v = r[key];
      if (!v) return;
      counts[v] = (counts[v] || 0) + 1;
    });
  });
  return Object.entries(counts).map(([vertical, count]) => ({ vertical, count }));
}

const ALL_VERTICAL = "All Verticals";

function RecruitmentTrash() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [verticalFilter, setVerticalFilter] = useState(ALL_VERTICAL);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      const { data, error: dbError } = await supabase
        .from("students")
        .select(
          "Name, Scholar, Branch, Section, Vertical1, Vertical2, Vertical3, Email, Contact, Portfolio, Why",
        );

      if (dbError) {
        setError("Unable to load recruitment data. Please try again later.");
      } else {
        setRows(data || []);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredRows =
    verticalFilter === ALL_VERTICAL
      ? rows
      : rows.filter((r) => [r.Vertical1, r.Vertical2, r.Vertical3].includes(verticalFilter));

  const sectionData = buildSectionData(filteredRows);
  const verticalData = buildVerticalData(rows);

  const allVerticalOptions = [
    ALL_VERTICAL,
    ...Array.from(
      new Set(
        rows.flatMap((r) => [r.Vertical1, r.Vertical2, r.Vertical3].filter(Boolean)),
      ),
    ),
  ];

  return (
    <div
      className="min-h-screen bg-[#f8fafc] text-slate-900 font-mono selection:bg-[#00629B] selection:text-white"
      style={{
        backgroundImage:
          "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
        {/* Header */}
        <header className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border-[3px] border-black bg-[#00629B] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[8px_8px_0px_0px_#0f172a] rounded-md mb-4">
            <SlidersHorizontal size={14} />
            <span>IEEE MSB · Debug Board</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-[0.18em] leading-tight">
            Recruitment
            {/* <span className="text-[#00629B]"> Garbage View</span> */}
          </h1>
          <p className="mt-3 text-[12px] sm:text-sm text-slate-700 leading-relaxed">
            Internal-only snapshot of applications received via the IEEE MSB recruitment form. Use this to
            eyeball distribution across sections and verticals.
          </p>
        </header>

        {/* Filter + Summary */}
        <section className="bg-white border-[4px] border-black rounded-2xl shadow-[8px_8px_0px_0px_#00629B] p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-1">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#00629B]">
                Current_Filter
              </p>
              <p className="text-xs text-slate-700">
                Showing {filteredRows.length} of {rows.length} applications.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-700">
                Vertical
              </label>
              <select
                value={verticalFilter}
                onChange={(e) => setVerticalFilter(e.target.value)}
                className="border-[2px] border-black bg-white px-3 py-1.5 text-xs font-semibold rounded-md shadow-[4px_4px_0px_0px_#00629B] outline-none"
              >
                {allVerticalOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-[#00629B]" />
          </div>
        ) : error ? (
          <div className="flex items-center gap-3 bg-red-50 border-[3px] border-black rounded-xl px-4 py-3 shadow-[6px_6px_0px_0px_#f97373]">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <p className="text-sm font-semibold text-red-700">{error}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Charts at top */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Section pie */}
              <section className="bg-white border-[4px] border-black rounded-2xl shadow-[8px_8px_0px_0px_#00629B] p-4">
                <h2 className="mb-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-[#00629B]">
                  Section-wise Applications
                </h2>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip />
                      <Legend />
                      <Pie
                        data={sectionData}
                        dataKey="count"
                        nameKey="section"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        paddingAngle={3}
                      >
                        {sectionData.map((entry, index) => {
                          const COLORS = ["#00629B", "#38bdf8", "#0f766e", "#6366f1", "#f97316", "#22c55e"];
                          return (
                            <Cell
                              // eslint-disable-next-line react/no-array-index-key
                              key={`sec-cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          );
                        })}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </section>

              {/* Vertical pie */}
              <section className="bg-white border-[4px] border-black rounded-2xl shadow-[8px_8px_0px_0px_#00629B] p-4">
                <h2 className="mb-3 text-xs sm:text-sm font-black uppercase tracking-[0.18em] text-[#00629B]">
                  Vertical-wise Applications
                </h2>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip />
                      <Legend />
                      <Pie
                        data={verticalData}
                        dataKey="count"
                        nameKey="vertical"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        paddingAngle={3}
                      >
                        {verticalData.map((entry, index) => {
                          const COLORS = [
                            "#00629B",
                            "#38bdf8",
                            "#0f766e",
                            "#6366f1",
                            "#f97316",
                            "#22c55e",
                          ];
                          return (
                            <Cell
                              // eslint-disable-next-line react/no-array-index-key
                              key={`vert-cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          );
                        })}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </section>
            </div>

            {/* Table */}
            <section className="bg-white border-[4px] border-black rounded-2xl shadow-[8px_8px_0px_0px_#00629B] p-3 sm:p-4">
              <div className="max-h-[420px] sm:max-h-[520px] overflow-x-auto overflow-y-auto">
              <table className="min-w-full text-[11px] sm:text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300">
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em]">Name</th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em]">Scholar</th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em]">Branch</th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em]">Section</th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em]">Vertical(s)</th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em] hidden md:table-cell">
                      Email
                    </th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em] hidden md:table-cell">
                      Contact
                    </th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em]">
                      Portfolio
                    </th>
                    <th className="px-2 py-2 text-left font-black uppercase tracking-[0.16em]">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row) => (
                    <tr key={`${row.Scholar}-${row.Email}`} className="border-b border-slate-200">
                      <td className="px-2 py-2 font-semibold">{row.Name}</td>
                      <td className="px-2 py-2">{row.Scholar}</td>
                      <td className="px-2 py-2">{row.Branch}</td>
                      <td className="px-2 py-2">{row.Section}</td>
                      <td className="px-2 py-2">{verticalLabel(row)}</td>
                      <td className="px-2 py-2 hidden md:table-cell">{row.Email}</td>
                      <td className="px-2 py-2 hidden md:table-cell">{row.Contact}</td>
                      <td className="px-2 py-2">
                        {row.Portfolio ? (
                          <a
                            href={row.Portfolio}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-md border-[2px] border-black bg-[#00629B] px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0px_0px_#0f172a] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-[10px] text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-2 py-2 max-w-xs">
                        <span
                          className="block text-[10px] sm:text-[11px] text-slate-700 whitespace-normal"
                          title={row.Why || ""}
                        >
                          {row.Why ? (row.Why.length > 90 ? `${row.Why.slice(0, 90)}…` : row.Why) : "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredRows.length === 0 && (
                    <tr>
                      <td colSpan={9} className="px-2 py-4 text-center text-slate-500">
                        No applications match this filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecruitmentTrash;

