document.getElementById("defaultOpen").click();
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function createCitation() {
    var yn = document.getElementById("yn").value;
    var yt = document.getElementById("yt").value;
    var cc = document.getElementById("cc").value;
    var d = document.getElementById("d").value;
    document.getElementById("pn").innerHTML = yn;
    document.getElementById("pt").innerHTML = yt;
    document.getElementById("pc").innerHTML = cc;
    document.getElementById("pd").innerHTML = d;
}
function createCitationfb(){
    var ln = document.getElementById("ln").value;
    var fn = document.getElementById("fn").value;
    var tob = document.getElementById("tob").value;
    var loc = document.getElementById("loc").value;
    var pub = document.getElementById("pub").value;
    var pubd = document.getElementById("pubd").value;
    document.getElementById("citation").innerHTML = ln+", "+fn+". "+tob+". "+loc+", "+pub+", "+pubd+".";
}
function createCitationfe(){
    var au = document.getElementById("au").value;
    var tit = document.getElementById("tit").value;
    var tofc = document.getElementById("tofc").value;
    var ocont = document.getElementById("ocont").value;
    var v = document.getElementById("v").value;
    var vol = document.getElementById("vol").value;
    var publ = document.getElementById("publ").value;
    var publd = document.getElementById("publd").value;
    var locs = document.getElementById("locs").value;
    document.getElementById("citatione").innerHTML = au + ". " +tit+ " "+tofc + ", " + ocont + ", " + v + ", " + vol+", "+publ+", " +publd+", "+locs;
}