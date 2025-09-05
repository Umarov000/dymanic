import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#0EA5E9] to-[#22C55E] text-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg opacity-90">
            Please login to continue exploring our platform 🚀
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#F1F5F9] p-6">
        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#0F172A] text-center mb-6">
            Login
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#0EA5E9] focus:ring-1 focus:ring-[#0EA5E9] outline-none"
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-1/2 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Back
              </button>

              <button
                type="submit"
                className="w-1/2 bg-[#0EA5E9] text-white py-2 rounded-lg hover:bg-[#0284C7] transition"
              >
                Login
              </button>
            </div>

            <p className="text-sm text-center text-gray-600 mt-4">
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-[#0EA5E9] font-medium hover:underline"
              >
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
