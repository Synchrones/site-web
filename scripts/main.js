window.onload = link();

function link(){
    href = new Array;
    href[0] = "typesjeux/fps.html";
    href[1] = "jeux/fps/cod.html";
    href[2] = "jeux/fps/al.html";
    href[3] = "jeux/fps/doom.html";
    href[4] = "typesjeux/mmo.html";
    href[5] = "jeux/mmo/starcitizen.html";
    href[6] = "jeux/mmo/sot.html";
    href[7] = "jeux/mmo/wow.html";
    href[8] = "typesjeux/simulations.html";
    href[9] = "jeux/simulations/fs.html";
    href[10] = "jeux/simulations/nms.html";
    href[11] = "jeux/simulations/s4.html";
    href[12] = "typesjeux/sony.html";
    href[13] = "typesjeux/nintendo.html";
    href[14] = "typesjeux/microsoft.html";
    
    window.location.href = href[rand(0,14)]

}

function rand(min,max){
	return min+Math.floor(Math.random()*(max-min+1));
}

