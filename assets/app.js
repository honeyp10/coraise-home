(() => {
  // js/data.js
  var PHONE = "1833-5805";
  var PHONE_TEL = "18335805";
  var EMAIL = "sales@coraise.co.kr";
  var ADDRESS = "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC131\uB3D9\uAD6C \uC131\uC218\uC77C\uB85C 39-34 \uC11C\uC6B8\uC232 \uB354\uC2A4\uD398\uC774\uC2A4 501~507\uD638";
  var COMPANY = "\uC8FC\uC2DD\uD68C\uC0AC \uCF54\uB808\uC774\uC988\uD640\uB529\uC2A4";
  var categories = [
    {
      id: "network",
      num: "01",
      name: "\uB124\uD2B8\uC6CC\uD06C\xB7\uC778\uD504\uB77C",
      short: "\uB124\uD2B8\uC6CC\uD06C",
      blurb: "\uC0AC\uBB34\uC2E4 \uC778\uD130\uB137, \uBC29\uD654\uBCBD, \uC640\uC774\uD30C\uC774 \uC7A5\uBE44\uB97C \uACE0\uB97C \uB54C \uBCF4\uC138\uC694.",
      basis: "Network",
      icon: "network"
    },
    {
      id: "security",
      num: "02",
      name: "\uBCF4\uC548",
      short: "\uBCF4\uC548",
      blurb: "\uC0AC\uB0B4 \uC811\uC18D\uACFC \uB370\uC774\uD130 \uBCF4\uD638\uAC00 \uD544\uC694\uD560 \uB54C \uBCF4\uC138\uC694.",
      basis: "Security",
      icon: "shield"
    },
    {
      id: "account",
      num: "03",
      name: "\uACC4\uC815\xB7\uAD8C\uD55C \uAD00\uB9AC",
      short: "\uACC4\uC815",
      blurb: "\uC785\uC0AC\xB7\uD1F4\uC0AC\uC640 \uACC4\uC815 \uAD8C\uD55C\uC744 \uC815\uB9AC\uD560 \uB54C \uBCF4\uC138\uC694.",
      basis: "Account",
      icon: "users"
    },
    {
      id: "software",
      num: "04",
      name: "\uC5C5\uBB34 \uC18C\uD504\uD2B8\uC6E8\uC5B4\xB7\uD074\uB77C\uC6B0\uB4DC",
      short: "\uC18C\uD504\uD2B8\uC6E8\uC5B4",
      blurb: "\uBA54\uC77C, \uD611\uC5C5 \uB3C4\uAD6C, \uD074\uB77C\uC6B0\uB4DC\uB97C \uB3C4\uC785\uD560 \uB54C \uBCF4\uC138\uC694.",
      basis: "Software",
      icon: "cloud"
    },
    {
      id: "hardware",
      num: "05",
      name: "\uD558\uB4DC\uC6E8\uC5B4",
      short: "\uD558\uB4DC\uC6E8\uC5B4",
      blurb: "\uB178\uD2B8\uBD81, \uC11C\uBC84, NAS\uCC98\uB7FC \uC5C5\uBB34 \uC7A5\uBE44\uAC00 \uD544\uC694\uD560 \uB54C \uBCF4\uC138\uC694.",
      basis: "Hardware",
      icon: "monitor"
    },
    {
      id: "care",
      num: "06",
      name: "\uC720\uC9C0\uBCF4\uC218\xB7\uC804\uBB38 \uC11C\uBE44\uC2A4",
      short: "\uC720\uC9C0\uBCF4\uC218",
      blurb: "\uAD6C\uCD95 \uC774\uD6C4\uC758 \uC6B4\uC601, \uAD6C\uB3C5, \uC790\uBB38\uC774 \uD544\uC694\uD560 \uB54C \uBCF4\uC138\uC694.",
      basis: "Service",
      icon: "wrench"
    }
  ];
  var services = [
    {
      id: "fortigate",
      category: "network",
      order: 1,
      title: "\uB124\uD2B8\uC6CC\uD06C \uD1B5\uD569 \uBCF4\uC548(\uBC29\uD654\uBCBD)",
      name: "FortiGate (UTM)",
      summary: "\uBC29\uD654\uBCBD\xB7VPN\xB7\uC704\uD611 \uCC28\uB2E8\uC744 \uD55C \uC7A5\uBE44\uC5D0\uC11C \uB2E4\uB8E8\uB294 \uD3EC\uD2F0\uB137 \uD1B5\uD569 \uBCF4\uC548 \uC7A5\uBE44\uC785\uB2C8\uB2E4.",
      keywords: ["\uD3EC\uD2F0\uAC8C\uC774\uD2B8", "\uD3EC\uD2F0\uB137", "fortinet", "utm", "\uBC29\uD654\uBCBD", "vpn", "ngfw"],
      url: "https://coraise.kr/network/fortinet/"
    },
    {
      id: "lan-edge",
      category: "network",
      order: 2,
      title: "\uC9C0\uC810\xB7\uB0B4\uBD80 \uB124\uD2B8\uC6CC\uD06C",
      name: "Fortinet LAN-EDGE",
      summary: "\uC9C0\uC810\uACFC \uC0AC\uBB34\uC2E4 \uC548 \uC720\uC120 \uB124\uD2B8\uC6CC\uD06C\uB97C \uAD6C\uC131\uD558\uB294 \uD3EC\uD2F0\uB137 LAN-EDGE\uC785\uB2C8\uB2E4.",
      keywords: ["\uB79C\uC5E3\uC9C0", "\uD3EC\uD2F0\uC2A4\uC704\uCE58", "fortiswitch", "\uC2A4\uC704\uCE58", "\uB0B4\uBD80\uB9DD", "\uC9C0\uC810", "lan edge", "lanedge"],
      url: "https://coraise.kr/network/fortinet/fortilanedge/"
    },
    {
      id: "axgate",
      category: "network",
      order: 3,
      title: "\uB124\uD2B8\uC6CC\uD06C \uC7A5\uBE44",
      name: "AXGATE",
      summary: "\uBC29\uD654\uBCBD\xB7VPN \uC6A9\uB3C4\uB85C \uC548\uB0B4\uD558\uB294 \uC5D1\uC2A4\uAC8C\uC774\uD2B8 \uB124\uD2B8\uC6CC\uD06C \uC7A5\uBE44\uC785\uB2C8\uB2E4.",
      keywords: ["\uC5D1\uC2A4\uAC8C\uC774\uD2B8", "axgate", "\uBC29\uD654\uBCBD", "vpn"],
      url: "https://coraise.kr/network/axgate/"
    },
    {
      id: "netgear",
      category: "network",
      order: 4,
      title: "\uB124\uD2B8\uC6CC\uD06C \uC7A5\uBE44",
      name: "NETGEAR",
      summary: "\uC0AC\uBB34\uC2E4 \uB124\uD2B8\uC6CC\uD06C\uC5D0 \uC4F0\uB294 \uB137\uAE30\uC5B4 \uC7A5\uBE44\uC785\uB2C8\uB2E4.",
      keywords: ["\uB137\uAE30\uC5B4", "netgear", "\uC2A4\uC704\uCE58"],
      url: "https://coraise.kr/network/netgear/"
    },
    {
      id: "aruba",
      category: "network",
      order: 5,
      title: "\uBB34\uC120\xB7\uB124\uD2B8\uC6CC\uD06C",
      name: "ARUBA",
      summary: "\uC0AC\uBB34\uC2E4 \uC640\uC774\uD30C\uC774\uB97C \uAD6C\uC131\uD558\uB294 HPE Aruba \uBB34\uC120\xB7\uC720\uC120 \uB124\uD2B8\uC6CC\uD06C\uC785\uB2C8\uB2E4.",
      keywords: ["\uC544\uB8E8\uBC14", "aruba", "\uC640\uC774\uD30C\uC774", "wifi", "wi-fi", "\uBB34\uC120", "\uB04A\uAE40", "\uBB34\uC120\uB79C"],
      url: "https://coraise.kr/network/aruba-networks-hpe/"
    },
    {
      id: "ruckus",
      category: "network",
      order: 6,
      title: "\uBB34\uC120\xB7\uB124\uD2B8\uC6CC\uD06C",
      name: "Ruckus",
      summary: "\uC0AC\uBB34\uC2E4 \uC640\uC774\uD30C\uC774\uC5D0 \uC4F0\uB294 Ruckus \uBB34\uC120 \uB124\uD2B8\uC6CC\uD06C\uC785\uB2C8\uB2E4.",
      keywords: ["\uB8E8\uCEE4\uC2A4", "ruckus", "\uC640\uC774\uD30C\uC774", "wifi", "\uBB34\uC120", "\uB04A\uAE40", "\uBB34\uC120\uB79C"],
      url: "https://coraise.kr/network/ruckus-network/"
    },
    {
      id: "zyxel-utm",
      category: "network",
      order: 7,
      title: "UTM \uBC29\uD654\uBCBD",
      name: "ZyXEL UTM",
      includeLabel: "UTM",
      menuTitle: "\uB124\uD2B8\uC6CC\uD06C\xB7\uBB34\uC120\xB7\uD074\uB77C\uC6B0\uB4DC",
      menuName: "ZyXEL",
      menuBundle: "zyxel",
      menuLead: true,
      summary: "ZyXEL UTM \uBC29\uD654\uBCBD \uC7A5\uBE44\uC785\uB2C8\uB2E4.",
      keywords: ["\uC790\uC774\uC824", "zyxel", "utm", "\uBC29\uD654\uBCBD"],
      url: "https://coraise.kr/network/zyxel/zyxel-utm/"
    },
    {
      id: "zyxel-wireless",
      category: "network",
      order: 8,
      title: "\uBB34\uC120 \uB124\uD2B8\uC6CC\uD06C",
      name: "ZyXEL Wireless",
      includeLabel: "Wireless",
      menuBundle: "zyxel",
      summary: "ZyXEL \uBB34\uC120 \uB124\uD2B8\uC6CC\uD06C \uC7A5\uBE44\uC785\uB2C8\uB2E4.",
      keywords: ["\uC790\uC774\uC824", "zyxel", "\uC640\uC774\uD30C\uC774", "wifi", "\uBB34\uC120", "\uB04A\uAE40", "wireless"],
      url: "https://coraise.kr/network/zyxel/zyxel-wireless/"
    },
    {
      id: "zyxel-cloud",
      category: "network",
      order: 9,
      title: "\uD074\uB77C\uC6B0\uB4DC \uAD00\uB9AC",
      name: "ZyXEL Cloud (NEBULA)",
      includeLabel: "Cloud(NEBULA)",
      menuBundle: "zyxel",
      summary: "ZyXEL Nebula \uD074\uB77C\uC6B0\uB4DC\uC5D0\uC11C \uB124\uD2B8\uC6CC\uD06C \uC7A5\uBE44\uB97C \uAD00\uB9AC\uD569\uB2C8\uB2E4.",
      keywords: ["\uC790\uC774\uC824", "zyxel", "nebula", "\uB124\uBDF8\uB77C", "\uD074\uB77C\uC6B0\uB4DC"],
      url: "https://coraise.kr/network/cloud-networking-nebula/"
    },
    {
      id: "zyxel-download",
      category: "network",
      order: 10,
      title: "\uC790\uB8CC",
      name: "ZyXEL Download",
      includeLabel: "Download",
      menuBundle: "zyxel",
      summary: "ZyXEL \uC7A5\uBE44 \uC790\uB8CC\uB97C \uBC1B\uB294 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uC790\uC774\uC824", "zyxel", "\uB2E4\uC6B4\uB85C\uB4DC", "\uB9E4\uB274\uC5BC", "download"],
      url: "https://coraise.kr/network/zyxel/zyxel-download/"
    },
    {
      id: "cisco",
      category: "network",
      order: 11,
      title: "\uC2A4\uC704\uCE58\xB7\uB124\uD2B8\uC6CC\uD06C",
      name: "Cisco",
      summary: "\uC0AC\uBB34\uC2E4 \uC2A4\uC704\uCE58\uB85C \uC4F0\uB294 Cisco Catalyst\xB7Meraki \uB124\uD2B8\uC6CC\uD06C \uC7A5\uBE44\uC785\uB2C8\uB2E4.",
      keywords: ["\uC2DC\uC2A4\uCF54", "cisco", "catalyst", "meraki", "\uBA54\uB77C\uD0A4", "\uC2A4\uC704\uCE58"],
      url: "https://coraise.kr/network/cisco/"
    },
    {
      id: "fortisase",
      category: "security",
      order: 1,
      title: "\uD1B5\uD569 \uBCF4\uC548(SASE)",
      name: "FortiSASE",
      summary: "\uC0AC\uBB34\uC2E4 \uBC16 \uC811\uC18D\uB3C4 \uD3EC\uD568\uD558\uB294 \uD3EC\uD2F0\uB137 SASE \uBCF4\uC548\uC785\uB2C8\uB2E4.",
      keywords: ["sase", "\uD3EC\uD2F0\uC138\uC774\uC988", "fortisase", "\uC7AC\uD0DD", "\uC678\uBD80\uC811\uC18D", "vpn", "\uC81C\uB85C\uD2B8\uB7EC\uC2A4\uD2B8", "ztna"],
      url: "https://coraise.kr/network/fortinet/fortisase/"
    },
    {
      id: "cloudflare",
      category: "security",
      order: 2,
      title: "\uD074\uB77C\uC6B0\uB4DC \uBCF4\uC548",
      name: "Cloudflare",
      summary: "Cloudflare \uAE30\uBC18\uC758 \uC811\uC18D\xB7\uC6F9 \uBCF4\uC548\uC785\uB2C8\uB2E4.",
      keywords: ["\uD074\uB77C\uC6B0\uB4DC\uD50C\uB808\uC5B4", "cloudflare", "sase", "\uC7AC\uD0DD", "ztna", "\uC678\uBD80\uC811\uC18D"],
      url: "https://coraise.kr/network/cloudflare/"
    },
    {
      id: "fortiendpoint",
      category: "security",
      order: 3,
      title: "\uC81C\uB85C\uD2B8\uB7EC\uC2A4\uD2B8(ZTNA)",
      name: "FortiEndpoint",
      summary: "\uD5C8\uC6A9\uB41C \uC0AC\uC6A9\uC790\uB9CC \uD68C\uC0AC \uC2DC\uC2A4\uD15C\uC5D0 \uC811\uC18D\uC2DC\uD0A4\uB294 \uD3EC\uD2F0\uB137 ZTNA\uC785\uB2C8\uB2E4.",
      keywords: ["ztna", "\uC7AC\uD0DD", "vpn", "\uD3EC\uD2F0\uD074\uB77C\uC774\uC5B8\uD2B8", "forticlient", "\uC678\uBD80\uC811\uC18D", "\uC5D4\uB4DC\uD3EC\uC778\uD2B8"],
      url: "https://coraise.kr/itinfra/ztna-forticlient/"
    },
    {
      id: "forticasb",
      category: "security",
      order: 4,
      title: "\uD074\uB77C\uC6B0\uB4DC \uC811\uADFC \uBCF4\uC548",
      name: "FortiCASB",
      summary: "\uD074\uB77C\uC6B0\uB4DC \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC744 \uC0B4\uD3B4\uBCF4\uB294 \uD3EC\uD2F0\uB137 CASB\uC785\uB2C8\uB2E4.",
      keywords: ["casb", "forticasb", "\uD074\uB77C\uC6B0\uB4DC", "\uC720\uCD9C"],
      url: "https://coraise.kr/solution/forticasb/"
    },
    {
      id: "sentinelone",
      category: "security",
      order: 5,
      title: "\uC5D4\uB4DC\uD3EC\uC778\uD2B8 \uBCF4\uC548(EDR)",
      name: "SentinelOne",
      summary: "PC\uC640 \uC11C\uBC84\uC758 \uACF5\uACA9\uC744 \uD0D0\uC9C0\xB7\uCC28\uB2E8\uD558\uB294 EDR \uBCF4\uC548\uC785\uB2C8\uB2E4.",
      keywords: ["edr", "xdr", "\uC13C\uD2F0\uB12C\uC6D0", "sentinelone", "\uB79C\uC12C\uC6E8\uC5B4", "\uBC31\uC2E0", "\uBCF4\uC548\uC810\uAC80", "\uC810\uAC80", "\uC5D4\uB4DC\uD3EC\uC778\uD2B8"],
      url: "https://coraise.kr/solution/sentinelone/"
    },
    {
      id: "endpoint-protector",
      category: "security",
      order: 6,
      title: "\uC790\uB8CC \uC720\uCD9C \uBC29\uC9C0(DLP)",
      name: "Endpoint Protector",
      summary: "USB\xB7\uD30C\uC77C \uBC18\uCD9C\uC744 \uB9C9\uB294 Netwrix Endpoint Protector\uC785\uB2C8\uB2E4.",
      keywords: ["dlp", "\uC720\uCD9C", "netwrix", "\uB137\uB9AD\uC2A4", "usb", "endpoint protector"],
      url: "https://coraise.kr/solution/endpoint-protector/"
    },
    {
      id: "fortidlp",
      category: "security",
      order: 7,
      title: "\uC790\uB8CC \uC720\uCD9C \uBC29\uC9C0",
      name: "FortiDLP",
      summary: "\uC790\uB8CC\uAC00 \uBC16\uC73C\uB85C \uB098\uAC00\uC9C0 \uC54A\uB3C4\uB85D \uB9C9\uB294 \uD3EC\uD2F0\uB137 DLP\uC785\uB2C8\uB2E4.",
      keywords: ["dlp", "\uC720\uCD9C", "fortidlp", "\uD3EC\uD2F0\uB514\uC5D8\uD53C"],
      url: "https://coraise.kr/fortidlp/"
    },
    {
      id: "fortimail",
      category: "security",
      order: 8,
      title: "\uC774\uBA54\uC77C \uBCF4\uC548",
      name: "FortiMail",
      summary: "\uD53C\uC2F1\xB7\uC545\uC131 \uBA54\uC77C\uC744 \uAC70\uB974\uB294 \uD3EC\uD2F0\uB137 \uBA54\uC77C \uBCF4\uC548\uC785\uB2C8\uB2E4.",
      keywords: ["\uBA54\uC77C", "\uC774\uBA54\uC77C", "\uD53C\uC2F1", "\uC2A4\uD338", "fortimail", "\uD3EC\uD2F0\uBA54\uC77C"],
      url: "https://coraise.kr/solution/emailprotection/"
    },
    {
      id: "eset",
      category: "security",
      order: 9,
      title: "\uBC31\uC2E0(EPP)",
      name: "ESET",
      summary: "PC\uC5D0 \uC124\uCE58\uD558\uB294 ESET \uBC31\uC2E0\uC785\uB2C8\uB2E4.",
      keywords: ["\uBC31\uC2E0", "eset", "\uC774\uC14B", "\uBCF4\uC548\uC810\uAC80", "\uC810\uAC80", "\uBC14\uC774\uB7EC\uC2A4"],
      url: "https://coraise.kr/solution/eset/"
    },
    {
      id: "ai-dlp",
      category: "security",
      order: 10,
      title: "AI \uC815\uBCF4 \uC720\uCD9C \uBC29\uC9C0",
      name: "AI \uC815\uBCF4 \uC720\uCD9C \uBC29\uC9C0",
      summary: "\uC0DD\uC131\uD615 AI\uB85C \uD68C\uC0AC \uC790\uB8CC\uAC00 \uB098\uAC00\uC9C0 \uC54A\uB3C4\uB85D \uB3D5\uB294 \uBCF4\uC548 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["ai", "\uCC57gpt", "chatgpt", "\uC720\uCD9C", "\uC815\uBCF4\uC720\uCD9C", "\uC0DD\uC131\uD615"],
      url: "https://coraise.kr/solution/ai-security/"
    },
    {
      id: "forensics",
      category: "security",
      order: 11,
      title: "\uB514\uC9C0\uD138\uD3EC\uB80C\uC2DD",
      name: "\uB514\uC9C0\uD138\uD3EC\uB80C\uC2DD",
      summary: "\uCE68\uD574 \uC0AC\uACE0 \uB4A4 \uC6D0\uC778\uC744 \uC0B4\uD3B4\uBCF4\uB294 \uB514\uC9C0\uD138\uD3EC\uB80C\uC2DD \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4.",
      keywords: ["\uD3EC\uB80C\uC2DD", "\uCE68\uD574", "\uC0AC\uACE0", "\uBCF4\uC548\uC810\uAC80", "\uC810\uAC80"],
      url: "https://coraise.kr/forensics/"
    },
    {
      id: "okta",
      category: "account",
      order: 1,
      title: "\uACC4\uC815 \uBC0F \uC778\uC99D(IAM)",
      name: "Okta",
      summary: "\uD68C\uC0AC \uC11C\uBE44\uC2A4 \uB85C\uADF8\uC778\uC744 \uD55C\uACF3\uC73C\uB85C \uBAA8\uC73C\uB294 Okta \uACC4\uC815 \uC778\uC99D\uC785\uB2C8\uB2E4.",
      keywords: ["\uC625\uD0C0", "okta", "iam", "sso", "\uB85C\uADF8\uC778", "\uACC4\uC815", "\uD1F4\uC0AC", "\uD1F4\uC0AC\uC790", "mfa", "\uAD8C\uD55C"],
      url: "https://coraise.kr/itinfra/okta/"
    },
    {
      id: "ad",
      category: "account",
      order: 2,
      title: "\uACC4\uC815 \uB514\uB809\uD130\uB9AC",
      name: "Active Directory",
      summary: "\uC9C1\uC6D0 \uACC4\uC815\uACFC \uAD8C\uD55C\uC744 \uBAA8\uC544 \uB450\uB294 Active Directory \uAD6C\uCD95\uC785\uB2C8\uB2E4.",
      keywords: ["\uC561\uD2F0\uBE0C\uB514\uB809\uD130\uB9AC", "activedirectory", "ad", "\uACC4\uC815", "\uAD8C\uD55C", "\uD1F4\uC0AC", "\uD1F4\uC0AC\uC790", "\uC785\uC0AC", "\uC870\uC9C1\uB3C4", "teams\uC870\uC9C1\uB3C4", "c\uC870\uC9C1\uB3C4"],
      url: "https://coraise.kr/itinfra/microsoft-solution/ad-exchange/"
    },
    {
      id: "adpac",
      category: "account",
      order: 3,
      title: "AD \uD1B5\uD569 \uAD00\uB9AC",
      name: "ADPaC",
      summary: "\uCF54\uB808\uC774\uC988\uC758 Active Directory \uAD00\uB9AC \uC194\uB8E8\uC158\uC774\uBA70 GS\uC778\uC99D 1\uB4F1\uAE09\uC785\uB2C8\uB2E4.",
      keywords: ["\uC560\uB4DC\uD329", "adpac", "idpac", "ad pac", "gs\uC778\uC99D", "\uACC4\uC815", "\uD1F4\uC0AC", "\uD1F4\uC0AC\uC790", "\uC785\uC0AC", "\uAD8C\uD55C", "\uACC4\uC815\uC815\uB9AC"],
      url: "https://coraise.kr/ad-pac/"
    },
    {
      id: "syncmanager",
      category: "account",
      order: 4,
      title: "\uC778\uC0AC\uC815\uBCF4 \uC5F0\uB3D9",
      name: "SyncManager",
      summary: "\uC785\uC0AC\xB7\uD1F4\uC0AC \uC778\uC0AC \uC815\uBCF4\uB97C \uACC4\uC815\uC5D0 \uBC18\uC601\uD558\uB294 \uC5F0\uB3D9 \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
      keywords: ["\uC2F1\uD06C\uB9E4\uB2C8\uC800", "syncmanager", "\uC778\uC0AC", "\uD1F4\uC0AC", "\uD1F4\uC0AC\uC790", "\uC785\uC0AC", "\uACC4\uC815\uC815\uB9AC", "\uACC4\uC815", "idpac"],
      url: "https://coraise.kr/itinfra/microsoft-solution/ad-exchange/sync-manager/"
    },
    {
      id: "passchanger",
      category: "account",
      order: 5,
      title: "AD \uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD",
      name: "PassChanger",
      summary: "\uC9C1\uC6D0\uC774 Active Directory \uBE44\uBC00\uBC88\uD638\uB97C \uBC14\uAFB8\uB3C4\uB85D \uB3D5\uB294 \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
      keywords: ["\uD328\uC2A4\uCCB4\uC778\uC800", "passchanger", "\uBE44\uBC00\uBC88\uD638", "\uC554\uD638", "\uACC4\uC815"],
      url: "https://coraise.kr/itinfra/microsoft-solution/ad-exchange/ad-password-changer/"
    },
    {
      id: "admanager",
      category: "account",
      order: 6,
      title: "AD \uC6F9 \uAD00\uB9AC",
      name: "ADManager",
      summary: "\uC6F9 \uD654\uBA74\uC5D0\uC11C Active Directory \uACC4\uC815\uC744 \uB2E4\uB8E8\uB294 \uAD00\uB9AC \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
      keywords: ["\uC560\uB4DC\uB9E4\uB2C8\uC800", "admanager", "\uACC4\uC815", "\uAD8C\uD55C", "\uC6F9\uAD00\uB9AC"],
      url: "https://coraise.kr/itinfra/microsoft-solution/ad-exchange/ad-manager/"
    },
    {
      id: "cloudad",
      category: "account",
      order: 7,
      title: "AD \uAD6C\uB3C5",
      name: "CloudAD",
      summary: "\uC11C\uBC84\uB97C \uC9C1\uC811 \uB450\uC9C0 \uC54A\uACE0 \uAD6C\uB3C5\uC73C\uB85C \uC4F0\uB294 Active Directory\uC785\uB2C8\uB2E4.",
      keywords: ["\uD074\uB77C\uC6B0\uB4DCad", "cloudad", "\uAD6C\uB3C5", "\uACC4\uC815"],
      url: "https://coraise.kr/itinfra/cloudad/"
    },
    {
      id: "gws",
      category: "software",
      order: 1,
      title: "\uBA54\uC77C\xB7\uD611\uC5C5",
      name: "Google Workspace",
      summary: "\uAD6C\uAE00 \uBA54\uC77C, \uB4DC\uB77C\uC774\uBE0C, \uCE98\uB9B0\uB354\uB97C \uD68C\uC0AC \uACC4\uC815\uC73C\uB85C \uC4F0\uB294 \uC5C5\uBB34 \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
      keywords: ["\uAD6C\uAE00", "\uC9C0\uBA54\uC77C", "gmail", "\uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4", "gws", "google", "\uBA54\uC77C", "\uB4DC\uB77C\uC774\uBE0C"],
      url: "https://coraise.kr/software/google-2/"
    },
    {
      id: "m365",
      category: "software",
      order: 2,
      title: "\uBA54\uC77C\xB7\uD611\uC5C5",
      name: "Microsoft 365",
      summary: "\uC544\uC6C3\uB8E9, \uD300\uC988, \uC624\uD53C\uC2A4\uB97C \uD3EC\uD568\uD558\uB294 Microsoft 365\uC785\uB2C8\uB2E4.",
      keywords: ["m365", "microsoft", "office", "office365", "\uC624\uD53C\uC2A4", "\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8", "\uD300\uC988", "teams", "\uC544\uC6C3\uB8E9", "\uBA54\uC77C", "\uC870\uC9C1\uB3C4", "microsoft365"],
      url: "https://coraise.kr/software/office365/"
    },
    {
      id: "ncp",
      category: "software",
      order: 3,
      title: "\uD074\uB77C\uC6B0\uB4DC",
      name: "NAVER Cloud",
      summary: "\uB124\uC774\uBC84 \uD074\uB77C\uC6B0\uB4DC \uD50C\uB7AB\uD3FC(NCP) \uB3C4\uC785 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["ncp", "\uB124\uC774\uBC84\uD074\uB77C\uC6B0\uB4DC", "\uB124\uC774\uBC84", "naver", "\uD074\uB77C\uC6B0\uB4DC"],
      url: "https://coraise.kr/itinfra/ncp/"
    },
    {
      id: "aws",
      category: "software",
      order: 4,
      title: "\uD074\uB77C\uC6B0\uB4DC",
      name: "Amazon Web Services",
      summary: "\uC544\uB9C8\uC874 \uC6F9 \uC11C\uBE44\uC2A4(AWS) \uB3C4\uC785 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["aws", "\uC544\uB9C8\uC874", "amazon", "\uD074\uB77C\uC6B0\uB4DC"],
      url: "https://coraise.kr/itinfra/amazon-web-service-aws/"
    },
    {
      id: "gotsales",
      category: "software",
      order: 5,
      title: "\uC601\uC5C5 \uAD00\uB9AC",
      name: "GotSales",
      summary: "\uCF54\uB808\uC774\uC988\uC758 \uC601\uC5C5\xB7\uC790\uC0B0 \uAD00\uB9AC \uC194\uB8E8\uC158 GotSales\uC785\uB2C8\uB2E4.",
      keywords: ["\uAC13\uC138\uC77C\uC988", "gotsales", "crm", "\uC601\uC5C5", "\uC790\uC0B0"]
    },
    {
      id: "cowork",
      category: "software",
      order: 6,
      title: "\uADF8\uB8F9\uC6E8\uC5B4",
      name: "Cowork.day",
      summary: "\uCF54\uB808\uC774\uC988\uC758 \uADF8\uB8F9\uC6E8\uC5B4 Cowork.day\uC785\uB2C8\uB2E4.",
      keywords: ["\uCF54\uC6CC\uD06C", "cowork", "coworkday", "\uADF8\uB8F9\uC6E8\uC5B4", "\uD611\uC5C5"]
    },
    {
      id: "adobe",
      category: "software",
      order: 7,
      title: "\uB514\uC790\uC778 \uC18C\uD504\uD2B8\uC6E8\uC5B4",
      name: "Adobe",
      summary: "Adobe Creative Cloud \uB77C\uC774\uC120\uC2A4 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uC5B4\uB3C4\uBE44", "adobe", "\uD3EC\uD1A0\uC0F5", "\uC77C\uB7EC\uC2A4\uD2B8", "creativecloud"],
      url: "https://coraise.kr/software/adobe-2/"
    },
    {
      id: "dropbox",
      category: "software",
      order: 8,
      title: "\uD30C\uC77C \uACF5\uC720",
      name: "Dropbox Business",
      summary: "\uD68C\uC0AC \uD30C\uC77C \uACF5\uC720\uC6A9 Dropbox Business\uC785\uB2C8\uB2E4.",
      keywords: ["\uB4DC\uB86D\uBC15\uC2A4", "dropbox", "\uD30C\uC77C\uACF5\uC720"],
      url: "https://coraise.kr/software/dropbox/"
    },
    {
      id: "teamviewer",
      category: "software",
      order: 9,
      title: "\uC6D0\uACA9 \uC9C0\uC6D0",
      name: "TeamViewer",
      summary: "\uD654\uBA74\uC744 \uC6D0\uACA9\uC73C\uB85C \uC5F0\uACB0\uD558\uB294 TeamViewer\uC785\uB2C8\uB2E4.",
      keywords: ["\uD300\uBDF0\uC5B4", "teamviewer", "\uC6D0\uACA9"],
      url: "https://coraise.kr/software/teamviewer-3/"
    },
    {
      id: "hnc",
      category: "software",
      order: 10,
      title: "\uC624\uD53C\uC2A4 \uC18C\uD504\uD2B8\uC6E8\uC5B4",
      name: "\uD55C\uAE00\uACFC\uCEF4\uD4E8\uD130",
      summary: "\uD55C\uAE00\uACFC\uCEF4\uD4E8\uD130 \uC624\uD53C\uC2A4 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uD55C\uCEF4", "\uD55C\uAE00", "hnc", "\uC544\uB798\uC544\uD55C\uAE00", "\uD55C\uAE00\uACFC\uCEF4\uD4E8\uD130"]
    },
    {
      id: "design-tools",
      category: "software",
      order: 11,
      title: "\uB514\uC790\uC778\xB7\uC81C\uC791",
      name: "Unity \xB7 ACDSee \xB7 Houdini",
      summary: "Unity, ACDSee, Houdini \uB77C\uC774\uC120\uC2A4 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uC720\uB2C8\uD2F0", "unity", "acdsee", "\uD6C4\uB514\uB2C8", "houdini", "3d"],
      includes: [
        { label: "Unity", url: "https://coraise.kr/software/unity/" },
        { label: "ACDSee", url: "https://coraise.kr/software/acdsee/" },
        { label: "Houdini", url: "https://coraise.kr/software/houdini/" }
      ]
    },
    {
      id: "dev-tools",
      category: "software",
      order: 12,
      title: "\uAC1C\uBC1C\xB7\uC124\uACC4",
      name: "JetBrains \xB7 Autodesk",
      summary: "JetBrains\uC640 Autodesk \uB77C\uC774\uC120\uC2A4 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["jetbrains", "\uC82F\uBE0C\uB808\uC778", "autodesk", "\uC624\uD1A0\uB370\uC2A4\uD06C", "\uC624\uD1A0\uCE90\uB4DC", "intellij"]
    },
    {
      id: "acronis",
      category: "software",
      order: 13,
      title: "\uBC31\uC5C5",
      name: "Acronis Cyber Protect",
      summary: "PC\uC640 \uC11C\uBC84 \uC790\uB8CC\uB97C \uBC31\uC5C5\uD558\uB294 Acronis\uC785\uB2C8\uB2E4.",
      keywords: ["\uC544\uD06C\uB85C\uB2C8\uC2A4", "acronis", "\uBC31\uC5C5", "\uBCF5\uAD6C"],
      url: "https://coraise.kr/acronis/"
    },
    {
      id: "apple",
      category: "hardware",
      order: 1,
      title: "\uCEF4\uD4E8\uD130\xB7\uB178\uD2B8\uBD81",
      name: "Apple",
      summary: "\uC5C5\uBB34\uC6A9 Mac\xB7iPad \uB4F1 Apple \uAE30\uAE30 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uC560\uD50C", "apple", "\uB9E5\uBD81", "macbook", "\uC544\uC774\uB9E5", "\uC544\uC774\uD328\uB4DC", "ipad", "\uB178\uD2B8\uBD81"],
      url: "https://coraise.kr/hardware/apple/"
    },
    {
      id: "pc-brands",
      category: "hardware",
      order: 2,
      title: "\uCEF4\uD4E8\uD130\xB7\uB178\uD2B8\uBD81",
      name: "LG\uC804\uC790 \xB7 Samsung \xB7 Lenovo",
      summary: "LG\uC804\uC790, Samsung, Lenovo \uC5C5\uBB34\uC6A9 \uCEF4\uD4E8\uD130\xB7\uB178\uD2B8\uBD81 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uC5D8\uC9C0", "lg", "\uC0BC\uC131", "samsung", "\uB808\uB178\uBC84", "lenovo", "\uB178\uD2B8\uBD81", "\uB370\uC2A4\uD06C\uD1B1", "pc"],
      includes: [
        { label: "LG\uC804\uC790", url: "https://coraise.kr/hardware/lg/" },
        { label: "Lenovo", url: "https://coraise.kr/hardware/lenovo/" }
      ]
    },
    {
      id: "conference",
      category: "hardware",
      order: 3,
      title: "\uD654\uC0C1\uD68C\uC758 \uC7A5\uBE44",
      name: "\uD654\uC0C1\uD68C\uC758",
      summary: "\uD68C\uC758\uC2E4 \uD654\uC0C1\uD68C\uC758 \uC7A5\uBE44 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uD654\uC0C1\uD68C\uC758", "\uD074\uB9AD\uC250\uC5B4", "clickshare", "\uD68C\uC758\uC2E4", "\uD654\uC0C1"],
      url: "https://coraise.kr/solution/video-conference-solution/"
    },
    {
      id: "peripherals",
      category: "hardware",
      order: 4,
      title: "\uC8FC\uBCC0\uAE30\uAE30",
      name: "Logitech \xB7 Wacom",
      summary: "\uD0A4\uBCF4\uB4DC, \uB9C8\uC6B0\uC2A4, \uD0DC\uBE14\uB9BF \uB4F1 Logitech\xB7Wacom \uC8FC\uBCC0\uAE30\uAE30\uC785\uB2C8\uB2E4.",
      keywords: ["\uB85C\uC9C0\uD14D", "logitech", "\uC640\uCF64", "wacom", "\uD0A4\uBCF4\uB4DC", "\uB9C8\uC6B0\uC2A4", "\uD0DC\uBE14\uB9BF", "\uC8FC\uBCC0\uAE30\uAE30"]
    },
    {
      id: "servers",
      category: "hardware",
      order: 5,
      title: "\uC11C\uBC84",
      name: "Dell \xB7 HP \xB7 Intel",
      summary: "Dell, HP, Intel \uC11C\uBC84 \uC7A5\uBE44 \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uB378", "dell", "hp", "\uD734\uB81B", "\uC778\uD154", "intel", "\uC11C\uBC84"],
      includes: [
        { label: "Dell", url: "https://coraise.kr/hardware/dell/" },
        { label: "HP", url: "https://coraise.kr/hardware/hp/" }
      ]
    },
    {
      id: "synology",
      category: "hardware",
      order: 6,
      title: "\uB124\uD2B8\uC6CC\uD06C \uC2A4\uD1A0\uB9AC\uC9C0(NAS)",
      name: "Synology",
      summary: "\uC0AC\uBB34\uC2E4 \uD30C\uC77C \uBCF4\uAD00\uC6A9 Synology NAS\uC785\uB2C8\uB2E4.",
      keywords: ["\uC2DC\uB180\uB85C\uC9C0", "synology", "nas", "\uB098\uC2A4", "\uC2A4\uD1A0\uB9AC\uC9C0"],
      url: "https://coraise.kr/hardware/synology/"
    },
    {
      id: "axis",
      category: "hardware",
      order: 7,
      title: "CCTV",
      name: "AXIS",
      summary: "\uC0AC\uBB34\uC2E4\uC6A9 AXIS CCTV\uC785\uB2C8\uB2E4.",
      keywords: ["\uC5D1\uC2DC\uC2A4", "axis", "cctv", "\uC528\uC528\uD2F0\uBE44", "\uCE74\uBA54\uB77C"],
      url: "https://coraise.kr/hardware/axis-cctv/"
    },
    {
      id: "fujifilm",
      category: "hardware",
      order: 8,
      title: "\uBCF5\uD569\uAE30",
      name: "FUJIFILM",
      summary: "\uC0AC\uBB34\uC2E4 \uBCF5\uD569\uAE30 FUJIFILM \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uD6C4\uC9C0\uD544\uB984", "\uD6C4\uC9C0", "fujifilm", "\uBCF5\uD569\uAE30", "\uD504\uB9B0\uD130"],
      url: "https://coraise.kr/hardware/fujifilm/"
    },
    {
      id: "apc",
      category: "hardware",
      order: 9,
      title: "\uBB34\uC815\uC804 \uC804\uC6D0\uC7A5\uCE58(UPS)",
      name: "APC",
      summary: "\uC815\uC804\uC5D0 \uB300\uBE44\uD558\uB294 APC UPS\uC785\uB2C8\uB2E4.",
      keywords: ["apc", "ups", "\uC720\uD53C\uC5D0\uC2A4", "\uBB34\uC815\uC804", "\uC815\uC804"],
      url: "https://coraise.kr/itinfra/apc-ups/"
    },
    {
      id: "defog",
      category: "hardware",
      order: 10,
      title: "\uC11C\uBC84 \uB799",
      name: "DEFOG",
      summary: "\uC11C\uBC84 \uB799\uC73C\uB85C \uC548\uB0B4\uB41C DEFOG \uD558\uB4DC\uC6E8\uC5B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uB514\uD3EC\uADF8", "defog", "\uB799", "\uC11C\uBC84\uB799"],
      url: "https://coraise.kr/hardware/defog/"
    },
    {
      id: "local-ai",
      category: "hardware",
      order: 11,
      title: "\uB85C\uCEEC AI LLM",
      name: "Mac Studio",
      summary: "\uD68C\uC0AC \uC548\uC5D0 \uB450\uB294 \uB85C\uCEEC AI\uC6A9 Mac Studio \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["\uB85C\uCEECai", "llm", "\uB9E5\uC2A4\uD29C\uB514\uC624", "macstudio", "mac studio", "ai"],
      url: "https://coraise.kr/local-ai/"
    },
    {
      id: "sla",
      category: "care",
      order: 1,
      title: "\uB124\uD2B8\uC6CC\uD06C \uC720\uC9C0\uBCF4\uC218(SLA)",
      name: "\uB124\uD2B8\uC6CC\uD06C \uC720\uC9C0\uBCF4\uC218",
      summary: "\uC7A5\uC560 \uB300\uC751\uACFC \uD38C\uC6E8\uC5B4 \uAD00\uB9AC\uB97C \uD3EC\uD568\uD558\uB294 \uB124\uD2B8\uC6CC\uD06C \uC720\uC9C0\uBCF4\uC218\uC785\uB2C8\uB2E4.",
      keywords: ["sla", "\uC720\uC9C0\uBCF4\uC218", "\uC7A5\uC560", "\uD38C\uC6E8\uC5B4", "\uBE44\uC720\uC9C0\uBCF4\uC218", "\uD328\uCE58"]
    },
    {
      id: "crn",
      category: "care",
      order: 2,
      title: "\uB124\uD2B8\uC6CC\uD06C \uAD6C\uB3C5(CRN)",
      name: "CRN",
      summary: "\uC7A5\uBE44\uB97C \uC0AC\uC11C \uB450\uC9C0 \uC54A\uACE0 \uAD6C\uB3C5\uC73C\uB85C \uC4F0\uB294 \uB124\uD2B8\uC6CC\uD06C \uC11C\uBE44\uC2A4\uC785\uB2C8\uB2E4.",
      keywords: ["crn", "\uAD6C\uB3C5", "\uC784\uB300", "\uB80C\uD0C8", "\uB124\uD2B8\uC6CC\uD06C\uAD6C\uB3C5"],
      url: "https://coraise.kr/network/crn/"
    },
    {
      id: "comon",
      category: "care",
      order: 3,
      title: "\uB124\uD2B8\uC6CC\uD06C \uBAA8\uB2C8\uD130\uB9C1(COMON)",
      name: "COMON",
      summary: "\uC7A5\uBE44 \uC0C1\uD0DC\uB97C \uC0B4\uD3B4\uBCF4\uB294 \uCF54\uB808\uC774\uC988 \uBAA8\uB2C8\uD130\uB9C1(\uCF54\uBAAC)\uC785\uB2C8\uB2E4.",
      keywords: ["comon", "\uCF54\uBAAC", "nms", "\uAD00\uC81C", "\uBAA8\uB2C8\uD130\uB9C1"],
      url: "https://coraise.kr/network/comon/"
    },
    {
      id: "ad-ops",
      category: "care",
      order: 4,
      title: "Active Directory \uAD6C\uCD95\xB7\uC720\uC9C0\uBCF4\uC218",
      name: "AD \uAD6C\uCD95\xB7\uC720\uC9C0\uBCF4\uC218",
      summary: "Active Directory\uB97C \uB9CC\uB4E4\uACE0 \uC774\uD6C4 \uC6B4\uC601\uC744 \uB9E1\uAE30\uB294 \uC720\uC9C0\uBCF4\uC218\uC785\uB2C8\uB2E4.",
      keywords: ["ad\uC720\uC9C0\uBCF4\uC218", "\uACC4\uC815\uC720\uC9C0\uBCF4\uC218", "\uAD6C\uCD95", "\uC561\uD2F0\uBE0C\uB514\uB809\uD130\uB9AC"],
      url: "https://coraise.kr/itinfra/microsoft-solution/ad-exchange/"
    },
    {
      id: "m365-ops",
      category: "care",
      order: 5,
      title: "M365 \uC720\uC9C0\uBCF4\uC218",
      name: "Microsoft 365 \uC720\uC9C0\uBCF4\uC218",
      summary: "Microsoft 365 \uC6B4\uC601\uACFC \uBA54\uC77C \uC774\uC804\uC744 \uB3D5\uB294 \uC720\uC9C0\uBCF4\uC218\uC785\uB2C8\uB2E4.",
      keywords: ["m365\uC720\uC9C0\uBCF4\uC218", "ems", "mip", "\uBA54\uC77C\uC774\uC804", "\uB9C8\uC774\uADF8\uB808\uC774\uC158", "\uC720\uC9C0\uBCF4\uC218"],
      url: "https://coraise.kr/itinfra/microsoft-solution/m365_maintenance/"
    },
    {
      id: "mdm",
      category: "care",
      order: 6,
      title: "\uAE30\uAE30 \uAD00\uB9AC(MDM)",
      name: "Jamf \xB7 Intune",
      summary: "Mac\uACFC Windows \uAE30\uAE30\uB97C \uBAA8\uC544 \uAD00\uB9AC\uD558\uB294 Jamf\xB7Intune \uC548\uB0B4\uC785\uB2C8\uB2E4.",
      keywords: ["mdm", "jamf", "\uC7BC\uD504", "intune", "\uC778\uD2A0", "\uAE30\uAE30\uAD00\uB9AC", "\uB2E8\uB9D0\uAE30"],
      includes: [
        { label: "MDM", url: "https://coraise.kr/itinfra/mdm/" },
        { label: "Jamf", url: "https://coraise.kr/solution/jamf/" }
      ]
    },
    {
      id: "advisory",
      category: "care",
      order: 7,
      title: "\uAE30\uC5C5 IT \uC790\uBB38",
      name: "IT \uC790\uBB38",
      summary: "\uC7A5\uBE44\uB97C \uC815\uD558\uAE30 \uC804\uC5D0 \uBC29\uD5A5\uC744 \uBB3B\uB294 \uAE30\uC5C5 IT \uC790\uBB38\uC785\uB2C8\uB2E4.",
      keywords: ["\uC790\uBB38", "\uCEE8\uC124\uD305", "advisory", "\uBCF4\uC548\uC810\uAC80", "\uC810\uAC80", "vcio"],
      url: "https://coraise.kr/advisory/"
    }
  ];
  var concerns = [
    {
      id: "accounts",
      icon: "users",
      title: "\uC9C1\uC6D0 \uACC4\uC815\xB7\uAD8C\uD55C \uAD00\uB9AC\uAC00 \uC5B4\uB824\uC6CC\uC694",
      text: "\uC785\uD1F4\uC0AC\uC790 \uAD00\uB9AC\uC640 \uACC4\uC815 \uAD8C\uD55C\uC744 \uD558\uB098\uC529 \uB9CC\uB4E4\uAE30 \uD798\uB4E4 \uB54C",
      category: "account"
    },
    {
      id: "security",
      icon: "shield",
      title: "\uD68C\uC0AC \uBCF4\uC548\uC774 \uAC71\uC815\uB3FC\uC694",
      text: "\uBC31\uC2E0\uB9CC\uC73C\uB85C \uCDA9\uBD84\uD55C\uC9C0, \uC5B4\uB514\uC11C\uBD80\uD130 \uC810\uAC80\uD574\uC57C \uD560\uC9C0 \uBAA8\uB97C \uB54C",
      category: "security",
      query: "\uBCF4\uC548 \uC810\uAC80"
    },
    {
      id: "remote",
      icon: "laptop",
      title: "\uC7AC\uD0DD\xB7\uC678\uBD80 \uC811\uC18D\uC744 \uC548\uC804\uD558\uAC8C",
      text: "\uC0AC\uBB34\uC2E4 \uBC16\uC5D0\uC11C\uB3C4 \uD68C\uC0AC \uB9DD\uC5D0 \uC548\uC804\uD558\uAC8C \uC811\uC18D\uD574\uC57C \uD560 \uB54C",
      category: "security",
      query: "\uC7AC\uD0DD \uC678\uBD80 \uC811\uC18D"
    },
    {
      id: "build",
      icon: "network",
      title: "\uB124\uD2B8\uC6CC\uD06C\xB7\uC778\uD504\uB77C\uB97C \uAD6C\uCD95\uD558\uACE0 \uC2F6\uC5B4\uC694",
      text: "\uC0AC\uBB34\uC2E4 \uB124\uD2B8\uC6CC\uD06C\uC640 \uBCF4\uC548 \uC7A5\uBE44\uB97C \uC0C8\uB85C \uB9C8\uB828\uD574\uC57C \uD560 \uB54C",
      category: "network"
    },
    {
      id: "tools",
      icon: "box",
      title: "\uC5C5\uBB34 \uB3C4\uAD6C\xB7\uC7A5\uBE44\uAC00 \uD544\uC694\uD574\uC694",
      text: "\uBA54\uC77C, \uD611\uC5C5 \uB3C4\uAD6C, \uB178\uD2B8\uBD81\uCC98\uB7FC \uC77C\uC0C1\uC5D0 \uD544\uC694\uD55C IT\uAC00 \uD544\uC694\uD560 \uB54C",
      category: "software"
    }
  ];
  var partners = [
    {
      name: "Fortinet Specialized \uD30C\uD2B8\uB108",
      text: "\uD3EC\uD2F0\uB137 \uBCF4\uC548\xB7\uB124\uD2B8\uC6CC\uD06C \uC7A5\uBE44\uB97C \uB2E4\uB8E8\uB294 \uD30C\uD2B8\uB108\uC785\uB2C8\uB2E4."
    },
    {
      name: "Okta \uACF5\uC2DD \uD30C\uD2B8\uB108",
      text: "\uACC4\uC815\xB7\uC778\uC99D \uC194\uB8E8\uC158 Okta\uC758 \uACF5\uC2DD \uD30C\uD2B8\uB108\uC785\uB2C8\uB2E4."
    },
    {
      name: "GS\uC778\uC99D 1\uB4F1\uAE09 ADPaC",
      text: "\uCF54\uB808\uC774\uC988 Active Directory \uAD00\uB9AC \uC194\uB8E8\uC158\uC758 \uC778\uC99D \uB4F1\uAE09\uC785\uB2C8\uB2E4."
    }
  ];
  var cases = [
    {
      id: "lve",
      company: "LVE\uCF54\uB9AC\uC544",
      quote: "Live, Love, Life, \uC9C4\uC815\uD55C \uAC00\uCE58\uB97C \uC804\uD558\uB2E4",
      date: "2026.01"
    },
    {
      id: "digicap",
      company: "\uB514\uC9C0\uCEA1",
      quote: "\uCF58\uD150\uCE20\uB294 \uC548\uC804\uD558\uAC8C, \uBC18\uBCF5 \uC5C5\uBB34\uB294 \uC790\uB3D9\uC73C\uB85C.",
      date: "2025.12"
    },
    {
      id: "ant",
      company: "\uC564\uD2B8\uC2A4\uD29C\uB514\uC624",
      quote: "\uC624\uB9AC\uC9C0\uB110 IP\uB85C \uC644\uC131\uD558\uB294 \uC624\uB798\uB3C4\uB85D \uC0AC\uB791 \uBC1B\uB294 \uC6F9\uD230",
      date: "2025.11"
    },
    {
      id: "dsrv",
      company: "DSRV",
      quote: "\uBE14\uB85D\uCCB4\uC778 \uC778\uD504\uB77C\uB85C \uC548\uC815\uC801\uC778 \uAE08\uC735 \uC11C\uBE44\uC2A4",
      date: "2025.09"
    },
    {
      id: "neo",
      company: "\uB124\uC624\uC774\uBBA8\uD14D",
      quote: "\uBA74\uC5ED\uCE58\uB8CC\uC81C \uAC1C\uBC1C, \uC548\uC815\uC801\uC778 \uB124\uD2B8\uC6CC\uD06C\uB85C",
      date: "2025.06"
    },
    {
      id: "bagel",
      company: "\uBCA0\uC774\uAE00\uCF54\uB4DC",
      quote: "\uAC8C\uC784 \uD68C\uC0AC\uC5D0\uC11C \uB04A\uAE40 \uC5C6\uB294 \uB124\uD2B8\uC6CC\uD06C\uB97C",
      date: "2025.04"
    }
  ];
  var examples = [
    "\uC640\uC774\uD30C\uC774 \uB04A\uAE40",
    "\uD1F4\uC0AC\uC790 \uACC4\uC815 \uC815\uB9AC",
    "\uBCF4\uC548 \uC810\uAC80",
    "Microsoft 365",
    "NAS"
  ];
  function categoryById(id) {
    return categories.find((c) => c.id === id);
  }
  function serviceById(id) {
    return services.find((s) => s.id === id);
  }
  function servicesIn(categoryId) {
    return services.filter((s) => s.category === categoryId).sort((a, b) => a.order - b.order);
  }
  function menuCards(categoryId) {
    return servicesIn(categoryId).filter((s) => !s.menuBundle || s.menuLead);
  }
  function bundleMates(service) {
    if (!service.menuBundle) return [];
    return servicesIn(service.category).filter((s) => s.menuBundle === service.menuBundle);
  }

  // js/icons.js
  var paths = {
    network: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="8.5" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4M12 10v4"/>',
    shield: '<path d="M12 3.2 5 6v5.2c0 4.3 2.9 7.2 7 8.6 4.1-1.4 7-4.3 7-8.6V6l-7-2.8Z"/><path d="M9.2 12.1 11 13.9 14.8 10"/>',
    users: '<circle cx="9" cy="9" r="2.4"/><path d="M4.8 17.2c.6-2.2 2.3-3.3 4.2-3.3s3.6 1.1 4.2 3.3"/><circle cx="16" cy="9.2" r="2"/><path d="M15.2 13.9c1.6-.2 3 .7 3.6 2.4"/>',
    cloud: '<path d="M7.5 17.5h8.2a3.3 3.3 0 0 0 .4-6.6 4.6 4.6 0 0 0-8.8-1.2A3.1 3.1 0 0 0 7.5 17.5Z"/>',
    monitor: '<rect x="3.5" y="4.5" width="17" height="11.5" rx="1.6"/><path d="M9 19.5h6M12 16v3.5"/>',
    wrench: '<path d="M14.6 6.2a3.2 3.2 0 0 0-4.2 4.1L5 15.7l3.3 3.3 5.4-5.4a3.2 3.2 0 0 0 4.1-4.2L15.2 12l-2.2-2.2 1.6-3.6Z"/>',
    laptop: '<rect x="5" y="5.5" width="14" height="9" rx="1.4"/><path d="M3.8 17.5h16.4"/>',
    box: '<path d="M12 3.8 20 7.6v8.8L12 20.2 4 16.4V7.6L12 3.8Z"/><path d="M12 12.2 20 7.6M12 12.2 4 7.6M12 12.2v8"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
    headset: '<path d="M4.5 13V12a7.5 7.5 0 0 1 15 0v1"/><rect x="3.5" y="13" width="4" height="6.5" rx="1.4"/><rect x="16.5" y="13" width="4" height="6.5" rx="1.4"/><path d="M16.5 19.2c0 1.4-1.6 2.3-4.5 2.3"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<circle cx="12" cy="12" r="8"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    phone: '<path d="M8 4.5h2.2l1.2 3-1.6 1a11 11 0 0 0 5 5l1-1.6 3 1.2V15a2 2 0 0 1-2.2 2A13.5 13.5 0 0 1 6 6.7 2 2 0 0 1 8 4.5Z"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.6"/><path d="m4 7 8 6 8-6"/>'
  };
  function icon(name, className = "icon") {
    const body = paths[name] || paths.box;
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
  }

  // js/consult.js
  function consultHref({ service, category, concern, q, from } = {}) {
    const params = new URLSearchParams();
    if (service) params.set("service", service);
    if (category) params.set("category", category);
    if (concern) params.set("concern", concern);
    if (q) params.set("q", q);
    if (from) params.set("from", from);
    const query = params.toString();
    return query ? `contact.html?${query}` : "contact.html";
  }

  // js/layout.js
  function esc(value) {
    return String(value != null ? value : "").replace(
      /[&<>"']/g,
      (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]
    );
  }
  function serviceHref(id) {
    return `service.html?id=${encodeURIComponent(id)}`;
  }
  function menuGrid(category) {
    const cards = menuCards(category.id).map((service) => {
      const mates = service.menuBundle ? bundleMates(service) : [];
      const include = mates.length > 1 ? `<span class="mega-card__inc">\uD3EC\uD568: ${mates.map((mate) => esc(mate.includeLabel || mate.name)).join(" \xB7 ")}</span>` : service.includes ? `<span class="mega-card__inc">\uD3EC\uD568: ${service.includes.map((item) => esc(item.label)).join(" \xB7 ")}</span>` : "";
      const href = service.menuLead ? serviceHref(mates[0].id) : serviceHref(service.id);
      return `<a class="mega-card" href="${href}">
        <span class="mega-card__title">${esc(service.menuTitle || service.title)}</span>
        <span class="mega-card__name">${esc(service.menuName || service.name)}</span>
        ${include}
      </a>`;
    }).join("");
    return cards;
  }
  function renderChrome() {
    const header = document.querySelector("[data-header]");
    const footer = document.querySelector("[data-footer]");
    if (!header || !footer) return;
    const nav = categories.map(
      (category) => `<button class="nav__item" type="button" data-menu="${category.id}" aria-expanded="false" aria-controls="mega-panel">
          ${esc(category.name)}
        </button>`
    ).join("");
    const panels = categories.map(
      (category) => `<div class="mega__panel" data-panel="${category.id}" hidden>
        <div class="mega__intro">
          <p class="mega__num">${esc(category.num)}</p>
          <h2>${esc(category.name)}</h2>
          <p>${esc(category.blurb)}</p>
          <p class="mega__basis">\uAE30\uC900 \uBA54\uB274: ${esc(category.basis)}</p>
        </div>
        <div>
          <div class="mega__grid">${menuGrid(category)}</div>
          <p class="mega__ask"><a href="${consultHref({ category: category.id, from: "menu" })}">\uC5B4\uB5A4 \uAC78 \uACE8\uB77C\uC57C \uD560\uC9C0 \uBAA8\uB974\uACA0\uB2E4\uBA74 \uC0C1\uB2F4 \uC2E0\uCCAD</a></p>
        </div>
      </div>`
    ).join("");
    const drawerGroups = categories.map((category) => {
      const links = menuCards(category.id).flatMap((service) => {
        if (service.menuBundle) {
          return bundleMates(service).map(
            (mate) => `<a href="${serviceHref(mate.id)}">${esc(mate.name)} <span>${esc(mate.title)}</span></a>`
          );
        }
        return [
          `<a href="${serviceHref(service.id)}">${esc(service.name)} <span>${esc(service.title)}</span></a>`
        ];
      }).join("");
      return `<div class="drawer__group">
        <button type="button" class="drawer__toggle" aria-expanded="false">
          <span><small>${esc(category.num)}</small> ${esc(category.name)}</span>
          ${icon("arrow", "icon icon--turn")}
        </button>
        <div class="drawer__links" hidden>${links}<a class="drawer__ask" href="${consultHref({ category: category.id, from: "menu" })}">\uC5B4\uB5A4 \uAC78 \uACE8\uB77C\uC57C \uD560\uC9C0 \uBAA8\uB974\uACA0\uB2E4\uBA74 \uC0C1\uB2F4 \uC2E0\uCCAD</a></div>
      </div>`;
    }).join("");
    header.innerHTML = `
    <a class="skip" href="#content">\uBCF8\uBB38\uC73C\uB85C \uAC74\uB108\uB6F0\uAE30</a>
    <div class="header__bar">
      <div class="header__inner">
        <a class="logo" href="index.html" aria-label="\uCF54\uB808\uC774\uC988 \uD648">
          <span class="logo__mark" aria-hidden="true"></span>
          <span class="logo__word">coraise</span>
        </a>
        <nav class="nav" aria-label="\uC11C\uBE44\uC2A4 \uBD84\uB958">${nav}</nav>
        <a class="btn btn--solid header__cta" href="contact.html">\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-drawer">
          <span class="menu-toggle__bars" aria-hidden="true"></span>
          <span class="sr-only">\uBA54\uB274 \uC5F4\uAE30</span>
        </button>
      </div>
    </div>
    <div class="mega" id="mega-panel" hidden>${panels}</div>
    <div class="drawer" id="mobile-drawer" hidden>
      <div class="drawer__head">
        <strong>\uC11C\uBE44\uC2A4 \uBA54\uB274</strong>
        <button type="button" class="icon-btn" data-drawer-close aria-label="\uBA54\uB274 \uB2EB\uAE30">${icon("close")}</button>
      </div>
      <div class="drawer__body">${drawerGroups}</div>
      <a class="btn btn--solid drawer__cta" href="contact.html">\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD</a>
    </div>`;
    footer.innerHTML = `
    <div class="footer__inner">
      <div class="footer__brand">
        <a class="logo logo--light" href="index.html" aria-label="\uCF54\uB808\uC774\uC988 \uD648">
          <span class="logo__mark" aria-hidden="true"></span>
          <span class="logo__word">coraise</span>
        </a>
        <a class="footer__contact" href="tel:${PHONE_TEL}">${icon("phone")} ${PHONE}</a>
        <a class="footer__contact" href="mailto:${EMAIL}">${icon("mail")} ${EMAIL}</a>
      </div>
      <div>
        <p class="footer__label">\uC11C\uBE44\uC2A4</p>
        <ul>
          ${categories.map(
      (category) => `<li><a href="index.html?cat=${category.id}">${esc(category.name)}</a></li>`
    ).join("")}
        </ul>
      </div>
      <div>
        <p class="footer__label">\uD68C\uC0AC</p>
        <ul>
          <li><a href="about.html">\uD68C\uC0AC \uC18C\uAC1C</a></li>
          <li><a href="cases.html">\uACE0\uAC1D \uC0AC\uB840</a></li>
          <li><a href="about.html#ethics">\uC724\uB9AC\uACBD\uC601</a></li>
          <li><a href="https://coraise.kr/main/recruit/" target="_blank" rel="noopener noreferrer">\uCC44\uC6A9</a></li>
        </ul>
      </div>
      <div class="footer__action">
        <a class="btn btn--solid" href="contact.html">\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD ${icon("arrow", "icon icon--end")}</a>
      </div>
    </div>
    <p class="footer__legal">${esc(ADDRESS)} \xB7 ${esc(COMPANY)} \xB7 \uD300 \uC2ED\uC77C\uC6D4\uAD6C\uC77C \uD559\uC2B5\uC6A9 \uD504\uB85C\uD1A0\uD0C0\uC785. \uACF5\uC2DD \uC548\uB0B4\uB294 <a href="https://coraise.kr/" target="_blank" rel="noopener noreferrer">coraise.kr</a></p>`;
    const fab = document.querySelector("[data-fab]");
    if (fab) {
      fab.innerHTML = `${icon("headset")} <span>\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD</span>`;
    }
    bindMenus(header);
  }
  function bindMenus(header) {
    const mega = header.querySelector(".mega");
    const items = [...header.querySelectorAll(".nav__item")];
    const panels = [...header.querySelectorAll(".mega__panel")];
    let closeTimer = 0;
    let openId = "";
    function open(id) {
      window.clearTimeout(closeTimer);
      openId = id;
      mega.hidden = false;
      items.forEach((item) => {
        const on = item.dataset.menu === id;
        item.classList.toggle("is-open", on);
        item.setAttribute("aria-expanded", on ? "true" : "false");
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== id;
      });
    }
    function close() {
      openId = "";
      mega.hidden = true;
      items.forEach((item) => {
        item.classList.remove("is-open");
        item.setAttribute("aria-expanded", "false");
      });
    }
    function scheduleClose() {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(close, 140);
    }
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => open(item.dataset.menu));
      item.addEventListener("focus", () => open(item.dataset.menu));
      item.addEventListener("mouseleave", scheduleClose);
      item.addEventListener("keydown", (event) => {
        var _a2;
        if (event.key === "Escape") {
          close();
          item.blur();
        }
        if (event.key === "ArrowDown") {
          event.preventDefault();
          open(item.dataset.menu);
          (_a2 = mega.querySelector(".mega__panel:not([hidden]) a")) == null ? void 0 : _a2.focus();
        }
      });
    });
    mega.addEventListener("mouseenter", () => window.clearTimeout(closeTimer));
    mega.addEventListener("mouseleave", scheduleClose);
    mega.addEventListener("focusout", (event) => {
      var _a2;
      if (!mega.contains(event.relatedTarget) && !((_a2 = header.querySelector(".nav")) == null ? void 0 : _a2.contains(event.relatedTarget))) {
        scheduleClose();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && openId) close();
    });
    const toggle = header.querySelector(".menu-toggle");
    const drawer = header.querySelector(".drawer");
    const label = toggle.querySelector(".sr-only");
    function setDrawer(next) {
      var _a2;
      drawer.hidden = !next;
      toggle.setAttribute("aria-expanded", next ? "true" : "false");
      label.textContent = next ? "\uBA54\uB274 \uB2EB\uAE30" : "\uBA54\uB274 \uC5F4\uAE30";
      document.body.classList.toggle("is-locked", next);
      if (next) (_a2 = drawer.querySelector(".drawer__toggle")) == null ? void 0 : _a2.focus();
    }
    toggle.addEventListener("click", () => setDrawer(drawer.hidden));
    drawer.querySelector("[data-drawer-close]").addEventListener("click", () => setDrawer(false));
    drawer.addEventListener("click", (event) => {
      if (event.target === drawer) setDrawer(false);
    });
    drawer.querySelectorAll(".drawer__toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const links = button.nextElementSibling;
        const openNow = links.hidden;
        drawer.querySelectorAll(".drawer__links").forEach((node) => {
          node.hidden = true;
        });
        drawer.querySelectorAll(".drawer__toggle").forEach((node) => {
          node.setAttribute("aria-expanded", "false");
        });
        links.hidden = !openNow;
        button.setAttribute("aria-expanded", openNow ? "true" : "false");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !drawer.hidden) setDrawer(false);
    });
  }

  // js/about.js
  function initAbout() {
    renderChrome();
  }

  // js/cases.js
  function initCases() {
    renderChrome();
    document.querySelector("#case-list").innerHTML = cases.map(
      (item) => `<article class="card case" id="${esc(item.id)}">
      <div class="case__shot">\uC0AC\uB840 \uC774\uBBF8\uC9C0 \xB7 \uC790\uB9AC<br />${esc(item.company)}</div>
      <div class="case__body">
        <p class="case__kicker">\uACE0\uAC1D \uC0AC\uB840 \xB7 ${esc(item.company)} \xB7 ${esc(item.date)}</p>
        <h3>${esc(item.quote)}</h3>
        <p>\uC778\uD130\uBDF0 \uC804\uBB38\uC740 \uCF54\uB808\uC774\uC988 \uACF5\uC2DD \uC0AC\uC774\uD2B8\uC758 \uACE0\uAC1D \uC0AC\uB840\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.</p>
        <div class="card__actions">
          <a class="card__go" href="https://coraise.kr/" target="_blank" rel="noopener noreferrer">coraise.kr\uC5D0\uC11C \uBCF4\uAE30 \u2192</a>
          <a class="card__go" href="${consultHref({ q: item.company, from: "cases" })}">\uC774 \uC0AC\uB840\uCC98\uB7FC \uC0C1\uB2F4</a>
        </div>
      </div>
    </article>`
    ).join("");
  }

  // js/contact.js
  var fromLabels = {
    home: "\uD648",
    menu: "\uBA54\uB274",
    search: "\uAC80\uC0C9",
    service: "\uC11C\uBE44\uC2A4 \uC548\uB0B4",
    cases: "\uACE0\uAC1D \uC0AC\uB840",
    about: "\uD68C\uC0AC \uC18C\uAC1C"
  };
  function initContact() {
    renderChrome();
    const params = new URLSearchParams(location.search);
    const state = {
      service: serviceById(params.get("service")) || null,
      category: categoryById(params.get("category")) || null,
      concern: (params.get("concern") || "").trim(),
      q: (params.get("q") || "").trim(),
      from: params.get("from") || ""
    };
    if (state.service && !state.category) state.category = categoryById(state.service.category) || null;
    const message = document.querySelector("#message");
    const picked = document.querySelector("#picked");
    const chips = document.querySelector("#picked-chips");
    const error = document.querySelector("#form-error");
    const form = document.querySelector("#consult-form");
    const confirm = document.querySelector("#confirm");
    let messageDirty = false;
    function draft() {
      const lines = [];
      if (state.service) lines.push(`${state.service.name} \uAD00\uB828\uD574\uC11C \uC0C1\uB2F4\uBC1B\uACE0 \uC2F6\uC5B4\uC694.`);
      else if (state.category) lines.push(`${state.category.name} \uC911\uC5D0\uC11C \uC5B4\uB5A4 \uC11C\uBE44\uC2A4\uAC00 \uB9DE\uB294\uC9C0 \uC0C1\uB2F4\uBC1B\uACE0 \uC2F6\uC5B4\uC694.`);
      if (state.concern) lines.push(`\uAC00\uAE4C\uC6B4 \uACE0\uBBFC\uC740 \u2018${state.concern}\u2019\uC785\uB2C8\uB2E4.`);
      if (state.q) {
        lines.push(
          state.from === "cases" ? `\u2018${state.q}\u2019 \uC0AC\uB840\uB97C \uBCF4\uACE0 \uC6B0\uB9AC \uD68C\uC0AC\uB3C4 \uC0C1\uB2F4\uBC1B\uACE0 \uC2F6\uC5B4\uC694.` : `\u2018${state.q}\u2019\uB85C \uCC3E\uC544\uBCF4\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`
        );
      }
      if (!lines.length) return "\uD544\uC694\uD55C IT\uB97C \uC544\uC9C1 \uC815\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC0C1\uD669\uC744 \uC0C1\uB2F4\uBC1B\uACE0 \uC2F6\uC5B4\uC694.";
      return lines.join(" ");
    }
    function chip(key, label) {
      return `<span class="picked__chip">${esc(label)} <button type="button" data-remove="${key}" aria-label="${esc(label)} \uC9C0\uC6B0\uAE30">\xD7</button></span>`;
    }
    function paint() {
      const items = [];
      if (state.category) items.push(chip("category", state.category.name));
      if (state.service) items.push(chip("service", state.service.name));
      if (state.concern) items.push(chip("concern", state.concern));
      if (state.q) items.push(chip("q", state.from === "cases" ? `${state.q} \uC0AC\uB840` : state.q));
      picked.hidden = items.length === 0;
      chips.innerHTML = items.join("");
      if (!messageDirty) message.value = draft();
    }
    function clearPicked() {
      state.service = null;
      state.category = null;
      state.concern = "";
      state.q = "";
      paint();
    }
    chips.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove]");
      if (!button) return;
      const key = button.dataset.remove;
      if (key === "service") state.service = null;
      if (key === "category") state.category = null;
      if (key === "concern") state.concern = "";
      if (key === "q") state.q = "";
      paint();
    });
    document.querySelector("#picked-clear").addEventListener("click", clearPicked);
    message.addEventListener("input", () => {
      messageDirty = true;
    });
    paint();
    function payload() {
      const pickedLines = [];
      if (state.category) pickedLines.push(`\uBD84\uB958: ${state.category.name}`);
      if (state.service) pickedLines.push(`\uC11C\uBE44\uC2A4: ${state.service.name}`);
      if (state.concern) pickedLines.push(`\uACE0\uBBFC: ${state.concern}`);
      if (state.q) pickedLines.push(state.from === "cases" ? `\uC0AC\uB840: ${state.q}` : `\uAC80\uC0C9\uC5B4: ${state.q}`);
      if (state.from && fromLabels[state.from]) pickedLines.push(`\uB4E4\uC5B4\uC628 \uACF3: ${fromLabels[state.from]}`);
      return [
        `\uC774\uB984: ${document.querySelector("#name").value.trim()}`,
        `\uC5F0\uB77D\uCC98: ${document.querySelector("#phone").value.trim()}`,
        `\uD68C\uC0AC\uBA85: ${document.querySelector("#company").value.trim() || "-"}`,
        pickedLines.length ? pickedLines.join("\n") : "\uC120\uD0DD\uD55C \uB0B4\uC6A9: \uC5C6\uC74C",
        "",
        message.value.trim()
      ].join("\n");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value.trim();
      const phone = document.querySelector("#phone").value.trim();
      if (!name || !phone || !message.value.trim()) {
        error.hidden = false;
        if (!name) document.querySelector("#name").focus();
        else if (!phone) document.querySelector("#phone").focus();
        else message.focus();
        return;
      }
      error.hidden = true;
      document.querySelector("#confirm-summary").textContent = payload();
      form.hidden = true;
      confirm.hidden = false;
    });
    document.querySelector("#again").addEventListener("click", () => {
      form.hidden = false;
      confirm.hidden = true;
      document.querySelector("#name").focus();
    });
  }

  // js/search.js
  function normalize(value) {
    return String(value != null ? value : "").toLowerCase().replace(/\s+/g, "").replace(/[·ㆍ・./_-]/g, "");
  }
  function hit(haystack, needle) {
    if (!haystack || !needle || needle.length < 1) return 0;
    if (haystack === needle) return 4;
    if (haystack.startsWith(needle) || needle.startsWith(haystack)) return 3;
    if (haystack.includes(needle) || needle.includes(haystack)) return 2;
    return 0;
  }
  function scoreService(service, rawQuery) {
    const query = String(rawQuery != null ? rawQuery : "").trim();
    if (!query) return 0;
    const nq = normalize(query);
    if (!nq) return 0;
    const tokens = query.toLowerCase().split(/\s+/).map(normalize).filter((token) => token.length > 0);
    const category = categoryById(service.category);
    const fields = [
      normalize(service.name),
      normalize(service.title),
      normalize(service.menuName),
      normalize(service.summary),
      ...(service.keywords || []).map(normalize),
      ...(service.includes || []).map((item) => normalize(item.label))
    ].filter(Boolean);
    let score = 0;
    const name = normalize(service.name);
    const title = normalize(service.title);
    if (name === nq) score += 120;
    else if (name.startsWith(nq)) score += 80;
    else if (name.includes(nq)) score += 60;
    if (title === nq) score += 70;
    else if (title.includes(nq)) score += 36;
    for (const field of fields) {
      const rank = hit(field, nq);
      if (rank === 4) score += 64;
      else if (rank === 3) score += 42;
      else if (rank === 2) score += 24;
    }
    for (const token of tokens) {
      if (token === nq) continue;
      for (const field of fields) {
        const rank = hit(field, token);
        if (rank >= 3) score += 16;
        else if (rank === 2) score += 10;
      }
    }
    if (category) {
      const catName = normalize(category.name);
      const catShort = normalize(category.short);
      if (nq === catName || nq === catShort) score += 30;
      else if (nq.includes(catShort) && catShort.length >= 2) score += 14;
    }
    return score;
  }
  function searchServices(services2, rawQuery) {
    const query = String(rawQuery != null ? rawQuery : "").trim();
    if (!query) return [];
    return services2.map((service) => ({ service, score: scoreService(service, query) })).filter((row) => row.score > 0).sort(
      (a, b) => b.score - a.score || a.service.category.localeCompare(b.service.category) || a.service.order - b.service.order
    ).map((row) => row.service);
  }

  // js/home.js
  function initHome() {
    renderChrome();
    document.querySelector("#glass").innerHTML = icon("search");
    const home = document.querySelector("#home-sections");
    const results = document.querySelector("#results");
    const input = document.querySelector("#q");
    const form = document.querySelector("#search-form");
    const suggest = document.querySelector("#suggest");
    const clearBtn = document.querySelector("#clear-q");
    const box = document.querySelector(".search");
    const state = {
      query: "",
      category: "",
      showAll: false,
      active: -1,
      options: []
    };
    function optionButtons() {
      return [...suggest.querySelectorAll("[data-option]")];
    }
    function paintHome() {
      document.querySelector("#concerns").innerHTML = concerns.map((item) => {
        const see = concernHref(item);
        const ask = consultHref({
          category: item.category,
          concern: item.title,
          q: item.query,
          from: "home"
        });
        return `<article class="card concern">
        <a class="concern__main" href="${see}">
          <span class="concern__bar"></span>
          <span class="tone">${icon(item.icon)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </a>
        <div class="card__actions">
          <a class="card__go" href="${see}">\uC194\uB8E8\uC158 \uBCF4\uAE30 \u2192</a>
          <a class="card__go" href="${ask}">\uC774 \uACE0\uBBFC\uC73C\uB85C \uC0C1\uB2F4</a>
        </div>
      </article>`;
      }).join("");
      document.querySelector("#categories").innerHTML = categories.map((category) => {
        const count = servicesIn(category.id).length;
        const see = `index.html?cat=${category.id}`;
        const ask = consultHref({ category: category.id, from: "home" });
        return `<article class="card cat">
        <a class="cat__main" href="${see}">
          <span class="tone">${icon(category.icon)}</span>
          <h3>${esc(category.name)}</h3>
          <span class="cat__count">\uC11C\uBE44\uC2A4 ${count}\uAC1C</span>
        </a>
        <div class="card__actions">
          <a class="card__go" href="${see}">\uC11C\uBE44\uC2A4 \uBCF4\uAE30 \u2192</a>
          <a class="card__go" href="${ask}">\uC774 \uBD84\uB958\uB85C \uC0C1\uB2F4</a>
        </div>
      </article>`;
      }).join("");
      document.querySelector("#partners").innerHTML = partners.map(
        (item) => `<article class="card partner">
        <span class="tone">${icon("check")}</span>
        <h3>${esc(item.name)}</h3>
        <p>${esc(item.text)}</p>
      </article>`
      ).join("");
      document.querySelector("#logos").innerHTML = cases.map(
        (item) => `<div class="card logo-slot"><span>\uB85C\uACE0 \uC790\uB9AC</span><strong>${esc(item.company)}</strong></div>`
      ).join("");
      document.querySelector("#cases").innerHTML = cases.slice(0, 3).map(
        (item) => `<article class="card case">
        <a class="case__link" href="cases.html#${item.id}">
          <div class="case__shot">\uC0AC\uB840 \uC774\uBBF8\uC9C0 \xB7 \uC790\uB9AC</div>
          <div class="case__body">
            <p class="case__kicker">\uACE0\uAC1D \uC0AC\uB840 \xB7 ${esc(item.company)}</p>
            <h3>${esc(item.quote)}</h3>
          </div>
        </a>
        <div class="card__actions case__actions">
          <a class="card__go" href="cases.html#${item.id}">\uC778\uD130\uBDF0 \uC77D\uAE30 \u2192</a>
          <a class="card__go" href="${consultHref({ q: item.company, from: "cases" })}">\uC774 \uC0AC\uB840\uCC98\uB7FC \uC0C1\uB2F4</a>
        </div>
      </article>`
      ).join("");
      document.querySelector("#examples").innerHTML = examples.map((word) => `<button class="chip" type="button" data-example="${esc(word)}">${esc(word)}</button>`).join("");
    }
    function concernHref(item) {
      const params = new URLSearchParams();
      if (item.query) params.set("q", item.query);
      if (item.category) params.set("cat", item.category);
      return `index.html?${params.toString()}`;
    }
    function readUrl() {
      const params = new URLSearchParams(location.search);
      state.query = params.get("q") || "";
      state.category = params.get("cat") || "";
      state.showAll = params.get("all") === "1";
      input.value = state.query;
      syncClear();
      renderResults();
    }
    function writeUrl() {
      const params = new URLSearchParams();
      if (state.query) params.set("q", state.query);
      if (state.category) params.set("cat", state.category);
      if (state.showAll) params.set("all", "1");
      const next = params.toString();
      history.replaceState(null, "", next ? `?${next}` : "index.html");
    }
    function pool() {
      if (state.showAll && !state.query) return services;
      if (state.query) return searchServices(services, state.query);
      if (state.category) return servicesIn(state.category);
      return [];
    }
    function visible() {
      const rows = pool();
      if (!state.category || state.category && !state.query && !state.showAll) return rows;
      if (state.query || state.showAll) return rows.filter((service) => service.category === state.category);
      return rows;
    }
    function hasResultsMode() {
      return Boolean(state.query || state.category || state.showAll);
    }
    function renderResults() {
      const on = hasResultsMode();
      home.hidden = on;
      results.hidden = !on;
      if (!on) return;
      const rows = visible();
      const base = pool();
      const title = document.querySelector("#results-title");
      if (state.query) {
        title.innerHTML = `\u2018${esc(state.query)}\u2019 \uAC80\uC0C9 \uACB0\uACFC <em>${rows.length}\uAC74</em>`;
      } else if (state.category && !state.showAll) {
        const category = categories.find((item) => item.id === state.category);
        title.innerHTML = `${esc((category == null ? void 0 : category.name) || "\uC11C\uBE44\uC2A4")} <em>${rows.length}\uAC74</em>`;
      } else {
        title.innerHTML = `\uC804\uCCB4 \uC11C\uBE44\uC2A4 <em>${rows.length}\uAC74</em>`;
      }
      const ask = consultHref({
        q: state.query,
        category: state.category,
        from: "search"
      });
      const resultsCta = document.querySelector("#results-cta");
      const helpLink = document.querySelector("#results-help-link");
      if (resultsCta) {
        resultsCta.innerHTML = `<a href="${ask}">\uACE0\uB974\uAE30 \uC5B4\uB835\uB2E4\uBA74 \uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD \u2192</a>`;
      }
      if (helpLink) helpLink.href = ask;
      const chips = [{ id: "", name: "\uC804\uCCB4" }, ...categories];
      document.querySelector("#filters").innerHTML = chips.map((chip) => {
        const onChip = state.showAll || state.query ? chip.id === state.category : chip.id === (state.category || "");
        const pressed = chip.id === "" ? !state.category : state.category === chip.id;
        return `<button class="chip ${pressed ? "is-on" : ""}" type="button" data-filter="${chip.id}" aria-pressed="${pressed}">${esc(chip.name)}</button>`;
      }).join("");
      const list = document.querySelector("#result-list");
      if (!base.length) {
        list.innerHTML = `<div class="empty">
      <h3>\u2018${esc(state.query)}\u2019\uC5D0 \uB9DE\uB294 \uC11C\uBE44\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.</h3>
      <p>\uB2E4\uB978 \uB9D0\uB85C \uAC80\uC0C9\uD558\uAC70\uB098, \uACE0\uBBFC\uB9CC \uB0A8\uACA8 \uC8FC\uC154\uB3C4 \uB429\uB2C8\uB2E4.</p>
      <a class="btn btn--solid" href="${ask}">\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD</a>
    </div>`;
      } else if (!rows.length) {
        list.innerHTML = `<div class="empty">
      <h3>\uC774 \uBD84\uB958\uC5D0\uB294 \uD574\uB2F9\uD558\uB294 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</h3>
      <p>\uC804\uCCB4\uB85C \uBC14\uAFB8\uAC70\uB098 \uC0C1\uB2F4\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694.</p>
      <button class="btn btn--line" type="button" data-filter="">\uC804\uCCB4 \uACB0\uACFC \uBCF4\uAE30</button>
    </div>`;
      } else {
        list.innerHTML = rows.map((service) => {
          const category = categories.find((item) => item.id === service.category);
          const detail = `service.html?id=${encodeURIComponent(service.id)}`;
          const talk = consultHref({
            service: service.id,
            category: service.category,
            q: state.query,
            from: "search"
          });
          return `<article class="result">
          <a class="result__main" href="${detail}">
            <h3>${esc(service.name)}</h3>
            <p>${esc(service.summary)}</p>
          </a>
          <span class="pill">${esc((category == null ? void 0 : category.short) || "")}</span>
          <div class="result__actions">
            <a class="btn btn--line" href="${detail}">\uC790\uC138\uD788 \u2192</a>
            <a class="btn btn--solid" href="${talk}">\uC774 \uC11C\uBE44\uC2A4 \uC0C1\uB2F4\uD558\uAE30</a>
          </div>
        </article>`;
        }).join("");
      }
      results.scrollIntoView({ block: "start" });
    }
    function syncClear() {
      clearBtn.hidden = input.value.trim().length === 0;
    }
    function openSuggest(matches) {
      state.options = matches.slice(0, 5);
      state.active = -1;
      if (!input.value.trim()) {
        suggest.hidden = true;
        box.classList.remove("is-open");
        return;
      }
      const items = state.options.map((service, index) => {
        const category = categories.find((item) => item.id === service.category);
        return `<a class="suggest__item" role="option" data-option="${index}" href="service.html?id=${encodeURIComponent(service.id)}">
        <span class="suggest__mark">${icon((category == null ? void 0 : category.icon) || "box")}</span>
        <span class="suggest__copy"><strong>${esc(service.name)}</strong><span>${esc(service.title)}</span></span>
        <span class="suggest__cat">${esc((category == null ? void 0 : category.name) || "")} ${icon("arrow", "icon")}</span>
      </a>`;
      }).join("");
      const emptyNote = state.options.length ? "" : `<p class="suggest__item" style="cursor:default">\uBC14\uB85C \uC5F0\uACB0\uD560 \uC11C\uBE44\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. Enter\uB85C \uC804\uCCB4 \uACB0\uACFC\uB97C \uD655\uC778\uD558\uC138\uC694.</p>`;
      const typed = input.value.trim();
      suggest.innerHTML = `${emptyNote}${items}<button class="suggest__all" type="button" data-option="all">Enter \uB610\uB294 \uAC80\uC0C9 \uBC84\uD2BC \u2192 \u300C${esc(typed)}\u300D \uC804\uCCB4 \uACB0\uACFC \uBCF4\uAE30</button><a class="suggest__ask" href="${consultHref({ q: typed, from: "search" })}">\uACE0\uB974\uAE30 \uC5B4\uB835\uB2E4\uBA74 \uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD \u2192</a>`;
      suggest.hidden = false;
      box.classList.add("is-open");
      input.setAttribute("aria-expanded", "true");
    }
    function moveActive(step) {
      const buttons = optionButtons();
      if (!buttons.length || suggest.hidden) {
        openSuggest(searchServices(services, input.value));
      }
      const nodes = optionButtons();
      if (!nodes.length) return;
      const current = state.active;
      let next = current + step;
      if (next < 0) next = nodes.length - 1;
      if (next >= nodes.length) next = 0;
      state.active = next;
      nodes.forEach((node2, index) => node2.classList.toggle("is-active", index === next));
      const node = nodes[next];
      if (node.id) input.setAttribute("aria-activedescendant", node.id);
      node.id = node.id || `suggest-opt-${next}`;
      input.setAttribute("aria-activedescendant", node.id);
    }
    function syncHeroConsult() {
      const link = document.querySelector("#hero-consult");
      if (!link) return;
      const typed = input.value.trim();
      link.href = consultHref({ q: typed, from: "home" });
    }
    function runSearch(query) {
      state.query = query.trim();
      state.showAll = false;
      if (!state.query) state.category = "";
      input.value = state.query;
      suggest.hidden = true;
      box.classList.remove("is-open");
      input.setAttribute("aria-expanded", "false");
      syncClear();
      syncHeroConsult();
      writeUrl();
      renderResults();
    }
    paintHome();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const current = optionButtons()[state.active];
      if (current && current.dataset.option !== "all" && state.active >= 0) {
        window.location.href = current.getAttribute("href");
        return;
      }
      runSearch(input.value);
    });
    input.addEventListener("input", () => {
      syncClear();
      syncHeroConsult();
      openSuggest(searchServices(services, input.value));
    });
    input.addEventListener("keydown", (event) => {
      if (event.isComposing || event.keyCode === 229) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        moveActive(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        moveActive(-1);
      } else if (event.key === "Escape") {
        suggest.hidden = true;
        box.classList.remove("is-open");
        state.active = -1;
      }
    });
    clearBtn.addEventListener("click", () => {
      input.value = "";
      syncClear();
      suggest.hidden = true;
      box.classList.remove("is-open");
      input.focus();
    });
    document.querySelector("#examples").addEventListener("click", (event) => {
      const button = event.target.closest("[data-example]");
      if (!button) return;
      state.category = "";
      runSearch(button.dataset.example);
    });
    document.querySelector("#results").addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      state.category = button.dataset.filter;
      if (!state.query && state.category) state.showAll = false;
      if (!state.query && !state.category) state.showAll = true;
      writeUrl();
      renderResults();
    });
    document.addEventListener("click", (event) => {
      if (!box.contains(event.target)) {
        suggest.hidden = true;
        box.classList.remove("is-open");
      }
    });
    readUrl();
    syncHeroConsult();
    if (!hasResultsMode()) results.hidden = true;
  }

  // js/service.js
  function initService() {
    renderChrome();
    const params = new URLSearchParams(location.search);
    const service = serviceById(params.get("id"));
    const main = document.querySelector("main");
    if (!service) {
      document.title = "\uC11C\uBE44\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 | \uCF54\uB808\uC774\uC988";
      main.innerHTML = `<p class="crumb"><a href="index.html">\uD648</a></p>
    <h1>\uC11C\uBE44\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4</h1>
    <p>\uBAA9\uB85D\uC5D0\uC11C \uB2E4\uC2DC \uACE8\uB77C \uC8FC\uC138\uC694.</p>
    <p><a class="btn btn--solid" href="index.html?all=1">\uC804\uCCB4 \uC11C\uBE44\uC2A4 \uBCF4\uAE30</a></p>`;
    } else {
      const category = categoryById(service.category);
      document.title = `${service.name} | \uCF54\uB808\uC774\uC988`;
      const mates = bundleMates(service).filter((item) => item.id !== service.id);
      const related = servicesIn(service.category).filter((item) => item.id !== service.id).slice(0, 4);
      const includes = service.includes || [];
      main.innerHTML = `
    <p class="crumb"><a href="index.html">\uD648</a> \xB7 <a href="index.html?cat=${category.id}">${esc(category.name)}</a> \xB7 ${esc(service.name)}</p>
    <div class="detail">
      <article class="card detail__main">
        <p class="kicker">${esc(category.name)}</p>
        <h1>${esc(service.name)}</h1>
        <p>${esc(service.summary)}</p>
        <p>${esc(service.title)}</p>
        ${includes.length ? `<h2>\uD568\uAED8 \uC548\uB0B4\uD558\uB294 \uC774\uB984</h2><ul class="point-list">${includes.map(
        (item) => `<li>${item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)}</a>` : esc(item.label)}</li>`
      ).join("")}</ul>` : ""}
        ${mates.length ? `<h2>\uAC19\uC740 \uBB36\uC74C</h2><ul class="point-list">${mates.map((item) => `<li><a href="service.html?id=${encodeURIComponent(item.id)}">${esc(item.name)}</a> \xB7 ${esc(item.summary)}</li>`).join("")}</ul>` : ""}
        <div class="form-actions">
          <a class="btn btn--solid" href="${consultHref({ service: service.id, category: category.id, from: "service" })}">\uC774 \uC11C\uBE44\uC2A4 \uC0C1\uB2F4\uD558\uAE30</a>
          ${service.url ? `<a class="btn btn--line" href="${esc(service.url)}" target="_blank" rel="noopener noreferrer">\uAE30\uC874 \uC548\uB0B4 \uD398\uC774\uC9C0</a>` : ""}
        </div>
      </article>
      <aside class="card detail__side">
        <h2>\uAC19\uC740 \uBD84\uB958</h2>
        <div class="side-links">
          ${related.map(
        (item) => `<div class="side-row">
                <a href="service.html?id=${encodeURIComponent(item.id)}">${esc(item.name)}</a>
                <a href="${consultHref({ service: item.id, category: item.category, from: "service" })}">\uC774 \uC11C\uBE44\uC2A4 \uC0C1\uB2F4\uD558\uAE30</a>
              </div>`
      ).join("")}
          <a href="index.html?cat=${category.id}">${esc(category.name)} \uC804\uCCB4 \uBCF4\uAE30</a>
        </div>
        <p class="choice-cta"><a href="${consultHref({ category: category.id, from: "service" })}">\uACE0\uB974\uAE30 \uC5B4\uB835\uB2E4\uBA74 \uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD \u2192</a></p>
      </aside>
    </div>`;
    }
  }

  // js/boot.js
  var pages = {
    home: initHome,
    service: initService,
    contact: initContact,
    cases: initCases,
    about: initAbout
  };
  var _a;
  var page = (_a = document.body) == null ? void 0 : _a.dataset.page;
  if (pages[page]) pages[page]();
})();
