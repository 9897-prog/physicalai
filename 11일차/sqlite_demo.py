import sqlite3

conn = sqlite3.connect("memos.db")
cursor = conn.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS memos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT NOT NULL
    )
""")

cursor.execute("INSERT INTO memos (content) VALUES (?)", ("첫 번째 메모",))
cursor.execute("INSERT INTO memos (content) VALUES (?)", ("두 번째 메모",))
conn.commit()

cursor.execute("SELECT * FROM memos")
for row in cursor.fetchall():
    print(row)

conn.close()
