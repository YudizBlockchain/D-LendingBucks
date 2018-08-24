$('.change').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

/*----------------- reg change--------------------------*/

$('#lender').click(function(){
    $('#regTypeData').val("0");
    $('#regTypeText').html("Register as Lender");
    console.log("val : "+$('#regTypeData').val());
});

$('#borrower').click(function(){
    $('#regTypeData').val("1");
    $('#regTypeText').html("Register as Borrower");
    console.log("val : "+$('#regTypeData').val());
});



var key;
var address;
var Web3;
var util;
var tx;
var lightwallet;
var txutils;
var web3;
var Contract_add;
var bytecode
var hs;
Web3 = require('web3');
util = require('ethereumjs-util');
tx = require('ethereumjs-tx');
lightwallet = require('eth-lightwallet');
txutils = lightwallet.txutils;

web3 = new Web3(
    new Web3.providers.HttpProvider('https://ropsten.infura.io/1Yq68zjZEUc5yLGtReMV')
);
console.log("in index.js");
address = '0xcA76CC4018bfC31Ff81B35Da80e221D7502Db900';
key = 'a570ce5f269e5195b8a8daeb4627e6ba3e4ff9d65743b163e491b2425b0e0ba1';
web3.eth.defaultAccount = address;
var c = web3.eth.contract([
    {
        "constant": true,
        "inputs": [],
        "name": "Check_Length",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "id",
                "type": "string"
            }
        ],
        "name": "get_rate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "a",
                "type": "string"
            },
            {
                "name": "b",
                "type": "string"
            }
        ],
        "name": "check",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ab",
                "type": "string"
            }
        ],
        "name": "Validate_Person",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "string"
            },
            {
                "name": "r",
                "type": "uint256"
            }
        ],
        "name": "set_rate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_email",
                "type": "string"
            },
            {
                "name": "_password",
                "type": "string"
            },
            {
                "name": "_pkey",
                "type": "string"
            },
            {
                "name": "_adr",
                "type": "address"
            },
            {
                "name": "_type",
                "type": "uint8"
            }
        ],
        "name": "addPerson",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "id",
                "type": "string"
            },
            {
                "name": "pwd",
                "type": "string"
            }
        ],
        "name": "login_verification",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_id",
                "type": "string"
            }
        ],
        "name": "getPerson",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "string"
            }
        ],
        "name": "get_p",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]);

var con = c.at("0x67555eaed131e77ad079ed0ef82427ed2a2920d2");
function display() {
    // buffer: true results in the returned result being a buffer rather than a stream

    console.log("In display");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var privateKey = "123456";
    var address = "0xca76cc4018bfc31ff81b35da80e221d7502db900";
    var type = document.getElementById("regTypeData").value;
    console.log(type);
    var rawTx = {
        from: address,
        nonce: web3.toHex(web3.eth.getTransactionCount(address)),
        gasLimit: 3000000,
        to: "0x67555eaed131e77ad079ed0ef82427ed2a2920d2",
        gasPrice: web3.toHex(20000000000),
        data: con.addPerson.getData(name, email, password, privateKey, address, type)

    };

    sendRaw(rawTx);

}
function login_ver() {
    // buffer: true results in the returned result being a buffer rather than a stream

    console.log("In login_ver");


    var email = document.getElementById("uid").value;
    var password = document.getElementById("pwd").value;
    /*var rawTx = {
      from: address,
      nonce: web3.toHex(web3.eth.getTransactionCount(address)),
      gasLimit:3000000,
      to: "0x11b45c3c84b7d0ae07c3e0b3c6ce03d99c456ab4",
      gasPrice: web3.toHex(20000000000),
      data: con.login_verification.getData(email,password)
        
    };*/
    console.log(con.login_verification(email, password));
    //sendRaw(rawTx);	  
}

var r;
function sendRaw(rawTx) {

    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    //  console.log(transaction);
    transaction.sign(privateKey);
    //console.log(transaction);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
        '0x' + serializedTx, function (err, result) {
            hs = result;
            if (err) {
                console.log(err);
            } else {


                console.log(result);
            }


        });


}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('log').onclick = display
    document.getElementById('sign').onclick = login_ver


})
