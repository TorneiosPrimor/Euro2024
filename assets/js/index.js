/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
/***************************************/

//Função de rolagem menu superior
document.addEventListener('DOMContentLoaded', function(){
  const idButtonPartidas = document.getElementById('buttonPartidas')
  const idButtonEliminatorias = document.getElementById('buttonEliminatorias')
  const idButtonTabela = document.getElementById('buttonTabela')
  const idButtonGaleria = document.getElementById('buttonGaleria')

  const classTabelaPontos = document.querySelector('.tabelaPontos')
  const classMataMata = document.querySelector('.tabelaMataMata')
  const classGaleria = document.querySelector('.galeria')
  const classTabelaJogos = document.querySelector('.tabelaJogos')

  idButtonPartidas.addEventListener('click', function(){
    const targetPosition = classTabelaJogos.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idButtonEliminatorias.addEventListener('click', function(){
    const targetPosition = classMataMata.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idButtonTabela.addEventListener('click', function(){
    const targetPosition = classTabelaPontos.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
  idButtonGaleria.addEventListener('click', function(){
    const targetPosition = classGaleria.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - 128
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  })
})
//Grupo A
const time1 = 'Bélgica'
const time2 = 'Holanda'
const time3 = 'Turquia'

//Grupo B
const time4 = 'Dinamarca'
const time5 = 'Inglaterra'
const time6 = 'Croácia'

// Rodadas
let rodada1 = [
  {
    data: '03/08',
    hora: '16:30',
    bandeira1: 'img',
    time1: 'Bélgica',
    gols1: 2,
    x: 'x',
    gols2: 4,
    time2: 'Holanda',
    bandeira2: 'img',
  },
  {
    hora: '17:20',
    bandeira1: 'img',
    time1: 'Croácia',
    gols1: 3,
    x: 'x',
    gols2: 3,
    time2: 'Inglaterra',
    bandeira2: 'img',
  },
  {
    hora: '18:00',
    bandeira1: 'img',
    time1: 'Turquia',
    gols1: 0,
    x: 'x',
    gols2: 3,
    time2: 'Dinamarca',
    bandeira2: 'img',
  }
]
let rodada2 = [
  {
    data: '10/08',
    hora: '16:00',
    bandeira1: 'img',
    time1: 'Bélgica',
    gols1: 2,
    x: 'x',
    gols2: 3,
    time2: 'Inglaterra',
    bandeira2: 'img',
  },
  {
    hora: '16:50',
    bandeira1: 'img',
    time1: 'Croácia',
    gols1: 1,
    x: 'x',
    gols2: 3,
    time2: 'Dinamarca',
    bandeira2: 'img',
  }
]
let rodada3 = [
  {
    data: '17/08',
    hora: '17:00',
    bandeira1: 'img',
    time1: 'Holanda',
    gols1: 2,
    x: 'x',
    gols2: 1,
    time2: 'Inglaterra',
    bandeira2: 'img',
  },
  {
    hora: '17:50',
    bandeira1: 'img',
    time1: 'Bélgica',
    gols1: 1,
    x: 'x',
    gols2: 5,
    time2: 'Croácia',
    bandeira2: 'img',
  }
]
let rodada4 = [
  {
    data: '24/08',
    hora: '17:00',
    bandeira1: 'img',
    time1: 'Holanda',
    gols1: 2,
    x: 'x',
    gols2: 1,
    time2: 'Dinamarca',
    bandeira2: 'img',
  },
  {
    hora: '17:50',
    bandeira1: 'img',
    time1: 'Inglaterra',
    gols1: 6,
    x: 'x',
    gols2: 2,
    time2: 'Turquia',
    bandeira2: 'img',
  }
]
let rodada5 = [
  {
    data: '31/08',
    hora: '17:00',
    bandeira1: 'img',
    time1: 'Inglaterra',
    gols1: 1,
    x: 'x',
    gols2: 7,
    time2: 'Dinamarca',
    bandeira2: 'img',
  },
  {
    hora: '17:50',
    bandeira1: 'img',
    time1: 'Holanda',
    gols1: 0,
    x: 'x',
    gols2: 3,
    time2: 'Turquia',
    bandeira2: 'img',
  }
]
let rodada6 = [
  {
    data: '07/09',
    hora: '18:00',
    bandeira1: 'img',
    time1: 'Dinamarca',
    gols1: null,
    x: 'x',
    gols2: null,
    time2: 'Bélgica',
    bandeira2: 'img',
  },
  {
    hora: '19:30',
    bandeira1: 'img',
    time1: 'Turquia',
    gols1: null,
    x: 'x',
    gols2: null,
    time2: 'Croácia',
    bandeira2: 'img',
  }
]
let rodada7 = [
  {
    data: '14/09',
    hora: '17:00',
    bandeira1: 'img',
    time1: 'Bélgica',
    gols1: null,
    x: 'x',
    gols2: null,
    time2: 'Turquia',
    bandeira2: 'img',
  },
  {
    hora: '17:50',
    bandeira1: 'img',
    time1: 'Holanda',
    gols1: null,
    x: 'x',
    gols2: null,
    time2: 'Croácia',
    bandeira2: 'img',
  }
]

// Coletando datas dos jogos
data1 = rodada1[0].data
data2 = rodada2[0].data
data3 = rodada3[0].data
data4 = rodada4[0].data
data5 = rodada5[0].data
data6 = rodada6[0].data
data7 = rodada7[0].data

// Coletando horário dos jogos
hora1 = rodada1[0].hora
hora2 = rodada1[1].hora
hora3 = rodada1[2].hora
hora4 = rodada2[0].hora
hora5 = rodada2[1].hora
hora6 = rodada3[0].hora
hora7 = rodada3[1].hora
hora8 = rodada4[0].hora
hora9 = rodada4[1].hora
hora10 = rodada5[0].hora
hora11 = rodada5[1].hora
hora12 = rodada6[0].hora
hora13 = rodada6[1].hora
hora14 = rodada7[0].hora
hora15 = rodada7[1].hora

// Coletando resultados
result1 = rodada1[0].gols1
result2 = rodada1[0].gols2
result3 = rodada1[1].gols1
result4 = rodada1[1].gols2
result5 = rodada1[2].gols1
result6 = rodada1[2].gols2

result7 = rodada2[0].gols1
result8 = rodada2[0].gols2
result9 = rodada2[1].gols1
result10 = rodada2[1].gols2

result11 = rodada3[0].gols1
result12 = rodada3[0].gols2
result13 = rodada3[1].gols1
result14 = rodada3[1].gols2

result15 = rodada4[0].gols1
result16 = rodada4[0].gols2
result17 = rodada4[1].gols1
result18 = rodada4[1].gols2

result19 = rodada5[0].gols1
result20 = rodada5[0].gols2
result21 = rodada5[1].gols1
result22 = rodada5[1].gols2

result23 = rodada6[0].gols1
result24 = rodada6[0].gols2
result25 = rodada6[1].gols1
result26 = rodada6[1].gols2

result27 = rodada7[0].gols1
result28 = rodada7[0].gols2
result29 = rodada7[1].gols1
result30 = rodada7[1].gols2


// Extraindo quantidade de gols feitos
function gols1Pro(rodadas) {
  var totalGols = 0

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time1) {
        totalGols += jogo.gols1
      }
      if (jogo.time2 === time1) {
        totalGols += jogo.gols2
      }
    });
  });
  return totalGols
}
let golsPro1 = gols1Pro([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7])

function gols2Pro(rodadas) {
  var totalGols = 0

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time2) {
        totalGols += jogo.gols1
      }
      if (jogo.time2 === time2) {
        totalGols += jogo.gols2
      }
    });
  });
  return totalGols
}
let golsPro2 = gols2Pro([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7])

function gols3Pro(rodadas) {
  var totalGols = 0

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time3) {
        totalGols += jogo.gols1
      }
      if (jogo.time2 === time3) {
        totalGols += jogo.gols2
      }
    });
  });
  return totalGols
}
let golsPro3 = gols3Pro([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7])

function gols4Pro(rodadas) {
  var totalGols = 0

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time4) {
        totalGols += jogo.gols1
      }
      if (jogo.time2 === time4) {
        totalGols += jogo.gols2
      }
    });
  });
  return totalGols
}
let golsPro4 = gols4Pro([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7])

function gols5Pro(rodadas) {
  var totalGols = 0

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time5) {
        totalGols += jogo.gols1
      }
      if (jogo.time2 === time5) {
        totalGols += jogo.gols2
      }
    });
  });
  return totalGols
}
let golsPro5 = gols5Pro([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7])

function gols6Pro(rodadas) {
  var totalGols = 0

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time6) {
        totalGols += jogo.gols1
      }
      if (jogo.time2 === time6) {
        totalGols += jogo.gols2
      }
    });
  });
  return totalGols
}
let golsPro6 = gols6Pro([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7])


// Extraindo quantidade de gols tomados
function golsSofridos1(rodadas) {
  let totalGolsSofridos = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time1 && typeof jogo.gols2 === 'number') {
        totalGolsSofridos += jogo.gols2;
      }
      if (jogo.time2 === time1 && typeof jogo.gols1 === 'number') {
        totalGolsSofridos += jogo.gols1;
      }
    });
  });

  return totalGolsSofridos;
}
let golsContra1 = golsSofridos1([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function golsSofridos2(rodadas) {
  let totalGolsSofridos = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time2 && typeof jogo.gols2 === 'number') {
        totalGolsSofridos += jogo.gols2;
      }
      if (jogo.time2 === time2 && typeof jogo.gols1 === 'number') {
        totalGolsSofridos += jogo.gols1;
      }
    });
  });

  return totalGolsSofridos;
}
let golsContra2 = golsSofridos2([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function golsSofridos3(rodadas) {
  let totalGolsSofridos = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time3 && typeof jogo.gols2 === 'number') {
        totalGolsSofridos += jogo.gols2;
      }
      if (jogo.time2 === time3 && typeof jogo.gols1 === 'number') {
        totalGolsSofridos += jogo.gols1;
      }
    });
  });

  return totalGolsSofridos;
}
let golsContra3 = golsSofridos3([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function golsSofridos4(rodadas) {
  let totalGolsSofridos = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time4 && typeof jogo.gols2 === 'number') {
        totalGolsSofridos += jogo.gols2;
      }
      if (jogo.time2 === time4 && typeof jogo.gols1 === 'number') {
        totalGolsSofridos += jogo.gols1;
      }
    });
  });

  return totalGolsSofridos;
}
let golsContra4 = golsSofridos4([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function golsSofridos5(rodadas) {
  let totalGolsSofridos = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time5 && typeof jogo.gols2 === 'number') {
        totalGolsSofridos += jogo.gols2;
      }
      if (jogo.time2 === time5 && typeof jogo.gols1 === 'number') {
        totalGolsSofridos += jogo.gols1;
      }
    });
  });

  return totalGolsSofridos;
}
let golsContra5 = golsSofridos5([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function golsSofridos6(rodadas) {
  let totalGolsSofridos = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time6 && typeof jogo.gols2 === 'number') {
        totalGolsSofridos += jogo.gols2;
      }
      if (jogo.time2 === time6 && typeof jogo.gols1 === 'number') {
        totalGolsSofridos += jogo.gols1;
      }
    });
  });

  return totalGolsSofridos;
}
let golsContra6 = golsSofridos6([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);



// Extraindo o número de vitórias, empates e derrotas
function resultadosTime1(rodadas) {
  let totalVitorias1 = 0;
  let totalEmpates1 = 0;
  let totalDerrotas1 = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time1) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          if (jogo.gols1 > jogo.gols2) {
            totalVitorias1 += 1;
          } else if (jogo.gols1 === jogo.gols2) {
            totalEmpates1 += 1;
          } else {
            totalDerrotas1 += 1;
          }
        }
      }
      if (jogo.time2 === time1) {
        if (typeof jogo.gols2 === 'number' && typeof jogo.gols1 === 'number') {
          if (jogo.gols2 > jogo.gols1) {
            totalVitorias1 += 1;
          } else if (jogo.gols2 === jogo.gols1) {
            totalEmpates1 += 1;
          } else {
            totalDerrotas1 += 1;
          }
        }
      }
    });
  });

  let totalPontos1 = (totalVitorias1 * 3) + (totalEmpates1 * 1);
  return { totalPontos1, totalVitorias1, totalEmpates1, totalDerrotas1 };
}
let { totalPontos1, totalVitorias1, totalEmpates1, totalDerrotas1 } = resultadosTime1([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function resultadosTime2(rodadas) {
  let totalVitorias2 = 0;
  let totalEmpates2 = 0;
  let totalDerrotas2 = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time2) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          if (jogo.gols1 > jogo.gols2) {
            totalVitorias2 += 1;
          } else if (jogo.gols1 === jogo.gols2) {
            totalEmpates2 += 1;
          } else {
            totalDerrotas2 += 1;
          }
        }
      }
      if (jogo.time2 === time2) {
        if (typeof jogo.gols2 === 'number' && typeof jogo.gols1 === 'number') {
          if (jogo.gols2 > jogo.gols1) {
            totalVitorias2 += 1;
          } else if (jogo.gols2 === jogo.gols1) {
            totalEmpates2 += 1;
          } else {
            totalDerrotas2 += 1;
          }
        }
      }
    });
  });

  let totalPontos2 = (totalVitorias2 * 3) + (totalEmpates2 * 1);
  return { totalPontos2, totalVitorias2, totalEmpates2, totalDerrotas2 };
}
let { totalPontos2, totalVitorias2, totalEmpates2, totalDerrotas2 } = resultadosTime2([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function resultadosTime3(rodadas) {
  let totalVitorias3 = 0;
  let totalEmpates3 = 0;
  let totalDerrotas3 = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time3) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          if (jogo.gols1 > jogo.gols2) {
            totalVitorias3 += 1;
          } else if (jogo.gols1 === jogo.gols2) {
            totalEmpates3 += 1;
          } else {
            totalDerrotas3 += 1;
          }
        }
      }
      if (jogo.time2 === time3) {
        if (typeof jogo.gols2 === 'number' && typeof jogo.gols1 === 'number') {
          if (jogo.gols2 > jogo.gols1) {
            totalVitorias3 += 1;
          } else if (jogo.gols2 === jogo.gols1) {
            totalEmpates3 += 1;
          } else {
            totalDerrotas3 += 1;
          }
        }
      }
    });
  });

  let totalPontos3 = (totalVitorias3 * 3) + (totalEmpates3 * 1);
  return { totalPontos3, totalVitorias3, totalEmpates3, totalDerrotas3 };
}
let { totalPontos3, totalVitorias3, totalEmpates3, totalDerrotas3 } = resultadosTime3([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function resultadosTime4(rodadas) {
  let totalVitorias4 = 0;
  let totalEmpates4 = 0;
  let totalDerrotas4 = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time4) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          if (jogo.gols1 > jogo.gols2) {
            totalVitorias4 += 1;
          } else if (jogo.gols1 === jogo.gols2) {
            totalEmpates4 += 1;
          } else {
            totalDerrotas4 += 1;
          }
        }
      }
      if (jogo.time2 === time4) {
        if (typeof jogo.gols2 === 'number' && typeof jogo.gols1 === 'number') {
          if (jogo.gols2 > jogo.gols1) {
            totalVitorias4 += 1;
          } else if (jogo.gols2 === jogo.gols1) {
            totalEmpates4 += 1;
          } else {
            totalDerrotas4 += 1;
          }
        }
      }
    });
  });

  let totalPontos4 = (totalVitorias4 * 3) + (totalEmpates4 * 1);
  return { totalPontos4, totalVitorias4, totalEmpates4, totalDerrotas4 };
}
let { totalPontos4, totalVitorias4, totalEmpates4, totalDerrotas4 } = resultadosTime4([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function resultadosTime5(rodadas) {
  let totalVitorias5 = 0;
  let totalEmpates5 = 0;
  let totalDerrotas5 = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time5) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          if (jogo.gols1 > jogo.gols2) {
            totalVitorias5 += 1;
          } else if (jogo.gols1 === jogo.gols2) {
            totalEmpates5 += 1;
          } else {
            totalDerrotas5 += 1;
          }
        }
      }
      if (jogo.time2 === time5) {
        if (typeof jogo.gols2 === 'number' && typeof jogo.gols1 === 'number') {
          if (jogo.gols2 > jogo.gols1) {
            totalVitorias5 += 1;
          } else if (jogo.gols2 === jogo.gols1) {
            totalEmpates5 += 1;
          } else {
            totalDerrotas5 += 1;
          }
        }
      }
    });
  });

  let totalPontos5 = (totalVitorias5 * 3) + (totalEmpates5 * 1);
  return { totalPontos5, totalVitorias5, totalEmpates5, totalDerrotas5 };
}
let { totalPontos5, totalVitorias5, totalEmpates5, totalDerrotas5 } = resultadosTime5([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function resultadosTime6(rodadas) {
  let totalVitorias6 = 0;
  let totalEmpates6 = 0;
  let totalDerrotas6 = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time6) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          if (jogo.gols1 > jogo.gols2) {
            totalVitorias6 += 1;
          } else if (jogo.gols1 === jogo.gols2) {
            totalEmpates6 += 1;
          } else {
            totalDerrotas6 += 1;
          }
        }
      }
      if (jogo.time2 === time6) {
        if (typeof jogo.gols2 === 'number' && typeof jogo.gols1 === 'number') {
          if (jogo.gols2 > jogo.gols1) {
            totalVitorias6 += 1;
          } else if (jogo.gols2 === jogo.gols1) {
            totalEmpates6 += 1;
          } else {
            totalDerrotas6 += 1;
          }
        }
      }
    });
  });

  let totalPontos6 = (totalVitorias6 * 3) + (totalEmpates6 * 1);
  return { totalPontos6, totalVitorias6, totalEmpates6, totalDerrotas6 };
}
let { totalPontos6, totalVitorias6, totalEmpates6, totalDerrotas6 } = resultadosTime6([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);


// Extraindo o número de partidas jogadas
function qtdPartidas1(rodadas) {
  let totalPartidas = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time1 || jogo.time2 === time1) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          totalPartidas += 1;
        }
      }
    });
  });

  return totalPartidas;
}
let totalPartidas1 = qtdPartidas1([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function qtdPartidas2(rodadas) {
  let totalPartidas = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time2 || jogo.time2 === time2) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          totalPartidas += 1;
        }
      }
    });
  });

  return totalPartidas;
}
let totalPartidas2 = qtdPartidas2([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function qtdPartidas3(rodadas) {
  let totalPartidas = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time3 || jogo.time2 === time3) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          totalPartidas += 1;
        }
      }
    });
  });

  return totalPartidas;
}
let totalPartidas3 = qtdPartidas3([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function qtdPartidas4(rodadas) {
  let totalPartidas = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time4 || jogo.time2 === time4) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          totalPartidas += 1;
        }
      }
    });
  });

  return totalPartidas;
}
let totalPartidas4 = qtdPartidas4([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function qtdPartidas5(rodadas) {
  let totalPartidas = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time5 || jogo.time2 === time5) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          totalPartidas += 1;
        }
      }
    });
  });

  return totalPartidas;
}
let totalPartidas5 = qtdPartidas5([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);

function qtdPartidas6(rodadas) {
  let totalPartidas = 0;

  rodadas.forEach(rodada => {
    rodada.forEach(jogo => {
      if (jogo.time1 === time6 || jogo.time2 === time6) {
        if (typeof jogo.gols1 === 'number' && typeof jogo.gols2 === 'number') {
          totalPartidas += 1;
        }
      }
    });
  });

  return totalPartidas;
}
let totalPartidas6 = qtdPartidas6([rodada1, rodada2, rodada3, rodada4, rodada5, rodada6, rodada7]);



// Exibindo a classificação Grupo A HTML
function exibirHTML1() {
  const classificacao1 = document.getElementById('classificacao1')
  classificacao1.innerHTML = `
    <tr>
      <td></td>
      <td>#</td>
      <td></td>
      <td>Seleção</td>
      <td>J</td>
      <td>V</td>
      <td>E</td>
      <td>D</td>
      <td>Gols</td>
      <td>PTS</td>
    </tr>
    <tr>
      <td class="tagVerde"></td>
      <td>1</td> <!-- Colocação -->
      <td><img src="assets/images/Bandeira ${time2}.png"></td>
      <td>${time2}</td>
      <td>${totalPartidas2}</td> <!-- Jogos -->
      <td>${totalVitorias2}</td> <!-- Vitórias -->
      <td>${totalEmpates2}</td> <!-- Empates -->
      <td>${totalDerrotas2}</td> <!-- Derrotas -->
      <td>${golsPro2}:${golsContra2}</td> <!-- Gols -->
      <td>${totalPontos2}</td> <!-- Pontos -->
    </tr>
    <tr>
      <td class="tagVerde"></td>
      <td>2</td> <!-- Colocação -->
      <td><img src="assets/images/Bandeira ${time3}.png"></td>
      <td>${time3}</td>
      <td>${totalPartidas3}</td> <!-- Jogos -->
      <td>${totalVitorias3}</td> <!-- Vitórias -->
      <td>${totalEmpates3}</td> <!-- Empates -->
      <td>${totalDerrotas3}</td> <!-- Derrotas -->
      <td>${golsPro3}:${golsContra3}</td> <!-- Gols -->
      <td>${totalPontos3}</td> <!-- Pontos -->
    </tr>
    <tr>
      <td class="tagVermelha"></td>
      <td>3</td> <!-- Colocação -->
      <td><img src="assets/images/Bandeira ${time1}.png"></td>
      <td>${time1}</td>
      <td>${totalPartidas1}</td> <!-- Jogos -->
      <td>${totalVitorias1}</td> <!-- Vitórias -->
      <td>${totalEmpates1}</td> <!-- Empates -->
      <td>${totalDerrotas1}</td> <!-- Derrotas -->
      <td>${golsPro1}:${golsContra1}</td> <!-- Gols -->
      <td>${totalPontos1}</td> <!-- Pontos -->
    </tr>
  `
}
exibirHTML1()

// Exibindo a classificação Grupo B HTML
function exibirHTML2() {
  const classificacao2 = document.getElementById('classificacao2')
  classificacao2.innerHTML = `
    <tr>
      <td></td>
      <td>#</td>
      <td></td>
      <td>Seleção</td>
      <td>J</td>
      <td>V</td>
      <td>E</td>
      <td>D</td>
      <td>Gols</td>
      <td>PTS</td>
    </tr>
    <tr>
      <td class="tagVerde"></td>
      <td>1</td> <!-- Colocação -->
      <td><img src="assets/images/Bandeira ${time4}.png"></td>
      <td>${time4}</td>
      <td>${totalPartidas4}</td> <!-- Jogos -->
      <td>${totalVitorias4}</td> <!-- Vitórias -->
      <td>${totalEmpates4}</td> <!-- Empates -->
      <td>${totalDerrotas4}</td> <!-- Derrotas -->
      <td>${golsPro4}:${golsContra4}</td> <!-- Gols -->
      <td>${totalPontos4}</td> <!-- Pontos -->
    </tr>
    <tr>
      <td class="tagVerde"></td>
      <td>2</td> <!-- Colocação -->
      <td><img src="assets/images/Bandeira ${time5}.png"></td>
      <td>${time5}</td>
      <td>${totalPartidas5}</td> <!-- Jogos -->
      <td>${totalVitorias5}</td> <!-- Vitórias -->
      <td>${totalEmpates5}</td> <!-- Empates -->
      <td>${totalDerrotas5}</td> <!-- Derrotas -->
      <td>${golsPro5}:${golsContra5}</td> <!-- Gols -->
      <td>${totalPontos5}</td> <!-- Pontos -->
    </tr>
    <tr>
      <td class="tagVermelha"></td>
      <td>3</td> <!-- Colocação -->
      <td><img src="assets/images/Bandeira ${time6}.png"></td>
      <td>${time6}</td>
      <td>${totalPartidas6}</td> <!-- Jogos -->
      <td>${totalVitorias6}</td> <!-- Vitórias -->
      <td>${totalEmpates6}</td> <!-- Empates -->
      <td>${totalDerrotas6}</td> <!-- Derrotas -->
      <td>${golsPro6}:${golsContra6}</td> <!-- Gols -->
      <td>${totalPontos6}</td> <!-- Pontos -->
    </tr>
  `
}
exibirHTML2()

function jornada1() {

  const resultado1 = result1 !== null ? result1 : '';
  const resultado2 = result2 !== null ? result2 : '';
  const resultado3 = result3 !== null ? result3 : '';
  const resultado4 = result4 !== null ? result4 : '';
  const resultado5 = result5 !== null ? result5 : '';
  const resultado6 = result6 !== null ? result6 : '';

  const jornada1 = document.getElementById('jornada1')
  jornada1.innerHTML = `
    <h2><strong>1º Rodada ${data1}</strong></h2>
    <table>
      <tr>
        <th>Hora</th>
        <th colspan="7">Jogo</th>
      </tr>
      <tr>
        <td>${hora1}</td>
        <td><img src="assets/images/Bandeira ${time1}.png"></td>
        <td>${time1}</td>
        <td>${resultado1}</td>
        <td>x</td>
        <td>${resultado2}</td>
        <td>${time2}</td>
        <td><img src="assets/images/Bandeira ${time2}.png"></td>
      </tr>
      <tr>
        <td>${hora2}</td>
        <td><img src="assets/images/Bandeira ${time6}.png"></td>
        <td>${time6}</td>
        <td>${resultado3}</td>
        <td>x</td>
        <td>${resultado4}</td>
        <td>${time5}</td>
        <td><img src="assets/images/Bandeira ${time5}.png"></td>
      </tr>
      <tr>
        <td>${hora3}</td>
        <td><img src="assets/images/Bandeira ${time3}.png"></td>
        <td>${time3}</td>
        <td>${resultado5}</td>
        <td>x</td>
        <td>${resultado6}</td>
        <td>${time4}</td>
        <td><img src="assets/images/Bandeira ${time4}.png"></td>
      </tr>
    </table>
  `
}
jornada1()

function jornada2() {

  const resultado7 = result7 !== null ? result7 : '';
  const resultado8 = result8 !== null ? result8 : '';
  const resultado9 = result9 !== null ? result9 : '';
  const resultado10 = result10 !== null ? result10 : '';

  const jornada2 = document.getElementById('jornada2')
  jornada2.innerHTML = `
    <h2><strong>2º Rodada ${data2}</strong></h2>
    <table>
      <tr>
        <th>Hora</th>
        <th colspan="7">Jogo</th>
      </tr>
      <tr>
        <td>${hora4}</td>
        <td><img src="assets/images/Bandeira ${time1}.png"></td>
        <td>${time1}</td>
        <td>${resultado7}</td>
        <td>x</td>
        <td>${resultado8}</td>
        <td>${time5}</td>
        <td><img src="assets/images/Bandeira ${time5}.png"></td>
      </tr>
      <tr>
        <td>${hora5}</td>
        <td><img src="assets/images/Bandeira ${time6}.png"></td>
        <td>${time6}</td>
        <td>${resultado9}</td>
        <td>x</td>
        <td>${resultado10}</td>
        <td>${time4}</td>
        <td><img src="assets/images/Bandeira ${time4}.png"></td>
      </tr>
    </table>
  `
}
jornada2()

function jornada3() {
  const jornada3 = document.getElementById('jornada3')

  const resultado11 = result11 !== null ? result11 : '';
  const resultado12 = result12 !== null ? result12 : '';
  const resultado13 = result13 !== null ? result13 : '';
  const resultado14 = result14 !== null ? result14 : '';

  jornada3.innerHTML = `
    <h2><strong>3º Rodada ${data3}</strong></h2>
    <table>
      <tr>
        <th>Hora</th>
        <th colspan="7">Jogo</th>
      </tr>
      <tr>
        <td>${hora6}</td>
        <td><img src="assets/images/Bandeira ${time2}.png"></td>
        <td>${time2}</td>
        <td>${resultado11}</td>
        <td>x</td>
        <td>${resultado12}</td>
        <td>${time5}</td>
        <td><img src="assets/images/Bandeira ${time5}.png"></td>
      </tr>
      <tr>
        <td>${hora7}</td>
        <td><img src="assets/images/Bandeira ${time1}.png"></td>
        <td>${time1}</td>
        <td>${resultado13}</td>
        <td>x</td>
        <td>${resultado14}</td>
        <td>${time6}</td>
        <td><img src="assets/images/Bandeira ${time6}.png"></td>
      </tr>
    </table>
  `
}
jornada3()

function jornada4() {
  const jornada4 = document.getElementById('jornada4')

  const resultado15 = result15 !== null ? result15 : '';
  const resultado16 = result16 !== null ? result16 : '';
  const resultado17 = result17 !== null ? result17 : '';
  const resultado18 = result18 !== null ? result18 : '';

  jornada4.innerHTML = `
    <h2><strong style="color: black;">4º Rodada ${data4}</strong></h2>
    <table>
      <tr>
        <th>Hora</th>
        <th colspan="7">Jogo</th>
      </tr>
      <tr>
        <td>${hora8}</td>
        <td><img src="assets/images/Bandeira ${time2}.png"></td>
        <td>${time2}</td>
        <td>${resultado15}</td>
        <td>x</td>
        <td>${resultado16}</td>
        <td>${time4}</td>
        <td><img src="assets/images/Bandeira ${time4}.png"></td>
      </tr>
      <tr>
        <td>${hora9}</td>
        <td><img src="assets/images/Bandeira ${time5}.png"></td>
        <td>${time5}</td>
        <td>${resultado17}</td>
        <td>x</td>
        <td>${resultado18}</td>
        <td>${time3}</td>
        <td><img src="assets/images/Bandeira ${time3}.png"></td>
      </tr>
    </table>
  `
}
jornada4()

function jornada5() {
  const jornada5 = document.getElementById('jornada5')

  const resultado19 = result19 !== null ? result19 : '';
  const resultado20 = result20 !== null ? result20 : '';
  const resultado21 = result21 !== null ? result21 : '';
  const resultado22 = result22 !== null ? result22 : '';

  jornada5.innerHTML = `
    <h2><strong style="color: black;">5º Rodada ${data5}</strong></h2>
    <table>
      <tr>
        <th>Hora</th>
        <th colspan="7">Jogo</th>
      </tr>
      <tr>
        <td>${hora10}</td>
        <td><img src="assets/images/Bandeira ${time5}.png"></td>
        <td>${time5}</td>
        <td>${resultado19}</td>
        <td>x</td>
        <td>${resultado20}</td>
        <td>${time4}</td>
        <td><img src="assets/images/Bandeira ${time4}.png"></td>
      </tr>
      <tr>
        <td>${hora11}</td>
        <td><img src="assets/images/Bandeira ${time2}.png"></td>
        <td>${time2}</td>
        <td>${resultado21}</td>
        <td>x</td>
        <td>${resultado22}</td>
        <td>${time3}</td>
        <td><img src="assets/images/Bandeira ${time3}.png"></td>
      </tr>
    </table>
  `
}
jornada5()

function jornada6() {
  const jornada6 = document.getElementById('jornada6')
  
  const resultado23 = result23 !== null ? result23 : '';
  const resultado24 = result24 !== null ? result24 : '';
  const resultado25 = result25 !== null ? result25 : '';
  const resultado26 = result26 !== null ? result26 : '';

  jornada6.innerHTML = `
    <h2><strong>6º Rodada ${data6}</strong></h2>
    <table>
      <tr>
        <th>Hora</th>
        <th colspan="7">Jogo</th>
      </tr>
      <tr>
        <td>${hora12}</td>
        <td><img src="assets/images/Bandeira ${time4}.png"></td>
        <td>${time4}</td>
        <td>${resultado23}</td>
        <td>x</td>
        <td>${resultado24}</td>
        <td>${time1}</td>
        <td><img src="assets/images/Bandeira ${time1}.png"></td>
      </tr>
      <tr>
        <td>${hora13}</td>
        <td><img src="assets/images/Bandeira ${time3}.png"></td>
        <td>${time3}</td>
        <td>${resultado25}</td>
        <td>x</td>
        <td>${resultado26}</td>
        <td>${time6}</td>
        <td><img src="assets/images/Bandeira ${time6}.png"></td>
      </tr>
    </table>
    <div class="infoRodada">
      <img src="assets/icons/alert-icon.svg" alt="Alerta"><strong>DATA ALTERADA!</strong> Turquia x Croácia > 05/09 <
    </div>
  `
}
jornada6()

function jornada7() {
  const jornada7 = document.getElementById('jornada7')

  const resultado27 = result27 !== null ? result27 : '';
  const resultado28 = result28 !== null ? result28 : '';
  const resultado29 = result29 !== null ? result29 : '';
  const resultado30 = result30 !== null ? result30 : '';

  jornada7.innerHTML = `
    <h2><strong>7º Rodada ${data7}</strong></h2>
    <table>
      <tr>
        <th>Hora</th>
        <th colspan="7">Jogo</th>
      </tr>
      <tr>
        <td>${hora14}</td>
        <td><img src="assets/images/Bandeira ${time1}.png"></td>
        <td>${time1}</td>
        <td>${resultado27}</td>
        <td>x</td>
        <td>${resultado28}</td>
        <td>${time3}</td>
        <td><img src="assets/images/Bandeira ${time3}.png"></td>
      </tr>
      <tr>
        <td>${hora15}</td>
        <td><img src="assets/images/Bandeira ${time2}.png"></td>
        <td>${time2}</td>
        <td>${resultado29}</td>
        <td>x</td>
        <td>${resultado30}</td>
        <td>${time6}</td>
        <td><img src="assets/images/Bandeira ${time6}.png"></td>
      </tr>
    </table>
  `
}
jornada7()
