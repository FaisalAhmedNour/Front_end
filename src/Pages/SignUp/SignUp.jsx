import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="my-5 mx-auto max-w-5xl">
            <h3 className="text-center text-xl">To get started, create a user account</h3>
            <h2 className="text-2xl">Sign Up</h2>
            <p>It is fast & easy</p>
            <form className="grid grid-cols-4 px-5 space-y-2 mt-5">
                <p>Account Type</p>
                <div className="form-control col-span-3 w-1/3 border-2 rounded">
                    <select
                        name="release_month"
                        className="select select-bordered w-full rounded-lg"
                    >
                        <option disabled selected>Please Select</option>
                        <option>Individual</option>
                        <option>Company</option>
                        <option>Business</option>
                        <option>Virtual Assistant</option>
                    </select>
                </div>
                <p>Company Name</p>
                <input type="text" placeholder="Enter Name" name="company_name" className="input border-2 rounded col-span-3 w-1/3" required />
                <p>Mobile Number</p>
                <input type="text" placeholder="Enter number" name="Number" className="input border-2 rounded col-span-3 w-1/3" required />
                <p>Email</p>
                <input type="email" placeholder="Enter email" name="Enter email" className="input border-2 rounded" required />
                <p className="col-span-2 ml-5">
                    <span className="bg-[green] px-3 rounded">Already have an account.</span>
                </p>
                <p>First Name</p>
                <input type="text" placeholder="Enter first name" name="first_name" className="input border-2 rounded" required />
                <p className="ml-5">Last Name</p>
                <input type="text" placeholder="Enter Last name" name="last_name" className="input border-2 rounded" required />
                <p>Gender</p>
                <div className="col-span-3"></div>
                <p>Password</p>
                <input type="password" placeholder="********" name="password" className="input border-2 rounded" required />
                <p className="ml-1 col-span-2">
                    <span className="border rounded-full px-1 ">Show</span>
                </p>
                <p>Confirm Password</p>
                <input type="password" placeholder="********" name="confirm_password" className="input border-2 rounded" required />
                <p className="ml-1 col-span-2">
                    <span className="border rounded-full px-1 ">Show</span>
                </p>
                <p className="col-span-4 text-center mt-3">People who use our service may have uploaded your contact information to Social media.<Link to='#'>Learn more.</Link></p>
                <input className="bg-[#2c73b1] col-span-4 mx-auto w-40 text-white rounded py-1" type="submit" value='Sign Up' />
            </form>
        </div>
    );
};

export default SignUp;