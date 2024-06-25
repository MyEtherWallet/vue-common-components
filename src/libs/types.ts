export type AmplitudeTrackType = (
  event: string,
  options?: { route: string }
) => void;
export interface AmplitudePropType {
  track: AmplitudeTrackType;
}
