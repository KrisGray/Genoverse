Genoverse.Track.HGNCVega = Genoverse.Track.extend({
  id     : 'hgncVega',
  name   : 'HGNC Vega genes',
  height : 100,
  legend : false,
  resizable   : true,

  populateMenu: function (feature) {
    var url = 'http://vega.sanger.ac.uk/Homo_sapiens/Gene/Summary?db=core;g=' + feature.id;
    var sourceName = 'Vega gene: ';
    var menu = {
      title    : '<a target="_blank" href="' + url + '">' + sourceName + feature.id + '</a>',
      Location   : feature.chr + ':' + feature.start + '-' + feature.end,
      Source     : feature.source
    };
    if(feature.symbol){
      sourceName = feature.symbol+': ';
      menu['title'] = '<a target="_blank" href="' + url + '">' + sourceName + feature.id + '</a>';
      menu['Symbol'] = feature.symbol;
    }
    if(feature.biotype){
      menu['Biotype'] = feature.biotype;
    }
    menu['Rerun as'] = '<a href="/update/mapping.html#/GRCh38/'+ feature.id +'">' + feature.id + '</a>';
    return menu;
  },
  // Different settings for different zoom level
  2000000: { // This one applies when > 2M base-pairs per screen
    labels : false
  },
  100000: { // more than 100K but less then 2M
    labels : true
  },
  1: { // > 1 base-pair, but less then 100K
    labels : true,
    model  : Genoverse.Track.Model.Gene.HGNCVega,
    view   : Genoverse.Track.View.Gene.HGNCVega
  }
});