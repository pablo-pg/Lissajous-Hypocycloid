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
 * @class Hypocycloid
 * @classdesc Class that prints the Hypocycloid curves in a Canvas Enviroment
 */
export class Hypocycloid {
  #centerX = undefined;
  #centerY = undefined;
  #bigCircleRadious = undefined;
  #innerCircleRadious = undefined;
  #enableAnimation = true;
  #showCircles = true;
  #phase = 0;
  #velocity = undefined;
  #canvas = document.createElement('CANVAS');
  #ctx = this.#canvas.getContext('2d');

  /**
   * Create a Lissajous curve and sets the default values
   * @constructor
   * @public
   * @param {object} containerElement The HTML element that contains the curves
   */
  constructor(containerElement) {
    this.#bigCircleRadious = 200;
    this.#innerCircleRadious = 60;
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
   * Draw the hypocycloid
   * @private
   * @param {object} ctx The Canvas context
   */
  #draw(ctx) {
    // ctx.beginPath();
    // Computes the center of the little circle
    const xPos = 0 + (this.#bigCircleRadious - this.#innerCircleRadious) *
        Math.cos(this.#phase);
    const yPos = 0 + (this.#bigCircleRadious - this.#innerCircleRadious) *
        Math.sin(this.#phase);

    ctx.moveTo(xPos, yPos);
    // Paints the center of the black point
    ctx.beginPath();
    ctx.arc(xPos, yPos, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();

    const radiousDifference = this.#bigCircleRadious - this.#innerCircleRadious;

    const xPoint = radiousDifference * Math.cos(this.#phase) +
        this.#innerCircleRadious * Math.cos(
            (radiousDifference / this.#innerCircleRadious) * this.#phase);

    const yPoint = radiousDifference * Math.sin(this.#phase) -
            this.#innerCircleRadious * Math.sin(
                (radiousDifference / this.#innerCircleRadious) * this.#phase);

    // Si lo comento pinta de rojo el del centro pero dibuja la linea
    ctx.beginPath(); // ??????????????

    // Paints the red circle
    ctx.arc(xPoint, yPoint, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Paints the big circle
    if (this.#showCircles) {
      ctx.moveTo(this.#bigCircleRadious, 0);
      ctx.arc(0, 0, this.#bigCircleRadious, 0, 2 * Math.PI);

      // Paints the little circle
      ctx.moveTo(xPos + this.#innerCircleRadious, yPos);
      ctx.arc(xPos, yPos, this.#innerCircleRadious, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }


  /**
   * Updates the private atribute
   * @param {boolean} onoff The new value
   */
  updateAnimation(onoff) {
    this.#enableAnimation = Boolean(onoff);
  }

  /**
   * Upgrade the radious of the inner circle
   */
  upgradeInnerRadious() {
    const POINTS_TO_AUMENT = 5;
    const MAX_PERCENTAGE_OF_INNER_RADIOUS = this.#bigCircleRadious * 0.9;
    if (this.#innerCircleRadious + POINTS_TO_AUMENT <
      MAX_PERCENTAGE_OF_INNER_RADIOUS) {
      this.#innerCircleRadious += POINTS_TO_AUMENT;
    }
  }

  /**
   * Upgrade the radious of the inner circle
   */
  downgradeInnerRadious() {
    const POINTS_TO_AUMENT = 5;
    const MIN_PERCENTAGE_OF_INNER_RADIOUS = this.#bigCircleRadious * 0.1;
    if (this.#innerCircleRadious - POINTS_TO_AUMENT >
        MIN_PERCENTAGE_OF_INNER_RADIOUS) {
      this.#innerCircleRadious -= POINTS_TO_AUMENT;
    }
  }

  /**
   * Change the state of showCircles
   * @param {onoff} Button state
   */
   showCircles(onoff) {
    this.#showCircles = Boolean(onoff);
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
    this.#draw(this.#ctx);
    if (this.#enableAnimation) {
      this.#phase -= this.#velocity;
      requestAnimationFrame(this.render);
    } else {
      requestAnimationFrame(this.render);
    }
  };
}
