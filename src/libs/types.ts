export type AmplitudeTrackType = (
  event: string,
  options?: { route: string, item?: string, }
) => void;
export interface AmplitudePropType {
  track: AmplitudeTrackType;
}
