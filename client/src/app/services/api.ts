export async function apiFetch(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 30 } });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('API Fetch error:', error);
    return [];
  }
}
