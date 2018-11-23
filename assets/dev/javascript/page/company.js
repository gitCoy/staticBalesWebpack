
const initMap = () => {
  if(window.google) {
    var myCenter=new google.maps.LatLng(35.6853303, 139.7412925)
    var mapProp = {
      center:myCenter,
      zoom:18,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
      position: myCenter,
      title:'〒102-0083 東京都千代田区 麹町2-14 第1茜ビル6'
    });
    marker.setMap(map);
  }
}

const init = () => {
  initMap()
}
const bind = () => {

}
export default {
  init: init(),
  bind: bind()
}