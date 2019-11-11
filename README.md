# BrastleWark_Finder
It's a little app for help our team to know the gnomes of this town, BastleWark!

## Install

<b>Clone or download</b> this repo on de button green of the top this page.

In the console, on the route that your project has downloaded, write <b>npm install.</b>

When the project ara installed, open your project in your browser, write <b>npm start</b> or <b>npm run start</b>.

If the project don't open automatically , write in you browser http://localhost:3000 to view it in the browser.



# Client

## Routes

| Path | Component | Permissions | Behavior | 
|------|--------|--| -------|
| `/` | HomePageComponent| public | GET the info API and serach Gnomes|
| `/details/:id` | DetailsPageComponent| public| GET info of one Gnome |
| `*` | NotFoundPageComponent | public | Only go back

## Components

- Gnome Card
- Gnome Detail
- Header
- List Cards
- SearchBar

## Page components

- Home
- Gnome details
- No Match

## Services

- npm useFetch for:

         - Get gnomes from API
         - Loading state
         - Control errors 

# More info

- I have started the project with <b>create-react-app</b>.
- I used react <b>hooks</b>.
- Internal component states with <b>useState</b>.
- Lifecycle handled with <b>useEffect</b>.
- Icons UX are from https://materializecss.com/
- If you click in the image or in the text of gnomes friends you can see her/his info. I using .map and .filter for make them.
- The app is responsive, mobile first. You can see in Laptop, tablet and mobile.


# DeployLink

Coming soon.... :)
