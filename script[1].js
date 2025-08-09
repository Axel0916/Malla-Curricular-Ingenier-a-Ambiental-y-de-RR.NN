// === Datos de la malla ===
const malla = 
[
  {"id":"EG101","nombre":"Matemática Básica","ciclo":1,"creditos":4,"prereq":[]},
  {"id":"EG103","nombre":"Matemática I","ciclo":1,"creditos":4,"prereq":[]},
  {"id":"EG105","nombre":"Biología General","ciclo":1,"creditos":3,"prereq":[]},
  {"id":"EG107","nombre":"Química General","ciclo":1,"creditos":4,"prereq":[]},
  {"id":"EE109","nombre":"Introducción a la Ingeniería Ambiental y de RR.NN.","ciclo":1,"creditos":3,"prereq":[]},
  {"id":"EG111","nombre":"Redacción Académica","ciclo":1,"creditos":3,"prereq":[]},
  {"id":"EG100","nombre":"Matemática II","ciclo":2,"creditos":4,"prereq":["EG103"]},
  {"id":"EE102","nombre":"Dibujo y Diseño Aplicado a la Ingeniería Ambiental","ciclo":2,"creditos":3,"prereq":["EG101"]},
  {"id":"EE104","nombre":"Química Orgánica","ciclo":2,"creditos":4,"prereq":["EG107"]},
  {"id":"EG106","nombre":"Física I","ciclo":2,"creditos":4,"prereq":["EG101","EG103"]},
  {"id":"EE108","nombre":"Conservación y Aprovechamiento de los RR.NN.","ciclo":2,"creditos":3,"prereq":["EE109"]},
  {"id":"EE110","nombre":"Habilidades Sociales y Ética Ambiental","ciclo":2,"creditos":3,"prereq":["EG111"]},
  {"id":"EG201","nombre":"Matemática III","ciclo":3,"creditos":4,"prereq":["EG100"]},
  {"id":"EE203","nombre":"Estadística Descriptiva","ciclo":3,"creditos":3,"prereq":["EG100"]},
  {"id":"EE205","nombre":"Fisicoquímica","ciclo":3,"creditos":4,"prereq":["EE104","EG106"]},
  {"id":"EG207","nombre":"Física II","ciclo":3,"creditos":4,"prereq":["EG106"]},
  {"id":"EE209","nombre":"Legislación Ambiental y Políticas Públicas","ciclo":3,"creditos":3,"prereq":["EE108"]},
  {"id":"EE211","nombre":"Teledetección y Sistema de Información Geográfica","ciclo":3,"creditos":3,"prereq":["EE102","EE109"]},
  {"id":"EE200","nombre":"Métodos Numéricos","ciclo":4,"creditos":3,"prereq":["EG201"]},
  {"id":"EE202","nombre":"Bioquímica","ciclo":4,"creditos":4,"prereq":["EE104","EG105"]},
  {"id":"EG204","nombre":"Ecología General","ciclo":4,"creditos":3,"prereq":["EG105","EE108"]},
  {"id":"EG206","nombre":"Física III","ciclo":4,"creditos":4,"prereq":["EG201","EG207"]},
  {"id":"EE208","nombre":"Balance de Materia y Energía","ciclo":4,"creditos":3,"prereq":["EG201","EE205"]},
  {"id":"EE210","nombre":"Geología Aplicada a la Ingeniería Ambiental","ciclo":4,"creditos":3,"prereq":["EG207","EE211"]},
  {"id":"EE301","nombre":"Lenguaje de Programación para Ingeniería","ciclo":5,"creditos":2,"prereq":["EE200"]},
  {"id":"EG303","nombre":"Microbiología General","ciclo":5,"creditos":4,"prereq":["EE202","EG204"]},
  {"id":"EE305","nombre":"Análisis Químico e Instrumental","ciclo":5,"creditos":5,"prereq":["EE202"]},
  {"id":"DE307","nombre":"Gestión Sostenible de los RR.NN. y la Biodiversidad","ciclo":5,"creditos":3,"prereq":["EE209","EE210"]},
  {"id":"EE309","nombre":"Mecánica de Fluidos","ciclo":5,"creditos":4,"prereq":["EE208"]},
  {"id":"EE311","nombre":"Sociología Ambiental","ciclo":5,"creditos":3,"prereq":["EE110","EE209"]},
  {"id":"EE300","nombre":"Modelamiento y Simulación Ambiental","ciclo":6,"creditos":3,"prereq":["EE301"]},
  {"id":"EE302","nombre":"Microbiología Ambiental","ciclo":6,"creditos":4,"prereq":["EG303"]},
  {"id":"EE304","nombre":"Procesos Unitarios Ambientales","ciclo":6,"creditos":4,"prereq":["EE309"]},
  {"id":"DE306","nombre":"Economía Ambiental y de RR.NN.","ciclo":6,"creditos":4,"prereq":["DE307"]},
  {"id":"EE308","nombre":"Meteorología y Climatología","ciclo":6,"creditos":4,"prereq":["EG106","EE203"]},
  {"id":"EE310","nombre":"Metodología de Investigación Científica","ciclo":6,"creditos":3,"prereq":["EG111","EE311"]},
  {"id":"DE401","nombre":"Contaminación y Control de Suelos","ciclo":7,"creditos":4,"prereq":["EE302"]},
  {"id":"DE403","nombre":"Contaminación y Control de Aire","ciclo":7,"creditos":4,"prereq":["EE305"]},
  {"id":"DE405","nombre":"Hidrología Aplicada","ciclo":7,"creditos":4,"prereq":["EE308","EE203"]},
  {"id":"EE407","nombre":"Instrumentación y Control de Procesos","ciclo":7,"creditos":4,"prereq":["EE304"]},
  {"id":"EE409","nombre":"Estadística para la Investigación Científica","ciclo":7,"creditos":3,"prereq":["EE203","EE310"]},
  {"id":"EE411","nombre":"Geomorfología Aplicada a la Ingeniería Ambiental","ciclo":7,"creditos":3,"prereq":["EE210","DE307"]},
  {"id":"DE400","nombre":"Producción y Tecnologías Limpias","ciclo":8,"creditos":3,"prereq":["EE302","EE304"]},
  {"id":"DE402","nombre":"Recursos Energéticos, Minería y Petróleo","ciclo":8,"creditos":3,"prereq":["DE401"]},
  {"id":"EE404","nombre":"Formulación de Proyectos Ambientales","ciclo":8,"creditos":5,"prereq":["DE306"]},
  {"id":"DE406","nombre":"Riesgo Ambiental","ciclo":8,"creditos":4,"prereq":["EE304","EE407"]},
  {"id":"DE408","nombre":"Contaminación y Control de Agua","ciclo":8,"creditos":4,"prereq":["EE302","EE305"]},
  {"id":"DE410","nombre":"Investigación Ambiental I","ciclo":8,"creditos":3,"prereq":["EE310","EE409"]},
  {"id":"DE501","nombre":"Tratamiento de Aguas Residuales","ciclo":9,"creditos":3,"prereq":["DE402","DE408"]},
  {"id":"DE503","nombre":"Gestión Integral de Residuos Sólidos","ciclo":9,"creditos":3,"prereq":["DE402","DE406"]},
  {"id":"EE505","nombre":"Estudios de Impacto Ambiental","ciclo":9,"creditos":4,"prereq":["EE300","EE404"]},
  {"id":"EE507","nombre":"Sistemas Integrados de Gestión","ciclo":9,"creditos":4,"prereq":["EE209","DE406"]},
  {"id":"EE509","nombre":"Gestión Integral de Cuencas","ciclo":9,"creditos":3,"prereq":["DE408","DE405"]},
  {"id":"DE511","nombre":"Investigación Ambiental II","ciclo":9,"creditos":3,"prereq":["DE410"]},
  {"id":"DE500","nombre":"Biotecnología Ambiental","ciclo":10,"creditos":4,"prereq":["EE302","DE400"]},
  {"id":"DE502","nombre":"Diseño de Plantas de Tratamiento","ciclo":10,"creditos":3,"prereq":["DE501","DE503"]},
  {"id":"EE504","nombre":"Gestión Ambiental","ciclo":10,"creditos":4,"prereq":["DE503","EE507"]},
  {"id":"EE506","nombre":"Fiscalización y Auditoría Ambiental","ciclo":10,"creditos":3,"prereq":["EE507"]},
  {"id":"EE508","nombre":"Planificación y Ordenamiento Territorial","ciclo":10,"creditos":4,"prereq":["EE411","EE509"]},
  {"id":"DE510","nombre":"Investigación Ambiental III","ciclo":10,"creditos":3,"prereq":["DE511"]}
]
;

// Cargar progreso guardado
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

// Renderizar la malla
const contenedor = document.getElementById("malla");

function renderMalla() {
  contenedor.innerHTML = "";
  malla.forEach(curso => {
    const div = document.createElement("div");
    div.className = "curso";

    if (aprobados.includes(curso.id)) {
      div.classList.add("aprobado");
    } else {
      const cumple = curso.prereq.every(pr => aprobados.includes(pr));
      if (!cumple && curso.prereq.length > 0) {
        div.classList.add("bloqueado");
      }
    }

    div.innerHTML = `<strong>${curso.id}</strong><br>${curso.nombre}<br><small>${curso.creditos} créditos</small>`;
    div.onclick = () => toggleCurso(curso);
    contenedor.appendChild(div);
  });
}

function toggleCurso(curso) {
  const cumple = curso.prereq.every(pr => aprobados.includes(pr));
  if (!cumple && !aprobados.includes(curso.id)) return;

  if (aprobados.includes(curso.id)) {
    aprobados = aprobados.filter(id => id !== curso.id);
  } else {
    aprobados.push(curso.id);
  }
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
  renderMalla();
}

renderMalla();
