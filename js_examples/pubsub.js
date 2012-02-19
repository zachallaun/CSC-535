var PS = Object.create(Object);

(function (p) {
    "use strict";

    var topics = {},
        lastUid = -1;

    var publish = function (topic, data) {
        if (!topics.hasOwnProperty(topic)) {
            return false;
        }

        var notify = function () {
            var subscribers = topics[topic],
                i,
                j,
                throwException = function (e) {
                    return function () {
                        throw e;
                    };
                };

            for (i=0, j=subscribers.length; i<j; i++) {
                try {
                    subscribers[i].func(topic, data);
                } catch(e) {
                    setTimeout(throwException(e), 0);
                }
            }
        };
    };

    p.publish = function (topic, data) {
        return publish(topic, data, false);
    };

    p.subscribe = function (topic, func) {
        if (!topics.hasOwnProperty(topic)) {
            topics[topic] = [];
        }

        var token = (++lastUid).toString();
        topics[topic].push( {token: token, func: func} );

        return token;
    };

    p.unsubscribe = function (token) {
        for (var m in topics) {
            if (topics.hasOwnProperty(m)) {
                for (var i=0, j=topics[m].length; i<j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            } 
        }
        return false;
    };
}(PS));