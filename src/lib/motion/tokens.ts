export const motionTokens = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
  },
  ease: {
    power2Out: "power2.out",
    power3Out: "power3.out",
  },
} as const;

export type MotionTokens = typeof motionTokens;

