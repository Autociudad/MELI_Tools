var htmlContent = '';

htmlContent += '<style>';
htmlContent += '.overlay {';
htmlContent += '    height: 100%;';
htmlContent += '    width: 0;';
htmlContent += '    position: fixed;';
htmlContent += '    z-index: 99;';
htmlContent += '    top: 0;';
htmlContent += '    left: 0;';
htmlContent += '    background-color: rgb(0,0,0);';
htmlContent += '    background-color: rgba(0,0,0, 0.9);';
htmlContent += '    overflow-x: hidden;';
htmlContent += '    transition: 0.5s;';
htmlContent += '}';

htmlContent += '.overlay-content {';
htmlContent += '    position: relative;';
htmlContent += '    top: 10%;';
htmlContent += '    width: 100%;';
htmlContent += '    text-align: center;';
htmlContent += '    margin-top: 30px;';
htmlContent += '}';

htmlContent += '.overlay a {';
htmlContent += '    padding: 8px;';
htmlContent += '    text-decoration: none;';
htmlContent += '    font-size: 14px;';
htmlContent += '    color: #818181;';
htmlContent += '    display: block;';
htmlContent += '    transition: 0.3s;';
htmlContent += '}';

htmlContent += '.overlay a:hover, .overlay a:focus {';
htmlContent += '    color: #f1f1f1;';
htmlContent += '}';

htmlContent += '.overlay .closebtn {';
htmlContent += '    position: absolute;';
htmlContent += '    top: 20px;';
htmlContent += '    right: 45px;';
htmlContent += '    font-size: 60px;';
htmlContent += '}';

htmlContent += '@media screen and (max-height: 450px) {';
htmlContent += '  .overlay a {font-size: 20px}';
htmlContent += '  .overlay .closebtn {';
htmlContent += '    font-size: 40px;';
htmlContent += '    top: 15px;';
htmlContent += '    right: 35px;';
htmlContent += '  }';
htmlContent += '}';
htmlContent += '</style>';

htmlContent += '<div id="myNav" class="overlay">';
htmlContent += '  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
htmlContent += '  <div class="overlay-content">';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, en el catálogo del fabricante nos figura que este es el producto que aplica a tu vehículo. Tenemos el producto en stock. Esperamos tu compra. Saludos Autociudad\');">Es el producto y stock</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, el producto es nuevo con garantía de fabrica por desperfectos de fabricacion. Esperamos tu compra. Saludos Autociudad\');">Producto Nuevo</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, tenemos el producto en stock. Esperamos tu compra. Saludos Autociudad\');">En Stock</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, el artículo que corresponde a tu vehiculo es el siguiente:   Saludos Autociudad.\');">Corresponde Artículo:</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, en este momento no tenemos disponible en stock el artículo que andas necesitando. Esperamos poder ayudarte la próxima. Saludos Autociudad.\');">No tenemos el artículo</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, para estar seguros, te pido los codigos que figuran en tu arranque. Gracias! Saludos Autociudad.\');">Nro de Pieza STR</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, para estar seguros, te pido los codigos que figuran en tu alternador. Gracias! Saludos Autociudad.\');">Nro de Pieza ALT</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, para estar seguros, te pido nos pases los 17 digitos del nro de chasis (figura en la cedula verde). Gracias! Saludos Autociudad.\');">Nro de Chasis</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, MercadoLibre no permite pasar datos de contacto en las preguntas. Una vez que realices la compra y el pago recibiras todos los datos del vendedor. Saludos Autociudad.\');">ML Datos Contacto</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, desde hace un tiempo MercadoLibre sólo permite abonar utilizando MercadoPago (esto es con tarjeta o en efectivo vía Pago Fácil o similar). Saludos Autociudad\');">ML Formas de pago</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Podes retirarlo en persona por nuestro local en el barrio de mataderos o bien pedir envío por OCA. Saludos Autociudad.\');">Retiro / Envio</a>';
htmlContent += '    <a href="#"><hr></a>';
htmlContent += '    <a href="javascript:updateAnswer(\'La dirección de retiro es Albariño 1578 - CABA (altura Av. Directorio al 5300) - Mataderos - De Lunes a Viernes de 8:00 a 12:00 y de 14:00 a 18:00. Saludos Autociudad.\');">Dirección</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, necesitas factura A o consumidor final está bien? Si necesitas factura A, pasanos un CUIT. Saludos Autociudad.\');">Factura A?</a>';

htmlContent += '  </div>';
htmlContent += '</div>';
htmlContent += '<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>';

htmlContent += '<script>';
htmlContent += '    function openNav() {';
htmlContent += '        document.getElementById("myNav").style.width = "20%";';
htmlContent += '    }';

htmlContent += '    function closeNav() {';
htmlContent += '        document.getElementById("myNav").style.width = "0%";';
htmlContent += '    }';

htmlContent += 'function updateAnswer(answerText) {';
//htmlContent += '    $("textarea[data-js=\'question-replay__textarea\']:eq(0)").val(answerText);';

htmlContent += 'if ($("textarea[data-js=\'question-replay__textarea\']:eq(0)").length != 0) {';
htmlContent += '    $("textarea[data-js=\'question-replay__textarea\']:eq(0)").val(answerText);';
htmlContent += '    }';

htmlContent += 'if ($(\'#sectionMessages iframe\').contents().find(\'textarea\').length != 0) {';
htmlContent += '    $(\'#sectionMessages iframe\').contents().find(\'textarea\').val(answerText);';
htmlContent += '    }';

htmlContent += 'if ($("textarea[name=\'txtNewMessage\']:eq(0)").length != 0) {';
htmlContent += '    $("textarea[name=\'txtNewMessage\']:eq(0)").val(answerText);';
htmlContent += '    $("button[class=\'ch-btn message-controls__action-primary\']").prop( "disabled", false );';
htmlContent += '    }';

htmlContent += '}';

htmlContent += 'function getObjects(obj, key, val) {';
htmlContent += '    var objects = [];';
htmlContent += '    for (var i in obj) {';
htmlContent += '        if (!obj.hasOwnProperty(i)) continue;';
htmlContent += '        if (typeof obj[i] == "object") {';
htmlContent += '            objects = objects.concat(getObjects(obj[i], key, val));';
htmlContent += '        } else if (i == key && obj[key] == val) {';
htmlContent += '            objects.push(obj);';
htmlContent += '        }';
htmlContent += '    }';
htmlContent += '    return objects;';
htmlContent += '}';

htmlContent += 'function updatePublicationProductProductCode(article) {';
htmlContent += '    var publicationId = article.attr("data-id").split("-")[1];';
htmlContent += '    var urlJson = "https://api.mercadolibre.com/items/" + publicationId;';
htmlContent += '    $.getJSON(urlJson).done(function (data) {';
htmlContent += '        article.parent().after(getObjects(data.attributes, "id", "PART_NUMBER")[0].value_name);';
htmlContent += '    });';
htmlContent += '}';

htmlContent += 'function updateAllPublicationsProductCode() {';
htmlContent += '    $("article[class*=item-header]").each(function () { updatePublicationProductProductCode($(this)); });';
htmlContent += '}';

htmlContent += 'openNav();'

htmlContent += '</script>';

/*
$("p[data-js='question-row-text']").html().trim() <-- obtiene el texto de la pregunta (cuando hay una sola)
$("textarea[data-js='question-replay__textarea']").val() <-- obtiene el texto del text area de la respuesta (cuando hay una sola)

$("textarea[data-js='question-replay__textarea']").val("setea el valor") <-- setea el texto del text area de la respuesta (cuando hay una sola)
$("textarea[data-js='question-replay__textarea']:eq(0)").val("que miras gil??") <-- setea el texto del text area de la respuesta (opción 0 de las N posibles)
*/

$("body").append(htmlContent);
