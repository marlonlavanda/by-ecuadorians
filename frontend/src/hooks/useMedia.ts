import { useState, useEffect } from "react";

export const useMedia = () => {
  const [mediaQuery, setMediaQuery] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia("(max-width: 767px)");
    const mediaQueryTablet = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    const mediaQueryDesktop = window.matchMedia("(min-width: 1024px)");

    const handleMediaChange = () => {
      const newMediaQuery = {
        mobile: mediaQueryMobile.matches,
        tablet: mediaQueryTablet.matches,
        desktop: mediaQueryDesktop.matches,
      };

      // Update state only if it has changed
      setMediaQuery((prev) =>
        JSON.stringify(prev) !== JSON.stringify(newMediaQuery)
          ? newMediaQuery
          : prev
      );
    };

    // Initial state update
    handleMediaChange();

    // Add event listeners
    mediaQueryMobile.addEventListener
      ? mediaQueryMobile.addEventListener("change", handleMediaChange)
      : mediaQueryMobile.addListener(handleMediaChange);
    mediaQueryTablet.addEventListener
      ? mediaQueryTablet.addEventListener("change", handleMediaChange)
      : mediaQueryTablet.addListener(handleMediaChange);
    mediaQueryDesktop.addEventListener
      ? mediaQueryDesktop.addEventListener("change", handleMediaChange)
      : mediaQueryDesktop.addListener(handleMediaChange);

    // Cleanup event listeners
    return () => {
      mediaQueryMobile.removeEventListener
        ? mediaQueryMobile.removeEventListener("change", handleMediaChange)
        : mediaQueryMobile.removeListener(handleMediaChange);
      mediaQueryTablet.removeEventListener
        ? mediaQueryTablet.removeEventListener("change", handleMediaChange)
        : mediaQueryTablet.removeListener(handleMediaChange);
      mediaQueryDesktop.removeEventListener
        ? mediaQueryDesktop.removeEventListener("change", handleMediaChange)
        : mediaQueryDesktop.removeListener(handleMediaChange);
    };
  }, []);

  return {
    isMobile: mediaQuery.mobile,
    isTablet: mediaQuery.tablet,
    isDesktop: mediaQuery.desktop,
  };
};
