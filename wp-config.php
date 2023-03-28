<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ShopBag' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'YFKvlSSyMlmPVJL7AxzMX4VyCz8TZ2AGBQXNz1JWffkxD9TMgnPdCD674BFS08N6' );
define( 'SECURE_AUTH_KEY',  'XBdnE3XXb4opalZtJUU2UQMynIj6bsxGmiMWCPs5bJiLOiAyrRzGU09rOMkJnip6' );
define( 'LOGGED_IN_KEY',    'rCqnjKALCgrg0r4WoJiRtMJFqA6qAcKtRmMhnszFQdW1kN0UBcFW64485wB6IuJJ' );
define( 'NONCE_KEY',        'U5I8dKfRktV4twDsDyXRkKPo95SetsA49Ug7u2wpqfTXvPGqKl216mWrtq406yHg' );
define( 'AUTH_SALT',        'VVdSwG7ZivUw2yXeAFTG0tG9wEKV3R6uEETH4qKtYhzVQ0XhMChqkAbOrhP0QvgZ' );
define( 'SECURE_AUTH_SALT', '0KL4eu2oAsfxbTGKed0JQs51T4h7iuBhCiKo1t0fxsnjH4tPqYrG3ZziTJjTIM9v' );
define( 'LOGGED_IN_SALT',   's4lr9fsq3nLmFT79dZ4SY4erMRa2WJ7eQpdD9l8n7IJpMgCLTTyntt1R5tF1FeaT' );
define( 'NONCE_SALT',       'RRW3fXq6EhtXsxeozZC9yg0sa6pFVACniZhrr3FSG3Fe9Lo3alBuE3wtZwSvEQma' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
