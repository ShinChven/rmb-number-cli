#!/usr/bin/env node

const Nzh = require("nzh");
const nzhcn = require("nzh/cn"); //直接使用简体中文

const input = process.argv[2];
const method = process.argv[3]||'-m';

if (input > 0) {
    
    let result
    switch (method) {
        case '-n':
            console.log('阿拉伯数字转中文数字：');
            result = nzhcn.encodeS(input)
            break;
        case '-m':
            console.log('阿拉伯数字转中文数字金额：');
            result = nzhcn.toMoney(input);
            break;
        default:
            break;
    }
    console.log(result);
} else if (typeof input === 'string') {
    console.log('中文数字转阿拉伯数字：');
    const result = nzhcn.decodeS(input);
    console.log(result);
}

