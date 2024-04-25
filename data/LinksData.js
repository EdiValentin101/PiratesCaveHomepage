// date 29-Jul, 2022
const webLinks = [
    // All social profile
    {
        title: 'Discord',
        url: 'https://discord.com/invite/YUDVR2eQTJ',
        type: 'social',
        icon: '/discord.png',
        on: true
    },
    /*{
        title: 'Instagram',
        url: 'https://instagram.com/realvjy',
        type: 'social',
        icon: '/insta.svg',
        on: true
    },
    {
        title: 'Dribbble',
        url: 'https://dribbble.com/realvjy',
        type: 'social',
        icon: '/dribbble.svg',
        on: false
    },
    {
        title: 'Medium',
        url: 'https://medium.com/@realvjy',
        type: 'social',
        icon: '/medium.svg',
        on: false
    },
	*/
    {
        title: 'Github',
        url: 'https://github.com/PiratesCave',
        type: 'social',
        icon: '/github.svg',
        on: true
    },
	/*
    {
        title: 'Youtube',
        url: 'https://youtube.com/realvjy',
        type: 'social',
        icon: '/youtube.svg',
        on: false
    },
    {
        title: 'Figma',
        url: 'https://figma.com/@realvjy',
        type: 'social',
        icon: '/figma.svg',
        on: true
    },
    {
        title: 'Behance',
        url: 'https://behance.net/realvjy',
        type: 'social',
        icon: '/behance.svg',
        on: false
    },
    {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/realvjy/',
        type: 'social',
        icon: '/linkedin.svg',
        on: false
    },
    {
        title: 'Mastodon',
        url: 'https://mastodon.online/@realvjy',
        type: 'social',
        icon: '/mastodon.svg',
        on: true
    },
    {
        title: 'Hive Social',
        url: 'https://www.hivesocial.app/?@realvjy',
        type: 'social',
        icon: '/hive.svg',
        on: false
    },
    {
        title: 'Post',
        url: 'https://www.post.news/realvjy',
        type: 'social',
        icon: '/post.svg',
        on: false
    },
    {
        title: 'foundation',
        url: 'https://vjy.me',
        type: 'nft',
        icon: '/foundation.svg',
        on: false
    },
    {
        title: 'opensea',
        url: 'https://vjy.me',
        type: 'nft',
        icon: '/opensea.svg',
        on: false
    },
    {
        title: 'new collection',
        url: 'https://vjy.me',
        type: 'nft',
        icon: '/opensea.svg',
        on: false
    },
	*/
	// Donate section
	{
        title: "Support Revetix (OG Developer)",
        url: 'https://www.paypal.com/donate/?hosted_button_id=78TUPKHTF3KYU',
        type: 'donate',
        icon: '/revetix.png',
        on: true
    },
	{
        title: "Support Pirate's Cave Services",
        url: 'https://ko-fi.com/piratescave/tip',
        type: 'donate',
        icon: '/ko-fi.png',
        on: true
    },
	{
        title: "Support Pirate's Cave Services",
        url: 'https://www.patreon.com/piratescave/membership',
        type: 'donate',
        icon: '/patreon.png',
        on: true
    },
	// Content section
	{
        title: 'Github',
        url: 'https://github.com/PiratesCave?tab=repositories',
        type: 'content',
        icon: '/github-fill.png',
        on: false
    },
		{
        title: 'Sketchfab Ripper 1.18.3 (NEW)',
        url: 'https://mega.nz/file/xsVW0TgC#Dl2_G0P1roWvO7dU_L0jYqzPSoOizhdN8iYippNxSqQ',
        type: 'content',
        icon: '/SketchfabRipperNEW.png',
        on: true
    },
	{
        title: 'Sketchfab Ripper (LEGACY)',
        url: 'https://mega.nz/file/spsREIRR#afir129Rq7vsN3IggJHJ4BNFKrx7pc-yaYOxLIWyOJM',
        type: 'content',
        icon: '/SketchfabRipperLEGACY.png',
        on: true
    },
		{
        title: 'sfConfig Updater (for SFRipper)',
        url: 'https://mega.nz/file/Bh8USYbK#ImFXph_ILQnwYiuCc4V-156oaQrAHc5uJLLx9KmbikU',
        type: 'content',
        icon: '/sfConfigUpdater.png',
        on: true
    },
	{
        title: 'Sketchfab Script (Models Only)',
        url: 'https://openuserjs.org/scripts/PiratesCave/SketchfabDownloader_(Models_Only)',
        type: 'content',
        icon: '/script.png',
        on: true
    },
	{
        title: 'Sketchfab Script (Textures Only)',
        url: 'https://openuserjs.org/scripts/PiratesCave/SketchfabDownloader_(Textures_Only)',
        type: 'content',
        icon: '/script.png',
        on: true
    },
    // Install section
	/*
    {
        title: 'Support Revetix (Original Developer)',
        url: 'https://github.com/realvjy/nxt-lnk/generate',
        type: 'donate',
        icon: '/revetix.png',
        on: true
    },
	
    {
        title: 'Deploy on Vercel',
        url: 'https://vercel.com/import/git?s=https://github.com/realvjy/nxt-lnk',
        type: 'install',
        icon: '/vercel.svg',
        on: true
    },
    {
        title: 'Documentation',
        url: 'https://github.com/realvjy/nxt-lnk#nxt-lnk',
        type: 'install',
        icon: '/doc.png',
        on: true
    },
    {
        title: 'Github',
        url: 'https://github.com/PiratesCave?tab=repositories',
        type: 'install',
        icon: '/github-fill.svg',
        on: true
    },
    {
        title: 'Buy Me a Coffee',
        url: 'https://www.buymeacoffee.com/realvjy',
        type: 'other',
        icon: '/bmc.png',
        on: true
    },

    {
        title: 'link demo',
        url: 'https://vjy.me/lnk',
        type: 'other',
        icon: '/vjy.png',
        on: true
    },

    {
        title: 'maker website',
        url: 'https://vjy.me',
        type: 'other',
        icon: '/vjy.png',
        on: true
    },
	*/
];

export default webLinks;


