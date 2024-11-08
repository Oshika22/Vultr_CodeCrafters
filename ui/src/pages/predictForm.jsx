import React, { useState } from 'react';
import axios from 'axios';

const FormPage = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        familyHistory: '',
        bloodTypeBaby: '',
        bloodTypeMother: '',
        babyFeedingFrequency: '',
        diaperWettingFrequency: '',
        bruises: '',
        race: '',
    });

    // State to hold prediction result
    const [prediction, setPrediction] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to backend (Flask API)
            const response = await axios.post('http://127.0.0.1:8000/api/predict', formData);
            // Set the prediction result
            setPrediction(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <div className="form-container max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl text-center font-semibold mb-6 text-[#3E3E3E]">
                Enter Baby and Family Information
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Family History */}
                <div>
                    <label htmlFor="familyHistory" className="block font-medium text-[#3E3E3E]">
                        Family History (1=Yes, 0=No)
                    </label>
                    <input
                        type="text"
                        name="familyHistory"
                        id="familyHistory"
                        value={formData.familyHistory}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Blood Type of Baby */}
                <div>
                    <label htmlFor="bloodTypeBaby" className="block font-medium text-[#3E3E3E]">
                        Blood Type of Baby
                    </label>
                    <input
                        type="text"
                        name="bloodTypeBaby"
                        id="bloodTypeBaby"
                        value={formData.bloodTypeBaby}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Blood Type of Mother */}
                <div>
                    <label htmlFor="bloodTypeMother" className="block font-medium text-[#3E3E3E]">
                        Blood Type of Mother
                    </label>
                    <input
                        type="text"
                        name="bloodTypeMother"
                        id="bloodTypeMother"
                        value={formData.bloodTypeMother}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Baby Feeding Frequency */}
                <div>
                    <label htmlFor="babyFeedingFrequency" className="block font-medium text-[#3E3E3E]">
                        Baby Feeding Frequency
                    </label>
                    <input
                        type="text"
                        name="babyFeedingFrequency"
                        id="babyFeedingFrequency"
                        value={formData.babyFeedingFrequency}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Diaper Wetting Frequency */}
                <div>
                    <label htmlFor="diaperWettingFrequency" className="block font-medium text-[#3E3E3E]">
                        Diaper Wetting Frequency
                    </label>
                    <input
                        type="text"
                        name="diaperWettingFrequency"
                        id="diaperWettingFrequency"
                        value={formData.diaperWettingFrequency}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Bruises (1=Yes, 0=No) */}
                <div>
                    <label htmlFor="bruises" className="block font-medium text-[#3E3E3E]">
                        Bruises (1=Yes, 0=No)
                    </label>
                    <input
                        type="text"
                        name="bruises"
                        id="bruises"
                        value={formData.bruises}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Race */}
                <div>
                    <label htmlFor="race" className="block font-medium text-[#3E3E3E]">
                        Race
                    </label>
                    <input
                        type="text"
                        name="race"
                        id="race"
                        value={formData.race}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-b from-[#fa7575] to-[#d65a5a] rounded-[15px] shadow-lg font-semibold text-[#333333] p-3 transition-transform duration-300 hover:scale-105 hover:from-[#d65a5a] hover:to-[#fa7575]"
                    >
                        Get Prediction
                    </button>
                </div>
            </form>

            {/* Display Prediction Result */}
            {prediction && (
                <div className="mt-6 p-4 bg-[#f0f0f0] rounded-md">
                    <h3 className="text-xl font-semibold text-[#3E3E3E]">Prediction Result:</h3>
                    <p className="text-[#333333]">{prediction.result}</p>
                </div>
            )}
        </div>
    );
};

export default FormPage;
