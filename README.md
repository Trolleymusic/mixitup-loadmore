# mixitup-loadmore

### An extension for MixItUp (https://mixitup.kunkalabs.com/)

Shows only the specified number of items when the page loads, and reveals additional items when the "Load more" button is clicked.

The additional content must already be on the page under the control of MixItUp. This extension does not load content over ajax.

When instantiating mixItUp, include a `loadmore` object. The following properties can be set, but everything is optional and has defaults.

    $('.selector').mixItUp({
      selectors: {filter: 'filter-btn'},
      loadmore: {
        // The class of the Load more button
        buttonClass: 'loadmore-button',
        // The label of the Load more button
        buttonLabel: 'Load more',
        // The class of the wrapper the buttons will be created in,
        //  this needs to be an element in your HTML
        buttonWrapper: '.loadmore',
        // The number of items to start with
        initial: 2,
        // The class of the less button
        lessClass: 'loadmore-less',
        // The label of the less button
        lessLabel: 'less',
        // The number of items to load on click
        loadMore: 2
      }
    });