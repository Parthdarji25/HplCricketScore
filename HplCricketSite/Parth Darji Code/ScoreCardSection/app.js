function showTab(event) {
    var sourceParent = event.parentElement.parentElement;
    var sourceChilds = sourceParent.getElementsByClassName("rca-tab-content");
    var sourceLinkParent = sourceParent.getElementsByClassName("rca-tab-link");
    for (var i=0; i < sourceChilds.length; i++) {
      sourceChilds.item(i).classList.remove("active");
    }
    for (var i=0; i < sourceLinkParent.length; i++) {
      sourceLinkParent.item(i).classList.remove("active");
    }
    var dataTab= event.getAttribute("data-tab");

    event.classList.add("active");
    document.getElementById(dataTab).className += ' active';
  }