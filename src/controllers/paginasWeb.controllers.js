const paginasCtrl = {};
const PaginaW = require ('../models/paginaW');

paginasCtrl.renderPaginasW = async(req, res) =>
{
    const paginaW= await PaginaW.findOne({name:"WhatsApp Web"});
    res.render('paginas/paginaW',{paginaW} );
};

paginasCtrl.renderPaginasY = async(req, res) =>
{
    const paginaY= await PaginaW.findOne({name:"Youtube"});
    res.render('paginas/paginaY',{paginaY} );
};

paginasCtrl.renderPaginasF = async(req, res) =>
{
    const paginaF= await PaginaW.findOne({name:"Facebook"});
    res.render('paginas/paginaF',{paginaF} );
};


paginasCtrl.renderPaginasC = async(req, res) =>
{
    const paginaC= await PaginaW.findOne({name:"El Comercio"});
    res.render('paginas/paginaC',{paginaC} );
};

paginasCtrl.renderPaginasI= async(req, res) =>
{
    const paginaI= await PaginaW.findOne({name:"Instagram"});
    res.render('paginas/paginaI',{paginaI} );
};

paginasCtrl.renderPaginasIe= async(req, res) =>
{
    const paginaIe= await PaginaW.findOne({name:"IESS"});
    res.render('paginas/paginaIe',{paginaIe} );
};

paginasCtrl.renderPaginasN= async(req, res) =>
{
    const paginaN= await PaginaW.findOne({name: "Netflix"});
    res.render('paginas/paginaN',{paginaN} );
};

paginasCtrl.renderPaginasO= async(req, res) =>
{
    const paginaO= await PaginaW.findOne({name:"Outlook"});
    res.render('paginas/paginaO',{paginaO} );
};

 
module.exports = paginasCtrl;