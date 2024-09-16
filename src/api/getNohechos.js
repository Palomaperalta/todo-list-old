export async function getNoHechos() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API}/todos/no-hechos`
    );
    const responseAll = await response.json(); //response

    return responseAll;
  } catch (error) {
    console.log(error);
  }
}
