# One Word, First Thought — `kummerspeck`

[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/samidyt/u-0xkianno-one-word-first-thought-106abaf8-makefun/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/samidyt/u-0xkianno-one-word-first-thought-106abaf8-makefun/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

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
