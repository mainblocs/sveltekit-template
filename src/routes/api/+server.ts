
export async function GET() {
  const proxyUrl = "https://www.notion.so/Notion-as-Your-Blogging-Powerhouse-A-Guide-to-Using-Your-Own-Domain-15137e82c6ad4749acd75e17ce5cf14f?pvs=4";
  
  try {
    const res = await fetch(proxyUrl);
    if (res.ok) {
      const fetchedHTML = await res.text();
      const headers:any = {};
      for (const [key, value] of res.headers) {
        headers[key] = value;
      }
      return new Response(fetchedHTML, {
        status: 200,
        headers:{
          "content-type": "text",
        }
      });
    } else {
      console.error("Error in GET:", res.status);
      return new Response("Error fetching content", { status: res.status });
    }
  } catch (error:any) {
    console.error("Error in GET:", error.message);
    return new Response("Internal Server Error", { status: 500 });
  }
}
