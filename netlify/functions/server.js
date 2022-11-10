
import { Client } from "twitter-api-sdk";
import { TwitterApi } from 'twitter-api-v2';

import Twit from "twit";
import * as dotenv from 'dotenv'
dotenv.config()
const key = process.env.consumer_key;
// console.log(typeof key);
var T = new Twit({
    consumer_key: 'taiKG7ttaESUIiJxecfalpGP2',
    consumer_secret: 'twM8rgXa5H2CCNcxwY4GPV6lhiP6X2Nl6e5D4cDaxrNWweuhL9',
    access_token: '1518639115087978497-bA24D9NTMOkWD5o09CsXlZZoecQ9Gl',
    access_token_secret: 'GNPHhIMm2cV0tqNit84V1qpZ4LchWhd8zhZHBJtt5Zckw',
    // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    // strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })
 

import Binance from 'node-binance-api'
// const client = new Client("AAAAAAAAAAAAAAAAAAAAAGaLbwEAAAAARMag4WgXWRQQh%2B1rasdFPNlsrew%3DExCnUZfYlEvQuz0X2J4uB3aNJOVAgmma24RZ620TX3eqG1lOgl");
const twitterClient =  new TwitterApi("AAAAAAAAAAAAAAAAAAAAAGaLbwEAAAAARMag4WgXWRQQh%2B1rasdFPNlsrew%3DExCnUZfYlEvQuz0X2J4uB3aNJOVAgmma24RZ620TX3eqG1lOgl");

const binance = new Binance().options({
    APIKEY: 'oHQoHhIsQJEZ3m8FtQk5fjqgeXCufCkrXQFo8qqpr6XregUDp68w72C4xt8HycSk',
    APISECRET: '2HNuO6RwEHdyjgdzFxVHCUAahfeWqPRzWVXU8UxQTJIyWOWi9qguxo9YovBW2NdY'
  });


  console.log('App Running.....');

  const getUser = async () => {
    let user = await twitterClient.v2.userByUsername("elonmusk")
    console.log(user);
  }
  // console.log(getUser());
  const BinanceApi = async() => {
    let info = await binance.futuresMarkPrice('DOGEUSDT')
    let currentValue = (1 / info.markPrice) * 10;
    console.log(currentValue);
    console.log(await binance.futuresMarketBuy("DOGEUSDT", currentValue.toFixed()));
  }
//to start trade
// BinanceApi()


const newStream  = T.stream('statuses/filter',  {follow: '44196397',})

let newTweet;
const getTweetsStream = async() => {
    newStream.on('tweet', function (tweet) {
      // console.log(tweet.user.id);
      if(tweet.user.id != 44196397) return
        console.log(tweet.text);
        newTweet = tweet.text;
        const refineTweet = tweet.text.toLowerCase()
        switch(refineTweet) {
            case "doge": 
                console.log('here we go again...');
                BinanceApi(res => {
                    console.log(res);
                })
                break
        }
    })
}

getTweetsStream();

  const handler = async (event,    context) => {
    return
  }

  export { handler };

