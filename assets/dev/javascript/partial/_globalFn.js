import {isSP} from "../consist/GLOBAL_CONFIG";

const SpTelLinkFn = () => {
  if(isSP) {
    $('.x-tel-link').each((index, item) => {
      $(item).attr('href', $(item).data('href'))
    });
  }
}

const bind = () => {
  SpTelLinkFn()
}

export default {
  bind
}