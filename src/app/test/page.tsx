// app/test-page/page.tsx
"use client";

import styles from "./test-page.module.css";

export default function TestPage() {
  const openDialog = () => {
    const dialog = document.getElementById("sample-dialog") as HTMLDialogElement;
    dialog?.showModal();
  };

  const closeDialog = () => {
    const dialog = document.getElementById("sample-dialog") as HTMLDialogElement;
    dialog?.close();
  };

  return (
    <main className={styles.container}>
      <h1 id="main-title" className={styles.title}>
        Página de Pruebas Playwright
      </h1>

      {/* Inputs */}
      <section className={styles.section}>
        <h2>Inputs de Texto</h2>
        <input id="text-input" type="text" placeholder="Escribe algo..." className={styles.myInput}/>
        <input id="password-input" type="password" placeholder="Contraseña" className={styles.myInput}/>
        <textarea id="textarea-input" placeholder="Escribe un mensaje" className={styles.myTextarea}></textarea>
      </section>

      {/* Checkboxes y Radios */}
      <section className={styles.section}>
        <h2>Selección</h2>
        <label>
          <input id="checkbox-1" type="checkbox" className={styles.myInput}/> Acepto términos
        </label>
        <label>
          <input id="checkbox-2" type="checkbox" defaultChecked className={styles.myInput}/> Suscribirme
        </label>
        <div className={styles.radioGroup}>
          <label>
            <input id="radio-1" type="radio" name="options" className={styles.myInput}/> Opción 1
          </label>
          <label>
            <input id="radio-2" type="radio" name="options" defaultChecked className={styles.myInput}/> Opción 2
          </label>
        </div>
      </section>

      {/* Select y datalist */}
      <section className={styles.section}>
        <h2>Selección avanzada</h2>
        <select id="select-input" defaultValue="" className={styles.mySelect}>
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="op1">Opción 1</option>
          <option value="op2">Opción 2</option>
        </select>
        <input id="datalist-input" list="fruits" placeholder="Fruta" className={styles.myInput}/>
        <datalist id="fruits">
          <option value="Manzana" />
          <option value="Banana" />
          <option value="Naranja" />
        </datalist>
      </section>

      {/* Botones */}
      <section className={styles.section}>
        <h2>Botones</h2>
        <button id="btn-primary" className={styles.primaryButton}>
          Enviar
        </button>
        <button id="btn-disabled" className={styles.disabledButton} disabled>
          Deshabilitado
        </button>
      </section>

      {/* Links */}
      <section className={styles.section}>
        <h2>Enlaces</h2>
        <a id="link-home" href="/">
          Ir a Home
        </a>
        <a id="link-externo" href="https://playwright.dev" target="_blank">
          Documentación Playwright
        </a>
      </section>

      {/* Tabla */}
      <section className={styles.section}>
        <h2>Tabla</h2>
        <table id="sample-table" className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ana</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Juan</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Lista */}
      <section className={styles.section}>
        <h2>Listas</h2>
        <ul id="unordered-list" className={styles.list}>
          <li>Elemento A</li>
          <li>Elemento B</li>
        </ul>
        <ol id="ordered-list" className={styles.list}>
          <li>Paso 1</li>
          <li>Paso 2</li>
        </ol>
      </section>

      {/* Formulario */}
      <section className={styles.section}>
        <h2>Formulario</h2>
        <form id="sample-form" className={styles.form} onSubmit={(e) => {
          e.preventDefault();
          const nameInput = (document.getElementById("form-name") as HTMLInputElement).value;
          const emailInput = (document.getElementById("form-email") as HTMLInputElement).value;
          const outputName = document.getElementById("output-name");
          const outputEmail = document.getElementById("output-email");
          const output = document.getElementById("output-form");
          output!.hidden = false;
          outputName!.textContent = `Nombre: ${nameInput}`;
          outputEmail!.textContent = `Email: ${emailInput}`;

        }}>
          <input id="form-name" type="text" name="name" placeholder="Nombre"  className={styles.myInput}/>
          <input id="form-email" type="email" name="email" placeholder="Email" className={styles.myInput}/>
          <button id="form-submit" type="submit" className={styles.primaryButton} name="submit">
            Enviar Formulario
          </button>
          <div id='output-form' hidden>
            <p id="output-name"></p>
            <p id="output-email"></p>
          </div>
        </form>
      </section>

       {/* Formulario */}
       <section className={styles.section}>
        <h2>Formulario</h2>
        <form id="sample-form-b" className={styles.form} onSubmit={(e) => {
          e.preventDefault();
          const nameInput = (document.getElementById("form-name-b") as HTMLInputElement).value;
          const emailInput = (document.getElementById("form-email-b") as HTMLInputElement).value;
          const outputName = document.getElementById("output-name-b");
          const outputEmail = document.getElementById("output-email-b");
          const output = document.getElementById("output-form-b");
          output!.hidden = false;
          outputName!.textContent = `Nombre: ${nameInput}`;
          outputEmail!.textContent = `Email: ${emailInput}`;
        }}
          >

          <label htmlFor="form-name-b">Nombre:</label>
          <input id="form-name-b" type="text" name="name-b" className={styles.myInput}/>
          <label htmlFor="form-email-b">Email:</label>
          <input id="form-email-b" type="email" name="email-b" className={styles.myInput}/>
          <button id="form-submit-b" type="submit" className={styles.primaryButton} name="submit-b">
            Enviar Formulario b
          </button>
          <div id='output-form-b' hidden>
            <p id="output-name-b"></p>
            <p id="output-email-b"></p>
          </div>
        </form>
      </section>

      {/* Imagen y multimedia */}
      <section className={styles.section}>
        <h2>Multimedia</h2>
        <img
          id="sample-image"
          src="https://via.placeholder.com/150"
          alt="Imagen de prueba"
        />
        <video id="sample-video" width="200" controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta video.
        </video>
      </section>

      {/* Modal */}
      <section className={styles.section}>
        <h2>Modal</h2>
        <dialog id="sample-dialog" className={styles.dialog}>
          <p>Esto es un modal de prueba</p>
          <button id="close-dialog" onClick={closeDialog} className={styles.primaryButton}>
            Cerrar
          </button>
        </dialog>
        <button id="open-dialog" onClick={openDialog} className={styles.primaryButton}>
          Abrir Modal
        </button>
      </section>
    </main>
  );
}
