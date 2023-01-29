export const isNotObject = (obj: unknown) : obj is Record<never, never> => 
  typeof obj === 'object' && obj != null && Object.keys(obj).length === 0;