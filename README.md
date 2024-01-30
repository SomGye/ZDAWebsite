# ZDAWebsite
------
#### TODO: Redo for v2
------
### Description
- The front-end code for the ***ZDA Website***: a website for the <u>ZDA Works</u> abstract media company run by *ZeroDayAnubis*.
  - This website serves as the hub for highlighting both the <u>history of ZDA's abstract artworks and inspirations</u>, as well as acting as a **portfolio** showcase of works and giving useful information for future art **commissions**.
  - Links to relevant social media, print shop, Ko-fi support/donations, and Commission Request Form are provided.
### Technology
- This website leverages the following frameworks/libraries/tools:
  - *Node.js*: for launching the website on the backend
  - *Vite.js*: for tooling and compiling/building/bundling the JS/CSS/JSX and assets
  - *React.js*: for modular components and local state, used as the framework to enable a quick and easy Single-Page Application
  - *Joy UI*: a visual library for base components and styles, enabling a quicker way to achieve a modern, Material-esque look
    - NOTE: the `sx` prop was heavily utilized to achieve a very customized look
  - *Recoil*: for easy and performant global state management
  - *React Photo Album/Yet Another React Lightbox*: for well-scaled and useful thumbnails and photo galleries with decent customization
  - *React Router*: for pathname routing and error page support
  - *Vercel and Vercel KV*: for generous free web hosting and Redis DB
### Setup/Maintenance
- Fork and Clone the repo at https://github.com/SomGye/ZDAWebsite
  - This uses Vite.js with the `react-ts` template. Use `npm start` to run a dev build (which will open a new tab in your last used browser), or use `npm run build` to compile a production build.
- Updating Images:
  - The images themselves are stored in `/public/assets/[folder]`, generally at 1000px and original resolution, with some exceptions.
    - Each section has its own folder path, and within are `album` and `lightbox` folders:
      - `album`: for the *React Photo Album*, which acts as the responsive image grid for the thumbnails.
      - `lightbox`: for the *Yet Another React Lightbox*, which shows the higher quality/size photo on click.
  - To update the images, take the full quality PNG or TIFF, save to a progressive scan JPG with compression level 9, export the multiple sizes (by width in px), and then replace the desired image in the assets folder of choice.
  - You will also need to update the relevant arrays (for the folder you picked) in `/src/components/sections/BodySectionPhotos.ts`. For each folder, there is both the regular array (for the full size photo) and the `album` array (for the scaled down photos). For the sake of performance, the `album` version is needed to display performant thumbnails for the *React Photo Album*, and the regular version is needed to display the full size image for the *Yet Another React Lightbox*.
- Updating Styles:
  - Each section has its own `[section]Sx.ts` file, with the custom styles for the Joy UI components. In special cases, raw CSS is used in the respective `[section].css` file.
  - Most components have both a Dark and a Light version, so be sure to update both if needed.
- Updating Routes:
  - Routes are essentially objects in the BrowserRouter array in the `main.tsx` file. You can add a route by adding another object with a `path` and a <App> element with a new `route` string argument. You can update a route by simply updating the `path` and `route` string argument as well. 
  - You will also need to add/update the following:
    - *App.tsx*: ~line 54, add/update IF block
    - *HamburgerMenu.tsx*: add/update the Button components that use `switchPage` function
    - *TopBanner.tsx*: add/update the Button components that use `switchPage` function
    - *TopInfoSection.tsx*: add/update the Button components that use `switchPage` function
- *Vercel KV NOTE*: Vercel KV is used to populate the Commissions Slots (Active, Waitlist, Status) in the TopInfoSection.
  - A `fetchData` function in `App.tsx` queries the KV data store by using environment variables for the API URL and token, which are stored locally in `.env.development` and `.env.production`. These are NOT committed and will have to be created on your own.
  - When hosting on Vercel, you will also have to populate these environment variables in the Project Settings online as well, or else it will not work in production.
- *NOTE*: to force *Vite.js* to rebuild and reoptimize its dependencies and run a hard start, use `npm run hardstart`
------
##### Examples Page
- To see the Commission Tiers Examples page, which is just for my own convenience, you can do one of the following:
  - Go to the `/examples` route (or https://www.zerodayanubis.com/examples)
  - Run `npm run examples`, instead of the usual `npm start`, when deploying a local instance
  - Scroll down to the footer and click the dotted line section below the Copyright text
------
##### Logo Page
- To see the ZDA Logo page you can do one of the following:
  - Go to the `/logo` route (or https://www.zerodayanubis.com/logo)
  - Run `npm run logo`, instead of the usual `npm start`, when deploying a local instance
  - Click the **Z** logo in the top banner (left for tablet/desktop, center for phone)
------