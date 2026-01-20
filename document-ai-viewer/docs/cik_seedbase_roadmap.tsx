import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Circle, TrendingUp, Lock, Users, Church, Rocket, Zap } from 'lucide-react';

export default function MasterRoadmap() {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const phases = [
    {
      id: 1,
      title: "Phase 1: Reclaim Control & Relaunch $CIK 2.0",
      status: "current",
      timeline: "Q1 2026 (Now)",
      icon: TrendingUp,
      color: "blue",
      objective: "Buy back old $CIK supply, deploy new smart contract, and migrate holders to $CIK 2.0",
      context: "After partner dumps, we're buying back old $CIK and relaunching with a new contract that gives protocol (not Team Finance) full control. Capital secured February 2026. Christ is King Co holds 80%+ of old supply.",
      actions: [
        { done: true, text: "Launched original $CIK (May 2025)" },
        { done: true, text: "Christ is King Co secured 80%+ of original supply" },
        { done: false, text: "Secure buyback capital (February 2026)" },
        { done: false, text: "Buy out remaining partner whales on old contract" },
        { done: false, text: "Deploy new $CIK 2.0 smart contract (protocol-controlled)" },
        { done: false, text: "Snapshot all holders of original $CIK" },
        { done: false, text: "Airdrop/migrate holders to $CIK 2.0 contract" },
        { done: false, text: "Establish liquidity on new contract" },
        { done: false, text: "Buy up the chart to re-establish active trading" },
        { done: false, text: "Get $CIK 2.0 stable and actively traded on Base" },
      ],
      success: "All holders migrated to $CIK 2.0, protocol controls token design, and $CIK 2.0 is trading healthy"
    },
    {
      id: 2,
      title: "Phase 2: Build Seedbase (Stealth)",
      status: "next",
      timeline: "Q2 2026 (2-3 months)",
      icon: Lock,
      color: "green",
      objective: "Build Seedbase platform while onboarding first Activators via digital events",
      context: "Product team builds the app. Sales team runs digital events with demos, visuals, and collects seed commitments.",
      actions: [
        { done: false, text: "Sales team runs digital events showcasing Seedbase" },
        { done: false, text: "Use pitch deck, visuals, light demo to explain the system" },
        { done: false, text: "Collect seed commitments from early Activators (soft commits)" },
        { done: false, text: "Product team completes Seedbase app build" },
      ],
      success: "We have a pipeline of committed Activators ready to lock seed when app launches"
    },
    {
      id: 3,
      title: "Phase 3: Prime the Pump (GiverKey Bootstrap)",
      status: "upcoming",
      timeline: "Q2-Q3 2026",
      icon: Zap,
      color: "purple",
      objective: "Use Firma Foundation capital to create initial liquidity and prove the system works",
      context: "Before public launch, we use Firma Foundation as the first (silent) GiverKey to fund the ecosystem.",
      actions: [
        { done: false, text: "Firma Foundation deploys capital as GiverKey" },
        { done: false, text: "Foundation capital purchases $CIK on open market" },
        { done: false, text: "Lock $CIK into the Vault (feeds the reserve)" },
        { done: false, text: "Set up CIKseedbase as the anchor Seedbase" },
        { done: false, text: "Create initial missions under CIKseedbase" },
        { done: false, text: "Deploy capital to those missions (foundation-funded)" },
      ],
      success: "The system is live and working with real distributions flowing"
    },
    {
      id: 4,
      title: "Phase 4: Onboard Activators to Working System",
      status: "upcoming",
      timeline: "Q3 2026",
      icon: Users,
      color: "orange",
      objective: "Convert soft commits to locked seed and show Activators a functioning ecosystem",
      context: "Activators see distributions happening, missions getting funded, the feed showing real impact.",
      actions: [
        { done: false, text: "Convert Activator seed commitments → purchase $CIK on market → lock in Vault" },
        { done: false, text: "All early Activators attach to CIKseedbase (the anchor Seedbase)" },
        { done: false, text: "Activators see their impact in the SeedFeed immediately" },
        { done: false, text: "Fine-tune distribution math (Activators + Missions + Seedbase all get cuts)" },
        { done: false, text: "Activators receive distributions from $CIK appreciation and network growth" },
        { done: false, text: "CIKseedbase missions post updates, outcomes show in feed" },
      ],
      success: "Activators are locked in, seeing their seed work, getting distributions, and telling others"
    },
    {
      id: 5,
      title: "Phase 5: Onboard Seedbases (Churches + Nonprofits)",
      status: "upcoming",
      timeline: "Q3-Q4 2026",
      icon: Church,
      color: "indigo",
      objective: "Bring churches and nonprofits onto the platform with zero barrier to entry",
      context: "We set up Seedbases for free, give them a mission, auto-distribute small amounts. Their job: bring their people.",
      actions: [
        { done: false, text: "Reach out to churches and nonprofits" },
        { done: false, text: "Set up their Seedbase (we do the work)" },
        { done: false, text: "They pick a mission (or we suggest one)" },
        { done: false, text: "Mission receives automatic distributions ($100+) even before they bring anyone" },
        { done: false, text: "Provide churches with onboarding materials for their congregation" },
        { done: false, text: "Churches bring their people as Activators" },
        { done: false, text: "Churches see it working: transparency, distributions, visible impact" },
      ],
      success: "Churches adopt Seedbase as their giving platform without knowing it's 'crypto'"
    },
    {
      id: 6,
      title: "Phase 6: Churches Use Seedbase for Everything",
      status: "future",
      timeline: "2027",
      icon: Rocket,
      color: "pink",
      objective: "Seedbase becomes the financial OS for churches—tithing, donations, internal transfers",
      context: "Once churches are onboarded and trust the system, we expand use cases beyond missions.",
      actions: [
        { done: false, text: "Throttle down seed commitment distributions (less emphasis on locking, more on utility)" },
        { done: false, text: "Churches start using Seedbase for tithing" },
        { done: false, text: "Churches use Seedbase for internal donations and giving campaigns" },
        { done: false, text: "One-click USDC transfers to any mission or member" },
        { done: false, text: "Seedbase becomes the default financial layer for church operations" },
        { done: false, text: "$CIK is the engine powering everything in the background" },
      ],
      success: "Churches are fully onchain without realizing it. $CIK is their fuel."
    },
    {
      id: 7,
      title: "Phase 7: Migration to Firma Network",
      status: "future",
      timeline: "2027-2028",
      icon: Zap,
      color: "cyan",
      objective: "Move Seedbase and $CIK to Firma Network L2 as the micro-currency for Heaven Network States",
      context: "Seedbase graduates from Base to Firma's Optimism L2. $CIK becomes the community currency for Heaven districts.",
      actions: [
        { done: false, text: "Migrate Seedbase smart contracts to Firma Network (Optimism L2)" },
        { done: false, text: "$CIK becomes the micro-currency for Heaven Network State districts" },
        { done: false, text: "Seedbase users become citizens of Heaven Network States" },
        { done: false, text: "FIG (sovereign settlement currency) underpins $CIK and other micro-currencies" },
        { done: false, text: "Physical SEZ districts (Texas, El Salvador, Panama, Antigua) use $CIK for local transactions" },
        { done: false, text: "Firma Foundation continues to support $CIK price through GiverKey commitments" },
      ],
      success: "$CIK and Seedbase are the economic backbone of Heaven Network States. Full circle."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">The Master Strategy</h1>
          <p className="text-xl text-gray-700 mb-4">
            From $CIK memecoin → Seedbase platform → Heaven Network States
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
            <p className="text-sm text-gray-800 mb-3">
              <strong>Organizational Structure:</strong>
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="font-semibold">Firma Labs (Puerto Rico & Dubai)</p>
                <p className="text-gray-600">Engineering team building Firma Network</p>
              </div>
              <div>
                <p className="font-semibold">Firma Foundation (Nevis)</p>
                <p className="text-gray-600">Grants to Firma Labs, first GiverKey</p>
              </div>
              <div>
                <p className="font-semibold">Christ is King Co (Wyoming Nonprofit)</p>
                <p className="text-gray-600">Issued $CIK token</p>
              </div>
              <div>
                <p className="font-semibold">CIK Labs (Wyoming LLC)</p>
                <p className="text-gray-600">Contracts Firma Labs to build Seedbase</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-4">
            <p className="text-sm text-gray-800">
              <strong>The Play:</strong> Firma Foundation → GiverKey → Buys $CIK on market → Locks in Seedbase Vault → Fuels CIKseedbase (first Seedbase) → Drives distributions to Activators and missions
            </p>
          </div>
        </div>

        {/* The Story So Far */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">The Story So Far</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>May 2025:</strong> Launched original $CIK memecoin on Base. Strong community, sponsored Unchained Summit (top Base conference).
            </p>
            <p>
              <strong>Problem:</strong> Partners started dumping, market cap dropped. Token contract controlled by Team Finance, not protocol.
            </p>
            <p>
              <strong>Strategic Response:</strong> We intentionally lowered market cap further to gain majority supply control (80%+ held by Christ is King Co). 
              Now we're buying out remaining whales and relaunching with a NEW contract.
            </p>
            <p>
              <strong>January 2026:</strong> We are here. Capital will be secured in February 2026.
            </p>
            <p>
              <strong>The Relaunch:</strong> $CIK 2.0 will have protocol-controlled token design (not Team Finance). All holders of original $CIK 
              will be snapshotted and airdropped/migrated to the new contract. Clean slate, better architecture.
            </p>
            <p className="font-semibold text-blue-600">
              What looked like a setback was actually the setup for a complete reboot with full control.
            </p>
          </div>
        </div>

        {/* Phase Roadmap */}
        <div className="space-y-4">
          {phases.map((phase) => {
            const isExpanded = expandedPhase === phase.id;
            const Icon = phase.icon;
            const colorClasses = {
              blue: 'bg-blue-100 border-blue-500 text-blue-700',
              green: 'bg-green-100 border-green-500 text-green-700',
              purple: 'bg-purple-100 border-purple-500 text-purple-700',
              orange: 'bg-orange-100 border-orange-500 text-orange-700',
              indigo: 'bg-indigo-100 border-indigo-500 text-indigo-700',
              pink: 'bg-pink-100 border-pink-500 text-pink-700',
              cyan: 'bg-cyan-100 border-cyan-500 text-cyan-700',
            };

            return (
              <div key={phase.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                
                {/* Phase Header */}
                <div 
                  className={`p-6 cursor-pointer border-l-4 ${colorClasses[phase.color]}`}
                  onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <Icon size={32} />
                      <div>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                        <p className="text-sm opacity-75">{phase.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {phase.status === 'current' && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          IN PROGRESS
                        </span>
                      )}
                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                </div>

                {/* Phase Details */}
                {isExpanded && (
                  <div className="p-6 bg-gray-50 border-t-2 border-gray-200">
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2">Objective</h4>
                      <p className="text-gray-800">{phase.objective}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2">Context</h4>
                      <p className="text-gray-700">{phase.context}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-lg mb-2">Actions</h4>
                      <ul className="space-y-2">
                        {phase.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            {action.done ? (
                              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                            ) : (
                              <Circle className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                            )}
                            <span className={action.done ? 'text-gray-500 line-through' : 'text-gray-800'}>
                              {action.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border-l-4 border-green-500 p-4 rounded">
                      <h4 className="font-bold mb-1">Success Looks Like:</h4>
                      <p className="text-gray-800">{phase.success}</p>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* The Bigger Picture */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-4">The Bigger Picture</h2>
          <div className="space-y-3 text-lg">
            <p>
              <strong>$CIK</strong> is not just a memecoin. It's the engine.
            </p>
            <p>
              <strong>Seedbase</strong> is not just a giving platform. It's the onboarding mechanism.
            </p>
            <p>
              <strong>Firma Network</strong> is not just an L2. It's the operating system for digital nations.
            </p>
            <p className="text-xl font-bold mt-6">
              We're bringing Christians onchain, building physical network states, and creating sovereign economic infrastructure—one church at a time.
            </p>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Key Strategic Insights</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-1">The GiverKey Bootstrap Strategy</h3>
              <p className="text-gray-700">
                Firma Foundation (Nevis) becomes the first GiverKey. Foundation USDC buys $CIK on the open market, locks it in the Vault.
                This creates buying pressure, locks supply, and funds CIKseedbase missions. By the time churches and Activators arrive, 
                the system is already proven and working. We eat our own cooking.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold mb-1">CIKseedbase: The Anchor</h3>
              <p className="text-gray-700">
                The first Seedbase in the system. All early Activators attach here. Firma Foundation missions flow through it.
                It's the proof of concept that shows churches: "This is how it works." High visibility, high trust.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold mb-1">Zero Barrier Seedbase Onboarding</h3>
              <p className="text-gray-700">
                We don't ask churches for money. We SET UP their Seedbase, GIVE THEM a mission, and AUTO-DISTRIBUTE to them. 
                They see it working before they commit anything. Their only job: bring their people.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold mb-1">The Trojan Horse</h3>
              <p className="text-gray-700">
                Churches think they're getting a modern giving platform. They don't realize they're being onboarded to crypto, 
                onchain finance, and eventually citizenship in a network state. It's invisible infrastructure.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold mb-1">$CIK: The Hidden Engine</h3>
              <p className="text-gray-700">
                Users interact with USDC (familiar, stable). But $CIK is the locked fuel that makes the whole system work. 
                Firma Foundation buying $CIK on market + Activators locking seed = supply shock. As $CIK appreciates, surplus is created. 
                Surplus funds missions. Missions create impact. Impact attracts more Activators. Flywheel spins.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold mb-1">The Legal Architecture</h3>
              <p className="text-gray-700">
                Christ is King Co (Wyoming nonprofit) issued $CIK. CIK Labs (Wyoming LLC) contracts Firma Labs (PR/Dubai) to build Seedbase.
                Firma Foundation (Nevis) grants to Firma Labs and becomes first GiverKey. Clean separation, international structure, 
                optimized for compliance and tax efficiency.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-bold mb-1">From Giving to Governing</h3>
              <p className="text-gray-700">
                Phase 1-6 is about generous giving. Phase 7 is about network state governance. 
                By then, Seedbase users are already citizens—they just don't know it yet.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Timeline Overview</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-32 font-semibold text-blue-600">Q1 2026</div>
              <div className="flex-1 bg-blue-100 p-3 rounded">Buy out whales + Relaunch $CIK 2.0 (new contract, protocol-controlled)</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-semibold text-green-600">Q2 2026</div>
              <div className="flex-1 bg-green-100 p-3 rounded">Build Seedbase + collect soft commits</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-semibold text-purple-600">Q2-Q3 2026</div>
              <div className="flex-1 bg-purple-100 p-3 rounded">Bootstrap with Firma Foundation GiverKey (buying $CIK 2.0)</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-semibold text-orange-600">Q3 2026</div>
              <div className="flex-1 bg-orange-100 p-3 rounded">Onboard Activators to working system</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-semibold text-indigo-600">Q3-Q4 2026</div>
              <div className="flex-1 bg-indigo-100 p-3 rounded">Onboard churches as Seedbases</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-semibold text-pink-600">2027</div>
              <div className="flex-1 bg-pink-100 p-3 rounded">Seedbase becomes church financial OS</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-semibold text-cyan-600">2027-2028</div>
              <div className="flex-1 bg-cyan-100 p-3 rounded">Migrate to Firma Network L2, become Heaven micro-currency</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Firma Labs Internal Strategy Document</p>
          <p>Last Updated: January 2026</p>
        </div>

      </div>
    </div>
  );
}