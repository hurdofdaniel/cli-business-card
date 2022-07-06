'use strict'

import boxen from "boxen";
import meData from "./data.js";

const me = boxen(
    meData.join("\n"),
    {
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);