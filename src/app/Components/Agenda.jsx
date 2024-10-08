'use client';
import React from 'react';

const Agenda = () => {
  return (
    <main className="main">
      <section className="service__title">
        <h3 className="design__title">Agendar Cita</h3>
      </section>
      <section className="container-testimonials">
        <form>
          <h3 className="section__title">
            Pide tu cita para nuestro salón de belleza aquí y te contactaremos a la brevedad
          </h3>
          <p className="testimonials__txt" style={{ color: 'red', marginTop: '15px' }}>
            * Campos obligatorios
          </p>
          <div className="testimonials__txt">
            <label>
              Fecha de Cita<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="date"
              name="fecha"
              min="2022-07-05"
              max="2022-12-30"
              placeholder="mm/dd/aaaa"
              required
            />
          </div>
          <div className="testimonials__txt">
            <label>
              Hora de Cita<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="time"
              name="hora"
              min="11:30"
              max="17:00"
              placeholder="12:30"
              required
            />
          </div>
          <div className="testimonials__txt">
            <label>
              Servicio Solicitado<span style={{ color: 'red' }}>*</span>
            </label>
            <select name="servicio" required>
              <option value="" disabled>
                Seleccione...
              </option>
              <option value="Corte">Corte</option>
              <option value="Teñir">Teñir</option>
            </select>
          </div>
          <div className="testimonials__txt">
            <label>
              Altura del Cabello<span style={{ color: 'red' }}>*</span>
            </label>
            <select name="alturacabello" required>
              <option value="" disabled>
                Seleccione...
              </option>
              <option value="corto">Corto</option>
              <option value="medio">Medio</option>
              <option value="largo">Largo</option>
            </select>
          </div>
          <p className="testimonials__txt" style={{ marginTop: '15px', color: 'red' }}>
            Altura del cabello Corto: hasta abajo de las orejas, Medio: hasta los hombros, Largo: hasta la cintura.
          </p>
          <div className="testimonials__txt">
            <label>Información extra:</label>
            <textarea
              name="comentarios"
              placeholder="Ingrese información extra sobre su pedido aquí"
              rows="6"
              style={{ width: '100%' }}
            ></textarea>
          </div>
          <div className="testimonials__txt">
            <input type="submit" value="Agendar" className="welcome__btn" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Agenda;
