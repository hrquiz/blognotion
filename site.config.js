module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '4f8e07bed170475195d669adae16f81c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Haikal Rahman',
  domain: 'classblog.vercel.app',
  author: 'Haikal Rahman',

  // open graph metadata (optional)
  description: 'Materi Kuliah - FE Unimed',
  socialImageTitle: 'Haikal Rahman',
  socialImageSubtitle: 'Haikal Rahman',

  // social usernames (optional)
  //twitter: 'hhaikalrahman',
  github: 'haikalmyid',
  linkedin: 'haikalrahman70',
  //youtube: 'jarrodkane',
  //twitch: 'grimegoblin',
  //letterboxd: 'jarrodK',
  //goodreads: "75192974-jarrod-kane",
  goodreads: "DRH2R",
 
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: "hrquiz/blog-coments",

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
   pageUrlOverrides: {
     '/esda': '629572f981f748d18a9b3933c7382bff',
     '/esdal': '49f4d07db6bb43b4869e41ca90cb3779',
     '/gb': 'dcd3574021704f5a8778aaaaa282a8e6',

   }
  //pageUrlOverrides: null
}
