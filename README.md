# PokeReact

### a React UI by Chris Blendermann

There's not a whole lot to say, here. This project accesses the Pokemon API. The "App.js" file is responsible for rendering the main content of the page. It creates a Pokemon component for each of the 151 pokemon returned by the initial fetch request, and it also creates a Navbar component which would handle links to pages containing the other generations of pokemon, if the project were to be continued to that point. In that case, I would create a third component, "Generation", which would handle the API request and Pokemon component rendering for the different generations.

Each Pokemon component renders a card view, which is displayed alongside all the other Pokemon in the generation. Clicking on a pokemon card opens the PokeDex entry for that pokemon, which is a modal overlay internal to the Pokemon component and contains specific information about that pokemon species. Note that this means you can open multiple Pokemon at once - each one handles its own modal. If I were to continue the project, I would implement a tab system to allow the user to navigate between the various pokemon they have open.

Overall, this project uses a clean, black and white design that easily and intuitively displays the pokemon content and allows the pokemon to dominate the visual space.
