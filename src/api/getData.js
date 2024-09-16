export async function getData() {
  try {
    console.log(process.env.REACT_APP_API);
    const response = await fetch(`${process.env.REACT_APP_API}/todos`);
    const responseAll = await response.json(); //response

    return responseAll;
  } catch (error) {
    console.log(error);
  }
}
