/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @since May  2022
 * @desc Lissajous curves
 *       The controller program of the lissajous curves
 * @see {@link https://academo.org/demos/lissajous-curves/}
 *
 */

'use strict';

/**
 * @class Controller
 */
export class LissajousController {
  #lobuleA = document.getElementById('xlobA');
  #lobuleB = document.getElementById('ylobB');
  #amplitudeA = document.getElementById('amplitudA');
  #amplitudeB = document.getElementById('amplitudB');
  #animation = document.getElementById('animation');

  #lissajous = undefined;

  /**
   * Constructor of the controller
   * @constructor
   * @public
   * @param {object} containerElement The HTML element that contains the curves
   * @param {object} lissajous The lissajous object
   */
  constructor(containerElement, lissajous) {
    this.#lissajous = lissajous;

    this.#lobuleA.addEventListener('change', (event) => {
      lissajous.updateLobuleA(this.#lobuleA.value);
    });

    this.#lobuleB.addEventListener('change', (event) => {
      lissajous.updateLobuleB(this.#lobuleB.value);
    });

    this.#amplitudeA.addEventListener('change', (event) => {
      lissajous.updateAmplitudeA(this.#amplitudeA.value);
    });

    this.#amplitudeB.addEventListener('change', (event) => {
      lissajous.updateAmplitudeB(this.#amplitudeB.value);
    });

    this.#animation.addEventListener('change', (event) => {
      lissajous.updateAnimation(event.target.checked);
    });
  }
}
