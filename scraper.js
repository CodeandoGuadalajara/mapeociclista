var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

streamOfTweets = new TwitterPosts({
  username: 'Trafico_ZMG',
  retweets: true
});

streamOfTweets.on('readable', function() {
  var time, tweet, dictionary, newdict;
  tweet = streamOfTweets.read();
  time = new Date(tweet.time * 1000);
  dict = ["bici","bicicleta"," ciclista", "ciclo estación"];

  for (var i = 0; i < newdict.length; i++) {
    if(tweet.text.indexOf(dict[i]) != -1){
      console.log([
        "tweet del día: ",
        time.toLocaleString(),
        " tweet:, ",
        tweet.text,
      ].join(''));
    }
  }



});
