fetch("../docs/json/tabela.json")
  .then(response => {
    if(!response.ok) throw new Error("Erro carregando json")
    return response.json()
  })
  .then(data => {
    const tbody = document.getElementById("tbody");
    console.log(data)
    data.receitas.forEach(r => {
      const tr = document.createElement("tr");
      const tdNome = document.createElement("td");
      const tdTempPrep = document.createElement("td");
      const tdIngre = document.createElement("td");
      const tdTipo = document.createElement("td");

      tdNome.innerText = r.nome;
      tdTempPrep.textContent = r.tempo_preparo;
      tdIngre.textContent = r.ingredientes_principais;
      tdTipo.textContent = r.tipo;

      tr.appendChild(tdNome);
      tr.appendChild(tdTempPrep);
      tr.appendChild(tdIngre);
      tr.appendChild(tdTipo);

      tbody.appendChild(tr);
    })
  })
  .catch(
    err => console.log(err)
  )



console.log("Saída do arquivo  script.js...");