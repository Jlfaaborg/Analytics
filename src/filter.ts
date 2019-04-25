// tslint:disable: object-literal-sort-keys

// tslint:disable-next-line: interface-name
interface Filter {
  name: string;
  type: string;
  field: string;
  matchType: string;
  expressionValue: string;
}

const filters: Filter[] = [
  {
    name: "Our Office",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "107.144.144.114"
  },
  {
    name: "pinghostaz.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "162.253.177.250"
  },
  {
    name: "pinghostaz2.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "148.163.73.101"
  },
  {
    name: "pinghostca.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "162.211.65.254"
  },
  {
    name: "pinghostca2.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "168.235.93.92"
  },
  {
    name: "pinghostco.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "162.211.64.212"
  },
  {
    name: "pinghostfl.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "192.157.238.128"
  },
  {
    name: "pinghostga.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "192.30.32.170"
  },
  {
    name: "pinghostil.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "162.211.66.130"
  },
  {
    name: "pinghostil2.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "206.226.70.51"
  },
  {
    name: "pinghostks.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "172.86.180.18"
  },
  {
    name: "pinghostnj.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "185.35.78.51"
  },
  {
    name: "pinghostnv.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "72.46.131.210"
  },
  {
    name: "pinghostny.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "168.235.67.200"
  },
  {
    name: "pinghostoh.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "206.222.22.82"
  },
  {
    name: "pinghostot.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "199.167.130.19"
  },
  {
    name: "pinghostpy.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "162.208.48.232"
  },
  {
    name: "pinghosttx.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "107.155.66.30"
  },
  {
    name: "pinghostwa.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "107.161.26.116"
  },
  {
    name: "pinghostwa2.nodeping.com",
    type: "EXCLUDE",
    field: "GEO_IP_ADDRESS",
    matchType: "EQUAL",
    expressionValue: "162.213.199.182"
  },
  {
    name: "All In One Spam Filter",
    type: "EXCLUDE",
    field: "CAMPAIGN_SOURCE",
    matchType: "MATCHES",
    expressionValue:
      // tslint:disable-next-line: max-line-length
      "semalt|anticrawler|best-seo-offer|best-seo-solution|buttons-for-website|buttons-for-your-website|7makemoneyonline|-musicas*-gratis|kambasoft|savetubevideo|ranksonic|medispainstitute|offers.bycontext|100dollars-seo|sitevaluation|dailyrank"
  },
  {
    name: "cdn site:nodepm.com",
    type: "EXCLUDE",
    field: "CAMPAIGN_SOURCE",
    matchType: "MATCHES",
    expressionValue: "cdn site:nodepm.com"
  }
];

export { filters };
