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
  dictionary = "choque";
  newdict = ["bici","bicicleta"," ciclista", "ciclo estación"];

  for (var i = 0; i < newdict.length; i++) {
    if(tweet.text.indexOf(newdict[i]) != -1){
      console.log([
        "tweet del día: ",
        time.toLocaleString(),
        " tweet:, ",
        tweet.text,
      ].join(''));
    }
  }


/*  if(tweet.text.indexOf(dictionary) != -1){

    console.log([
      "tweet del día: ",
      time.toLocaleDateString(),
      " tweet:, ",
      tweet.text,
    ].join(''));
  }*/



});
