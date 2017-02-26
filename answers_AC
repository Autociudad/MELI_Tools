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
htmlContent += '    top: 25%;';
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
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, en el catálogo del fabricante nos figura que este es el producto que aplica a tu vehículo. Tenemos el producto en stock. Esperamos tu oferta. Saludos Autociudad\');">Es el producto y stock</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, tenemos el producto en stock. Esperamos tu oferta. Saludos Autociudad\');">En Stock</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, el producto es nuevo con garantía de fabrica por desperfectos de fabricacion. Esperamos tu oferta. Saludos Autociudad\');">Producto Nuevo</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, para estar 100% seguros, te pido los codigos que figuran en tu arranque. Gracias! Saludos Autociudad.\');">Nro de Pieza STR</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, para estar 100% seguros, te pido los codigos que figuran en tu alternador. Gracias! Saludos Autociudad.\');">Nro de Pieza ALT</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Hola, Mercadolibre sólo acepta pagos vía Mercadopago (tarjeta de crédito o rapipago/pagofacil). Gracias! Saludos Autociudad.\');">Sólo MP</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Podes retirarlo en persona por nuestro local en el barrio de mataderos o bien pedir envío por OCA. Saludos Autociudad.\');">Retiro / Envio</a>';
htmlContent += '    <a href="#"><hr></a>';
htmlContent += '    <a href="javascript:updateAnswer(\'La dirección de retiro es Albariño 1578 - CABA (altura Av. Directorio al 5300) - Mataderos - De Lunes a Viernes de 8:00 a 12:00 y de 14:00 a 18:00. Saludos Autociudad.\');">Dirección</a>';
htmlContent += '    <a href="javascript:updateAnswer(\'Necesitas factura A? o consumidor final está bien? Si necesitas factura A, pasanos un CUIT. Saludos Autociudad.\');">Factura A?</a>';


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

htmlContent += '}';

htmlContent += 'openNav();'

htmlContent += '</script>';

$("body").append(htmlContent);
