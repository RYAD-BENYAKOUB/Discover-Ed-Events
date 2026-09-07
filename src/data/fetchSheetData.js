/**
 * fetchSheetData.js
 * -----------------
 * Stub for Google Sheets data fetching.
 * Returns null for now — full implementation in Prompt 4.
 *
 * When implemented, this will:
 * 1. Fetch from a published Google Sheets CSV/JSON endpoint
 * 2. Parse rows into experience objects
 * 3. Return an array of experiences (or null on failure)
 */

/**
 * Fetch experiences from a Google Sheet.
 * @returns {Promise<Array|null>} Array of experience objects, or null on failure.
 */
export async function fetchSheetData() {
  // TODO: Implement in Prompt 4
  // const SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/...';
  // try {
  //   const response = await fetch(SHEET_URL);
  //   const data = await response.json();
  //   return parseSheetData(data);
  // } catch (error) {
  //   console.warn('Failed to fetch sheet data, using fallback:', error);
  //   return null;
  // }

  return null;
}

export default fetchSheetData;
