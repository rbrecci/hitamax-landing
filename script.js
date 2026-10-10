'use strict';

const HORARIO_CONFIRMADO = false;
const FUSO = "America/Sao_Paulo";

if (typeof document !== "undefined") document.documentElement.classList.add("js");

function minutosDe(horario) {
  const partes = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(horario);
  return partes ? Number(partes[1]) * 60 + Number(partes[2]) : NaN;
}

function horaDe(minutos) {
  return `${String(Math.floor(minutos / 60)).padStart(2, "0")}:${String(minutos % 60).padStart(2, "0")}`;
}

function calcularStatus(agora, horarios) {
  const hoje = horarios.find((horario) => horario.dia === agora.dia);

  if (hoje && agora.minutos >= hoje.abre && agora.minutos < hoje.fecha) {
    return { estado: "aberto", texto: `Aberto agora, fecha às ${horaDe(hoje.fecha)}` };
  }

  if (hoje && agora.minutos < hoje.abre) {
    return { estado: "fechado", texto: `Fechado, abre hoje às ${horaDe(hoje.abre)}` };
  }

  const nomesDosDias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

  for (let dias = 1; dias <= 7; dias += 1) {
    const proximoDia = (agora.dia + dias) % 7;
    const proximoHorario = horarios.find((horario) => horario.dia === proximoDia);

    if (proximoHorario) {
      const quando = dias === 1 ? "amanhã" : dias === 7 ? "em 7 dias" : nomesDosDias[proximoDia];
      return { estado: "fechado", texto: `Fechado, abre ${quando} às ${horaDe(proximoHorario.abre)}` };
    }
  }

  return { estado: "fechado", texto: "Fechado agora" };
}

if (typeof document !== "undefined") {
  const tabela = document.querySelector("#tabela-horarios");
  const status = document.querySelector("#status-aberto");
  const aviso = document.querySelector("#horario-aviso");

  if (aviso) aviso.hidden = HORARIO_CONFIRMADO;

  if (tabela) {
    const formatador = new Intl.DateTimeFormat("pt-BR", {
      timeZone: FUSO,
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    const nomesDosDias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

    function atualizarStatus() {
      const linhas = [...tabela.querySelectorAll("tbody tr")];
      const horarios = linhas.map((linha) => ({
        dia: Number(linha.dataset.dia),
        abre: minutosDe(linha.dataset.abre),
        fecha: minutosDe(linha.dataset.fecha),
      })).filter(({ dia, abre, fecha }) =>
        Number.isInteger(dia) && dia >= 0 && dia <= 6 &&
        Number.isFinite(abre) && Number.isFinite(fecha) && abre < fecha
      );

      if (horarios.length === 0) return;

      const partes = formatador.formatToParts(new Date());
      const valorDe = (tipo) => partes.find((parte) => parte.type === tipo).value;
      const dia = nomesDosDias.indexOf(valorDe("weekday"));
      const minutos = Number(valorDe("hour")) * 60 + Number(valorDe("minute"));

      for (const linha of linhas) {
        const ehHoje = Number(linha.dataset.dia) === dia;
        linha.classList.toggle("hoje", ehHoje);
        if (ehHoje) linha.setAttribute("aria-current", "date");
        else linha.removeAttribute("aria-current");
      }

      if (status) {
        const resultado = calcularStatus({ dia, minutos }, horarios);
        status.textContent = resultado.texto;
        status.dataset.estado = resultado.estado;
      }
    }

    atualizarStatus();
    window.setInterval(atualizarStatus, 60_000);
  }

  const cabecalho = document.querySelector(".site-header");
  if (cabecalho) {
    const atualizarCabecalho = () => cabecalho.classList.toggle("is-scrolled", window.scrollY > 8);
    atualizarCabecalho();
    window.addEventListener("scroll", atualizarCabecalho, { passive: true });
  }

  const botaoMenu = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#menu");

  if (botaoMenu && menu) {
    function definirMenu(aberto) {
      botaoMenu.setAttribute("aria-expanded", String(aberto));
      menu.classList.toggle("is-open", aberto);
    }

    botaoMenu.addEventListener("click", () => {
      definirMenu(botaoMenu.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape" && botaoMenu.getAttribute("aria-expanded") === "true") {
        definirMenu(false);
        botaoMenu.focus();
      }
    });

    menu.addEventListener("click", (evento) => {
      if (evento.target.closest("a")) definirMenu(false);
    });
  }

  const elementos = [...document.querySelectorAll("[data-reveal]")];
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
    elementos.forEach((elemento) => elemento.classList.add("is-visible"));
  } else {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target);
        }
      });
    });
    elementos.forEach((elemento) => observador.observe(elemento));
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calcularStatus, minutosDe };
}
