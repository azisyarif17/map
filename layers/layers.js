var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BidangTanah_Bawu_1 = new ol.format.GeoJSON();
var features_BidangTanah_Bawu_1 = format_BidangTanah_Bawu_1.readFeatures(json_BidangTanah_Bawu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BidangTanah_Bawu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BidangTanah_Bawu_1.addFeatures(features_BidangTanah_Bawu_1);
var lyr_BidangTanah_Bawu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BidangTanah_Bawu_1, 
                style: style_BidangTanah_Bawu_1,
                popuplayertitle: 'BidangTanah_Bawu',
                interactive: true,
    title: 'BidangTanah_Bawu<br />\
    <img src="styles/legend/BidangTanah_Bawu_1_0.png" /> Bersertifikat<br />\
    <img src="styles/legend/BidangTanah_Bawu_1_1.png" /> Tidak Bersertifikat<br />\
    <img src="styles/legend/BidangTanah_Bawu_1_2.png" /> Tidak Diketahui<br />\
    <img src="styles/legend/BidangTanah_Bawu_1_3.png" /> <br />' });
var format_Hak_Bawu_2 = new ol.format.GeoJSON();
var features_Hak_Bawu_2 = format_Hak_Bawu_2.readFeatures(json_Hak_Bawu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hak_Bawu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hak_Bawu_2.addFeatures(features_Hak_Bawu_2);
var lyr_Hak_Bawu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hak_Bawu_2, 
                style: style_Hak_Bawu_2,
                popuplayertitle: 'Hak_Bawu',
                interactive: true,
    title: 'Hak_Bawu<br />\
    <img src="styles/legend/Hak_Bawu_2_0.png" /> Hak Milik<br />\
    <img src="styles/legend/Hak_Bawu_2_1.png" /> Hak Pakai<br />\
    <img src="styles/legend/Hak_Bawu_2_2.png" /> Kosong<br />\
    <img src="styles/legend/Hak_Bawu_2_3.png" /> <br />' });
var format_PL_Bawu_3 = new ol.format.GeoJSON();
var features_PL_Bawu_3 = format_PL_Bawu_3.readFeatures(json_PL_Bawu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL_Bawu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_Bawu_3.addFeatures(features_PL_Bawu_3);
var lyr_PL_Bawu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PL_Bawu_3, 
                style: style_PL_Bawu_3,
                popuplayertitle: 'PL_Bawu',
                interactive: true,
    title: 'PL_Bawu<br />\
    <img src="styles/legend/PL_Bawu_3_0.png" /> Hutan<br />\
    <img src="styles/legend/PL_Bawu_3_1.png" /> Industri Lainnya<br />\
    <img src="styles/legend/PL_Bawu_3_2.png" /> JALAN<br />\
    <img src="styles/legend/PL_Bawu_3_3.png" /> Kampung Jarang<br />\
    <img src="styles/legend/PL_Bawu_3_4.png" /> Kampung Padat<br />\
    <img src="styles/legend/PL_Bawu_3_5.png" /> Kantor/Instansi Pemerintahan<br />\
    <img src="styles/legend/PL_Bawu_3_6.png" /> Kebun<br />\
    <img src="styles/legend/PL_Bawu_3_7.png" /> Lapangan Olahraga<br />\
    <img src="styles/legend/PL_Bawu_3_8.png" /> Makam Umum<br />\
    <img src="styles/legend/PL_Bawu_3_9.png" /> Masjid/Langgar/Surau<br />\
    <img src="styles/legend/PL_Bawu_3_10.png" /> Padang<br />\
    <img src="styles/legend/PL_Bawu_3_11.png" /> Pendidikan Dasar<br />\
    <img src="styles/legend/PL_Bawu_3_12.png" /> Pertokoan<br />\
    <img src="styles/legend/PL_Bawu_3_13.png" /> Puskesmas/Balai Kesehatan<br />\
    <img src="styles/legend/PL_Bawu_3_14.png" /> Sawah Non-Irigasi<br />\
    <img src="styles/legend/PL_Bawu_3_15.png" /> Sungai<br />\
    <img src="styles/legend/PL_Bawu_3_16.png" /> Tanah Kosong Belum Diperuntukkan<br />\
    <img src="styles/legend/PL_Bawu_3_17.png" /> Toko/Warung/Kios/Mart<br />\
    <img src="styles/legend/PL_Bawu_3_18.png" /> <br />' });
var format_ZNT_Bawu_4 = new ol.format.GeoJSON();
var features_ZNT_Bawu_4 = format_ZNT_Bawu_4.readFeatures(json_ZNT_Bawu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNT_Bawu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNT_Bawu_4.addFeatures(features_ZNT_Bawu_4);
var lyr_ZNT_Bawu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNT_Bawu_4, 
                style: style_ZNT_Bawu_4,
                popuplayertitle: 'ZNT_Bawu',
                interactive: true,
    title: 'ZNT_Bawu<br />\
    <img src="styles/legend/ZNT_Bawu_4_0.png" /> <br />\
    <img src="styles/legend/ZNT_Bawu_4_1.png" /> < 100<br />\
    <img src="styles/legend/ZNT_Bawu_4_2.png" /> 100 - 200<br />\
    <img src="styles/legend/ZNT_Bawu_4_3.png" /> 200 - 500<br />\
    <img src="styles/legend/ZNT_Bawu_4_4.png" /> 500 - 1000<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_BidangTanah_Bawu_1.setVisible(true);lyr_Hak_Bawu_2.setVisible(true);lyr_PL_Bawu_3.setVisible(true);lyr_ZNT_Bawu_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BidangTanah_Bawu_1,lyr_Hak_Bawu_2,lyr_PL_Bawu_3,lyr_ZNT_Bawu_4];
lyr_BidangTanah_Bawu_1.set('fieldAliases', {'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'PL_CITRA': 'PL_CITRA', 'KLASPL': 'KLASPL', 'SARPRAS': 'SARPRAS', 'RT': 'RT', 'RW': 'RW', 'DUSUN': 'DUSUN', 'KABUPATEN': 'KABUPATEN', 'KETERANGAN': 'KETERANGAN', 'STATUS': 'STATUS', 'SERTIPIKAT': 'SERTIPIKAT', 'TNH_DESA': 'TNH_DESA', 'TNH_PEMDA': 'TNH_PEMDA', 'KONDISI_JL': 'KONDISI_JL', 'TIPE_HAK': 'TIPE_HAK', 'ORIG_FID_1': 'ORIG_FID_1', 'CEK': 'CEK', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'KLAS_PL': 'KLAS_PL', 'Shape_Le_2': 'Shape_Le_2', 'Sertifikat': 'Sertifikat', });
lyr_Hak_Bawu_2.set('fieldAliases', {'TIPE_HAK': 'TIPE_HAK', });
lyr_PL_Bawu_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_Kendel': 'FID_Kendel', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Id': 'Id', 'OBJECTID': 'OBJECTID', 'Tema': 'Tema', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'FID_Penggu': 'FID_Penggu', 'PL': 'PL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZNT_Bawu_4.set('fieldAliases', {'Id': 'Id', 'NL': 'NL', });
lyr_BidangTanah_Bawu_1.set('fieldImages', {'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'PL_CITRA': 'TextEdit', 'KLASPL': 'TextEdit', 'SARPRAS': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'DUSUN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KETERANGAN': 'TextEdit', 'STATUS': 'TextEdit', 'SERTIPIKAT': 'TextEdit', 'TNH_DESA': 'TextEdit', 'TNH_PEMDA': 'TextEdit', 'KONDISI_JL': 'TextEdit', 'TIPE_HAK': 'TextEdit', 'ORIG_FID_1': 'TextEdit', 'CEK': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'KLAS_PL': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Sertifikat': 'TextEdit', });
lyr_Hak_Bawu_2.set('fieldImages', {'TIPE_HAK': 'TextEdit', });
lyr_PL_Bawu_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_Kendel': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'Id': 'TextEdit', 'OBJECTID': 'TextEdit', 'Tema': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'TextEdit', 'FID_Penggu': 'TextEdit', 'PL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZNT_Bawu_4.set('fieldImages', {'Id': 'Range', 'NL': 'TextEdit', });
lyr_BidangTanah_Bawu_1.set('fieldLabels', {'KELURAHAN': 'no label', 'KECAMATAN': 'no label', 'PL_CITRA': 'no label', 'KLASPL': 'no label', 'SARPRAS': 'no label', 'RT': 'no label', 'RW': 'no label', 'DUSUN': 'no label', 'KABUPATEN': 'no label', 'KETERANGAN': 'no label', 'STATUS': 'no label', 'SERTIPIKAT': 'no label', 'TNH_DESA': 'no label', 'TNH_PEMDA': 'no label', 'KONDISI_JL': 'no label', 'TIPE_HAK': 'no label', 'ORIG_FID_1': 'no label', 'CEK': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'OBJECTID_1': 'no label', 'KLAS_PL': 'no label', 'Shape_Le_2': 'no label', 'Sertifikat': 'no label', });
lyr_Hak_Bawu_2.set('fieldLabels', {'TIPE_HAK': 'no label', });
lyr_PL_Bawu_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_Kendel': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Id': 'no label', 'OBJECTID': 'no label', 'Tema': 'no label', 'JENIS_UTAM': 'no label', 'JENIS': 'no label', 'KEGIATAN_O': 'no label', 'TOPONIM': 'no label', 'SUMBER': 'no label', 'FOTO': 'no label', 'FID_Penggu': 'no label', 'PL': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ZNT_Bawu_4.set('fieldLabels', {'Id': 'no label', 'NL': 'no label', });
lyr_ZNT_Bawu_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});