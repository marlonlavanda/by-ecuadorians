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
      if (JSON.stringify(mediaQuery) !== JSON.stringify(newMediaQuery)) {
        setMediaQuery(newMediaQuery);
      }
    };

    // Initial state update
    handleMediaChange();

    // Add event listeners
    if (mediaQueryMobile.addEventListener) {
      mediaQueryMobile.addEventListener("change", handleMediaChange);
    } else {
      mediaQueryMobile.addListener(handleMediaChange);
    }

    if (mediaQueryTablet.addEventListener) {
      mediaQueryTablet.addEventListener("change", handleMediaChange);
    } else {
      mediaQueryTablet.addListener(handleMediaChange);
    }

    if (mediaQueryDesktop.addEventListener) {
      mediaQueryDesktop.addEventListener("change", handleMediaChange);
    } else {
      mediaQueryDesktop.addListener(handleMediaChange);
    }

    // Cleanup event listeners
    return () => {
      if (mediaQueryMobile.removeEventListener) {
        mediaQueryMobile.removeEventListener("change", handleMediaChange);
      } else {
        mediaQueryMobile.removeListener(handleMediaChange);
      }

      if (mediaQueryTablet.removeEventListener) {
        mediaQueryTablet.removeEventListener("change", handleMediaChange);
      } else {
        mediaQueryTablet.removeListener(handleMediaChange);
      }

      if (mediaQueryDesktop.removeEventListener) {
        mediaQueryDesktop.removeEventListener("change", handleMediaChange);
      } else {
        mediaQueryDesktop.removeListener(handleMediaChange);
      }
    };
  }, [mediaQuery]);

  return {
    isMobile: mediaQuery.mobile,
    isTablet: mediaQuery.tablet,
    isDesktop: mediaQuery.desktop,
  };
};
