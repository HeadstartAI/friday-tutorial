import { getIcons, postIcon } from './mockApi';

const originalFetch = window.fetch;

window.fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : input instanceof Request ? input.url : String(input);
  const method = init?.method || 'GET';

  if (url.startsWith('/api/icons')) {
    try {
      if (method === 'GET') {
        const data = await getIcons();
        return new Response(JSON.stringify(data), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } else if (method === 'POST') {
        if (!init || !init.body) {
          return new Response(JSON.stringify({ error: 'No request body provided' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        const body = typeof init.body === 'string' ? JSON.parse(init.body) : init.body;
        const result = await postIcon(body);
        
        return new Response(JSON.stringify(result), {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error: any) {
      const status = error.status || 500;
      return new Response(JSON.stringify({ error: error.message || 'Mock API error' }), {
        status,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // For all other requests, use the original fetch
  return originalFetch(input, init);
};
