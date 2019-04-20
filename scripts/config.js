var config = {
  server_ip:"192.168.1.79",  //服务ip
  server_port:"8182",  //服务端口
  protocol:"REST"   //协议
}
$(function(){
  document.getElementById("configForm").style.display='none';  //none隐藏下面server port等配置div;如需显示则将none去掉
  $("#server_address").val(config.server_ip);
  $("#server_port").val(config.server_port);
  $("#server_protocol").find("option[value="+config.protocol+"]").prop("selected", true);
});