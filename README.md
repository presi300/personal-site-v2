# Presi300.com - A website

## Yeah, it's my personal website...

### Yes, it is a MacOS clone made in JS... ish

![](https://i.imgur.com/c42Pg59.png)

## Features!

- Window management... You can do all the fun stuff you can with a regular, rather simplistic window manager.
- - Dragging windows around, fullscreening and edge tiling

‎

- Dynamically add new "applications". Yep, all of the "Apps" are actually just JSX files, stored in the **/components/Apps/ActualApps** folder. Adding a new one... If you for some reason feel like doing that is as simple as adding a new file in the aformentioned folder and importing it in the **/components/Apps/AppMapper.jsx** file. After you've done all that, your new "application" should get its own bespoke launcher and window on both mobile and desktop.

  ‎

- Bespoke mobile layout. It looks kinda like android...

  ‎

- Dynamic accent colors! You can choose one from the settings window.

  ‎

- A blog... (No CDN or database required!) See **/components/AppComponents/Blog/PostsTemp.jsx** for more information.

## How to run locally?

1. Clone this repo

2. ```bash
   cd personal-site-v2

   ```

3. ```bash
   npm i

   ```

4. ```bash
   npm run build

   ```

5. ```bash
   npm run start
   ```
