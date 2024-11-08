import unittest
from flask_app import app  # Import your app here

class FlaskApiTest(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_predict(self):
        response = self.app.post('/predict', json={"data": "example"})
        self.assertEqual(response.status_code, 200)
        self.assertIn("prediction", response.json)

if __name__ == '__main__':
    unittest.main()
