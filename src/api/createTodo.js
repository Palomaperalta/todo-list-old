export async function createTodo(clientValue) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tarea: clientValue,
        hecho: "true",
      }),
    });
    const responseAll = await response.json(); //response
  } catch (error) {
    console.log(error);
  }
}
