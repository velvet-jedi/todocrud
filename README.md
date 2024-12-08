-   Why do we have an APP.js parent which holds all the child components?

        -   Because we want the communication to be faciliated among siblings and if all the data/state are with the child component it would be difficult to send it to parent and share among siblings - so deciding whos the parent comp is a big step

    ![alt text](image.png)

    -   Next big step would be to determine what data must be kept within the parent
        -   All todos, input todo, filter info

-   Prop validation and default props
