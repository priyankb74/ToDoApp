from flask import Flask, jsonify, send_from_directory
import mysql.connector
from flask_cors import CORS

app = Flask(__name__, static_folder="public")

CORS(app) # Enable CORS for frontend communication

# MySQL Database Connection
db=mysql.connector.connect(
    host= "localhost",
    user= "root",
    password= "user",
    database= "tododb"
)

@app.route('/', methods=['GET'])
def home():
    return send_from_directory(app.static_folder, "index.html")

@app.route('/api/data', methods=['GET'])
def get_data():
    cursor = db.cursor(dictionary=True)  # Fetch results as dictionaries
    cursor.execute("SELECT * FROM todolist")
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
