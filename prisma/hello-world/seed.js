const {prisma} = require('./generated/prisma-client');


(async () => {
    await prisma.deleteManyUsers({id_not: null});
    await prisma.createUser({
        name: 'user',
        balances: {
            create: [
                {
                    platform: "OnlineWallet",
                    currency: "BTC",
                    amount: 1
                },
                {
                    platform: "PaperWallet",
                    currency: "BTC",
                    amount: 1
                },
                {
                    platform: "PaperWallet",
                    currency: "ETH",
                    amount: 1
                }
            ]
        }
    });
})();