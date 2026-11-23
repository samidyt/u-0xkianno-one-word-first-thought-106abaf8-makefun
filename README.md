# One Word, First Thought — `kummerspeck`

[![Bounty](https://img.shields.io/badge/bounty-One%20Word%2C%20First%20Thought-blue)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![make.fun](https://img.shields.io/badge/built%20on-make.fun-green)](https://make.fun/r/samidyt)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Entry for the [One Word, First Thought](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) bounty on make.fun.

## The word

**kummerspeck** — German for "grief-bacon": the weight gained from emotional eating.

## Why this word

- **Surprising:** not a staple of "beautiful words" lists — nothing like the field's flooded petrichor / defenestration / apricity entries.
- **Vivid and specific:** comfort-eating weight is a feeling and an image everyone knows at once.
- **Wit / double meaning:** the compound itself is a joke — grief + bacon — literal and metaphorical in one word, rewarding a second look.
- **Chosen, not generic:** unmistakably deliberate; not filler.

## How it works

`main.ts` (Node 22, standard library only) writes exactly the word `kummerspeck` to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` for local runs), with a self-check gate: 1–24 characters, not only white space, exactly one word, plus a read-back verification that the file holds exactly the word.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt  # kummerspeck
```

## License

MIT — see [LICENSE](LICENSE).
