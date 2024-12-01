import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  Database, 
  BarChart2, 
  Truck, 
  Users, 
  Zap, 
  Layers
} from 'lucide-react';

// Main Application Component
const WarehouseAIPlatform = () => {
  const [activeTab, setActiveTab] = useState('query');
  const [queryInput, setQueryInput] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [discoveryInsights, setDiscoveryInsights] = useState([]);

  // Mock AI Agents 
  const aiAgents = [
    {
      id: 'inventory',
      title: 'Inventory Accuracy Agent',
      icon: <Database className="w-6 h-6" />,
      description: 'Automate cycle counts and reconcile discrepancies in real-time.',
      capabilities: [
        'AI-driven cycle count scheduling',
        'Automated inventory discrepancy analysis',
        'Real-time stock visibility improvements'
      ]
    },
    {
      id: 'location',
      title: 'SKU Location Optimization Agent',
      icon: <Layers className="w-6 h-6" />,
      description: 'Dynamically optimize inventory placement to reduce picking times.',
      capabilities: [
        'Identify high-velocity SKUs',
        'Suggest optimal re-slotting strategies',
        'Improve warehouse space utilization'
      ]
    },
    {
      id: 'returns',
      title: 'Reverse Logistics Agent',
      icon: <Truck className="w-6 h-6" />,
      description: 'Streamline returns processing with automated classification.',
      capabilities: [
        'Automated returns decision trees',
        'Instant inventory adjustment',
        'Faster processing workflows'
      ]
    },
    {
      id: 'labor',
      title: 'Labor Planning Agent',
      icon: <Users className="w-6 h-6" />,
      description: 'Optimize workforce productivity through dynamic task assignment.',
      capabilities: [
        'Real-time task prioritization',
        'Workload balancing',
        'Skill-based task allocation'
      ]
    }
  ];

  // Simulate query processing
  const handleQuery = () => {
    const mockResults = [
      { 
        type: 'SKU Insights', 
        content: 'Top 3 most picked SKUs today: #A1234, #B5678, #C9012' 
      },
      { 
        type: 'Efficiency Recommendation', 
        content: 'Reduce average pick time by re-slotting high-velocity items closer to packing stations' 
      }
    ];
    setQueryResults(mockResults);
  };

  // Simulate discovery insights
  const generateDiscoveryInsights = () => {
    const mockInsights = [
      {
        title: 'SKU Placement Optimization',
        description: 'Move SKU #WH-5472 (Large Industrial Compressor) from Zone C, Rack 12 to Zone A, near shipping stations',
        details: [
          'Current location: High-traffic picking path, 35% extra travel time',
          'Proposed new location: Adjacent to most frequent shipping lanes',
          'Estimated time savings: 22 minutes per shift'
        ],
        currentLocation: 'Zone C, Rack 12',
        proposedLocation: 'Zone A, Near Shipping',
        affectedSKU: 'WH-5472 (Large Industrial Compressor)',
        impact: 'Significant efficiency gain',
        confidence: '92%'
      },
      {
        title: 'Inventory Consolidation',
        description: 'Consolidate fragmented inventory for SKU #EL-2301 (Precision Electronic Components)',
        details: [
          'Currently split across 4 different locations',
          'Identified optimal consolidated storage area: Zone B, Shelves 5-7',
          'Potential to reduce picking errors by 45%'
        ],
        currentLocations: ['Rack 3, Shelf 2', 'Shelf 16, Zone D', 'Shelf 8, Zone A', 'Rack 11, Shelf 4'],
        proposedLocation: 'Zone B, Shelves 5-7',
        affectedSKU: 'EL-2301 (Precision Electronic Components)',
        impact: 'Reduced picking errors',
        confidence: '88%'
      },
      {
        title: 'Seasonal Staffing Optimization',
        description: 'Prepare for Q4 peak season with targeted workforce planning',
        details: [
          'Predicted order volume increase: 67% compared to current quarter',
          'Recommended additional staff: 12 workers (6 picking, 4 packing, 2 receiving)',
          'Focus on cross-training existing team members from low-volume departments'
        ],
        currentStaffing: 42,
        proposedStaffing: 54,
        peakSeasonProjection: '67% volume increase',
        impact: 'Operational readiness',
        confidence: '95%'
      }
    ];
    setDiscoveryInsights(mockInsights);
  };

  // Ensure discovery insights are generated when Discover tab is selected
  React.useEffect(() => {
    if (activeTab === 'discover') {
      generateDiscoveryInsights();
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl">
        {/* Header */}
        <header className="bg-blue-600 text-white p-6 rounded-t-xl flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Supply AI</h1>
            <p className="text-blue-100">Unlock the power of your warehouse data</p>
          </div>
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'query' ? 'bg-blue-800' : 'bg-blue-700'}`}
              onClick={() => setActiveTab('query')}
            >
              <Search className="inline-block mr-2" /> Query
            </button>
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'agents' ? 'bg-blue-800' : 'bg-blue-700'}`}
              onClick={() => setActiveTab('agents')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              Agents
            </button>
            <button 
              className={`px-4 py-2 rounded ${activeTab === 'discover' ? 'bg-blue-800' : 'bg-blue-700'}`}
              onClick={() => setActiveTab('discover')}
            >
              <Zap className="inline-block mr-2" /> Discover
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {activeTab === 'query' && (
            <div>
              <div className="flex space-x-4 mb-6">
                <input 
                  type="text" 
                  placeholder="Ask a question about your warehouse data..."
                  className="flex-grow p-3 border rounded"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                />
                <button 
                  className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                  onClick={handleQuery}
                >
                  Ask AI
                </button>
              </div>

              {queryResults.length > 0 && (
                <div className="bg-blue-50 p-4 rounded">
                  <h3 className="text-lg font-semibold mb-3">AI Insights</h3>
                  {queryResults.map((result, index) => (
                    <div key={index} className="mb-2 p-3 bg-white rounded shadow-sm">
                      <strong className="text-blue-600">{result.type}:</strong> {result.content}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'agents' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">AI Agents</h2>
              <div className="grid grid-cols-2 gap-6">
                {aiAgents.map((agent) => (
                  <div 
                    key={agent.id} 
                    className={`p-5 border rounded cursor-pointer transition-all ${
                      selectedAgent === agent.id 
                        ? 'bg-blue-50 border-blue-500' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedAgent(agent.id)}
                  >
                    <div className="flex items-center mb-3">
                      {agent.icon}
                      <h3 className="ml-3 font-semibold">{agent.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{agent.description}</p>
                    {selectedAgent === agent.id && (
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {agent.capabilities.map((capability, index) => (
                          <li key={index}>{capability}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'discover' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Warehouse Optimization Suggestions</h2>
              <div className="space-y-4">
                {discoveryInsights.map((insight, index) => (
                  <div 
                    key={index} 
                    className="p-5 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-blue-800">{insight.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">
                        Confidence: {insight.confidence}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{insight.description}</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mb-3">
                      {insight.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-600 font-medium">
                        Impact: {insight.impact}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                        Execute Suggestion
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default WarehouseAIPlatform;
