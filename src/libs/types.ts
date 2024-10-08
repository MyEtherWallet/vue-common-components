export type AmplitudeTrackType = (
  event: string,
  options?: { route?: string, item?: string, step?: string, method?: string, cryptoKb?: boolean, market?: boolean, location?: string, updates?: boolean }
) => void;
export interface AmplitudePropType {
  track: AmplitudeTrackType;
}
