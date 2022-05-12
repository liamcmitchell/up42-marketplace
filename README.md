# UP42 Marketplace

## Notes from dev

- Starting from [netlify template](https://github.com/netlify-templates/next-netlify-starter)
- Clean, install prettier, tried setting TS up, compiler issue, reverted
- Layout, using inline styles for simplicity, not planning on doing mobile layout
- Data fetching, [swr](https://swr.vercel.app/docs/getting-started) package is recommended by netlify docs, new to me
- Of course CORS is not enabled, need to proxy
- Filter results, add block component
- Can layout blocks with CSS grid now, first time using
- Add to cart
- Remove from cart
- Buy now, added eslint for hook dep checking
- Retrying TS, prefer that to proptypes, needed paths added to tsconfig
- Rewrite in TS, would have been nicer from the start...
- Add some color

## Thoughts

I spent around 4 hours on this, more than I wanted to. A big contributor was learning new tools/tech:

- Netlify
- Next.js
- SWR
- CSS grid

so on the plus side, I know some new things.

I purposely avoided mobile layout because that can be a huge rabbit hole, especially with something like the cart which is probably nicer as a modal opening from a fixed nav.

Regarding inline styles, I'm a big fan of CSS-in-JS but a quick scan of the Netlify/Next docs only showed support for style objects (which I used) or inline style tags (no thanks). I would have preferred to use [Emotion](https://emotion.sh/) and [Styled System](https://styled-system.com/) but I didn't want to waste time fighting Next.js so I just stayed with inline style objects.
