var formatEpochTime = function(utcSeconds) {
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);

    return d.toDateString();
};

module.exports = formatEpochTime;
