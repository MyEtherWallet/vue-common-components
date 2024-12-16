// export type AmplitudeTrackType = (
//   event: string,
//   options?: { route?: string, item?: string, step?: string, method?: string, cryptoKb?: boolean, market?: boolean, location?: string, updates?: boolean }
// ) => void;

import { MassagesSchema } from "@/locales"
import { Ref } from "vue"

// export interface AmplitudePropType {
//   track: AmplitudeTrackType;
// }

export type AmplitudeLike = {
  track(
    eventInput: string,
    eventProperties?: Record<string, unknown>,
    eventOptions?: Record<string, unknown>,
  ): AmplitudeResultLike<AmplitudeTrackResultLike>
}

export type AmplitudeResultLike<T> = { promise: Promise<T> }

export type AmplitudeTrackResultLike = {
  // event: Event;
  // code: number;
  // message: string;
}

export type UseI18n = (options: {
  locale?: string,
  messages: MassagesSchema,
}) => {
  t: (key: string) => string,
  locale: Ref<string>,
}
