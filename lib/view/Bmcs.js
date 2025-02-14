"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const BMCSAlert_1 = __importDefault(require("../component/bmcs/BMCSAlert"));
const BMCSCollapsibleItem_1 = __importDefault(
  require("../component/bmcs/BMCSCollapsibleItem")
);
const MobileMenu_1 = __importDefault(
  require("../component/bmcs/menu/MobileMenu")
);
const PCMenu_1 = __importDefault(require("../component/bmcs/menu/PCMenu"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
const MintingPopup_1 = __importDefault(
  require("../component/bmcs/MintingPopup")
);
class Bmcs {
  constructor() {
    document.title = "Biased Mate Cycle Shop";
    let select;
    skynode_1.BodyNode.append(
      (this.container = (0, skynode_1.el)(
        ".bmcs-view",
        (0, skynode_1.el)(
          ".nav",
          (0, skynode_1.el)(
            ".left",
            (0, skynode_1.el)(
              "a.menu-button",
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/icn_menu.svg",
              }),
              {
                click: (event, button) => {
                  const rect = button.rect;
                  new MobileMenu_1.default({
                    left: rect.right,
                    top: rect.bottom,
                  }).appendTo(skynode_1.BodyNode);
                },
              }
            )
          ),
          (0, skynode_1.el)(
            "a",
            { click: () => ViewUtil_1.default.go("/bmcs") },
            (0, skynode_1.el)("img.logo", {
              align: "left",
              src: "/images/shared/logo/bmcs.svg",
              alt: "logo",
            })
          ),
          new PCMenu_1.default(),
          (select = (0, skynode_1.el)(
            "select.language-select",
            (0, skynode_1.el)("option", "🇰🇷 KOREAN", { value: "ko" }),
            {
              change: () => {
                BrowserInfo_1.default.changeLanguage(select.domElement.value);
              },
            }
          ))
        ),
        (0, skynode_1.el)(
          "header.section",
          (0, skynode_1.el)(".overlay"),
          (0, skynode_1.el)(
            "section",
            (0, skynode_1.el)("h1", (0, msg_js_1.default)("BMCS_TITLE")),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("BMCS_DESC")),
            (0, skynode_1.el)("a", "MINT", {
              click: () => {
                new MintingPopup_1.default();
              },
            })
          )
        ),
        (0, skynode_1.el)(
          "section",
          (0, skynode_1.el)(
            "article.section #keyword",
            (0, skynode_1.el)(
              "h2",
              (0, msg_js_1.default)("BMCS_KEYWORD_TITLE")
            ),
            new BMCSCollapsibleItem_1.default(
              (0, msg_js_1.default)("BMCS_KEYWORD_TITLE1"),
              (0, msg_js_1.default)("BMCS_KEYWORD_DESC1")
            ),
            new BMCSCollapsibleItem_1.default(
              (0, msg_js_1.default)("BMCS_KEYWORD_TITLE2"),
              (0, msg_js_1.default)("BMCS_KEYWORD_DESC2")
            ),
            new BMCSCollapsibleItem_1.default(
              (0, msg_js_1.default)("BMCS_KEYWORD_TITLE3"),
              (0, msg_js_1.default)("BMCS_KEYWORD_DESC3")
            )
          ),
          (0, skynode_1.el)("hr"),
          (0, skynode_1.el)(
            "article.biased-mate-container section #biasedMate",
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("BMCS_MATE_TITLE")),
            (0, skynode_1.el)(
              ".content",
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate1.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate2.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate3.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate4.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate5.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate6.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate7.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate8.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate9.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate10.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate11.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate12.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate13.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate14.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate15.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate16.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate17.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate18.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate19.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate20.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate21.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate22.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate23.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate24.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate25.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate26.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate27.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate28.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate29.png",
                alt: "mate",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/bmcs/mate30.png",
                alt: "mate",
              })
            )
          ),
          (0, skynode_1.el)("hr"),
          (0, skynode_1.el)(
            "article.vibe-container section #biasedCard",
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("BMCS_VIBE_TITLE")),
            (0, skynode_1.el)("h3", (0, msg_js_1.default)("BMCS_VIBE_DESC")),
            (0, skynode_1.el)(
              ".content",
              (0, skynode_1.el)(
                ".card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/bmcs/vibe1.png",
                  alt: "vibe",
                }),
                (0, skynode_1.el)(
                  "h4",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_TITLE1")
                ),
                (0, skynode_1.el)(
                  "p",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_DESC1")
                )
              ),
              (0, skynode_1.el)(
                ".card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/bmcs/vibe2.png",
                  alt: "vibe",
                }),
                (0, skynode_1.el)(
                  "h4",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_TITLE2")
                ),
                (0, skynode_1.el)(
                  "p",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_DESC2")
                )
              ),
              (0, skynode_1.el)(
                ".card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/bmcs/vibe3.png",
                  alt: "vibe",
                }),
                (0, skynode_1.el)(
                  "h4",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_TITLE3")
                ),
                (0, skynode_1.el)(
                  "p",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_DESC3")
                )
              ),
              (0, skynode_1.el)(
                ".card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/bmcs/vibe4.png",
                  alt: "vibe",
                }),
                (0, skynode_1.el)(
                  "h4",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_TITLE4")
                ),
                (0, skynode_1.el)(
                  "p",
                  (0, msg_js_1.default)("BMCS_VIBE_CARD_DESC4")
                )
              )
            ),
            (0, skynode_1.el)(
              ".warning-container",
              (0, skynode_1.el)(
                "h4",
                (0, msg_js_1.default)("BMCS_VIBE_WARNING_TITLE")
              ),
              (0, skynode_1.el)(
                "p",
                (0, msg_js_1.default)("BMCS_VIBE_WARNING_DESC")
              )
            )
          ),
          (0, skynode_1.el)("hr"),
          (0, skynode_1.el)(
            "article.roadmap-container section #roadmap",
            (0, skynode_1.el)(
              "h2",
              (0, msg_js_1.default)("BMCS_ROADMAP_TITLE")
            ),
            (0, skynode_1.el)("h3", (0, msg_js_1.default)("BMCS_ROADMAP_DESC")),
            (0, skynode_1.el)(
              ".content",
              (0, skynode_1.el)(
                ".card-container",
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE1"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC1"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "000%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE1")
                  ),
                  (0, skynode_1.el)("img.right", {
                    src: "/images/view/bmcs/icn-arrow-right.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE2"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC2"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "000%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE2")
                  ),
                  (0, skynode_1.el)("img.right", {
                    src: "/images/view/bmcs/icn-arrow-right.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE3"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC3"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "010%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE3")
                  ),
                  (0, skynode_1.el)("img.down", {
                    src: "/images/view/bmcs/icn-arrow-down.svg",
                  })
                )
              ),
              (0, skynode_1.el)(
                ".card-reverse-container",
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE4"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC4"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "030%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE4")
                  ),
                  (0, skynode_1.el)("img.left", {
                    src: "/images/view/bmcs/icn-arrow-left.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE5"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC5"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "040%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE5")
                  ),
                  (0, skynode_1.el)("img.left", {
                    src: "/images/view/bmcs/icn-arrow-left.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE6"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC6"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "050%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE6")
                  ),
                  (0, skynode_1.el)("img.down", {
                    src: "/images/view/bmcs/icn-arrow-down.svg",
                  })
                )
              ),
              (0, skynode_1.el)(
                ".card-container",
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE7"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC7"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "060%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE7")
                  ),
                  (0, skynode_1.el)("img.right", {
                    src: "/images/view/bmcs/icn-arrow-right.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE8"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC8"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "070%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE8")
                  ),
                  (0, skynode_1.el)("img.right", {
                    src: "/images/view/bmcs/icn-arrow-right.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE9"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC9"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "080%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE9")
                  ),
                  (0, skynode_1.el)("img.down", {
                    src: "/images/view/bmcs/icn-arrow-down.svg",
                  })
                )
              ),
              (0, skynode_1.el)(
                ".card-reverse-container",
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE10"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC10"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "080%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE10")
                  ),
                  (0, skynode_1.el)("img.left", {
                    src: "/images/view/bmcs/icn-arrow-left.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE11"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC11"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "090%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE11")
                  ),
                  (0, skynode_1.el)("img.left", {
                    src: "/images/view/bmcs/icn-arrow-left.svg",
                  })
                ),
                (0, skynode_1.el)(
                  ".card",
                  {
                    click: () => {
                      new BMCSAlert_1.default(
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE12"),
                        (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC12"),
                        "OK"
                      );
                    },
                  },
                  (0, skynode_1.el)("h4", "100%"),
                  (0, skynode_1.el)(
                    "p",
                    (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE12")
                  ),
                  (0, skynode_1.el)("img.down", {
                    src: "/images/view/bmcs/icn-arrow-down.svg",
                  })
                )
              ),
              (0, skynode_1.el)(
                ".card",
                {
                  click: () => {
                    new BMCSAlert_1.default(
                      (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_TITLE13"),
                      (0, msg_js_1.default)("BMCS_ROADMAP_ALERT_DESC13"),
                      "OK"
                    );
                  },
                },
                (0, skynode_1.el)("h4", "100%"),
                (0, skynode_1.el)(
                  "p",
                  (0, msg_js_1.default)("BMCS_ROADMAP_CARD_TITLE13")
                )
              )
            ),
            (0, skynode_1.el)(
              "a",
              (0, msg_js_1.default)("BMCS_ROADMAP_BUTTON"),
              { href: "https://url.kr/uzh9nj" }
            )
          ),
          (0, skynode_1.el)("hr"),
          (0, skynode_1.el)(
            "article.faq-container section #faq",
            (0, skynode_1.el)("h2", "FAQ"),
            new BMCSCollapsibleItem_1.default(
              (0, msg_js_1.default)("BMCS_FAQ_TITLE1"),
              (0, msg_js_1.default)("BMCS_FAQ_DESC1")
            ),
            new BMCSCollapsibleItem_1.default(
              (0, msg_js_1.default)("BMCS_FAQ_TITLE2"),
              (0, msg_js_1.default)("BMCS_FAQ_DESC2")
            ),
            new BMCSCollapsibleItem_1.default(
              (0, msg_js_1.default)("BMCS_FAQ_TITLE3"),
              (0, msg_js_1.default)("BMCS_FAQ_DESC3")
            ),
            new BMCSCollapsibleItem_1.default(
              (0, msg_js_1.default)("BMCS_FAQ_TITLE4"),
              (0, msg_js_1.default)("BMCS_FAQ_DESC4")
            )
          ),
          (0, skynode_1.el)("hr"),
          (0, skynode_1.el)(
            "article.contact-container section",
            (0, skynode_1.el)("h2", "CONTACT"),
            (0, skynode_1.el)(
              ".content",
              (0, skynode_1.el)(
                "a.card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/home/contact/kakaotalk.svg",
                }),
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".title",
                    (0, msg_js_1.default)("KAKAOTALK_BUTTON")
                  )
                ),
                {
                  target: "_blank",
                }
              ),
              (0, skynode_1.el)(
                "a.card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/home/contact/telegram.svg",
                }),
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".title",
                    (0, msg_js_1.default)("TELEGRAM_BUTTON")
                  )
                ),
                {
                  href: "https://t.me/dogesoundclub",
                  target: "_blank",
                }
              ),
              (0, skynode_1.el)(
                "a.card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/home/contact/discord.svg",
                }),
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".title",
                    (0, msg_js_1.default)("DISCORD_BUTTON")
                  )
                ),
                {
                  href: "https://discord.com/invite/79CqdTdu8w",
                  target: "_blank",
                }
              ),
              (0, skynode_1.el)(
                "a.card",
                (0, skynode_1.el)("img", {
                  src: "/images/view/home/contact/twitter.svg",
                }),
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".title",
                    (0, msg_js_1.default)("TWITTER_BUTTON")
                  )
                ),
                {
                  href: "https://twitter.com/dogesoundclub",
                  target: "_blank",
                }
              )
            )
          ),
          (0, skynode_1.el)("hr"),
          (0, skynode_1.el)(
            "article.partnership-container section #partnership",
            (0, skynode_1.el)("h2", "PARTNERSHIP"),
            (0, skynode_1.el)("h3", "DSC LABEL"),
            (0, skynode_1.el)(
              ".content",
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/ozys.png",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/codestates.png",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/clonesNeverDie.png",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/asiaNftNow.png",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/nftz.png",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/raving.png",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/kpct.png",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/view/home/partnership/metakongz.png",
              })
            )
          )
        ),
        (0, skynode_1.el)(
          "footer",
          (0, skynode_1.el)(
            ".sidebar",
            (0, skynode_1.el)(
              ".content",
              (0, skynode_1.el)(".term"),
              (0, skynode_1.el)(
                ".social",
                (0, skynode_1.el)("img", {
                  src: "/images/view/bmcs/icn_linktree.svg",
                }),
                (0, skynode_1.el)("a", "링크트리 바로가기", {
                  href: "https://linktr.ee/dogesoundclub",
                  target: "_blank",
                })
              )
            )
          ),
          (0, skynode_1.el)(
            ".provider",
            (0, skynode_1.el)("img", { src: "/images/view/layout/dsc.svg" }),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("FOOTER_DESC")),
            (0, skynode_1.el)(
              "p",
              "Copyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED."
            )
          )
        )
      ))
    );
    select.domElement.value = BrowserInfo_1.default.language;
    this.init();
  }
  init() {}
  changeParams(params, uri) {}
  close() {
    this.container.delete();
  }
}
exports.default = Bmcs;
//# sourceMappingURL=Bmcs.js.map
