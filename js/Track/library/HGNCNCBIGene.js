Genoverse.Track.HGNCNCBIGene = Genoverse.Track.extend({
  id     : 'hgncNcbiGene',
  name   : 'HGNC NCBI genes',
  height : 100,
  legend : false,
  resizable   : true,

  populateMenu: function (feature) {
    var url = 'http://www.ncbi.nlm.nih.gov/gene/' + feature.id;
    var sourceName = 'NCBI gene: ';
    var menu = {
      title    : '<a target="_blank" href="' + url + '">' + sourceName + feature.id + '</a>',
      Location : feature.chr + ':' + feature.start + '-' + feature.end,
      Source   : feature.source
    };

    if(feature.symbol){
      sourceName = feature.symbol+': ';
      menu['title'] = '<a target="_blank" href="' + url + '">' + sourceName + feature.id + '</a>';
      menu['Symbol'] = feature.symbol;
    }
    if(feature.biotype){
      menu['Biotype'] = feature.biotype;
    }
    menu['Rerun as'] = '<a href="/xref/mapping/GRCh38/'+ feature.id +'">' + feature.id + '</a>';
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
    model  : Genoverse.Track.Model.Gene.HGNCNCBIGene,
    view   : Genoverse.Track.View.Gene.HGNCNCBIGene
  }
});