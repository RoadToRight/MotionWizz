import { useWindowWidth } from "./useWindowWidth";

export function useBreakpoint() {
  const width = useWindowWidth();

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
}
