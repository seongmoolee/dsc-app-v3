"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
class Klaytn {
    constructor() {
        this.caver = new window.Caver(new window.Caver.providers.WebsocketProvider("wss://public-node-api.klaytnapi.com/v1/cypress/ws", {
            reconnect: {
                auto: true,
                delay: 1000,
                maxAttempts: true,
                onTimeout: false
            },
        }));
    }
    createContract(address, abi) {
        return this.caver.contract.create(abi, address);
    }
    async balanceOf(address) {
        return bignumber_1.BigNumber.from(await this.caver.klay.getBalance(address));
    }
    async loadBlockNumber() {
        return await this.caver.klay.getBlockNumber();
    }
}
exports.default = new Klaytn();
//# sourceMappingURL=Klaytn.js.map