import { ImageResponse } from "next/og";
import { LibertyIconMark } from "@/lib/liberty-icon-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<LibertyIconMark size={180} />, {
    ...size,
  });
}
