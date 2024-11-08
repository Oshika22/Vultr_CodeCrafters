from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

# Load the trained model
model = joblib.load('RandomForest_Model.pkl')

app = Flask(__name__)
CORS(app)  # Allows requests from different origins (like your React frontend)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data from the request
        data = request.get_json()
        
        # Ensure input data is in the correct format for prediction
        input_data = np.array(data['input']).reshape(1, -1)
        
        # Make a prediction
        prediction = model.predict(input_data)
        
        # Return the prediction as JSON
        return jsonify({'prediction': prediction.tolist()})
    
    except Exception as e:
        # Return an error message if something goes wrong
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
