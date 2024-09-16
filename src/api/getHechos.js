export async function getHechos() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/todos/hechos`);
    const responseAll = await response.json(); //response

    return responseAll;
  } catch (error) {
    console.log(error);
  }
}
