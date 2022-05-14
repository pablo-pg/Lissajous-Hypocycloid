/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @since May  2022
 * @module Hypocycloid
 * @desc Hypocycloid simulation
 *       The class of the hypocycloid simulation
 * @see {@link https://academo.org/demos/hypocycloid/}
 *
 */

'use strict';


/**
 * @class Controller
 */
export class HypoController {
  #aumentarRadio = document.getElementById('aumentarRadio');
  #reducirRadio = document.getElementById('reducirRadio');
  #animar = document.getElementById('animar');
  #ocultarCirculos = document.getElementById('ocultarCirculos');

  #hypocycloid = undefined;

  /**
   * Constructor of the controller
   * @constructor
   * @public
   * @param {object} containerElement The HTML element that contains the curves
   * @param {object} hypocycloid
   */
  constructor(containerElement, hypocycloid) {
    this.#hypocycloid = hypocycloid;

    this.#aumentarRadio.addEventListener('click', (event) => {
      this.#setColor(event);
      this.#hypocycloid.upgradeInnerRadious();
    });

    this.#reducirRadio.addEventListener('click', (event) => {
      this.#setColor(event);
      this.#hypocycloid.downgradeInnerRadious();
    });

    this.#animar.addEventListener('click', (event) => {
      this.#setColor(event);
      this.#animate(event);
    });

    this.#ocultarCirculos.addEventListener('click', (event) => {
      this.#setColor(event);
      const status = event.target.classList.contains('active');
      this.#hypocycloid.showCircles(status);
    });
  }


  /**
 * Change the color of a button
 * @param {string} event Button id
 */
  #setColor(event) {
    const status = event.target.classList.contains('active');

    event.target.classList.add(status ? 'inactive' : 'active');
    event.target.classList.remove(status ? 'active' : 'inactive');
  }

  /**
   * Updates the animation
   * @param {*} event The event
   */
  #animate(event) {
    const status = event.target.classList.contains('active');
    this.#hypocycloid.updateAnimation(status);
  }
}
