/*
    * Este archivo contiene funciones de utilidad que se pueden reutilizar en cualquier parte del proyecto.
*/

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomInt };


