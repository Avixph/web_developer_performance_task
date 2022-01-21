import axios from "axios";

export async function fetchNote({ id }) {
  const apiDomain = process.env.REACT_APP_TEST_SERVER;
  const results = await axios.get(`${apiDomain}/notes/${id}`).then((res) => {
    return res.data;
  });
  return results;
}
