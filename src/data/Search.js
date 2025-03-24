import {Traverse} from "./Traverse";
import {FormatDom} from "./FormatDom";
import {FormatNumber} from "./FormatNumber";
import {FormatClock} from "./FormatClock";
import {FormatString} from "./FormatString";

export default {
  number: {
    url: "/docs/format-number",
    data: FormatNumber
  },
  clock: {
    url: "/docs/format-clock",
    data: FormatClock
  },
  string: {
    url: "/docs/format-string",
    data: FormatString
  },
  dom: {
    url: "/docs/format-dom",
    data: FormatDom
  },
  traverse: {
    url: "/docs/traverse",
    data: Traverse
  }
};