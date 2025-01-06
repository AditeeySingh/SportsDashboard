import React, { useState } from 'react';
import { Timer, Filter } from 'lucide-react';
import MatchCard from './MatchCard';
import { sampleMatches } from '../data/matches';

export default function LiveScores() {
  const [selectedLeague, setSelectedLeague] = useState('All');
  const leagues = ['All', 'NBA', 'NFL', 'MLB'];

  const filteredMatches = selectedLeague === 'All' 
    ? sampleMatches 
    : sampleMatches.filter(match => match.league === selectedLeague);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900">Live Scores</h2>
            <div className="flex items-center text-green-600">
              <Timer className="w-5 h-5 mr-2" />
              <span>Live Updates</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex gap-2">
              {leagues.map(league => (
                <button
                  key={league}
                  onClick={() => setSelectedLeague(league)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedLeague === league
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {league}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}