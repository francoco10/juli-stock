// --- Cargar stock en tiempo real ---
db.collection("stock").onSnapshot(snapshot => {
  const lista = document.getElementById("listaStock");
  lista.innerHTML = "";

  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement("div");

    div.className = "flex justify-between border-b py-2";
    div.innerHTML = `
      <span>${data.nombre}</span>
      <strong>${data.cantidad}</strong>
    `;

    lista.appendChild(div);
  });
});

// --- Agregar producto ---
function agregarProducto() {
  const nombre = document.getElementById("producto").value.trim();
  const cantidad = parseInt(document.getElementById("cantidad").value.trim());

  if (!nombre || isNaN(cantidad)) {
    alert("Completar nombre y cantidad");
    return;
  }

  db.collection("stock").doc(nombre).set({
    nombre,
    cantidad
  }, { merge: true });

  document.getElementById("producto").value = "";
  document.getElementById("cantidad").value = "";
}
