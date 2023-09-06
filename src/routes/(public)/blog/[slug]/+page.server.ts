import { error, type LoadEvent } from "@sveltejs/kit";

export  function load({ params }:LoadEvent) {
    let proxyUrl = "https://www.notion.so/Notion-as-Your-Blogging-Powerhouse-A-Guide-to-Using-Your-Own-Domain-15137e82c6ad4749acd75e17ce5cf14f?pvs=4"
    // make subrequests with the global `fetch()` function
    let res =  fetch(proxyUrl);
    // Read the response body as text
    res.then((res) => {
        console.log("res",  res.text().then((bodyText) => {
            console.log("bodyText", bodyText)
        }))
    })
    // Do something with the bodyText if needed (e.g., modify, log, etc.)
    // For example: bodyText = bodyText.replace('oldText', 'newText')
  
    // // Send the body back to the client
    // return new Response(bodyText, {
    //   status: res.status,
    //   statusText: res.statusText,
    //   headers: res.headers
    // })
    if (params?.slug?.length && params?.slug?.length >  0) {
        return {
            slug: params.slug,
        };
    } else {
        throw error(404, 'Not found');
    }
}