var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA</a>',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });
var format_Clues_1 = new ol.format.GeoJSON();
var features_Clues_1 = format_Clues_1.readFeatures(json_Clues_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clues_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clues_1.addFeatures(features_Clues_1);
var lyr_Clues_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clues_1, 
                style: style_Clues_1,
                interactive: true,
                title: '<img src="styles/legend/Clues_1.png" /> Clues'
            });

lyr_StamenWatercolor_0.setVisible(true);lyr_Clues_1.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_Clues_1];
lyr_Clues_1.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Clue': 'Clue', });
lyr_Clues_1.set('fieldImages', {'ID': 'Range', 'Name': 'TextEdit', 'Clue': 'TextEdit', });
lyr_Clues_1.set('fieldLabels', {'ID': 'no label', 'Name': 'no label', 'Clue': 'no label', });
lyr_Clues_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});