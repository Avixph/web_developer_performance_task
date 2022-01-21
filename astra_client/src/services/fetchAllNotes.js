import axios from "axios";

export async function fetchAllNotes() {
  const apiDomain = process.env.REACT_APP_TEST_SERVER;
  const results = await axios.get(`${apiDomain}/notes`).then((res) => {
    console.log("your data", res.data);
    return res.data;
  });
  return results;
}
