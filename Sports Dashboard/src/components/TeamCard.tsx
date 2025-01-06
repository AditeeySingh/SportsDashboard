import React from 'react';
import { type Team } from '../types';

export default function TeamCard({ team, score, isHome }: { team: Team; score: number; isHome: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <img 
        src={team.logo} 
        alt={`${team.name} logo`}
        className="w-16 h-16 object-contain rounded-full bg-white shadow-sm"
      />
      <div>
        <p className="font-semibold text-xl">{team.name}</p>
        <p className="text-3xl font-bold">{score}</p>
      </div>
    </div>
  );
}