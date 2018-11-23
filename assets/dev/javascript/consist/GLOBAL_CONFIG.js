import url from '../util/url'

//ToDo: if change sp width to 782
// SP width
export let isSP = document.body.clientWidth <= 813

//isHorizontalScreen
export let isHSFn = () => { return $(window).width() > $(window).height() && isSP }