module.exports = {
	name: "eleventy-jet21.netlify.app", // optional, falls back to object key
	description: "Jet21 test site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://eleventy-jet21.netlify.app/",
		"https://eleventy-jet21.netlify.app/playground1/",
		"https://eleventy-jet21.netlify.app/newsletter/",
		"https://eleventy-jet21.netlify.app/twsite01/",
	]
};
