module.exports = {
    // presets: [
    //     [
    //         "@babel/preset-env",
    //         {
    //             // targets: {
    //             //     node: "current",
    //             // },
    //             targets: { esmodules: true}

    //         },
    //     ],

    //     [
    //         "@babel/preset-react",
    //         {
    //             // targets: {
    //             //     node: "current",
    //             // },
    //             runtime: 'automatic'
    //         },
    //     ],


    // ],


    presets: [ 
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    
    ],


};