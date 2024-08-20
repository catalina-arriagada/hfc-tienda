import React from "react";

const Producto = () => {
    return(
        <main className="main">
            <h3 className="producto_titulo"></h3>
            <div className="producto">
                <img className="producto_imagen" src="" alt="Imagen del Producto" />
                <div className="producto_contenido">
                    <p>Descripción</p>
                    <form method="POST" className="formulario" action="carritos"> 
                        <div className="form-c">
                            <select className="formulario__campo" name="colorId" >
                            <option disabled selected>-- Selecciona Color --</option>
                            </select>
                        </div>
                        <div className="form-c">
                            <select className="formulario__campo" name= "tamanoId">
                                <option disabled selected>-- Selecciona Tamano --</option>
                            </select>
                        </div>
                        <div className="form-c">        
                            <input className="formulario__campo" value="Cantidad:" readonly onmousedown="return false"></input>
                        </div>
                        <div className="form-c">
                            <input className="formulario__campo" type="number" placeholder="Cantidad" min="1" max="99" value="1" name="cantidad"></input>
                        </div>
                        <div>
                            <input className="formulario__submit" type="submit" value="agregar"/>
                            <br />
                            <a className="formulario__submit" href="carritos.php" style={{backgroundColor:"silver"}}>Mi carrito</a>
                            <br />
                        </div>  
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Producto;