const LoginModule = () => {
  /** Coleta dos elementos de interface */
  const form = document.querySelector("body > section > div > div > div > div > form");
  const botao = form.querySelector("button");

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;

    /** Construir um FormData */
    const data = new FormData(form)

    /** Percorrer cada elemento */
    for (let pair of data.entries()) {
      console.log(pair);
    }

    const fetchConfig = { method: "POST", body: data };

    fetch("data.json" /*, fetchConfig */).then((result) => {
      console.log(result)

      if (result.status === 200) {
        result.json().then((content) => {
          const email = data.get("email");

          const found = content
            .filter(item => item.email === email)
            .map(item => item.name)

          const alert = document.querySelector(".alert");

          alert.classList.remove("alert-success");
          alert.classList.remove("alert-danger");

          if (found.length > 0) {
            const userName = found[0];

            alert.innerHTML = `Bem vindo <b>${userName}</b>`;
            alert.classList.add("alert-success");
          } else {
            alert.innerHTML = "Usuário não encontrado!";
            alert.classList.add("alert-danger");
          }

          alert.style.display = "block";
        })
      }
    })
  });
}

export default LoginModule;