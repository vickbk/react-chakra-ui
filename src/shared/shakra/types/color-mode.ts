import type { ThemeProviderProps } from "next-themes";
import type { IconButtonProps } from "node_modules/@chakra-ui/react/dist/types/components/button/icon-button";

export type ColorModeProviderProps = ThemeProviderProps;

export type ColorMode = "light" | "dark";

export type UseColorModeReturn = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
};

export type ColorModeButtonProps = Omit<IconButtonProps, "aria-label">;
