/**
 * The play mark for listen buttons.
 *
 * This replaces the U+25B6 character that was here before. Most platforms give
 * that codepoint an emoji presentation — a blue rounded square on macOS and
 * iOS — which has nothing to do with the rest of the site and cannot be
 * restyled, since the glyph comes from the system's colour emoji font.
 *
 * Drawn rather than typed, so it takes the button's colour, scales with its
 * type size, and keeps the slightly tapered geometry of the serif setting
 * around it instead of a blunt equilateral triangle.
 */
export function PlayGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="play-glyph"
      viewBox="0 0 12 14"
      fill="none"
      focusable="false"
    >
      <path
        d="M1.1 1.32c0-.62.66-1.01 1.2-.71l8.6 4.68c.55.3.55 1.12 0 1.42l-8.6 4.68c-.54.3-1.2-.09-1.2-.71V1.32Z"
        fill="currentColor"
      />
    </svg>
  );
}
