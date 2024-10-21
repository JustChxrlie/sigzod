
const signosZodiacales = {
    Aries: {
        fecha: "21/03 - 20/04",
        caracteristicas: "Valiente, enérgico, y entusiasta.",
        prediccion: "Hoy te enfrentarás a nuevos desafíos con confianza.",
        datoCurioso: "Aries es un signo de fuego y está regido por Marte."
    },
    Tauro: {
        fecha: "21/04 - 20/05",
        caracteristicas: "Práctico, decidido, y confiable.",
        prediccion: "Hoy sentirás la necesidad de enfocarte en tus metas.",
        datoCurioso: "Tauro es un signo de tierra regido por Venus."
    },
    Géminis: {
        fecha: "21/05 - 20/06",
        caracteristicas: "Versátil, curioso, y comunicativo.",
        prediccion: "Te sorprenderás por una interesante conversación hoy.",
        datoCurioso: "Géminis es un signo de aire y está regido por Mercurio."
    },
    Cáncer: {
        fecha: "21/06 - 22/07",
        caracteristicas: "Sensible, protector, y empático.",
        prediccion: "Tu intuición estará más fuerte que nunca hoy.",
        datoCurioso: "Cáncer es un signo de agua y está regido por la Luna."
    },
    Leo: {
        fecha: "23/07 - 22/08",
        caracteristicas: "Orgulloso, generoso, y carismático.",
        prediccion: "Hoy brillarás en cualquier actividad que emprendas.",
        datoCurioso: "Leo es un signo de fuego regido por el Sol."
    },
    Virgo: {
        fecha: "23/08 - 22/09",
        caracteristicas: "Analítico, meticuloso, y trabajador.",
        prediccion: "Te sentirás motivado a organizar tu entorno.",
        datoCurioso: "Virgo es un signo de tierra regido por Mercurio."
    },
    Libra: {
        fecha: "23/09 - 22/10",
        caracteristicas: "Justo, equilibrado, y encantador.",
        prediccion: "Hoy buscarás armonía en tus relaciones personales.",
        datoCurioso: "Libra es un signo de aire regido por Venus."
    },
    Escorpio: {
        fecha: "23/10 - 21/11",
        caracteristicas: "Apasionado, intenso, y valiente.",
        prediccion: "Hoy descubrirás algo oculto o misterioso.",
        datoCurioso: "Escorpio es un signo de agua regido por Plutón."
    },
    Sagitario: {
        fecha: "22/11 - 21/12",
        caracteristicas: "Aventurero, optimista, y sincero.",
        prediccion: "Te sentirás inspirado a planear una nueva aventura.",
        datoCurioso: "Sagitario es un signo de fuego regido por Júpiter."
    },
    Capricornio: {
        fecha: "22/12 - 19/01",
        caracteristicas: "Ambicioso, disciplinado, y prudente.",
        prediccion: "Hoy estarás enfocado en tus responsabilidades.",
        datoCurioso: "Capricornio es un signo de tierra regido por Saturno."
    },
    Acuario: {
        fecha: "20/01 - 18/02",
        caracteristicas: "Independiente, innovador, y humanitario.",
        prediccion: "Hoy te surgirán ideas fuera de lo común.",
        datoCurioso: "Acuario es un signo de aire regido por Urano."
    },
    Piscis: {
        fecha: "19/02 - 20/03",
        caracteristicas: "Compasivo, soñador, y empático.",
        prediccion: "Te sentirás inspirado por una experiencia artística.",
        datoCurioso: "Piscis es un signo de agua regido por Neptuno."
    }
};


function iniciarJuego() {
    let seguirJugando = true;

    while (seguirJugando) {
        let signo = prompt("¿Cuál es tu signo zodiacal?").trim();
        signo = signo.charAt(0).toUpperCase() + signo.slice(1).toLowerCase(); 

        if (signosZodiacales[signo]) {
            const info = signosZodiacales[signo];
            alert(`Signo: ${signo}\nFecha: ${info.fecha}\nCaracterísticas: ${info.caracteristicas}\nPredicción: ${info.prediccion}\nDato curioso: ${info.datoCurioso}`);
        } else {
            alert("Ese no parece ser un signo válido. Por favor, intenta de nuevo.");
        }

        seguirJugando = confirm("¿Quieres volver a jugar?");
    }
}


document.getElementById("startGameBtn").addEventListener("click", iniciarJuego);