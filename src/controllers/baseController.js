/**
 * BaseController
 * Abstract Class, to be inherited by all controllers across the application
 */
const express = require('express')

class BaseController {

    /**
     * Abstract method to be implemented by decendants 
     * @param {Request}     req 
     * @param {Response}    res 
     * @param {Next}        next 
     */
    executeImpl(req, res, next) {
        throw new Error('You have to implement the method executeImpl!');
    }

    /**
     * Excutes controller's functionality
     * @param {Request}     req 
     * @param {Response}    res 
     * @param {Next}        next 
     */
    async execute(req, res, next) {
        try {
            await this.executeImpl(req, res, next);
        } catch (err) {
            console.error(`[BaseController]: Error caught by controller`);
            console.error(err);
        }
    }
}

module.exports = BaseController
