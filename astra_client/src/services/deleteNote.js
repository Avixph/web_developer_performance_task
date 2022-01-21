import axios from "axios";

export async function deleteNote({ id }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const apiDomain = process.env.REACT_APP_TEST_SERVER;
  const results = await axios({
    config,
    method: "DELETE",
    url: `${apiDomain}/notes/${id}`,
  }).then((res) => {
    return res.data;
  });
  return results;
}
