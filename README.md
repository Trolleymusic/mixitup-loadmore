# mixitup-loadmore

### An extension for MixItUp (https://mixitup.kunkalabs.com/)

Shows only the specified number of items when the page loads, and reveals additional items when the "Load more" button is clicked.

**The additional content must already be on the page under the control of MixItUp. This extension does not make requests.**

When instantiating mixItUp, include a `loadmore` object. The following properties can be set, but everything is optional and has defaults.

    $(".example").mixItUp({
      loadmore: {
        // The number of items to start with
        initial: 4,
        // The number of additional items to show on click of the loadmore button
        loadMore: 2,
        // A selector string for the existing wrapper the buttons will be inserted into
        buttonWrapper: ".loadmore",
        // The class of the Load more button
        buttonClass: "loadmore-button",
        // The label of the Load more button
        buttonLabel: "Load more",
        // The class of the less button
        lessClass: "loadmore-less",
        // The label of the less button
        lessLabel: "Reset"
      },
      // Optional: extends mixItUp's selectors object
      selectors: {
        target: ".example-item" // defaults to ".mix"
      },
      // Optional: extends mixItUp's layout object
      layout: {
        display: "inline-block" // defaults to "inline-block"
      },
    });

Have a look at [`example/example.html`](example/example.html) to see it in action.

This is tied into jQuery 1.x and mixItUp 2.1.6. I won't be maintaining this as it was a one-off project to help out a friend. Feel free to fork it, or to send me a message.
