const colors = {
  navy: "#0f2744",
  gold: "#c9a227",
  red: "#c41e3a",
  white: "#ffffff",
} as const;

type LibertyIconMarkProps = {
  size: number;
};

/** Shared “L” lettermark for favicon and Apple touch icon generation. */
export function LibertyIconMark({ size }: LibertyIconMarkProps) {
  const fontSize = Math.round(size * 0.52);
  const outerBorder = Math.max(2, Math.round(size * 0.07));
  const innerRing = Math.max(1, Math.round(size * 0.035));
  const innerInset = Math.round(size * 0.14);
  const accentHeight = Math.max(2, Math.round(size * 0.08));

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colors.navy,
        borderRadius: "50%",
        border: `${outerBorder}px solid ${colors.gold}`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: innerInset,
          left: innerInset,
          right: innerInset,
          bottom: innerInset,
          borderRadius: "50%",
          border: `${innerRing}px solid ${colors.red}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: innerInset,
          left: "50%",
          width: "42%",
          height: accentHeight,
          marginLeft: "-21%",
          borderRadius: accentHeight,
          background: `linear-gradient(90deg, ${colors.red} 0%, ${colors.white} 50%, ${colors.gold} 100%)`,
        }}
      />
      <span
        style={{
          position: "relative",
          fontSize,
          fontWeight: 700,
          color: colors.gold,
          fontFamily: "system-ui, sans-serif",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          marginTop: Math.round(size * -0.02),
        }}
      >
        L
      </span>
    </div>
  );
}
