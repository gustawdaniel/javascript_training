(function activatedSectionById(id) {

    let selectors = [];

    if(id) { // get selectors by id
        selectors = [id, `[href="${id}"]`]
    } else { // get last one elements
        selectors = [".nav-item:last-child",".tab-pane:last-of-type"];
    }

    // add class active to selected elements
    selectors.forEach(selector =>
        document.querySelector(selector).classList.add('active')
    );

})("#con-line-follower");
