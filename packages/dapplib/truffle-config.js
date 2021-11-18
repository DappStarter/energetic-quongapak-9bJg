require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purchase install kiwi oil second'; 
let testAccounts = [
"0x990bc1ae185eadf1d4a46461d3d6e0b5074ce9c1fa627968840f8f83f5e164e8",
"0x5c70d3f05a6f9c705f6da05f40df57ecd3c1c849acb8b74ef7cad1626a2e7220",
"0x8e362e22da38451ad6c4517909514a9eeb06b0d58401b58df29e629ac91bea0a",
"0xc06fce0722be40cb19e0c972ef172f4b73fd2ccefa3db537e1c8c44775dedab6",
"0xddb576fd52f8efc43adf6d08520b8d2d11f0e08aa3f104d47a8bf1a388e10d42",
"0xc607d49f423bdee2c5032984cf1a739a6753540f9f1c2c385e9a1ce1ed06251a",
"0x96c81dc215c68f4246d7d4c349cf588b9dcfda03f6378d3c8a113b175614d01f",
"0xdc9c00e1705d5d620f604ca76ee744078c90612bfa6da40cc332df5ed430f550",
"0x4e24b2e76d78fe9f61dfbdf15a61695d433cc1426e56cb848036310132c788b9",
"0x7b2abb6a9bb5845a789642eb6b29a9bb2425a1e2fc00af25fec545057303f31d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

