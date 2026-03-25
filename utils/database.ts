import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('friends.db');

export const initDB = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS friends (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } catch (error) {
    console.log('Error initializing database:', error);
  }
};

export const addFriend = async (name: string, email: string, phone: string) => {
  try {
    return await db.runAsync(
      'INSERT INTO friends (name, email, phone) VALUES (?, ?, ?)',
      [name, email, phone]
    );
  } catch (error) {
    console.log('Error adding friend:', error);
    throw error;
  }
};

export const getFriends = async () => {
  try {
    const result = await db.getAllAsync('SELECT * FROM friends ORDER BY createdAt DESC');
    return result;
  } catch (error) {
    console.log('Error fetching friends:', error);
    return [];
  }
};

export const deleteFriend = async (id: number) => {
  try {
    return await db.runAsync('DELETE FROM friends WHERE id = ?', [id]);
  } catch (error) {
    console.log('Error deleting friend:', error);
    throw error;
  }
};
