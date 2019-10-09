const escala_edades = [
    { min: 0, max: 45, escala: 0 },
    { min: 45, max: 54, escala: 2 },
    { min: 55, max: 64, escala: 3 },
    { min: 64, max: 1000, escala: 4 },
]

const escala_masa_corp = [
    { min: 0, max: 24, escala: 0 },
    { min: 25, max: 30, escala: 1 },
    { min: 30, max: 1000, escala: 3 },
]

const escala_perimetro = [
    { sex: 'M', min: 0, max: 93, escala: 0 },
    { sex: 'M', min: 94, max: 1000, escala: 4 },
    { sex: 'F', min: 0, max: 89, escala: 0 },
    { sex: 'F', min: 90, max: 1000, escala: 4 },
]

const escala_frutas = [
    { freq: 'T', escala: 0 },
    { freq: 'O', escala: 1 }
]

const escala_hiper = [
    { toma: 'S', escala: 2 },
    { toma: 'N', escala: 0 }
]

const escala_glucosa = [
    { tiene: 'S', escala: 5 },
    { tiene: 'N', escala: 0 }
]

const escala_ejercicio = [
    { realiza: 'S', escala: 0 },
    { realiza: 'N', escala: 2 }
]

const escala_diabetes = [
    { tienen: 'S1', escala: 3 },
    { tienen: 'S2', escala: 5 },
    { tienen: 'N', escala: 2 }
]


const nivel_riesgo_escala = [
    {
        min: 12, max: 1000,
        desc: 'Usted tiene un riesgo alto de tener diabetes y prediabetes.', type: 'danger',
        recommendation: 'Sugerimos que usted pida una cita a su EPS o su médico para que le realice una prueba de glicemia en eyuno y reciba consejo sobre cómo cambiar sus hábitos de vida para mejorar su salud.'
    },
    {
        min: 10, max: 12,
        desc: 'Usted tiene un riesgo moderado de tener diabetes y prediabetes.', type: 'warning',
        recommendation: 'Sugerimos que considere aumentar su actividad física, mejorar sus hábitos de alimentación y prestar atención a su peso, para prevenir el desarrollo de diabetes. Los cambios  en su estilo de vida pueden prevenir completamente la diabetes o al menos retrasar su inicio hasta edades ya muy avanzadas.'
    },
    {
        min: 0, max: 9,
        desc: '¡Felicitaciones! Usted tiene un riesgo bajo de desarrollar diabetes.', type: 'success',
        recommendation: 'Le sugerimos que controle su peso regularmente, consuma frutas y verduras diariamente y practique al menos 30 minutos de actividad física con intensidad moderada por día, para así mantener y mejorar su salud.'
    },
]

export function calcular(object: any) {
    let sumatoria = 0;
    let edad = +object.edad;
    let sexo = object.sexo;
    let masa = +object.peso;
    let talla = +object.talla;
    let tallaMts = Math.round((talla / 100) * 100) / 100;
    let perimetro = +object.perimetro;
    let freq_frutas = object.freq_frutas;
    let hipertension = object.hipertension;
    let glucosa = object.glucosa;
    let ejercicio = object.ejercicios;
    let diabetes = object.diabetes;

    //Valor por la edad
    let valor_edad = escala_edades.find(itm => (edad >= itm.min && edad <= itm.max));
    if (valor_edad)
        sumatoria += valor_edad.escala;
    //console.log('Valor Edad', valor_edad.escala);
    //Valor por masa_corporal
    let indice_masa = Math.round((masa / Math.pow(tallaMts, 2)) * 100) / 100;
    //console.log('Indice Masa', indice_masa);
    let valor_masa = escala_masa_corp.find(itm => (indice_masa >= itm.min && indice_masa <= itm.max));
    if (valor_masa)
        sumatoria += valor_masa.escala;
    //console.log('Valor Masa', valor_masa.escala);

    //Valor por perimetro
    let valor_perimetro = escala_perimetro
        .find(itm => (perimetro >= itm.min && perimetro <= itm.max && itm.sex === sexo));
    if (valor_perimetro)
        sumatoria += valor_perimetro.escala;
    //console.log('Valor Perimetro', valor_perimetro.escala);

    //Valor frutas
    let valor_frutas = escala_frutas.find(itm => itm.freq === freq_frutas);
    if (valor_frutas)
        sumatoria += valor_frutas.escala;
    //console.log('Valor Frutas', valor_frutas.escala);

    //Valor Hipertension
    let valor_hiper = escala_hiper.find(itm => itm.toma === hipertension);
    sumatoria += valor_hiper.escala;
    //console.log('Valor Hipertension', valor_hiper.escala);

    //Valor Glucosa
    let valor_glucosa = escala_glucosa.find(itm => itm.tiene === glucosa);
    if (valor_glucosa)
        sumatoria += valor_glucosa.escala;
    //console.log('Valor Glucosa', valor_glucosa.escala);

    //Valor Ejercicio
    let valor_ejercicio = escala_ejercicio.find(itm => itm.realiza === ejercicio);
    if (valor_ejercicio)
        sumatoria += valor_ejercicio.escala;
    //console.log('Valor Ejercicio', valor_ejercicio.escala);

    //Valor Diabetes
    let valor_diabetes = escala_diabetes.find(itm => itm.tienen === diabetes);
    if (valor_diabetes)
        sumatoria += valor_diabetes.escala;
    //console.log('Valor Diabetes', valor_diabetes.escala);


    //console.log('Valor Total ', sumatoria);

    let nivel_riesgo = nivel_riesgo_escala.find(itm => (sumatoria >= itm.min && sumatoria <= itm.max));

    return { resultado: sumatoria, nivel: nivel_riesgo };

}