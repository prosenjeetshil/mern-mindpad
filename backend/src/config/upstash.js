// import {Ratelimt} from "@upstash/Ratelimt"

const {Ratelimit} = require("@upstash/ratelimit");
const {Redis} = require("@upstash/redis")

require("dotenv").config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s"),
});

module.exports = ratelimit;