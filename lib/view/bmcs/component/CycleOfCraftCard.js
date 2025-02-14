"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CommonUtil_1 = __importDefault(require("../../../CommonUtil"));
const CycleContract_1 = __importDefault(require("../../../contracts/CycleContract"));
const Klaytn_1 = __importDefault(require("../../../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../../../klaytn/Wallet"));
const Alert_1 = __importDefault(require("../../shared/Alert"));
const ViewUtil_1 = __importDefault(require("../../ViewUtil"));
const CraftLoading_1 = __importDefault(require("./craft-loading/CraftLoading"));
class CycleOfCraftCard extends skynode_1.DomNode {
    constructor(id, metadata, currentBlock, startBlock, level, claimableCount) {
        super(".cycle-of-craft-card");
        if (startBlock === 0 || level === 0) {
            level = parseInt(metadata.attributes
                .find((a) => a.trait_type === "Crafting Speed")
                ?.value.substring("Level ".length));
            this.append((0, skynode_1.el)(".image-container", (0, skynode_1.el)("img", { src: metadata.image, alt: "bmcs" }, { click: () => ViewUtil_1.default.go(`/bmcs/mates/${id}`) }), new CraftLoading_1.default()), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".info-container", (0, skynode_1.el)(".title", metadata.name), (0, skynode_1.el)("a", "채굴 시작하기", {
                click: async () => {
                    const owner = await Wallet_1.default.loadAddress();
                    if (owner !== undefined) {
                        const startBlock = await Klaytn_1.default.loadBlockNumber();
                        const results = await (await fetch("https://api.dogesound.club/sign-set-level?" +
                            new URLSearchParams({
                                owner,
                                id: String(id),
                                startBlock: String(startBlock),
                                speed: String(level),
                            }))).text();
                        await CycleContract_1.default.setLevel(id, startBlock, level, results);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                    console.log("clicked");
                },
            }), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)(".progress"), (0, skynode_1.el)(".content", (0, skynode_1.el)("p", "새로 얻은 BMCS는 채굴 시작 트랜잭션이 필요합니다.")))), (0, skynode_1.el)(".mobile-info-container", (0, skynode_1.el)(".info-container", (0, skynode_1.el)(".title", metadata.name), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)(".progress"), (0, skynode_1.el)(".content", (0, skynode_1.el)("p", "새로 얻은 BMCS는 채굴 시작 트랜잭션이 필요합니다.")))), (0, skynode_1.el)("a", "채굴 시작하기", {
                click: async () => {
                    const owner = await Wallet_1.default.loadAddress();
                    if (owner !== undefined) {
                        const startBlock = await Klaytn_1.default.loadBlockNumber();
                        const results = await (await fetch("https://api.dogesound.club/sign-set-level?" +
                            new URLSearchParams({
                                owner,
                                id: String(id),
                                startBlock: String(startBlock),
                                speed: String(level),
                            }))).text();
                        await CycleContract_1.default.setLevel(id, startBlock, level, results);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                    console.log("clicked");
                },
            })));
        }
        else {
            let speed = 0;
            if (level === 1) {
                speed = 1;
            }
            else if (level === 2) {
                speed = 2;
            }
            else if (level === 3) {
                speed = 3;
            }
            else if (level === 4) {
                speed = 4;
            }
            else if (level === 5) {
                speed = 5;
            }
            else if (level === 6) {
                speed = 10;
            }
            else if (level === 7) {
                speed = 10;
            }
            const pointPerEngine = 60 * 86400;
            const acc = ((currentBlock - startBlock) * speed) % pointPerEngine;
            let bar;
            let mobileBar;
            this.append((0, skynode_1.el)(".image-container", (0, skynode_1.el)("img", { src: metadata.image, alt: "bmcs" }, { click: () => ViewUtil_1.default.go(`/bmcs/mates/${id}`) }), new CraftLoading_1.default()), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".info-container", (0, skynode_1.el)(".title", metadata.name), (0, skynode_1.el)(".content", (0, skynode_1.el)(".text-cotnainer", (0, skynode_1.el)(".title", "휙득까지 남은 Block"), (0, skynode_1.el)("p", CommonUtil_1.default.numberWithCommas(String((pointPerEngine - acc) / speed)))), (0, skynode_1.el)(".text-cotnainer", (0, skynode_1.el)(".title", "제작 완료된 엔진 수"), (0, skynode_1.el)("p", CommonUtil_1.default.numberWithCommas(String(claimableCount))))), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)(".progress", (bar = (0, skynode_1.el)(".bar")))), (0, skynode_1.el)("a", "엔진 받기", {
                click: async () => {
                    if (claimableCount === 0) {
                        new Alert_1.default("아직 받을 수 있는 엔진이 없습니다.");
                    }
                    else {
                        await CycleContract_1.default.claim(id, claimableCount > 10 ? 10 : claimableCount);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                },
            })), (0, skynode_1.el)(".mobile-info-container", (0, skynode_1.el)(".content", (0, skynode_1.el)(".title-container", (0, skynode_1.el)(".title", metadata.name), (0, skynode_1.el)(".text-cotnainer", (0, skynode_1.el)(".title", "휙득까지 남은 Block"), (0, skynode_1.el)("p", CommonUtil_1.default.numberWithCommas(String((pointPerEngine - acc) / speed))))), (0, skynode_1.el)(".sub-container", (0, skynode_1.el)(".progress-container", (0, skynode_1.el)(".progress", (mobileBar = (0, skynode_1.el)(".bar")))), (0, skynode_1.el)(".text-cotnainer", (0, skynode_1.el)(".title", "제작 완료된 엔진 수"), (0, skynode_1.el)("p", CommonUtil_1.default.numberWithCommas(String(claimableCount)))))), (0, skynode_1.el)("a", "엔진 받기", {
                click: async () => {
                    if (claimableCount === 0) {
                        new Alert_1.default("아직 받을 수 있는 엔진이 없습니다.");
                    }
                    else {
                        await CycleContract_1.default.claim(id, claimableCount > 10 ? 10 : claimableCount);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                },
            })));
            mobileBar.style({
                width: `${(acc / pointPerEngine) * 100}%`,
            });
            bar.style({
                width: `${(acc / pointPerEngine) * 100}%`,
            });
        }
    }
}
exports.default = CycleOfCraftCard;
//# sourceMappingURL=CycleOfCraftCard.js.map