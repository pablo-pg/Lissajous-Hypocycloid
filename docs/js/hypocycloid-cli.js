/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @since May  2022
 * @desc Hypocycloid simulation
 *       The client program of the hypocycloid simulation
 * @see {@link https://academo.org/demos/hypocycloid/}
 *
 */

'use strict';

import {Hypocycloid} from '../../src/hypocycloid.js';
import {HypoController} from '../../src/hypocycloid-contr.js';

/**
 * The main program
 */
function main() {
  const hypocycloid = new Hypocycloid(document.body);
  const controller = new HypoController(document.body, hypocycloid);

  console.log(hypocycloid);
  console.log(controller);
}


main();
