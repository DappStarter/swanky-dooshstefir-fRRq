require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name rate sad unveil half option bone slow'; 
let testAccounts = [
"0x4c2ad9252e420b6494fc12c98ec1c79849b090286a6da4a09034df20e70265b2",
"0xa064c806fc67b5f314890215359a18fd1708b977acebf8548ed86887f6afe190",
"0x69cd6fc02889d3bb0eb97116f26b10446f723ea6389ea3d10cdb1eeb0249b5db",
"0xb18ac0b76c8222f05d05a8080d5846d94b774f4e4c77ddfae35134166a255fd7",
"0xd562f757ebd25a29edb2a5738e234221a8295a93cc6af4234883e96f1ead2186",
"0x324629aecddb9022b0837fe5cf2bfa8735403448e3be2731bf0300c34eb54b8b",
"0x241ef81399905fe39f87d241345c93aad64db90b0fc095a85331de0bd93a834b",
"0x726668164a47a49c85cc8b314da8a9a0548da10c2148b0573ea452a2319ff5b9",
"0xd8b2870968381b780d4c15ef2abfa671abb559160e7d1895470fb73bd75aa456",
"0xe558dd825659f454ac221cbeba6a0abe6a0ac37680268c209bb989b9bed63fa2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


