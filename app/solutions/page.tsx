'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type SubService = { id: string; name: string; desc: string }
type ServiceArea = { id: number; title: string; summary: string; domain: 1 | 2; subServices: SubService[] }

const serviceAreas: ServiceArea[] = [
  {
    id: 1,
    title: 'Business Strategy, Governance, and Growth',
    summary: 'Executive-level strategic planning, governance frameworks, and growth advisory to position organizations for long-term competitive advantage.',
    domain: 2,
    subServices: [
      { id: '1.1', name: 'Strategic Planning and Direction Setting', desc: 'Facilitating leadership-level strategy sessions to define mission-aligned objectives, competitive positioning, and multi-year roadmaps that translate organizational vision into executable plans.' },
      { id: '1.2', name: 'Corporate Governance and Board Advisory', desc: 'Designing governance structures, policy frameworks, and oversight mechanisms that ensure accountability, transparency, and compliance with regulatory and fiduciary obligations.' },
      { id: '1.3', name: 'Organizational Design and Restructuring', desc: 'Assessing current operating models and recommending structural changes that improve decision velocity, reduce redundancy, and align organizational capacity to strategic priorities.' },
      { id: '1.4', name: 'Market Entry and Expansion Strategy', desc: 'Conducting market analysis, competitive benchmarking, and opportunity scoping to guide decisions on geographic expansion, new market penetration, or adjacency moves.' },
      { id: '1.5', name: 'Mergers, Acquisitions, and Divestitures Advisory', desc: 'Supporting due diligence, integration planning, and post-merger execution to maximize value capture and minimize operational disruption during major corporate transactions.' },
      { id: '1.6', name: 'Innovation and Growth Strategy', desc: 'Identifying emerging opportunities, designing innovation portfolios, and building the operational infrastructure needed to scale new products, services, or business models.' },
      { id: '1.7', name: 'Stakeholder Engagement and Executive Communications', desc: 'Developing stakeholder mapping, engagement strategies, and executive-level communications that build alignment, manage expectations, and maintain organizational trust.' },
    ],
  },
  {
    id: 2,
    title: 'Financial Performance, Commercial Controls, and Value Management',
    summary: 'Rigorous financial management, cost control, and commercial advisory to optimize resource allocation and protect organizational value.',
    domain: 2,
    subServices: [
      { id: '2.1', name: 'Financial Planning, Analysis, and Forecasting', desc: 'Building robust financial models, scenario analyses, and rolling forecasts that provide leadership with the insight needed to make confident resource and investment decisions.' },
      { id: '2.2', name: 'Budget Development and Cost Management', desc: 'Designing and executing disciplined budgeting processes, establishing cost baselines, and implementing controls to track and contain spending across complex organizations.' },
      { id: '2.3', name: 'Commercial Contract and Pricing Strategy', desc: 'Structuring contract terms, pricing models, and commercial frameworks that balance competitive positioning with margin protection and contractual risk management.' },
      { id: '2.4', name: 'Revenue Optimization and Value Capture', desc: 'Analyzing revenue streams, identifying untapped value pools, and implementing commercial improvements that translate operational performance into measurable financial returns.' },
      { id: '2.5', name: 'Financial Controls and Internal Audit Support', desc: 'Establishing internal control frameworks, conducting process-level audits, and remediating control weaknesses to protect organizational assets and ensure compliance.' },
      { id: '2.6', name: 'Capital Allocation and Investment Advisory', desc: 'Prioritizing capital deployment across competing initiatives using disciplined ROI analysis, portfolio-level financial modeling, and investment governance frameworks.' },
      { id: '2.7', name: 'Enterprise Cost Reduction Programs', desc: 'Leading structured cost transformation initiatives — from diagnostic benchmarking through implementation — to generate sustainable savings without degrading operational capability.' },
    ],
  },
  {
    id: 3,
    title: 'Portfolio Delivery, Quality, and Risk Leadership',
    summary: 'End-to-end program and portfolio management ensuring projects are delivered on schedule, within budget, and to defined quality standards.',
    domain: 2,
    subServices: [
      { id: '3.1', name: 'Program and Project Management Office (PMO) Services', desc: 'Establishing or augmenting PMO functions with governance frameworks, reporting structures, and standardized methodologies that bring discipline and visibility to complex program portfolios.' },
      { id: '3.2', name: 'Portfolio Governance and Prioritization', desc: 'Implementing portfolio-level decision frameworks that align project investments with strategic priorities, balance resource constraints, and provide leadership with a clear view of delivery health.' },
      { id: '3.3', name: 'Schedule and Cost Performance Management', desc: 'Developing, maintaining, and analyzing integrated program schedules and cost baselines to surface performance trends early and keep programs on track.' },
      { id: '3.4', name: 'Quality Management Systems Design', desc: 'Building quality management frameworks, inspection plans, and process controls that embed quality assurance at every project phase from design through delivery.' },
      { id: '3.5', name: 'Risk Identification and Mitigation Planning', desc: 'Conducting structured risk assessments, building risk registers, and developing mitigation and contingency strategies that reduce the probability and impact of adverse program events.' },
      { id: '3.6', name: 'Earned Value Management (EVM)', desc: 'Implementing ANSI/EIA-748-compliant earned value systems that provide objective, data-driven insight into cost, schedule, and technical performance on government and commercial programs.' },
      { id: '3.7', name: 'Integrated Master Scheduling (IMS)', desc: 'Building and maintaining logic-driven, resource-loaded integrated master schedules that trace work packages through to contract milestones and surface critical path risks.' },
      { id: '3.8', name: 'Delivery Assurance and Stage-Gate Reviews', desc: 'Conducting independent milestone reviews, readiness assessments, and stage-gate evaluations to validate that programs meet entry and exit criteria before progressing to the next phase.' },
      { id: '3.9', name: 'Recovery Planning for Troubled Programs', desc: 'Rapidly diagnosing root causes of program distress and leading structured recovery actions — from re-baselining through stabilization — to restore program health and stakeholder confidence.' },
    ],
  },
  {
    id: 4,
    title: 'Workforce Capability, Learning, and Adoption',
    summary: 'Strategic workforce development, change management, and learning program design that builds organizational capability and drives successful adoption.',
    domain: 2,
    subServices: [
      { id: '4.1', name: 'Organizational Change Management', desc: 'Designing and executing structured change management programs — stakeholder analysis, impact assessment, communication planning, and resistance management — that ensure transformations land effectively.' },
      { id: '4.2', name: 'Training Program Design and Delivery', desc: 'Developing role-based, outcomes-driven training curricula — from classroom instruction to e-learning modules — that build practical competencies aligned to operational requirements.' },
      { id: '4.3', name: 'Leadership Development and Executive Coaching', desc: 'Designing leadership development programs and providing one-on-one executive coaching that strengthens decision-making, communication, and organizational leadership capability.' },
      { id: '4.4', name: 'Workforce Planning and Talent Strategy', desc: 'Analyzing workforce supply and demand, identifying capability gaps, and developing talent acquisition, retention, and succession strategies aligned to long-term organizational needs.' },
      { id: '4.5', name: 'Competency Framework Development', desc: 'Building job-specific competency models and proficiency standards that provide a foundation for hiring, performance assessment, career development, and skills gap closure.' },
      { id: '4.6', name: 'Learning Management System (LMS) Implementation', desc: 'Selecting, configuring, and deploying learning management platforms that deliver, track, and report on training completion and competency development at scale.' },
      { id: '4.7', name: 'Technology Adoption and User Enablement', desc: 'Developing go-live readiness assessments, super-user networks, and post-deployment support programs that maximize user adoption and minimize productivity loss during system transitions.' },
    ],
  },
  {
    id: 5,
    title: 'Customer, Process, and Operational Advisory',
    summary: 'Business process improvement, customer experience design, and operational optimization advisory that eliminates waste and accelerates throughput.',
    domain: 2,
    subServices: [
      { id: '5.1', name: 'Business Process Mapping and Improvement', desc: 'Conducting current-state process discovery, identifying inefficiencies and non-value-added steps, and redesigning workflows using Lean, Six Sigma, and process engineering principles.' },
      { id: '5.2', name: 'Customer Experience Strategy and Design', desc: 'Mapping customer journeys, identifying friction points, and designing service models that improve satisfaction, reduce churn, and differentiate the organization in competitive markets.' },
      { id: '5.3', name: 'Operational Efficiency and Lean Advisory', desc: 'Embedding Lean methodologies — value stream mapping, waste elimination, standard work, and visual management — to drive measurable throughput improvements across operations.' },
      { id: '5.4', name: 'Service Delivery Model Design', desc: 'Designing operating models, service tier structures, and delivery architectures that align service capacity and capability to evolving customer and mission requirements.' },
      { id: '5.5', name: 'Performance Measurement and KPI Development', desc: 'Building performance measurement frameworks, defining leading and lagging KPIs, and establishing reporting cadences that give leadership real-time visibility into operational health.' },
      { id: '5.6', name: 'Standard Operating Procedure Development', desc: 'Authoring clear, role-specific SOPs and work instructions that standardize processes, reduce variability, and create a foundation for continuous improvement and audit readiness.' },
      { id: '5.7', name: 'Operational Diagnostics and Turnaround Advisory', desc: 'Rapidly assessing underperforming operations, identifying root causes of performance gaps, and leading structured interventions to stabilize and improve operational outcomes.' },
    ],
  },
  {
    id: 6,
    title: 'Technical Engineering, Product Design, and Modernization',
    summary: 'Full-spectrum systems engineering, product design, and technology modernization services from requirements through fielded capability.',
    domain: 1,
    subServices: [
      { id: '6.1', name: 'Systems Engineering and Integration', desc: 'Applying model-based systems engineering (MBSE) principles to define system architectures, allocate requirements, and ensure end-to-end interoperability across complex multi-domain systems.' },
      { id: '6.2', name: 'Technical Requirements Analysis and Management', desc: 'Capturing, decomposing, and managing technical and functional requirements across the system hierarchy — ensuring traceability from stakeholder need through verification and validation.' },
      { id: '6.3', name: 'Hardware and Embedded Systems Design', desc: 'Designing hardware solutions including electronics, mechanical assemblies, and embedded control systems that meet performance, reliability, and environmental specifications.' },
      { id: '6.4', name: 'Software Development and Systems Architecture', desc: 'Designing and developing software systems — from embedded firmware to enterprise applications — with disciplined architecture practices, code quality standards, and DevSecOps integration.' },
      { id: '6.5', name: 'Product Lifecycle Management (PLM)', desc: 'Implementing PLM processes and tooling to manage the complete product record — from conceptual design through end-of-life — ensuring configuration integrity and design authority.' },
      { id: '6.6', name: 'Legacy System Modernization and Digital Transformation', desc: 'Assessing aging systems, defining modernization roadmaps, and executing migration strategies that reduce technical debt, improve maintainability, and unlock digital capabilities.' },
      { id: '6.7', name: 'Test and Evaluation Planning', desc: 'Developing test and evaluation master plans, test procedures, and instrumentation strategies that validate system performance against requirements across all phases of the acquisition lifecycle.' },
      { id: '6.8', name: 'Technical Documentation and Configuration Management', desc: 'Producing and controlling engineering documentation — specifications, drawings, ICDs, and technical manuals — with rigorous configuration management to ensure single-source-of-truth accuracy.' },
      { id: '6.9', name: 'Prototype and Proof of Concept Development', desc: 'Rapidly building hardware and software prototypes to validate design concepts, de-risk technical approaches, and demonstrate feasibility before committing to full-scale development.' },
    ],
  },
  {
    id: 7,
    title: 'Connected Systems, Data Flow, and Platform Operations',
    summary: 'Enterprise integration, data platform engineering, and IT operations that connect systems and transform raw data into operational intelligence.',
    domain: 1,
    subServices: [
      { id: '7.1', name: 'Enterprise Architecture and Systems Integration', desc: 'Designing enterprise architecture blueprints and integration patterns — APIs, middleware, and data buses — that connect disparate systems into a coherent, interoperable digital ecosystem.' },
      { id: '7.2', name: 'Data Platform Engineering and Analytics', desc: 'Building data lakes, warehouses, and analytics pipelines that ingest, transform, and surface operational data to support real-time decision-making and advanced analytics.' },
      { id: '7.3', name: 'Cloud Strategy, Migration, and Operations', desc: 'Developing cloud adoption roadmaps, executing lift-and-shift and re-architecture migrations, and establishing cloud operations frameworks that optimize cost, performance, and security.' },
      { id: '7.4', name: 'API Design and Integration Services', desc: 'Designing RESTful, GraphQL, and event-driven APIs that enable secure, scalable integration between enterprise systems, third-party platforms, and external data sources.' },
      { id: '7.5', name: 'IT Infrastructure Planning and Managed Operations', desc: 'Planning, deploying, and managing on-premise and hybrid IT infrastructure — servers, networking, storage — with operational runbooks and NOC-level support frameworks.' },
      { id: '7.6', name: 'Cybersecurity and Information Assurance', desc: 'Conducting risk assessments, designing security architectures, and implementing controls aligned to NIST, CMMC, and RMF frameworks to protect systems and data from evolving threats.' },
    ],
  },
  {
    id: 8,
    title: 'Supply Chain, Logistics, and Fulfillment Operations',
    summary: 'End-to-end supply chain optimization, procurement advisory, and logistics network design that reduces cost and improves delivery performance.',
    domain: 1,
    subServices: [
      { id: '8.1', name: 'Supply Chain Strategy and Network Optimization', desc: 'Designing end-to-end supply chain strategies — sourcing, manufacturing, distribution, and last-mile — optimized for cost, resilience, and service level performance.' },
      { id: '8.2', name: 'Procurement and Strategic Sourcing Advisory', desc: 'Developing procurement strategies, conducting should-cost analysis, running competitive sourcing events, and structuring supplier agreements that generate sustainable commercial value.' },
      { id: '8.3', name: 'Inventory Management and Optimization', desc: 'Applying statistical modeling and demand-driven replenishment strategies to right-size inventory levels — reducing carrying cost while maintaining service availability.' },
      { id: '8.4', name: 'Warehouse and Distribution Center Operations', desc: 'Designing warehouse layouts, slotting strategies, pick-pack-ship processes, and labor management systems that maximize throughput and accuracy in distribution environments.' },
      { id: '8.5', name: 'Transportation and Freight Management', desc: 'Optimizing carrier networks, modal mix, and freight routing strategies to reduce transportation spend and improve delivery reliability across domestic and international lanes.' },
      { id: '8.6', name: 'Supplier Relationship and Performance Management', desc: 'Building supplier scorecards, governance structures, and continuous improvement programs that drive accountability and elevate supplier quality, delivery, and responsiveness.' },
      { id: '8.7', name: 'Demand Planning and Sales & Operations Planning (S&OP)', desc: 'Implementing demand sensing, statistical forecasting, and S&OP processes that align supply plans with commercial demand signals to reduce stockouts and excess inventory.' },
      { id: '8.8', name: 'Reverse Logistics and Returns Management', desc: 'Designing reverse logistics processes and returns management workflows that efficiently handle product returns, repairs, remanufacturing, and responsible disposition.' },
    ],
  },
  {
    id: 9,
    title: 'Manufacturing, Field Operations, and Facilities',
    summary: 'Manufacturing process engineering, field technical services, and facilities management to maximize operational output and asset reliability.',
    domain: 1,
    subServices: [
      { id: '9.1', name: 'Manufacturing Process Engineering', desc: 'Designing and optimizing production processes — from line layout and tooling to process flow and cycle time — to achieve target output rates, quality levels, and unit cost objectives.' },
      { id: '9.2', name: 'Lean Manufacturing and Continuous Improvement', desc: 'Deploying Lean and Six Sigma methodologies on the production floor — value stream mapping, 5S, kaizen events, and statistical process control — to eliminate waste and variability.' },
      { id: '9.3', name: 'Quality Assurance and First Article Inspection', desc: 'Developing quality plans, inspection procedures, and non-conformance management processes that ensure manufactured products meet drawing requirements and customer acceptance criteria.' },
      { id: '9.4', name: 'Maintenance, Repair, and Overhaul (MRO) Operations', desc: 'Designing and managing MRO programs — scheduled maintenance, depot repair, and overhaul workflows — that maintain asset availability and extend equipment service life.' },
      { id: '9.5', name: 'Field Service Operations and Technical Support', desc: 'Deploying and managing field service organizations that provide on-site installation, troubleshooting, calibration, and technical support for fielded systems and equipment.' },
      { id: '9.6', name: 'Facilities Planning, Design, and Management', desc: 'Planning facility footprints, managing capital improvement projects, and operating facilities management programs that maintain safe, compliant, and productive work environments.' },
      { id: '9.7', name: 'Safety, Health, and Environmental (SH&E) Compliance', desc: 'Developing and implementing SH&E programs, conducting hazard assessments, and ensuring compliance with OSHA, EPA, and industry-specific safety and environmental regulations.' },
      { id: '9.8', name: 'Production Planning and Master Scheduling', desc: 'Developing production plans, capacity models, and master schedules that align manufacturing output with demand commitments while optimizing machine utilization and workforce deployment.' },
      { id: '9.9', name: 'Industrial Engineering and Workforce Efficiency', desc: 'Conducting time studies, ergonomic assessments, and labor efficiency analyses that optimize workforce deployment, reduce injury risk, and improve direct labor productivity.' },
    ],
  },
  {
    id: 10,
    title: 'Healthcare and Specialized Operational Logistics',
    summary: 'Specialized advisory and logistics support for healthcare organizations and complex regulated operational environments.',
    domain: 2,
    subServices: [
      { id: '10.1', name: 'Healthcare Operations and Clinical Workflow Advisory', desc: 'Analyzing patient flow, clinical workflows, and operational processes within healthcare settings to reduce wait times, improve throughput, and elevate care quality.' },
      { id: '10.2', name: 'Medical Logistics and Healthcare Supply Chain', desc: 'Managing the procurement, storage, distribution, and tracking of pharmaceuticals, medical devices, and clinical supplies to ensure availability and regulatory compliance.' },
      { id: '10.3', name: 'Patient Flow and Care Coordination Optimization', desc: 'Redesigning care coordination processes and discharge workflows to reduce length of stay, prevent bottlenecks, and improve the patient experience across the care continuum.' },
      { id: '10.4', name: 'Healthcare Regulatory and Compliance Advisory', desc: 'Navigating complex healthcare regulatory environments — Joint Commission, CMS, HIPAA — to assess compliance posture, close gaps, and prepare organizations for accreditation.' },
      { id: '10.5', name: 'Specialized Equipment and Medical Asset Management', desc: 'Designing and managing lifecycle programs for high-value medical and specialized equipment — from procurement and maintenance scheduling through calibration and end-of-life disposition.' },
    ],
  },
  {
    id: 11,
    title: 'Commercial Service Operations and Managed Support',
    summary: 'Managed services design, ITSM implementation, and service operations support that deliver consistent, measurable service outcomes.',
    domain: 2,
    subServices: [
      { id: '11.1', name: 'Managed Services Program Design and Transition', desc: 'Designing managed service models — scope, SLAs, pricing, governance, and transition plans — that enable organizations to outsource or restructure service delivery for improved performance and cost.' },
      { id: '11.2', name: 'IT Service Management (ITSM) Implementation', desc: 'Implementing ITIL-aligned ITSM processes and tooling — incident, problem, change, and request management — that standardize IT operations and improve service reliability.' },
      { id: '11.3', name: 'Help Desk and Technical Support Operations', desc: 'Standing up and managing Tier 1–3 help desk and technical support operations, including staffing models, knowledge base development, escalation procedures, and performance reporting.' },
      { id: '11.4', name: 'Service Level Agreement Design and Management', desc: 'Crafting SLA frameworks with meaningful metrics, measurement methodologies, and accountability structures that align service providers to customer outcomes.' },
      { id: '11.5', name: 'Business Continuity and Disaster Recovery Planning', desc: 'Developing and testing Business Continuity Plans (BCPs) and IT Disaster Recovery Plans (DRPs) that minimize business disruption and enable rapid restoration of critical services.' },
      { id: '11.6', name: 'Vendor and Contract Performance Management', desc: 'Building vendor governance frameworks, performance scorecards, and contract management processes that hold service providers accountable and drive continuous improvement.' },
    ],
  },
  {
    id: 12,
    title: 'Cross-Cutting Commercial Advisory and Operational Support',
    summary: 'Versatile advisory and execution support services that span functional boundaries to address complex, multi-domain operational challenges.',
    domain: 2,
    subServices: [
      { id: '12.1', name: 'Strategic Communications and Stakeholder Reporting', desc: 'Developing executive briefings, program status reports, and stakeholder communication packages that convey complex information clearly and build confidence with leadership and oversight bodies.' },
      { id: '12.2', name: 'Proposal Development and Capture Support', desc: 'Supporting business development efforts with proposal writing, price-to-win analysis, competitive intelligence, and capture strategy development for government and commercial opportunities.' },
      { id: '12.3', name: 'Policy Analysis and Regulatory Compliance Advisory', desc: 'Analyzing regulatory requirements, assessing organizational compliance posture, and developing remediation plans that address gaps and reduce regulatory risk exposure.' },
      { id: '12.4', name: 'Data-Driven Decision Making and Analytics Enablement', desc: 'Building analytics capabilities — dashboards, data governance practices, and self-service reporting — that shift organizational culture toward evidence-based decision making.' },
      { id: '12.5', name: 'Knowledge Management and Lessons Learned', desc: 'Designing knowledge management systems and after-action review processes that capture institutional expertise, surface lessons learned, and prevent recurrence of avoidable mistakes.' },
      { id: '12.6', name: 'Special Projects and Operational Surge Support', desc: 'Providing experienced advisory and execution support for time-sensitive, high-priority special projects that require rapid mobilization, cross-functional expertise, and proven delivery capability.' },
    ],
  },
]

function AccordionItem({
  area,
  isOpen,
  onToggle,
  searchQuery,
}: {
  area: ServiceArea
  isOpen: boolean
  onToggle: () => void
  searchQuery: string
}) {
  const highlight = (text: string) => {
    if (!searchQuery.trim()) return text
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-[#2563eb]/30 text-[#60a5fa] rounded px-0.5">{part}</mark> : part
    )
  }

  return (
    <div className={`border rounded-xl transition-all duration-200 ${isOpen ? 'border-[#2563eb]/50 bg-[#0d1526]' : 'border-white/10 bg-[#0d1526]/60 hover:border-white/20'}`}>
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-start gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="shrink-0 w-10 h-10 rounded-lg bg-[#2563eb]/20 border border-[#2563eb]/30 flex items-center justify-center text-[#2563eb] text-sm font-black mt-0.5">
          {area.id}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#60a5fa] transition-colors duration-150">
            {highlight(area.title)}
          </h3>
          <p className="text-gray-400 text-sm mt-1 leading-relaxed">{highlight(area.summary)}</p>
        </div>
        <span className={`shrink-0 mt-1 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-200 ${isOpen ? 'border-[#2563eb]/60 bg-[#2563eb]/20 rotate-180' : 'border-white/20 bg-white/5'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-white/5">
          <div className="pt-4 space-y-3">
            {area.subServices.map(sub => (
              <div key={sub.id} className="flex gap-4 p-4 rounded-lg bg-[#0a0f1e]/70 border border-white/5 hover:border-white/10 transition-colors duration-150">
                <span className="shrink-0 text-[#2563eb] text-xs font-bold font-mono mt-0.5 w-8">{sub.id}</span>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">{highlight(sub.name)}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight(sub.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function DomainSection({
  domainNum,
  title,
  tag,
  desc,
  areas,
  openIds,
  onToggle,
  isSearching,
}: {
  domainNum: number
  title: string
  tag: string
  desc: string
  areas: ServiceArea[]
  openIds: Set<number>
  onToggle: (id: number) => void
  isSearching: boolean
}) {
  if (areas.length === 0) return null
  return (
    <section>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#2563eb] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
            {tag}
          </span>
          <span className="text-gray-500 text-xs">{areas.length} practice area{areas.length !== 1 ? 's' : ''}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{title}</h2>
        <p className="text-gray-400 max-w-3xl">{desc}</p>
      </div>
      <div className="space-y-3">
        {areas.map(area => (
          <AccordionItem
            key={area.id}
            area={area}
            isOpen={isSearching ? true : openIds.has(area.id)}
            onToggle={() => onToggle(area.id)}
            searchQuery={isSearching ? '' : ''}
          />
        ))}
      </div>
    </section>
  )
}

export default function Solutions() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState('')

  const toggle = (id: number) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const isSearching = search.trim().length > 0

  const filtered = useMemo(() => {
    if (!isSearching) return serviceAreas
    const q = search.toLowerCase()
    return serviceAreas.filter(area =>
      area.title.toLowerCase().includes(q) ||
      area.summary.toLowerCase().includes(q) ||
      area.subServices.some(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q))
    )
  }, [search, isSearching])

  const domain2 = filtered.filter(a => a.domain === 2)
  const domain1 = filtered.filter(a => a.domain === 1)

  const totalSubs = filtered.reduce((n, a) => n + a.subServices.length, 0)

  return (
    <main className="bg-[#0a0f1e] min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1526] to-[#0a0f1e]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #2563eb22 0%, transparent 60%), radial-gradient(circle at 80% 20%, #1d4ed822 0%, transparent 50%)' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block bg-[#2563eb]/20 border border-[#2563eb]/40 text-[#2563eb] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            MAPS Service Catalog
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            12 practice areas spanning 86 specialized sub-services across two integrated MAPS domains — built for complex commercial and government challenges.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-[#2563eb]">12</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Practice Areas</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-black text-[#2563eb]">86</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Sub-Services</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-black text-[#2563eb]">2</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Domains</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky search */}
      <div className="sticky top-[65px] z-40 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/10 px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <div className="relative flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search services, capabilities, or keywords..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0d1526] border border-white/10 focus:border-[#2563eb]/60 rounded-lg pl-11 pr-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors duration-200 text-sm"
            />
            {isSearching && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {isSearching && (
            <span className="text-gray-400 text-sm shrink-0">
              {filtered.length} area{filtered.length !== 1 ? 's' : ''}, {totalSubs} service{totalSubs !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg mb-2">No services match your search.</p>
            <button onClick={() => setSearch('')} className="text-[#2563eb] text-sm hover:underline">Clear search</button>
          </div>
        ) : (
          <>
            <DomainSection
              domainNum={2}
              title="Management & Advisory"
              tag="Domain 2"
              desc="Strategic consulting, financial performance, program delivery, workforce development, customer and process advisory, healthcare operations, managed support, and cross-cutting operational advisory."
              areas={domain2}
              openIds={openIds}
              onToggle={toggle}
              isSearching={isSearching}
            />
            <DomainSection
              domainNum={1}
              title="Engineering, Logistics & Operational"
              tag="Domain 1"
              desc="Technical engineering, product design, systems modernization, connected platforms, supply chain optimization, manufacturing, and field operations services."
              areas={domain1}
              openIds={openIds}
              onToggle={toggle}
              isSearching={isSearching}
            />
          </>
        )}
      </div>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0d1526] border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Tell us about your challenge. Our team will identify the right capabilities to deliver results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  )
}
