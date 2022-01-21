import axios from "axios";

export async function editNote({
  // id, title, description, completion
  note,
}) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const apiDomain = process.env.REACT_APP_TEST_SERVER;
  const results = await axios({
    config,
    method: "PUT",
    data: {
      id: note.id,
      title: note.title,
      description: note.description,
      complete: note.completion,
    },
    url: `${apiDomain}/notes/${note.id}`,
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.data;
  });
  return results;
}
