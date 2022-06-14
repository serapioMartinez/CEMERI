import React from "react";

import './Form.css'
function Form(){
    return (
    <div>
        <h1>Deja una respuesta</h1>
        <p>Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *</p>
        <form>
            <label htmlFor='comentario' >Comentario *</label>
            <textarea id='comenterio' name='comentario' rows="5" required></textarea>
            <label htmlFor='name' >Nombre *</label>
            <input type="text" name='name' id='name' required/>
            <label htmlFor='mail' >Correo electronico *</label>
            <input type="email" name='mail' id='mail' required/>
            <label htmlFor='web' >Web *</label>
            <input type="text" name='web' id='web' required/>
            <input type="checkbox" name="save" id="save"/>
            <label htmlFor='save' >Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</label>
            <input type="submit" id='submit'  value="Publicar el comentario"/>
        </form>
    </div>);
}

export default Form;