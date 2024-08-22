function calculoMotor(nomina, fechaInicio, sexo) {
    function mesesEmpleo(fechaInicio) {
        const hoy = new Date();
        return (hoy.getFullYear() * 12 + hoy.getMonth()) - (fechaInicio.getFullYear() * 12 + fechaInicio.getMonth());
    }

    function calculoPrincipal() {
        const meses = mesesEmpleo(fechaInicio);
        let minimo, maximo;

        if (sexo === 'm') {
            minimo = obtenerMinimoMasculino(nomina, meses);
        } else {
            minimo = obtenerMinimoFemenino(nomina, meses);
        }

        if (sexo === 'm') {
            maximo = obtenerMaximoMasculino(nomina, meses);
        } else {
            maximo = obtenerMaximoFemenino(nomina, meses);
        }

        const opcion1 = minimo + Math.sqrt(maximo - minimo);
        const opcion2 = minimo + 0.0175 * (maximo - minimo);
        const recomendacion = Math.max(opcion1, opcion2);

        return {
            minimo,
            maximo,
            recomendacion
        };
    }

    function obtenerMinimoMasculino(nomina, meses) {
        const tabla = [
            [100, 1000, 400, 400],
            [400, 600, 200, 300],
            [900, 1000, 200, 500],
            [100, 1000, 1000, 900],
            [600, 1000, 600, 1000]
        ];
        const fila = obtenerIndice(meses, false);
        const columna = ['A', 'B', 'C', 'D'].indexOf(nomina);
        return tabla[fila][columna];
    }

    function obtenerMinimoFemenino(nomina, meses) {
        const tabla = [
            [800, 800, 200, 500],
            [800, 700, 900, 1000],
            [800, 100, 700, 600],
            [600, 600, 800, 400],
            [200, 700, 100, 700]
        ];
        const fila = obtenerIndice(meses, true);
        const columna = ['A', 'B', 'C', 'D'].indexOf(nomina);
        return tabla[fila][columna];
    }

    function obtenerMaximoMasculino(nomina, meses) {
        const tabla = [
            [4900, 4700, 5000, 4400],
            [4700, 4400, 4700, 4700],
            [4600, 5000, 5000, 4300],
            [4600, 4400, 4200, 4900],
            [4500, 4900, 4600, 4300]
        ];
        const fila = obtenerIndice(meses, false);
        const columna = ['A', 'B', 'C', 'D'].indexOf(nomina);
        return tabla[fila][columna];
    }

    function obtenerMaximoFemenino(nomina, meses) {
        const tabla = [
            [4000, 4700, 4600, 5000],
            [4200, 4200, 4900, 4900],
            [4100, 4500, 4600, 4700],
            [4200, 4300, 4700, 5000],
            [4500, 4400, 4000, 4300]
        ];
        const fila = obtenerIndice(meses, true);
        const columna = ['A', 'B', 'C', 'D'].indexOf(nomina);
        return tabla[fila][columna];
    }

    function obtenerIndice(meses, esFemenino) {
        if (esFemenino) {
            if (meses < 24) return 0;
            if (meses === 25) return 1;
            if (meses === 26) return 2;
            if (meses === 27) return 3;
            return 4;
        } else {
            if (meses < 26) return 0;
            if (meses === 27) return 1;
            if (meses === 28) return 2;
            if (meses === 29) return 3;
            return 4;
        }
    }

    return calculoPrincipal();
}

const ejemplos = [
    {
        nomina: 'A',
        fechaInicio: new Date('2022-06-12'),
        sexo: 'f',
    },
    {
        nomina: 'B',
        fechaInicio: new Date('1993-12-30'),
        sexo: 'f',
    },
    {
        nomina: 'C',
        fechaInicio: new Date('2020-09-19'),
        sexo: 'm',
    },
    {
        nomina: 'D',
        fechaInicio: new Date('2019-01-15'),
        sexo: 'm',
    }
];

ejemplos.forEach(ejemplo => {
    const calculo = calculoMotor(ejemplo.nomina, ejemplo.fechaInicio, ejemplo.sexo);
    console.log(`Nómina: ${ejemplo.nomina}`);
    console.log(`Fecha de Inicio: ${ejemplo.fechaInicio.toLocaleDateString()}`);
    console.log(`Sexo: ${ejemplo.sexo}`);
    console.log(`Monto Mínimo: ${calculo.minimo}`);
    console.log(`Monto Máximo: ${calculo.maximo}`);
    console.log(`Recomendación de Crédito: ${calculo.recomendacion}`);
    console.log('');
});
