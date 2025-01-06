export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface MatchStats {
  possession: string;
  shotsOnTarget: string;
  corners: string;
}

export interface Match {
  id: number;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  time: string;
  league: string;
  stats: MatchStats;
}