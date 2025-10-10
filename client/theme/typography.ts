// typography.ts

import { Colors } from "./theme"; // reuse your color tokens

export const Typography = {
  // Display styles
  display1: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.gray900,
  },
  display2: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.gray900,
  },

  // Titles
  title1: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.gray900,
  },
  title2: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.gray900,
  },

  // Headings
  heading1: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.gray800,
  },
  heading2: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.gray800,
  },

  // Sub-headings
  subHeading1: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.gray700,
  },
  subHeading2: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.gray700,
  },

  // Body text
  bodyLarge: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.gray800,
  },
  bodyLargeStrong: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.gray900,
  },
  bodyLargeEmphasis: {
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "italic",
    color: Colors.gray800,
  },

  body: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray800,
  },
  bodyStrong: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.gray900,
  },
  bodyEmphasis: {
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "italic",
    color: Colors.gray800,
  },
  bodyUnderline: {
    fontSize: 14,
    fontWeight: "400",
    textDecorationLine: "underline",
    color: Colors.gray800,
  },

  // Small body text
  bodySmall: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.gray700,
  },
  bodySmallStrong: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.gray900,
  },
  bodySmallEmphasis: {
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "italic",
    color: Colors.gray700,
  },
  bodySmallUnderline: {
    fontSize: 12,
    fontWeight: "400",
    textDecorationLine: "underline",
    color: Colors.gray700,
  },

  bodyExtraSmall: {
    fontSize: 10,
    fontWeight: "400",
    color: Colors.gray600,
  },
};
