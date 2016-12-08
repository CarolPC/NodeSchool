var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0]).reduce((firstChars, x) => firstChars + x, '');

console.log(`[${inputs}] becomes "${result}"`);*/

/*var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(() => {
        console.log(this.yelp);
    });
  }
};

foot.kick();