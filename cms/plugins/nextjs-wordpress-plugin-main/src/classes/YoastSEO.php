<?php
/**
 * Next.js WordPress Plugin: Yoast SEO functionality
 *
 * Manages the integration of Yoast SEO plugin settings for a Next.js front-end.
 * Specifically, this class modifies the canonical URLs generated by Yoast SEO.
 *
 * @package NextJS_WordPress_Plugin
 * @since 1.0.0
 */

namespace NextJS_WordPress_Plugin;

/**
 * Handles the customization of Yoast SEO plugin settings for a Next.js front-end.
 *
 * @author Greg Rickaby
 * @since 1.0.6
 */
class YoastSEO {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->hooks();
	}

	/**
	 * Registers hooks for the class.
	 *
	 * @return void
	 */
	public function hooks(): void {
		add_filter( 'wpseo_canonical', [ $this, 'filter_canonical' ] );
		add_filter( 'wpseo_opengraph_url', [ $this, 'filter_canonical' ] );
	}

	/**
	 * Filters the canonical URL generated by Yoast SEO.
	 *
	 * Modifies the canonical URL to point to the Next.js front-end URL instead of the WordPress URL.
	 *
	 * @param string $canonical The current page's generated canonical URL.
	 * @return string The modified canonical URL.
	 */
	public function filter_canonical( $canonical ): string {
		// Check if the NEXTJS_FRONTEND_URL constant is defined.
		if ( ! defined( 'NEXTJS_FRONTEND_URL' ) ) {
			return $canonical;
		}

		// Replace the WordPress URL with the Next.js front-end URL.
		return str_replace( trailingslashit( get_home_url() ), NEXTJS_FRONTEND_URL, $canonical );
	}
}
