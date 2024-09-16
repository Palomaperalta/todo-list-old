export async function deleteTodo(id) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/todos/${id}`, {
      method: "DELETE",
    });
    const responseAll = await response.json(); //response
  } catch (error) {
    console.log(error);
  }
}
