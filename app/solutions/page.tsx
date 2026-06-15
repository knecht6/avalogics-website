'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type SubService = { id: string; name: string; desc: string }
type ServiceArea = { id: number; title: string; subServices: SubService[] }

const serviceAreas: ServiceArea[] = [
  {
    id: 1,
    title: 'Business Strategy, Governance, and Growth',
    subServices: [
      { id: '1.1', name: 'Growth Strategy and Sourcing Roadmaps', desc: 'Helps leadership choose where the business should compete, what capabilities it must build or buy, and how to sequence the work. Services include strategic roadmaps, sourcing plans, competitive positioning, supplier selection support, initiative prioritization, and practical action plans tied to measurable business goals.' },
      { id: '1.2', name: 'Market Intelligence and Competitive Positioning', desc: 'Turns market signals, customer trends, competitor moves, and pricing behavior into clear recommendations. Services include market scans, opportunity sizing, competitor benchmarking, win/loss analysis, market entry planning, and messaging support for sales and leadership teams.' },
      { id: '1.3', name: 'Corporate Development and Transaction Readiness', desc: 'Supports acquisitions, divestitures, partnerships, and expansion decisions with structured planning and operational analysis. Services include target screening, diligence preparation, synergy planning, transition roadmaps, separation planning, and post-close operating support.' },
      { id: '1.4', name: 'Governance and Executive Decision Support', desc: 'Creates the decision structure needed to keep complex work aligned with business priorities. Services include steering committee design, decision calendars, executive dashboards, approval workflows, meeting discipline, decision records, and leadership briefing materials.' },
      { id: '1.5', name: 'Operating Model and Organization Design', desc: 'Defines how people, processes, tools, and decision rights should work together across the business. Services include organization design, role clarity, accountability models, process ownership, spans and layers review, service delivery models, and handoff improvement.' },
      { id: '1.6', name: 'Partner, Vendor, and Alliance Strategy', desc: 'Helps companies select, structure, and manage outside relationships that affect performance, cost, and growth. Services include partner strategy, vendor scorecards, alliance operating models, service expectations, renewal planning, and relationship health reviews.' },
      { id: '1.7', name: 'Innovation Portfolio Planning', desc: 'Builds a disciplined path for testing, funding, and scaling new ideas. Services include concept evaluation, pilot planning, value hypotheses, adoption pathways, stage-gate models, commercialization planning, and portfolio-level investment recommendations.' },
    ],
  },
  {
    id: 2,
    title: 'Financial Performance, Commercial Controls, and Value Management',
    subServices: [
      { id: '2.1', name: 'Financial Planning and Performance Controls', desc: 'Supports disciplined financial execution through planning, forecasting, cost visibility, and management reporting. Services include budgets, forecasts, variance analysis, cost tracking, performance reports, financial operating rhythms, and leadership-ready views of financial health.' },
      { id: '2.2', name: 'Cost Modeling and Business Case Development', desc: 'Creates fact-based cost and value models that help leaders compare options and justify investments. Services include lifecycle cost models, total cost of ownership analysis, scenario planning, savings estimates, capital planning inputs, and decision-grade business cases.' },
      { id: '2.3', name: 'Pricing, Revenue, and Profitability Advisory', desc: 'Helps companies understand where revenue is earned, where margin is lost, and how pricing can better reflect value. Services include profitability analysis, pricing structure review, discount analysis, deal economics, customer profitability, and margin improvement planning.' },
      { id: '2.4', name: 'Audit, Compliance, and Internal Controls', desc: 'Strengthens the company\'s control environment and prepares teams for reviews by investors, lenders, auditors, customers, and regulators. Services include control design, evidence organization, policy alignment, issue remediation, audit support, and management action tracking.' },
      { id: '2.5', name: 'Investment Prioritization and Benefits Realization', desc: 'Connects planned investments to business outcomes and tracks whether promised value is achieved. Services include prioritization frameworks, value scorecards, benefit owners, milestone reviews, adoption measurement, and corrective action planning.' },
      { id: '2.6', name: 'Contract Economics and Commercial Terms Support', desc: 'Helps business and legal teams understand the operational and financial effects of commercial terms. Services include pricing assumptions, service level impacts, volume scenarios, payment structures, renewal economics, cost recovery models, and support for negotiation planning.' },
      { id: '2.7', name: 'Working Capital and Cash Flow Improvement', desc: 'Improves how cash moves through the business by addressing billing, collections, inventory, purchasing, and payment timing. Services include cash conversion analysis, receivables improvement, inventory reduction planning, payables strategy, and cross-functional action plans.' },
    ],
  },
  {
    id: 3,
    title: 'Portfolio Delivery, Quality, and Risk Leadership',
    subServices: [
      { id: '3.1', name: 'Enterprise Initiative and Portfolio Leadership', desc: 'Provides leadership structure for groups of related initiatives that must move together to achieve a business result. Services include portfolio planning, schedule coordination, dependency tracking, executive reporting, milestone control, team alignment, and delivery recovery support.' },
      { id: '3.2', name: 'Service Quality and Performance Verification', desc: 'Builds confidence that products, services, facilities, and delivery teams meet agreed standards before problems reach customers. Services include inspection plans, performance reviews, acceptance criteria, quality metrics, root-cause analysis, corrective actions, and continuous improvement routines.' },
      { id: '3.3', name: 'Enterprise Risk and Resilience Planning', desc: 'Gives leaders a practical view of uncertainty and prepares the organization to respond before disruption becomes damage. Services include risk registers, exposure scoring, mitigation plans, executive risk reviews, contingency planning, resilience exercises, and ongoing risk monitoring.' },
      { id: '3.4', name: 'Delivery Management Office Enablement', desc: 'Creates a repeatable delivery structure for planning, reporting, issue control, and leadership visibility. Services include delivery playbooks, templates, meeting cadence, status reporting, milestone governance, decision tracking, and project health assessments.' },
      { id: '3.5', name: 'Vendor Delivery Oversight', desc: 'Monitors outside providers to keep contracted work on schedule, on budget, and aligned with expectations. Services include provider onboarding, performance reviews, deliverable tracking, service level review, issue escalation, invoice review support, and renewal readiness.' },
      { id: '3.6', name: 'Issue, Dependency, and Escalation Coordination', desc: 'Prevents stalled decisions and hidden dependencies from slowing critical work. Services include issue logs, cross-team dependency maps, escalation paths, resolution ownership, decision deadlines, and leadership intervention planning.' },
      { id: '3.7', name: 'Business Continuity and Recovery Planning', desc: 'Prepares teams to continue critical operations when disruptions occur. Services include continuity plans, recovery priorities, alternate work procedures, communications plans, tabletop exercises, supplier continuity review, and lessons-learned updates.' },
      { id: '3.8', name: 'Policy, Procedure, and Operating Standards Development', desc: 'Converts leadership intent into clear instructions that teams can follow consistently. Services include policy drafting, procedure libraries, process standards, approval workflows, desk guides, exception handling, and periodic refresh cycles.' },
      { id: '3.9', name: 'Performance Measurement and Executive Analytics', desc: 'Translates operating activity into useful metrics for leaders and frontline managers. Services include key performance indicators, dashboards, data definitions, metric governance, performance reviews, trend analysis, and action-oriented reporting.' },
    ],
  },
  {
    id: 4,
    title: 'Workforce Capability, Learning, and Adoption',
    subServices: [
      { id: '4.1', name: 'Workforce Skill Development and Practice Delivery', desc: 'Builds role-specific capability through targeted instruction, exercises, job aids, and performance checks. Services include custom courseware, instructor-led sessions, virtual delivery, hands-on labs, proficiency assessments, coaching, and learning reinforcement.' },
      { id: '4.2', name: 'Structured Learning and Instructional Programs', desc: 'Designs and delivers formal learning experiences for employees, customers, partners, and leadership groups. Services include curriculum design, lesson plans, learning objectives, facilitation, knowledge checks, certification support, and learning program administration.' },
      { id: '4.3', name: 'Change Adoption and Stakeholder Communications', desc: 'Helps people understand, accept, and use new processes, tools, structures, and ways of working. Services include stakeholder analysis, adoption plans, communications, leader toolkits, change champion networks, feedback loops, resistance response, and readiness measurement.' },
      { id: '4.4', name: 'Leadership Development and Coaching', desc: 'Strengthens manager and executive effectiveness during growth, transformation, and operational pressure. Services include leadership workshops, coaching plans, team effectiveness sessions, decision-making practices, communication coaching, and accountability routines.' },
      { id: '4.5', name: 'Workforce Planning and Talent Strategy', desc: 'Aligns staffing, skills, and capacity with business demand. Services include workforce forecasts, skill gap analysis, role design, staffing models, succession planning, retention planning, and hiring support.' },
      { id: '4.6', name: 'Knowledge Management and Performance Support', desc: 'Captures operational knowledge and makes it available where work happens. Services include knowledge libraries, standard answers, playbooks, quick-reference guides, content governance, search improvement, and knowledge refresh processes.' },
      { id: '4.7', name: 'Simulation, Exercises, and Readiness Drills', desc: 'Uses realistic practice scenarios to prepare teams for demanding work, unusual events, and high-consequence decisions. Services include exercise design, scenario scripts, facilitator guides, after-action reviews, improvement plans, and readiness scoring.' },
    ],
  },
  {
    id: 5,
    title: 'Customer, Process, and Operational Advisory',
    subServices: [
      { id: '5.1', name: 'Customer Experience and Service Design', desc: 'Improves the way customers, employees, and partners move through a product or service journey. Services include journey mapping, pain point analysis, service blueprinting, customer feedback analysis, experience metrics, and service improvement roadmaps.' },
      { id: '5.2', name: 'Business Process Improvement and Workflow Redesign', desc: 'Removes friction, rework, delay, and unnecessary handoffs from business operations. Services include process mapping, cycle-time analysis, workload balancing, automation opportunities, control point design, and future-state workflows.' },
      { id: '5.3', name: 'Operational Due Diligence and Readiness Reviews', desc: 'Evaluates whether a business unit, site, product launch, vendor, or operating change is prepared to perform. Services include readiness checklists, operational walkthroughs, gap analysis, launch criteria, risk reviews, and go-live recommendations.' },
      { id: '5.4', name: 'Strategic Communications and Brand Alignment', desc: 'Keeps internal and external messaging consistent with business priorities and customer expectations. Services include message architecture, executive narratives, communications calendars, stakeholder materials, brand-aligned content, and communications effectiveness review.' },
      { id: '5.5', name: 'Sustainability and Responsible Business Advisory', desc: 'Helps companies improve resource use, reduce waste, strengthen supplier practices, and communicate responsible business actions. Services include sustainability roadmaps, resource efficiency planning, supplier responsibility reviews, reporting support, and practical improvement initiatives.' },
      { id: '5.6', name: 'Customer Support Operating Model Advisory', desc: 'Designs efficient, scalable support operations for service centers, customer care teams, field support teams, and technical support groups. Services include channel strategy, staffing models, ticket workflows, service levels, quality monitoring, escalation design, and self-service planning.' },
      { id: '5.7', name: 'Revenue Operations and Sales Enablement', desc: 'Improves the flow from lead generation through contract award, onboarding, renewal, and expansion. Services include pipeline process design, sales playbooks, account planning, proposal support, handoff improvement, sales metrics, and customer success alignment.' },
    ],
  },
  {
    id: 6,
    title: 'Technical Engineering, Product Design, and Modernization',
    subServices: [
      { id: '6.1', name: 'Technical Design and Engineering Advisory', desc: 'Supports the design, review, improvement, and deployment of products, equipment, facilities, processes, and technical systems. Services include feasibility analysis, concept development, detailed design review, installation support, technical evaluation, engineering oversight, and lifecycle planning.' },
      { id: '6.2', name: 'Requirements, Architecture, and System Definition', desc: 'Turns business needs and operating constraints into clear technical requirements and practical designs. Services include requirements workshops, functional analysis, architecture planning, interface definition, trade studies, design criteria, and requirements traceability.' },
      { id: '6.3', name: 'Product Lifecycle and Configuration Planning', desc: 'Maintains control over product information, versions, components, documentation, and lifecycle changes. Services include configuration baselines, change boards, bill of materials review, end-of-life planning, revision control, and lifecycle governance.' },
      { id: '6.4', name: 'Reliability, Maintainability, and Safety Engineering', desc: 'Improves the ability of products, equipment, and processes to perform dependably over time. Services include failure analysis, maintainability review, safety assessments, reliability modeling, maintenance concept development, defect trend analysis, and corrective action planning.' },
      { id: '6.5', name: 'Technology Modernization and Capability Refresh', desc: 'Introduces improved tools, equipment, platforms, or software into existing operations without unnecessary disruption. Services include modernization planning, refresh roadmaps, compatibility review, implementation sequencing, user readiness, cost reduction analysis, and retirement planning for outdated components.' },
      { id: '6.6', name: 'Automation, Robotics, and Industrial Technology Enablement', desc: 'Helps companies apply automation where it improves throughput, safety, quality, and cost. Services include automation opportunity assessments, robotics planning, control process review, use case design, vendor coordination, pilot support, and scale-up planning.' },
      { id: '6.7', name: 'Test, Validation, and Commissioning Support', desc: 'Confirms that equipment, facilities, products, and systems are ready for live use. Services include test planning, acceptance criteria, commissioning checklists, performance trials, defect tracking, user acceptance support, and handover documentation.' },
      { id: '6.8', name: 'Human-Centered Operational Design and Workforce Fit', desc: 'Aligns technical solutions with the people who use, maintain, supervise, and support them. Services include human factors review, staffing impacts, workspace considerations, procedure design, safety considerations, training needs, and usability feedback.' },
      { id: '6.9', name: 'Technical Documentation and Controlled Content', desc: 'Creates and maintains accurate materials that support design, operation, maintenance, and compliance. Services include manuals, standard work instructions, drawings, technical data packages, operating procedures, maintenance guides, and document control.' },
    ],
  },
  {
    id: 7,
    title: 'Connected Systems, Data Flow, and Platform Operations',
    subServices: [
      { id: '7.1', name: 'Connected Systems and Data Exchange Enablement', desc: 'Allows different applications, devices, platforms, and data sources to share information reliably. Services include interface planning, data mapping, protocol review, platform connectivity, data exchange testing, message validation, and operating procedures for connected environments.' },
      { id: '7.2', name: 'Platform Migration and Operational Cutover', desc: 'Moves work from legacy tools, equipment, or platforms to improved environments while protecting business continuity. Services include migration planning, readiness checks, cutover playbooks, data transfer coordination, rollback plans, user communications, and post-cutover stabilization.' },
      { id: '7.3', name: 'Data Operations and Digital Thread Support', desc: 'Improves the accuracy, availability, and usefulness of operational data across the product and service lifecycle. Services include data process design, master data cleanup, data lineage, reporting inputs, quality rules, digital thread planning, and data stewardship.' },
      { id: '7.4', name: 'Operational Technology and Industrial Controls Support', desc: 'Supports equipment, sensors, controls, and shop-floor technologies that run physical operations. Services include control environment assessments, device inventory, monitoring requirements, networked equipment planning, operations handoff, maintenance procedures, and vendor coordination.' },
      { id: '7.5', name: 'Connected Asset Monitoring and Telemetry', desc: 'Uses equipment signals and operational data to improve uptime, maintenance planning, and performance visibility. Services include sensor strategy, telemetry requirements, alert thresholds, dashboard inputs, failure trend review, and maintenance workflow alignment.' },
      { id: '7.6', name: 'Enterprise Application and Equipment Interface Planning', desc: 'Improves how business applications and physical equipment exchange instructions, status, and performance information. Services include workflow alignment, interface requirements, test scenarios, exception handling, data ownership, and operational support planning.' },
    ],
  },
  {
    id: 8,
    title: 'Supply Chain, Logistics, and Fulfillment Operations',
    subServices: [
      { id: '8.1', name: 'Supply Chain and Distribution Optimization', desc: 'Improves the movement, storage, planning, and control of goods, materials, equipment, and information across the business. Services include supply network design, inventory planning, warehouse improvement, transportation coordination, materials handling, throughput analysis, and cost reduction plans.' },
      { id: '8.2', name: 'Inventory Planning and Materials Control', desc: 'Balances availability, cash use, storage capacity, and service levels across purchased goods, spare parts, raw materials, and finished products. Services include demand planning, reorder rules, stock level review, cycle counting, shortage reduction, excess inventory reduction, and inventory accuracy improvement.' },
      { id: '8.3', name: 'Warehouse, Fulfillment, and Storage Operations', desc: 'Improves receiving, storage, picking, packing, staging, and shipping performance. Services include layout review, slotting strategy, labor planning, workflow design, storage utilization, order accuracy improvement, and warehouse performance reporting.' },
      { id: '8.4', name: 'Transportation, Fleet, and Shipment Coordination', desc: 'Improves the flow of shipments and mobile assets across inbound, outbound, and field operations. Services include carrier coordination, route planning, fleet utilization, shipment visibility, freight cost review, delivery exception handling, and service performance tracking.' },
      { id: '8.5', name: 'Supplier Quality and Source Readiness', desc: 'Evaluates whether suppliers can meet business requirements for quality, timing, capacity, communication, and reliability. Services include supplier assessments, corrective action tracking, readiness reviews, scorecards, source qualification, and ongoing supplier performance routines.' },
      { id: '8.6', name: 'Packaging, Labeling, and Reverse Flow Management', desc: 'Supports accurate, efficient, and compliant handling of products moving to customers and returning from customers. Services include packaging requirements, labeling processes, return workflows, refurbishment routing, disposition procedures, warranty return support, and reusable packaging planning.' },
      { id: '8.7', name: 'Spare Parts Planning and Lifecycle Support', desc: 'Keeps critical parts available while avoiding unnecessary inventory investment. Services include spare parts strategy, criticality analysis, stocking models, parts substitution review, repair loop planning, obsolete parts management, and service parts reporting.' },
      { id: '8.8', name: 'Procurement Operations and Buying Process Support', desc: 'Improves the everyday process of requesting, approving, purchasing, receiving, and paying for goods and services. Services include purchase workflow design, supplier onboarding, catalog management, purchase order cleanup, buying channel guidance, and procurement performance reporting.' },
    ],
  },
  {
    id: 9,
    title: 'Manufacturing, Field Operations, and Facilities',
    subServices: [
      { id: '9.1', name: 'Production Capability and Factory Readiness', desc: 'Assesses whether a production environment can reliably deliver required volume, quality, timing, and cost. Services include capacity review, production planning, workflow readiness, staffing assumptions, supplier readiness, process stability review, and launch preparedness.' },
      { id: '9.2', name: 'Manufacturing Engineering and Process Industrialization', desc: 'Turns product designs and operating goals into repeatable production processes. Services include process design, tooling review, work instructions, line balancing, equipment selection support, pilot build planning, and handoff from engineering to production.' },
      { id: '9.3', name: 'Capacity Planning and Production Control', desc: 'Aligns demand, labor, equipment, materials, and schedules so production can meet customer commitments. Services include capacity models, production schedules, constraint analysis, bottleneck removal, labor loading, shift planning, and schedule recovery actions.' },
      { id: '9.4', name: 'Maintenance, Repair, and Field Service Operations', desc: 'Keeps equipment, assets, and customer-facing systems operating through planned and responsive support. Services include preventive maintenance planning, repair workflows, dispatch models, service parts coordination, technician procedures, uptime reporting, and field service quality review.' },
      { id: '9.5', name: 'Asset Management and Equipment Lifecycle Control', desc: 'Tracks assets from planning and purchase through operation, maintenance, refresh, and retirement. Services include asset inventories, condition assessments, lifecycle plans, utilization review, maintenance history, replacement forecasts, and disposal procedures.' },
      { id: '9.6', name: 'Facility Operations and Site Support', desc: 'Supports safe, efficient, and reliable work environments across offices, warehouses, plants, clinics, labs, and customer sites. Services include site readiness, space use review, service coordination, move planning, equipment placement, facility work orders, and operational walkthroughs.' },
      { id: '9.7', name: 'Environmental, Health, and Workplace Safety Operations', desc: 'Helps companies protect employees, customers, visitors, and operations while meeting applicable safety obligations. Services include safety procedures, hazard reviews, incident tracking, corrective actions, training coordination, workplace observations, and safety performance reporting.' },
      { id: '9.8', name: 'Energy, Utilities, and Resource Optimization', desc: 'Improves the reliability and cost profile of energy, utilities, water, and other operating resources. Services include usage analysis, conservation plans, utility performance review, equipment operating schedules, resource reporting, and efficiency improvement projects.' },
      { id: '9.9', name: 'Continuous Improvement and Lean Operations', desc: 'Builds a practical improvement culture focused on eliminating waste and improving flow. Services include kaizen planning, value stream mapping, standard work, visual management, root-cause problem solving, improvement boards, and performance routines.' },
    ],
  },
  {
    id: 10,
    title: 'Healthcare and Specialized Operational Logistics',
    subServices: [
      { id: '10.1', name: 'Healthcare Supply Continuity and Clinical Materials Flow', desc: 'Supports reliable planning, movement, storage, and availability of healthcare supplies, devices, consumables, and clinical equipment. Services include par-level review, clinical stockroom processes, equipment availability tracking, supplier coordination, usage analysis, and replenishment planning.' },
      { id: '10.2', name: 'Cold Chain, Sterile Handling, and Chain-of-Custody Support', desc: 'Protects sensitive materials that require special temperature, handling, sterility, custody, or traceability controls. Services include handling procedures, monitoring requirements, custody records, exception processes, storage review, and staff readiness support.' },
      { id: '10.3', name: 'Clinical Equipment Planning and Readiness', desc: 'Helps healthcare operators prepare equipment for patient-facing and support activities. Services include equipment inventories, preventive maintenance coordination, readiness checks, location tracking, accessory planning, replacement forecasts, and vendor service coordination.' },
      { id: '10.4', name: 'Recall, Expiration, and Controlled Inventory Practices', desc: 'Reduces operational risk from expired, recalled, damaged, or restricted-use materials. Services include recall workflows, expiration tracking, lot tracing, quarantine procedures, disposition support, staff notifications, and management reporting.' },
      { id: '10.5', name: 'High-Volume Event and Emergency Operations Readiness', desc: 'Prepares organizations for temporary increases in demand, disruptive events, and time-sensitive operating conditions. Services include readiness plans, staffing assumptions, supply buffers, command routines, communications plans, scenario exercises, and recovery actions.' },
    ],
  },
  {
    id: 11,
    title: 'Commercial Service Operations and Managed Support',
    subServices: [
      { id: '11.1', name: 'Service Desk and Operations Center Advisory', desc: 'Designs and improves centralized teams that receive, triage, resolve, and escalate business, customer, technical, or facility issues. Services include channel design, ticket processes, staffing models, quality review, escalation rules, knowledge use, and performance reporting.' },
      { id: '11.2', name: 'Managed Operations Transition Planning', desc: 'Moves work from one delivery model, vendor, site, or team structure to another with reduced disruption. Services include transition schedules, responsibility matrices, knowledge transfer, readiness gates, service stabilization, risk controls, and cutover support.' },
      { id: '11.3', name: 'Service Level Design and Performance Management', desc: 'Creates clear expectations for timeliness, quality, responsiveness, and results. Services include service level definitions, measurement methods, reporting templates, review meetings, improvement actions, and customer-facing performance narratives.' },
      { id: '11.4', name: 'Outsourcing, Co-Sourcing, and Shared Services Design', desc: 'Helps companies choose the right mix of internal teams, external providers, and centralized services. Services include sourcing options, delivery model design, service catalogs, role boundaries, pricing inputs, governance routines, and transition planning.' },
      { id: '11.5', name: 'Operational Reporting and Management Rhythm', desc: 'Builds the management cadence needed to keep daily, weekly, and monthly operations under control. Services include operating reviews, scorecards, action logs, metric packs, leader standard work, performance huddles, and escalation routines.' },
      { id: '11.6', name: 'Onboarding, Handoff, and Service Stabilization', desc: 'Improves the first weeks and months after a new product, service, site, vendor, or operating model goes live. Services include onboarding plans, responsibility handoffs, early-life support, hypercare staffing, defect triage, knowledge capture, and stabilization reporting.' },
    ],
  },
  {
    id: 12,
    title: 'Cross-Cutting Commercial Advisory and Operational Support',
    subServices: [
      { id: '12.1', name: 'Transformation Roadmaps and Execution Support', desc: 'Converts broad business change into sequenced work that teams can execute. Services include transformation planning, initiative charters, dependency mapping, resource planning, executive reporting, adoption tracking, and benefit measurement.' },
      { id: '12.2', name: 'Merger and Carve-Out Operational Support', desc: 'Helps companies combine, separate, or reposition operations after a transaction. Services include Day 1 planning, operating model alignment, service separation, process harmonization, vendor transition, data handoff, and stabilization planning.' },
      { id: '12.3', name: 'Regulatory and Industry Standards Alignment', desc: 'Helps commercial organizations understand and meet standards that affect their markets, products, facilities, or services. Services include standards mapping, policy updates, evidence organization, operating controls, readiness reviews, and corrective action support.' },
      { id: '12.4', name: 'Data Privacy and Information Handling Advisory', desc: 'Improves how teams handle sensitive business, customer, employee, and partner information. Services include information handling procedures, retention practices, role-based access workflows, privacy impact support, staff awareness materials, and compliance evidence coordination.' },
      { id: '12.5', name: 'Third-Party Risk and Supplier Governance', desc: 'Creates consistent oversight for vendors, suppliers, contractors, and partners that affect business continuity, customer trust, and operational performance. Services include supplier risk scoring, onboarding controls, periodic reviews, issue tracking, exit planning, and executive reporting.' },
      { id: '12.6', name: 'Commercial Proposal and Pursuit Support', desc: 'Helps sales, capture, and delivery teams prepare persuasive, accurate, and executable offers. Services include opportunity analysis, solution shaping, pricing inputs, staffing narratives, capability statements, proposal content, compliance checks, and review management.' },
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
      area.subServices.some(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q))
    )
  }, [search, isSearching])

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
            12 practice areas spanning 86 specialized sub-services — built for complex commercial and government challenges.
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
      <div className="max-w-5xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg mb-2">No services match your search.</p>
            <button onClick={() => setSearch('')} className="text-[#2563eb] text-sm hover:underline">Clear search</button>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(area => (
              <AccordionItem
                key={area.id}
                area={area}
                isOpen={isSearching ? true : openIds.has(area.id)}
                onToggle={() => toggle(area.id)}
                searchQuery={isSearching ? search : ''}
              />
            ))}
          </div>
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
