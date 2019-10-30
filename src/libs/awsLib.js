import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = file.name;
  console.log("s3upload file: " + file)

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });
  console.log("s3upload stored: " + stored);

  return stored.key;
}
