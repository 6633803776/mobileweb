export interface AccelSample {
  ax: number;
  ay: number;
  az: number;
  t: number;
}

export interface WorkoutStats {
  repsTotal: number;
  repsok: number;
  repsBad: number;
  score: number;
  avgRepMs: number;
  lastMessage?: string;
}

export interface WorkoutState {
  status: "IDLE" | "CALIBRATING" | "RUNNING" | "STOPPED";
  repDisplay: number;
  stats: WorkoutStats;
}