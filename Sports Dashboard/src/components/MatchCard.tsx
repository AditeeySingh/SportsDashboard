import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TeamCard from './TeamCard';
import { type Match } from '../types';

export default function MatchCard({ match }: { match: Match }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-500">{match.time}</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{match.league}</span>
      </div>
      <div className="space-y-4">
        <TeamCard team={match.homeTeam} score={match.homeScore} isHome={true} />
        <TeamCard team={match.awayTeam} score={match.awayScore} isHome={false} />
      </div>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800"
      >
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {isExpanded ? 'Show less' : 'Match details'}
      </button>
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Possession</span>
              <span>{match.stats.possession}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shots on Target</span>
              <span>{match.stats.shotsOnTarget}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Corner Kicks</span>
              <span>{match.stats.corners}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}