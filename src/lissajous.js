/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @since May  2022
 * @module Lissajous
 * @desc Lissajous curves
 *       The class of the lissajous curves
 * @see {@link https://academo.org/demos/lissajous-curves/}
 *
 */

'use strict';

/**
 * @class Lissajous
 * @classdesc Class that prints the Lisasajous curves in a Canvas Enviroment
 */
export class Lissajous {
  /**
   * The center x pos of the canvas
   * @type {number}
   * @private
   */
  #centerX = undefined;

  /**
   * The center y pos of the canvas
   * @type {number}
   * @private
   */
  #centerY = undefined;

  /**
   * The amplitud of the X axis
   * @type {number}
   * @private
   */
  #amplitudA = undefined;

  /**
   * The amplitud of the Y axis
   * @type {number}
   * @private
   */
  #amplitudB = undefined;

  /**
   * The number of lobes in the X axis
   * @type {number}
   * @private
   */
  #lobesAx = undefined;

  /**
   * The number of lobes in the X axis
   * @type {number}
   * @private
   */
  #lobesBy = undefined;

  /**
   * The phase of the curve
   * @type {number}
   * @private
   */
  #phase = undefined;

  /**
   * The velocity of the change of the phase
   * @type {number}
   * @private
   */
  #velocity = undefined;

  /**
   * If the animation is enabled or not
   * @type {boolean}
   * @private
   */
  #animationEnable = true;
  /**
   * The Canvas
   * @type {HTMLElement}
   * @private
   */
  #canvas = document.createElement('CANVAS');

  /**
   * The context of the canvas
   * @type {object}
   * @private
   */
  #ctx = this.#canvas.getContext('2d');

  /**
   * Create a Lissajous curve and sets the default values
   * @constructor
   * @public
   * @param {object} containerElement The HTML element that contains the curves
   */
  constructor(containerElement) {
    this.#amplitudA = 200;
    this.#amplitudB = 200;
    this.#lobesAx = 5;
    this.#lobesBy = 6;
    this.#phase = 1;
    this.#velocity = 0.0125;
    this.#canvas.width = document.documentElement.clientWidth - 200;
    this.#canvas.height = document.documentElement.clientHeight - 150;

    containerElement.querySelector('#canvasLocation').appendChild(this.#canvas);
    this.#centerX = this.#canvas.width / 2;
    this.#centerY = this.#canvas.height / 2;
    this.#ctx.translate(this.#centerX, this.#centerY);

    this.render();
  }

  /**
   * Draw the curve
   * @private
   * @param {object} ctx The Canvas context
   */
  #drawCurves(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';


    for (let t = 0; t < 2 * Math.PI; t += 0.000628319) {
      const xPixel = this.#amplitudA *
          Math.sin(t * this.#lobesAx + this.#phase);
      const yPixel = this.#amplitudB * Math.sin(t * this.#lobesBy);
      ctx.lineTo(xPixel, yPixel);
    }

    ctx.stroke();
  }

  /**
   * Updates the private atribute
   * @param {number} value The new value
   */
  updateLobuleA(value) {
    this.#lobesAx = value;
  }

  /**
   * Updates the private atribute
   * @param {number} value The new value
   */
  updateLobuleB(value) {
    this.#lobesBy = value;
  }

  /**
   * Updates the private atribute
   * @param {number} value The new value
   */
  updateAmplitudeA(value) {
    this.#amplitudA = value;
  }

  /**
   * Updates the private atribute
   * @param {number} value The new value
   */
  updateAmplitudeB(value) {
    this.#amplitudB = value;
  }

  /**
   * Updates the private atribute
   * @param {number} value The new value
   */
  updatePhi(value) {
    this.#phase = value;
  }

  /**
   * Updates the private atribute
   * @param {boolean} onoff The new value
   */
  updateAnimation(onoff) {
    this.#animationEnable = Boolean(onoff);
  }

  /**
   * Render the curves
   */
  render = () => {
    this.#ctx.clearRect(
        -this.#canvas.width,
        -this.#canvas.height,
        this.#canvas.width * 2,
        this.#canvas.height * 2,
    );
    this.#drawCurves(this.#ctx);
    if (this.#animationEnable) {
      this.#phase += this.#velocity;
      requestAnimationFrame(this.render);
    } else {
      requestAnimationFrame(this.render);
    }
  };
}
