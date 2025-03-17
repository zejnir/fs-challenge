import { IUser } from '../types/userTypes';

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

export async function apiUpdateUser(url: string, data: IUser) {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('API Fetch error:', error);
    return [];
  }
}

export async function apiCreateUser(url: string, data: IUser) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('API Fetch error:', error);
    return [];
  }
}
