const Showdatas = ({ showui }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h2 className="text-3xl font-bold text-center mb-8">
        Available Jobs
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {showui.map((e) => (
          <div
            key={e._id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {e.job_name}
            </h3>

            <p className="text-gray-600">
              <span className="font-medium">Company:</span> {e.company_name}
            </p>

            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {e.location}
            </p>

            <p className="text-gray-600 mb-4">
              <span className="font-medium">Type:</span> {e.job_type}
            </p>

            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showdatas;