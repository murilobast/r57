$.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1gNYVriMjdhGwofXMV88rVrKLSYvjibjFmgf_0EsTtPU/od6/public/values?alt=json',
        dataType: 'jsonp',
        success : function(retorno) {
           if (retorno.feed.entry[0].gsx$dia.$t){ $('.data').text(retorno.feed.entry[0].gsx$dia.$t);};


          //domingo//
          if (retorno.feed.entry[14].gsx$domingo.$t){ $('.dia7 .dataSemana').text(retorno.feed.entry[14].gsx$domingo.$t);}
          for (var i=0; i<=4; i++) {
            var iPlus = i+1;
            if (retorno.feed.entry[i].gsx$domingo.$t){ $('.dia7 .manha .' + iPlus).text(retorno.feed.entry[i].gsx$domingo.$t);}
          };


          //segunda feira//
          if (retorno.feed.entry[14].gsx$segunda.$t){ $('.dia1 .dataSemana').text(retorno.feed.entry[14].gsx$segunda.$t);}
          for (var i=0; i<=4; i++) {
            var iPlus = i+1;
            if (retorno.feed.entry[i].gsx$segunda.$t){ $('.dia1 .manha .' + iPlus).text(retorno.feed.entry[i].gsx$segunda.$t);}
          };
          for (var i=5; i<=7; i++) {
            var iPlus = i-4;
            if (retorno.feed.entry[i].gsx$segunda.$t){  $('.dia1 .tarde .' + iPlus).text(retorno.feed.entry[i].gsx$segunda.$t);}
          };
          for (var i=7; i<=10; i++) {
            var iPlus = i-6;
            if (retorno.feed.entry[i].gsx$segunda.$t){  $('.dia1 .noite .' + iPlus).text(retorno.feed.entry[i].gsx$segunda.$t);}
          };
          for (var i=11; i<=13; i++) {
            var iPlus = i-10;
            if (retorno.feed.entry[i].gsx$segunda.$t){ $('.dia1 .folga .' + iPlus).text(retorno.feed.entry[i].gsx$segunda.$t);}
          };


          //terça feira//
          if (retorno.feed.entry[14].gsx$terça.$t){ $('.dia2 .dataSemana').text(retorno.feed.entry[14].gsx$terça.$t);}
          for (var i=0; i<=4; i++) {
            var iPlus = i+1;
            if (retorno.feed.entry[i].gsx$terça.$t){ $('.dia2 .manha .' + iPlus).text(retorno.feed.entry[i].gsx$terça.$t);}
          };
          for (var i=5; i<=7; i++) {
            var iPlus = i-4;
            if (retorno.feed.entry[i].gsx$terça.$t){ $('.dia2 .tarde .' + iPlus).text(retorno.feed.entry[i].gsx$terça.$t);}
          };
          for (var i=7; i<=10; i++) {
            var iPlus = i-6;
            if (retorno.feed.entry[i].gsx$terça.$t){ $('.dia2 .noite .' + iPlus).text(retorno.feed.entry[i].gsx$terça.$t);}
          };
          for (var i=11; i<=13; i++) {
            var iPlus = i-10;
            if (retorno.feed.entry[i].gsx$terça.$t){ $('.dia2 .folga .' + iPlus).text(retorno.feed.entry[i].gsx$terça.$t);}
          };


          //quarta feira//
          if (retorno.feed.entry[14].gsx$quarta.$t){ $('.dia3 .dataSemana').text(retorno.feed.entry[14].gsx$quarta.$t);}
          for (var i=0; i<=4; i++) {
            var iPlus = i+1;
            if (retorno.feed.entry[i].gsx$quarta.$t){ $('.dia3 .manha .' + iPlus).text(retorno.feed.entry[i].gsx$quarta.$t);}
          };
          for (var i=5; i<=7; i++) {
            var iPlus = i-4;
            if (retorno.feed.entry[i].gsx$quarta.$t){ $('.dia3 .tarde .' + iPlus).text(retorno.feed.entry[i].gsx$quarta.$t);}
          };
          for (var i=7; i<=10; i++) {
            var iPlus = i-6;
            if (retorno.feed.entry[i].gsx$quarta.$t){ $('.dia3 .noite .' + iPlus).text(retorno.feed.entry[i].gsx$quarta.$t);}
          };
          for (var i=11; i<=13; i++) {
            var iPlus = i-10;
            if (retorno.feed.entry[i].gsx$quarta.$t){ $('.dia3 .folga .' + iPlus).text(retorno.feed.entry[i].gsx$quarta.$t);}
          };


          //quinta feira//
          if (retorno.feed.entry[14].gsx$quinta.$t){ $('.dia4 .dataSemana').text(retorno.feed.entry[14].gsx$quinta.$t);}
          for (var i=0; i<=4; i++) {
            var iPlus = i+1;
            if (retorno.feed.entry[i].gsx$quinta.$t){ $('.dia4 .manha .' + iPlus).text(retorno.feed.entry[i].gsx$quinta.$t);}
          };
          for (var i=5; i<=7; i++) {
            var iPlus = i-4;
            if (retorno.feed.entry[i].gsx$quinta.$t){ $('.dia4 .tarde .' + iPlus).text(retorno.feed.entry[i].gsx$quinta.$t);}
          };
          for (var i=7; i<=10; i++) {
            var iPlus = i-6;
            if (retorno.feed.entry[i].gsx$quinta.$t){ $('.dia4 .noite .' + iPlus).text(retorno.feed.entry[i].gsx$quinta.$t);}
          };
          for (var i=11; i<=13; i++) {
            var iPlus = i-10;
            if (retorno.feed.entry[i].gsx$quinta.$t){ $('.dia4 .folga .' + iPlus).text(retorno.feed.entry[i].gsx$quinta.$t);}
          };


          //sexta feira//
          if (retorno.feed.entry[14].gsx$sexta.$t){ $('.dia5 .dataSemana').text(retorno.feed.entry[14].gsx$sexta.$t);}
          for (var i=0; i<=4; i++) {
            var iPlus = i+1;
            if (retorno.feed.entry[i].gsx$sexta.$t){ $('.dia5 .manha .' + iPlus).text(retorno.feed.entry[i].gsx$sexta.$t);}
          };
          for (var i=5; i<=7; i++) {
            var iPlus = i-4;
            if (retorno.feed.entry[i].gsx$sexta.$t){ $('.dia5 .tarde .' + iPlus).text(retorno.feed.entry[i].gsx$sexta.$t);}
          };
          for (var i=7; i<=10; i++) {
            var iPlus = i-6;
            if (retorno.feed.entry[i].gsx$sexta.$t){ $('.dia5 .noite .' + iPlus).text(retorno.feed.entry[i].gsx$sexta.$t);}
          }
          for (var i=11; i<=13; i++) {
            var iPlus = i-10;
            if (retorno.feed.entry[i].gsx$sexta.$t){ $('.dia5 .folga .' + iPlus).text(retorno.feed.entry[i].gsx$sexta.$t);}
          };


          //sabado//
          if (retorno.feed.entry[14].gsx$sabado.$t){ $('.dia6 .dataSemana').text(retorno.feed.entry[14].gsx$sabado.$t);}
          for (var i=0; i<=4; i++) {
            var iPlus = i+1;
            if (retorno.feed.entry[i].gsx$sabado.$t){ $('.dia6 .manha .' + iPlus).text(retorno.feed.entry[i].gsx$sabado.$t);}
          };
          for (var i=5; i<=6; i++) {
            var iPlus = i-4;
            if (retorno.feed.entry[i].gsx$sabado.$t){ $('.dia6 .tarde .' + iPlus).text(retorno.feed.entry[i].gsx$sabado.$t);}
          };
          for (var i=7; i<=10; i++) {
            var iPlus = i-6;
           if (retorno.feed.entry[i].gsx$sabado.$t){ $('.dia6 .noite .' + iPlus).text(retorno.feed.entry[i].gsx$sabado.$t);}
          };
          for (var i=11; i<=13; i++) {
            var iPlus = i-10;
            if (retorno.feed.entry[i].gsx$sabado.$t){ $('.dia6 .folga .' + iPlus).text(retorno.feed.entry[i].gsx$sabado.$t);}
          };

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
