# Welcome to Index.md

So to start off not really much goes on in this file, really all that goes on is adding the react app to the the html file, making this an SPA (single page application), just basic react stuff.

## Please proceed to /src/App.js

So you're screen should look like this
![App.js](img/App.png)

Now scroll down to render() method of the app. Now here is where the majority of the app lives and this is where knowledge of React-Router will be very beneficial. Now every single pre-built page that comes with the component library is still there but the ones we have modded/configured for this project have a JSX comment next to them that should look like this `{/* Specific Code Comment */}`.

Within the routes will be the specific component rendered for example `<Route path="/about-us" component={AboutUsPage} /> {/* About us page */}` the component rendered is the AboutUsPage where it says component={}. These specific components can be found in the views directory and each prebuilt page will have its own respective directory

- Views
    - AboutUsPage
        - AboutUsPage.js (Component being rendered)
        - Sections (components that build the AboutUsPage component)
            - Description.js
            - Services.js
            - Team.js
    - BlogPostPage
        - BlogPostPage.js
        - Sections
            - Respective Sections and so on