import axios from "axios";

export async function createNote({
  // title, description,
  note,
}) {
  console.log("note data", note);
  const apiDomain = process.env.REACT_APP_TEST_SERVER;
  const formData = new FormData();
  // formData.append("title", title);
  // formData.append("description", description);
  const results = axios({
    method: "POST",
    data: {
      title: note.title,
      description: note.description,
    },
    // data: formData,
    url: `${apiDomain}/notes`,
    // headers: { "Content-Type": "multipart/form-data" },
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.data;
  });
  return results;
}
