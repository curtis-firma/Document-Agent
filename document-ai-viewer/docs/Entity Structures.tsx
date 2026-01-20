import React from 'react';
import { ArrowRight, Building2, Coins, Landmark, Users } from 'lucide-react';

export default function OrgChart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Entity Structure & Relationships</h1>
          <p className="text-xl text-gray-700">How the pieces fit together</p>
        </div>

        {/* Main Entities */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          
          {/* Firma Foundation */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="text-green-600" size={32} />
              <div>
                <h2 className="text-2xl font-bold">Firma Foundation</h2>
                <p className="text-sm text-gray-600">Nevis</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Type:</strong> Foundation</p>
              <p><strong>Role:</strong> Economic development, sovereign wealth fund</p>
              <p><strong>Functions:</strong></p>
              <ul className="list-disc list-inside ml-2 text-gray-700">
                <li>Owns Firma Labs and Firma Network</li>
                <li>Gives grants to Firma Labs</li>
                <li>First GiverKey in Seedbase system</li>
                <li>Deploys capital to Seedbase as GiverKey</li>
                <li>Buys $CIK on market to bootstrap Vault</li>
              </ul>
            </div>
          </div>

          {/* Firma Labs */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-blue-600" size={32} />
              <div>
                <h2 className="text-2xl font-bold">Firma Labs</h2>
                <p className="text-sm text-gray-600">Puerto Rico & Dubai</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Type:</strong> Engineering Team</p>
              <p><strong>Role:</strong> Build infrastructure</p>
              <p><strong>Functions:</strong></p>
              <ul className="list-disc list-inside ml-2 text-gray-700">
                <li>Owned by Firma Foundation</li>
                <li>Builds Firma Network (Optimism L2)</li>
                <li>Contracted by CIK Labs to build Seedbase</li>
                <li>Receives grants from Firma Foundation</li>
                <li>Core development team</li>
              </ul>
            </div>
          </div>

          {/* Christ is King Co */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <Coins className="text-purple-600" size={32} />
              <div>
                <h2 className="text-2xl font-bold">Christ is King Co</h2>
                <p className="text-sm text-gray-600">Wyoming Nonprofit</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Type:</strong> 501(c)(3) Nonprofit</p>
              <p><strong>Role:</strong> Token issuer & strategic reserve</p>
              <p><strong>Functions:</strong></p>
              <ul className="list-disc list-inside ml-2 text-gray-700">
                <li>Issued original $CIK (May 2025)</li>
                <li>Holds 80%+ of $CIK v1 supply</li>
                <li>Deploying $CIK 2.0 (Q1 2026) - protocol-controlled</li>
                <li>Managing holder migration from v1 to v2</li>
                <li>Strategic reserve for protocol stability</li>
                <li>Owns $CIK intellectual property</li>
                <li>Community and brand steward</li>
                <li>Mission: Christian onchain adoption</li>
              </ul>
            </div>
          </div>

          {/* CIK Labs */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-orange-500">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-orange-600" size={32} />
              <div>
                <h2 className="text-2xl font-bold">CIK Labs</h2>
                <p className="text-sm text-gray-600">Wyoming LLC</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Type:</strong> Limited Liability Company</p>
              <p><strong>Role:</strong> Product owner & coordinator</p>
              <p><strong>Functions:</strong></p>
              <ul className="list-disc list-inside ml-2 text-gray-700">
                <li>Owns Seedbase platform</li>
                <li>Utilizes $CIK (issued by Christ is King Co)</li>
                <li>Contracts Firma Labs to build Seedbase</li>
                <li>Manages Seedbase product roadmap</li>
                <li>Legal entity for Seedbase operations</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Relationship Flow Diagram */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Capital & Development Flow</h2>
          
          <div className="space-y-6">
            
            {/* Flow 1: Grants & Ownership */}
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="w-48 text-center">
                <div className="font-bold text-green-700">Firma Foundation</div>
                <div className="text-xs text-gray-600">(Nevis)</div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <ArrowRight className="text-green-600" size={24} />
                <div className="text-sm bg-white px-3 py-1 rounded border border-green-300">
                  <strong>Owns & Grants $$</strong>
                </div>
                <ArrowRight className="text-green-600" size={24} />
              </div>
              <div className="w-48 text-center">
                <div className="font-bold text-blue-700">Firma Labs</div>
                <div className="text-xs text-gray-600">(PR/Dubai)</div>
              </div>
            </div>

            {/* Flow 2: Contracts */}
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <div className="w-48 text-center">
                <div className="font-bold text-orange-700">CIK Labs</div>
                <div className="text-xs text-gray-600">(Wyoming LLC)</div>
                <div className="text-xs text-gray-500 mt-1">Owns Seedbase</div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <ArrowRight className="text-orange-600" size={24} />
                <div className="text-sm bg-white px-3 py-1 rounded border border-orange-300">
                  <strong>Contracts to Build Seedbase</strong>
                </div>
                <ArrowRight className="text-orange-600" size={24} />
              </div>
              <div className="w-48 text-center">
                <div className="font-bold text-blue-700">Firma Labs</div>
                <div className="text-xs text-gray-600">(PR/Dubai)</div>
              </div>
            </div>

            {/* Flow 3: Token Relationship */}
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <div className="w-48 text-center">
                <div className="font-bold text-purple-700">Christ is King Co</div>
                <div className="text-xs text-gray-600">(Wyoming Nonprofit)</div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <ArrowRight className="text-purple-600" size={24} />
                <div className="text-sm bg-white px-3 py-1 rounded border border-purple-300">
                  <strong>Issued $CIK Token</strong>
                </div>
                <ArrowRight className="text-purple-600" size={24} />
              </div>
              <div className="w-48 text-center">
                <div className="font-bold text-orange-700">CIK Labs</div>
                <div className="text-xs text-gray-600">(Utilizes $CIK)</div>
              </div>
            </div>

            {/* Flow 4: GiverKey */}
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="w-48 text-center">
                <div className="font-bold text-green-700">Firma Foundation</div>
                <div className="text-xs text-gray-600">(Nevis)</div>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <ArrowRight className="text-blue-600" size={24} />
                <div className="text-sm bg-white px-3 py-1 rounded border border-blue-300">
                  <strong>Deploys Capital as GiverKey</strong>
                </div>
                <ArrowRight className="text-blue-600" size={24} />
              </div>
              <div className="w-48 text-center">
                <div className="font-bold text-orange-700">Seedbase Platform</div>
                <div className="text-xs text-gray-600">(Owned by CIK Labs)</div>
              </div>
            </div>

          </div>
        </div>

        {/* The GiverKey Bootstrap */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">The GiverKey Bootstrap Strategy</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">0</div>
              <div>
                <p className="font-semibold">Christ is King Co holds strategic reserve</p>
                <p className="text-sm text-green-100">80%+ of original $CIK v1 supply secured. Prevents dumps during transition.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold">Buy out remaining partner whales (Feb 2026)</p>
                <p className="text-sm text-green-100">Use secured capital to acquire remaining v1 supply from early partners</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold">Deploy $CIK 2.0 smart contract</p>
                <p className="text-sm text-green-100">New contract with protocol-controlled token design (not Team Finance). Built for Seedbase integration.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold">Snapshot and migrate all v1 holders</p>
                <p className="text-sm text-green-100">Airdrop $CIK 2.0 to all v1 holders. Community stays intact, contract gets upgraded.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-semibold">Firma Foundation sets up GiverKey</p>
                <p className="text-sm text-green-100">Foundation becomes first major capital committer using $CIK 2.0</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <p className="font-semibold">Foundation USDC buys $CIK 2.0 on open market</p>
                <p className="text-sm text-green-100">Creates buying pressure on new contract, establishes liquidity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
              <div>
                <p className="font-semibold">Lock $CIK 2.0 in Seedbase Vault</p>
                <p className="text-sm text-green-100">Removes supply from circulation, increases scarcity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">7</div>
              <div>
                <p className="font-semibold">CIKseedbase launches as first Seedbase</p>
                <p className="text-sm text-green-100">Foundation missions deployed, distributions flow, system proven</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">8</div>
              <div>
                <p className="font-semibold">Early Activators attach to CIKseedbase</p>
                <p className="text-sm text-green-100">They see a working system with $CIK 2.0 before churches join</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Ecosystem */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Product Ecosystem</h2>
          
          <div className="grid grid-cols-3 gap-6">
            
            <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-lg mb-2">Firma Network</h3>
              <p className="text-sm text-gray-700">Optimism L2 blockchain</p>
              <p className="text-xs text-gray-600 mt-2">Owned by: Firma Foundation</p>
              <p className="text-xs text-gray-600">Built by: Firma Labs</p>
              <p className="text-xs text-gray-600">Funded by: Firma Foundation</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold text-lg mb-2">Seedbase</h3>
              <p className="text-sm text-gray-700">Governed generosity platform</p>
              <p className="text-xs text-gray-600 mt-2">Owned by: CIK Labs</p>
              <p className="text-xs text-gray-600">Built by: Firma Labs</p>
              <p className="text-xs text-gray-600">Engine: $CIK token</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="font-bold text-lg mb-2">$CIK Token</h3>
              <p className="text-sm text-gray-700">Locked fuel for Seedbase</p>
              <p className="text-xs text-gray-600 mt-2">Issued by: Christ is King Co</p>
              <p className="text-xs text-gray-600">v1 Launched: May 2025</p>
              <p className="text-xs text-gray-600">v2 Relaunch: Q1 2026 (protocol-controlled)</p>
              <p className="text-xs text-gray-600">Used by: CIK Labs (Seedbase)</p>
              <p className="text-xs text-gray-600">Future: Heaven micro-currency</p>
            </div>

          </div>
        </div>

        {/* Why This Structure */}
        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why This Structure?</h2>
          <div className="grid grid-cols-2 gap-6">
            
            <div>
              <h3 className="font-bold mb-2 text-blue-600">🌍 International Optimization</h3>
              <p className="text-sm text-gray-700">
                Puerto Rico, Dubai, Nevis, Wyoming—each jurisdiction chosen for specific legal, tax, and operational advantages.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-green-600">🛡️ Legal Separation</h3>
              <p className="text-sm text-gray-700">
                Clean boundaries between token issuer, platform owner, infrastructure builder, and foundation. Compliance-ready.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-purple-600">💼 Supply Control</h3>
              <p className="text-sm text-gray-700">
                Christ is King Co holding 80%+ supply prevents future dumps and enables strategic price control during Seedbase launch.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2 text-orange-600">🚀 Scalability</h3>
              <p className="text-sm text-gray-700">
                Can easily add new entities, products, or jurisdictions as the ecosystem grows without restructuring.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Internal Document - Firma Ecosystem</p>
          <p>Last Updated: January 2026</p>
        </div>

      </div>
    </div>
  );
}