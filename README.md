-   Why do we have an APP.js parent which holds all the child components?

            -   Because we want the communication to be faciliated among siblings and if all the data/state are with the child component it would be difficult to send it to parent and share among siblings - so deciding whos the parent comp is a big step

        ![alt text](image.png)

        -   Next big step would be to determine what data must be kept within the parent

        ![alt text](image-1.png)

            -   All todos, input todo, filter info

        -   Prop validation and default props for button component
        -   InputField bubbles up the change to the parent by using function (like onChange) value and onchange as props because the parent needs to maintain state

        -   handleChange of the input comp, inside which I extract the value from the event object and passed it to the onChange callback so that any component usnig the inputText component that doesnt have to do the same again and again (ex-> If I use this input component 10 times in different places then I would have to 10 times write e.target.value) COMPONENT ABSTRACTION to reduce repetitive code and improve reusability.
            Any parent component using InputText doesn't need to repeat the e.target.value extraction logic every time it uses this input.

        -   window.todoId for keying the todos

        -   structuredclone for deep copying

        -   [function references versus function calls](https://hashnode.com/draft/66a5e0c3229c6ced00fd4c0a)

        -   https://x.com/PranjalUncodes/status/1865736977544315366

        -   using index from map instead (in the render component) of again and again iterating in the handler functions in the parent

        -   a potential issue with relying on state to retrieve todos during rendering, especially when new todos are expected to be fetched or updated

        - State Staleness in React (Due to async nature of state updates)

    React state updates are not instant. When you call setTodos(), React doesn't immediately update the state, which can lead to working with outdated data.
    The Problem
    Relying on the current state value right after updating can result in using stale (old) information, especially during rapid updates or asynchronous operations.
    The Solution
    Always retrieve the most recent data directly from the primary source (like localStorage) before making updates, ensuring you're working with the latest information.
