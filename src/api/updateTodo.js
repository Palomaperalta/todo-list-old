export async function updateTodo(value, id) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hecho: value,
      }),
    });
    const responseAll = await response.json(); //response
  } catch (error) {
    console.log(error);
  }
}
