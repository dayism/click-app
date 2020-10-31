const express = require("express");
const router =  express.Router();
const Handlebars = require("handlebars");

// Controller
const {  renderPaginasW , renderPaginasY , renderPaginasC, renderPaginasF, renderPaginasI, renderPaginasIe, renderPaginasN, renderPaginasO } = require("../controllers/paginasWeb.controllers");

// Get Add
router.get('/paginas/paginaW', renderPaginasW);
router.get('/paginas/paginaY', renderPaginasY);
router.get('/paginas/paginaC', renderPaginasC);
router.get('/paginas/paginaF', renderPaginasF);
router.get('/paginas/paginaI', renderPaginasI);
router.get('/paginas/paginaIe', renderPaginasIe);
router.get('/paginas/paginaN', renderPaginasN);
router.get('/paginas/paginaO', renderPaginasO);


module.exports = router;
