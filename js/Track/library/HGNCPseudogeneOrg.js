Genoverse.Track.HGNCPseudogeneOrg = Genoverse.Track.extend({
  id     : 'hgncPseudogeneOrg',
  name   : 'HGNC Pseudogene.org genes',
  height : 100,
  legend : false,
  resizable   : true,

  populateMenu: function (feature) {
    var url = 'http://tables.pseudogene.org/' + feature.id;
    var sourceName = 'Pseudogene.org: ';
    var menu = {
      title    : '<a target="_blank" href="' + url + '">' + sourceName + feature.id + '</a>',
      Location : feature.chr + ':' + feature.start + '-' + feature.end,
      Source   : feature.source
    };
    if(feature.parent_gene){
      var ensURL = 'http://www.ensembl.org/Homo_sapiens/Gene/Summary?g=' + feature.parent_gene;
      menu['Parent gene'] = '<a target="_blank" href="' + ensURL + '">' + feature.parent_gene + '</a>';
      menu['E-value'] = feature.evalue;
      menu['Identity'] = feature.identity;
      menu['Class'] = feature.class;
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
    model  : Genoverse.Track.Model.Gene.HGNCPseudogeneOrg,
    view   : Genoverse.Track.View.Gene.HGNCPseudogeneOrg
  }
});