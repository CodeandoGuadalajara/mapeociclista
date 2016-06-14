var TwitterPosts, streamOfTweets;
TwitterPosts = require('twitter-screen-scrape');

streamOfTweets = new TwitterPosts({
  username: 'Trafico_ZMG',
  retweets: true
});

streamOfTweets.on('readable', function() {
  var time, tweet, dictionary;
  tweet = streamOfTweets.read();
  time = new Date(tweet.time * 1000);
  dictionary = "choque";

  if(tweet.text.indexOf(dictionary) != -1){
    /*console.log(tweet.text);*/
    console.log([
      "tweet del día: ",
      time.toLocaleDateString(),
      " tweet:, ",
      tweet.text,
    ].join(''));
  }



});
