import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Test } from "./test";

storiesOf("Test", module)
    .add("with text", () => (
        <Test str={"Hello World!"} />
    ))
    .add("with some emoji", () => (
        <Test str={"😀 😎 👍 💯"} />
    ));
