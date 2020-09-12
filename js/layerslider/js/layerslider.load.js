$(document).ready(function () {
	"use strict";

	// Calling LayerSlider 
		
        $('#slider').layerSlider({
            responsive: true,
            responsiveUnder: 1200,
            layersContainer: 1200,
            skin: 'outline',
            hoverPrevNext: true,
            skinsPath: './js/layerslider/skins/',
            autoStart: true,
			autoPlayVideos : false
        });
		
 });