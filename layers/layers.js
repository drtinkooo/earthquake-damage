var wms_layers = [];


        var lyr_GoogleMapsRoads_0 = new ol.layer.Tile({
            'title': 'Google Maps (Roads)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_ImpactedFields_1 = new ol.format.GeoJSON();
var features_ImpactedFields_1 = format_ImpactedFields_1.readFeatures(json_ImpactedFields_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImpactedFields_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImpactedFields_1.addFeatures(features_ImpactedFields_1);
var lyr_ImpactedFields_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImpactedFields_1, 
                style: style_ImpactedFields_1,
                popuplayertitle: 'Impacted Fields',
                interactive: true,
                title: '<img src="styles/legend/ImpactedFields_1.png" /> Impacted Fields'
            });
var format_DamagedTransportation_2 = new ol.format.GeoJSON();
var features_DamagedTransportation_2 = format_DamagedTransportation_2.readFeatures(json_DamagedTransportation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DamagedTransportation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DamagedTransportation_2.addFeatures(features_DamagedTransportation_2);
var lyr_DamagedTransportation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DamagedTransportation_2, 
                style: style_DamagedTransportation_2,
                popuplayertitle: 'Damaged Transportation',
                interactive: true,
                title: '<img src="styles/legend/DamagedTransportation_2.png" /> Damaged Transportation'
            });
var format_DamagedBuildings_3 = new ol.format.GeoJSON();
var features_DamagedBuildings_3 = format_DamagedBuildings_3.readFeatures(json_DamagedBuildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DamagedBuildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DamagedBuildings_3.addFeatures(features_DamagedBuildings_3);
var lyr_DamagedBuildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DamagedBuildings_3, 
                style: style_DamagedBuildings_3,
                popuplayertitle: 'Damaged Buildings',
                interactive: true,
                title: '<img src="styles/legend/DamagedBuildings_3.png" /> Damaged Buildings'
            });
var format_DamagedCulturalHeritageSites_4 = new ol.format.GeoJSON();
var features_DamagedCulturalHeritageSites_4 = format_DamagedCulturalHeritageSites_4.readFeatures(json_DamagedCulturalHeritageSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DamagedCulturalHeritageSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DamagedCulturalHeritageSites_4.addFeatures(features_DamagedCulturalHeritageSites_4);
var lyr_DamagedCulturalHeritageSites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DamagedCulturalHeritageSites_4, 
                style: style_DamagedCulturalHeritageSites_4,
                popuplayertitle: 'Damaged Cultural Heritage Sites',
                interactive: true,
                title: '<img src="styles/legend/DamagedCulturalHeritageSites_4.png" /> Damaged Cultural Heritage Sites'
            });

lyr_GoogleMapsRoads_0.setVisible(true);lyr_ImpactedFields_1.setVisible(true);lyr_DamagedTransportation_2.setVisible(true);lyr_DamagedBuildings_3.setVisible(true);lyr_DamagedCulturalHeritageSites_4.setVisible(true);
var layersList = [lyr_GoogleMapsRoads_0,lyr_ImpactedFields_1,lyr_DamagedTransportation_2,lyr_DamagedBuildings_3,lyr_DamagedCulturalHeritageSites_4];
lyr_ImpactedFields_1.set('fieldAliases', {'SensorDate': 'SensorDate', 'Settlement': 'Settlement', 'Notes': 'Notes', 'EventCode': 'EventCode', 'SiteID': 'SiteID', 'SensorID': 'SensorID', 'Confidence': 'Confidence', 'FieldValid': 'FieldValid', 'Main_Dmg': 'Main_Dmg', 'Grouped_Da': 'Grouped_Da', 'StaffID': 'StaffID', 'ImageID_Nu': 'ImageID_Nu', });
lyr_DamagedTransportation_2.set('fieldAliases', {'SensorDate': 'SensorDate', 'Settlement': 'Settlement', 'Notes': 'Notes', 'EventCode': 'EventCode', 'SiteID': 'SiteID', 'SensorID': 'SensorID', 'Confidence': 'Confidence', 'FieldValid': 'FieldValid', 'Main_Dmg': 'Main_Dmg', 'Grouped_Da': 'Grouped_Da', 'StaffID': 'StaffID', 'ImageID_Nu': 'ImageID_Nu', });
lyr_DamagedBuildings_3.set('fieldAliases', {'SensorDate': 'SensorDate', 'Settlement': 'Settlement', 'Notes': 'Notes', 'EventCode': 'EventCode', 'SiteID': 'SiteID', 'SensorID': 'SensorID', 'Confidence': 'Confidence', 'FieldValid': 'FieldValid', 'Main_Dmg': 'Main_Dmg', 'Grouped_Da': 'Grouped_Da', 'StaffID': 'StaffID', 'ImageID_Nu': 'ImageID_Nu', });
lyr_DamagedCulturalHeritageSites_4.set('fieldAliases', {'SensorDate': 'SensorDate', 'Settlement': 'Settlement', 'Notes': 'Notes', 'EventCode': 'EventCode', 'Site_Name': 'Site_Name', 'Staff_Init': 'Staff_Init', 'SiteID': 'SiteID', 'SensorID': 'SensorID', 'Confidence': 'Confidence', 'FieldValid': 'FieldValid', 'Main_Dmg': 'Main_Dmg', 'Grouped_Da': 'Grouped_Da', 'StaffID': 'StaffID', 'ImageID_Nu': 'ImageID_Nu', });
lyr_ImpactedFields_1.set('fieldImages', {'SensorDate': 'DateTime', 'Settlement': 'TextEdit', 'Notes': 'TextEdit', 'EventCode': 'TextEdit', 'SiteID': 'TextEdit', 'SensorID': 'TextEdit', 'Confidence': 'TextEdit', 'FieldValid': 'TextEdit', 'Main_Dmg': 'TextEdit', 'Grouped_Da': 'TextEdit', 'StaffID': 'TextEdit', 'ImageID_Nu': 'TextEdit', });
lyr_DamagedTransportation_2.set('fieldImages', {'SensorDate': 'DateTime', 'Settlement': 'TextEdit', 'Notes': 'TextEdit', 'EventCode': 'TextEdit', 'SiteID': 'TextEdit', 'SensorID': 'TextEdit', 'Confidence': 'TextEdit', 'FieldValid': 'TextEdit', 'Main_Dmg': 'TextEdit', 'Grouped_Da': 'TextEdit', 'StaffID': 'TextEdit', 'ImageID_Nu': 'TextEdit', });
lyr_DamagedBuildings_3.set('fieldImages', {'SensorDate': 'DateTime', 'Settlement': 'TextEdit', 'Notes': 'TextEdit', 'EventCode': 'TextEdit', 'SiteID': 'TextEdit', 'SensorID': 'TextEdit', 'Confidence': 'TextEdit', 'FieldValid': 'TextEdit', 'Main_Dmg': 'TextEdit', 'Grouped_Da': 'TextEdit', 'StaffID': 'TextEdit', 'ImageID_Nu': 'TextEdit', });
lyr_DamagedCulturalHeritageSites_4.set('fieldImages', {'SensorDate': 'DateTime', 'Settlement': 'TextEdit', 'Notes': 'TextEdit', 'EventCode': 'TextEdit', 'Site_Name': 'TextEdit', 'Staff_Init': 'TextEdit', 'SiteID': 'TextEdit', 'SensorID': 'TextEdit', 'Confidence': 'TextEdit', 'FieldValid': 'TextEdit', 'Main_Dmg': 'TextEdit', 'Grouped_Da': 'TextEdit', 'StaffID': 'TextEdit', 'ImageID_Nu': 'TextEdit', });
lyr_ImpactedFields_1.set('fieldLabels', {'SensorDate': 'no label', 'Settlement': 'no label', 'Notes': 'no label', 'EventCode': 'no label', 'SiteID': 'no label', 'SensorID': 'no label', 'Confidence': 'no label', 'FieldValid': 'no label', 'Main_Dmg': 'no label', 'Grouped_Da': 'no label', 'StaffID': 'no label', 'ImageID_Nu': 'no label', });
lyr_DamagedTransportation_2.set('fieldLabels', {'SensorDate': 'no label', 'Settlement': 'no label', 'Notes': 'no label', 'EventCode': 'no label', 'SiteID': 'no label', 'SensorID': 'no label', 'Confidence': 'no label', 'FieldValid': 'no label', 'Main_Dmg': 'no label', 'Grouped_Da': 'no label', 'StaffID': 'no label', 'ImageID_Nu': 'no label', });
lyr_DamagedBuildings_3.set('fieldLabels', {'SensorDate': 'no label', 'Settlement': 'no label', 'Notes': 'no label', 'EventCode': 'no label', 'SiteID': 'no label', 'SensorID': 'no label', 'Confidence': 'no label', 'FieldValid': 'no label', 'Main_Dmg': 'no label', 'Grouped_Da': 'no label', 'StaffID': 'no label', 'ImageID_Nu': 'no label', });
lyr_DamagedCulturalHeritageSites_4.set('fieldLabels', {'SensorDate': 'no label', 'Settlement': 'no label', 'Notes': 'no label', 'EventCode': 'no label', 'Site_Name': 'no label', 'Staff_Init': 'no label', 'SiteID': 'no label', 'SensorID': 'no label', 'Confidence': 'no label', 'FieldValid': 'no label', 'Main_Dmg': 'no label', 'Grouped_Da': 'no label', 'StaffID': 'no label', 'ImageID_Nu': 'no label', });
lyr_DamagedCulturalHeritageSites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});