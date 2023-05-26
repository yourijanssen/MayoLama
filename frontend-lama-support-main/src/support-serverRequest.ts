import { subID, userID } from "./support.js";
/** This function is used to create a new post support request. */

export async function sendSubData() {
  let userId: number = userID();
  let subId: string = subID();
  const request = new Request("http://localhost:4001/support");
  const headers = new Headers();
  headers.append("Content-Type", "application/json"); // content is json
  headers.append("Accept", "application/json"); // only json is accepted back from server.

  let content = JSON.stringify({ userId: userId, subId: subId });
  let rawData: Response = await fetch(request, {
    method: "POST",
    headers,
    body: content,
  });
}
