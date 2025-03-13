# youtube-svelte-tutorial
From https://www.youtube.com/watch?v=8DQailPy3q8&t=83s
and https://github.com/stolinski/svelte-5-course/tree/main

## General 
- Components are not rerendering but values. 
- Typical setup is script (in JS xD), then html, then css.
- Runes are stuff like $state, $props etc. 
- States are really powerful in svelte. Nice to see which values are changing. 
- JSON.stringify(variable) to print variable on webpage. 
- $effect and lifecycle cool for animation and that it will run after change. With effect we can listen if stuff is changing. 
  - Normally we use the return in it for a clean up process. 
  - DONT create state based of ohter state in effect, for that we have $derived.
- There are many more runes which we haven't discuessed, check out svelt documentation. Often we don't need those / are advanced concepts tho.
- $inspect nice for debugging, pretty much a watch in console log. 
- Cool thing is that we have eg animations in svelte because it doesn't bloat our application, since we compile it. He said its amazing that the animatin exists with so little code.
- things as in **state.svelte.ts** is nice for object oriented stuff / encapsulating stuff (=complex states)
  - especially classes for more complex stuff uwu
- There are many more runes which we havent coverd (eg $bindable, $host, ...), snippets more in depth, fine grained reactivity, 

## Style
- if we have css / style in a file, eg for div, it wont affect other files. Aka we can write local/scoped CSS but also global CSS styles. Aka we do not have to think too much about naming htings which is nice. Because else we have often repetition within a file (with class tag etc.)
  - Also this won't leak out of a component.
  - I think local overwrites gloab, not sure if always the case. s
- Snippets are really cool, pretty much functions i guess xD


# ===== sv (generated) =======================

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
