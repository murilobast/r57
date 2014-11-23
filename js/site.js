$.ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1gNYVriMjdhGwofXMV88rVrKLSYvjibjFmgf_0EsTtPU/od6/public/values?alt=json',
    dataType: 'jsonp',
    success : function(retorno) {
        
        if (retorno.feed.entry[0].gsx$dia.$t){ $('.data').text(retorno.feed.entry[0].gsx$dia.$t);};

        for (var dia=0;dia<7;dia++){
            var semana = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];
            for (var i=0; i<=7; i++) {
                var iPlus = i+1;
                var diaPlus = dia+1
                if (retorno.feed.entry[i]['gsx$' + semana[dia]].$t){ $('.dia' + diaPlus + ' .manha .' + iPlus).text(retorno.feed.entry[i]['gsx$' + semana[dia]].$t);}
            };
            for (var i=8; i<=10; i++) {
                var iPlus = i-7;
                var diaPlus = dia+1
                if (retorno.feed.entry[i]['gsx$' + semana[dia]].$t){ $('.dia' + diaPlus + ' .tarde .' + iPlus).text(retorno.feed.entry[i]['gsx$' + semana[dia]].$t);}
            };
            for (var i=11; i<=18; i++) {
                var iPlus = i-10;
                var diaPlus = dia+1
                if (retorno.feed.entry[i]['gsx$' + semana[dia]].$t){ $('.dia' + diaPlus + ' .noite .' + iPlus).text(retorno.feed.entry[i]['gsx$' + semana[dia]].$t);}
            };
            for (var i=19; i<=21; i++) {
                var iPlus = i-18;
                var diaPlus = dia+1
                if (retorno.feed.entry[i]['gsx$' + semana[dia]].$t){ $('.dia' + diaPlus + ' .folga .' + iPlus).text(retorno.feed.entry[i]['gsx$' + semana[dia]].$t);}
            };
        };
        for (var i=0; i<=14; i++) {
            if (retorno.feed.entry[i].gsx$funcionarios.$t != ""){
                $('.l' + i).text(retorno.feed.entry[i].gsx$funcionarios.$t);
            }else{
                $('.l' + i).parent('div').hide();
            }
        };
        $('.blue').text(retorno.feed.entry[0].gsx$gerente.$t);
    }   
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
