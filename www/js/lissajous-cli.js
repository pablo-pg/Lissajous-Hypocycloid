/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @since May  2022
 * @desc Lissajous curves
 *       The client program of the lissajous curves
 * @see {@link https://academo.org/demos/lissajous-curves/}
 *
 */

'use strict';

import {Lissajous} from '../../my_modules/lissajous.js';
import {LissajousController} from '../../my_modules/lissajous-contr.js';

/**
 * The main program
 */
function main() {
  const lissajous = new Lissajous(document.body);
  const controller = new LissajousController(document.body, lissajous);


  console.log(lissajous);
  console.log(controller);
}


main();

