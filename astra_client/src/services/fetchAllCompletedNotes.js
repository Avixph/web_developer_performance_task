import axios from "axios";

export async function fetchAllCompletedNotes({ id }) {
  const apiDomain = process.env.REACT_APP_TEST_SERVER;
  const results = await axios
    .get(`${apiDomain}/notes/completed`)
    .then((res) => {
      return res.data;
    });
  return results;
}
