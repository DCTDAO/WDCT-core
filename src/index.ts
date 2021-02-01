import "reflect-metadata";
import { serialize } from "class-transformer";
import { AssetAmount, ChainObject, Credentials, OperationHistory, TransactionConfirmation } from "dcorejs-sdk";
import { DCoreSdk } from 'dcorejs-sdk/dist/DCoreSdk';
import { create } from "rxjs-spy";
import WebSocket from 'ws';
import {Server} from 'rpc-websockets';
import Web3 from "web3";
import { ArgumentParser } from 'argparse';

const version = "0.0.1";
 

// debug logging: init rxjs-spy and log all tags
const spy = create();
spy.log();

const parser = new ArgumentParser({
    description: 'Argparse example'
  });

parser.add_argument('-v', '--version', { action: 'version', version });

console.dir(parser.parse_args());
 
const creds = new Credentials(ChainObject.parse("1.2.19"), "5KfatbpE1zVdnHgFydT7Cg9hJmUVLN7vQXJkBbzGrNSND3uFmAa");
const api = DCoreSdk.createApiRx(undefined, () => new WebSocket("wss://testnet-socket.dcore.io"));



const a = api.historyApi.listOperations(ChainObject.parse("1.2.19"));
//a.subscribe((value: OperationHistory[]) => console.log(serialize(value)));

console.log(Web3.version);

const web3 = new Web3(new Web3.providers.HttpProvider(""))

web3.eth.getBalance("0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1").then(console.log);






const server = new Server({port:3001, host:'localhost'});


// register an RPC method
server.register('sum', function(params) {
    return params[0] + params[1]
  });




